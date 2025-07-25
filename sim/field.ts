/**
 * Simulator Field
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * @license MIT
 */

import {State} from './state';
import {EffectState} from './pokemon';
import {toID} from './dex';

export class Field {
	readonly battle: Battle;
	readonly id: ID;

	weather: ID;
	weatherState: EffectState;
	terrain: ID;
	terrainState: EffectState;
	diffusion: ID;
	diffusionState: EffectState;
	pseudoWeather: {[id: string]: EffectState};

	constructor(battle: Battle) {
		this.battle = battle;
		const fieldScripts = this.battle.format.field || this.battle.dex.data.Scripts.field;
		if (fieldScripts) Object.assign(this, fieldScripts);
		this.id = '';

		this.weather = '';
		this.weatherState = {id: ''};
		this.terrain = '';
		this.terrainState = {id: ''};
		this.diffusion = '';
		this.diffusionState = {id: ''};
		this.pseudoWeather = {};
	}

	toJSON(): AnyObject {
		return State.serializeField(this);
	}

	setWeather(status: string | Condition, source: Pokemon | 'debug' | null = null, sourceEffect: Effect | null = null) {
		status = this.battle.dex.conditions.get(status);
		if (!sourceEffect && this.battle.effect) sourceEffect = this.battle.effect;
		if (!source && this.battle.event && this.battle.event.target) source = this.battle.event.target;
		if (source === 'debug') source = this.battle.sides[0].active[0];

		if (this.weather === status.id) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				if (this.battle.gen > 5 || this.weatherState.duration === 0) {
					return false;
				}
			} else if (this.battle.gen > 2 || status.id === 'sandstorm') {
				return false;
			}
		}
		if (source) {
			const result = this.battle.runEvent('SetWeather', source, source, status);
			if (!result) {
				if (result === false) {
					if ((sourceEffect as Move)?.weather) {
						this.battle.add('-fail', source, sourceEffect, '[from] ' + this.weather);
					} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
						this.battle.add('-ability', source, sourceEffect, '[from] ' + this.weather, '[fail]');
					}
				}
				return null;
			}
		}
		const prevWeather = this.weather;
		const prevWeatherState = this.weatherState;
		this.weather = status.id;
		this.weatherState = {id: status.id};
		if (source) {
			this.weatherState.source = source;
			this.weatherState.sourceSlot = source.getSlot();
		}
		if (status.duration) {
			this.weatherState.duration = status.duration;
		}
		if (status.durationCallback) {
			if (!source) throw new Error(`setting weather without a source`);
			this.weatherState.duration = status.durationCallback.call(this.battle, source, source, sourceEffect);
		}
		if (!this.battle.singleEvent('FieldStart', status, this.weatherState, this, source, sourceEffect)) {
			this.weather = prevWeather;
			this.weatherState = prevWeatherState;
			return false;
		}
		this.battle.runEvent('WeatherStart', source, source, status);
		return true;
	}

	clearWeather() {
		if (!this.weather) return false;
		const prevWeather = this.getWeather();
		this.battle.singleEvent('FieldEnd', prevWeather, this.weatherState, this);
		this.weather = '';
		this.weatherState = {id: ''};
		return true;
	}

	effectiveWeather() {
		if (this.suppressingWeather()) return '';
		return this.weather;
	}

	suppressingWeather() {
		for (const side of this.battle.sides) {
			for (const pokemon of side.active) {
				if (pokemon && !pokemon.fainted && !pokemon.ignoringAbility() && pokemon.getAbility().suppressWeather) {
					return true;
				}
			}
		}
		return false;
	}

	isWeather(weather: string | string[]) {
		const ourWeather = this.effectiveWeather();
		if (!Array.isArray(weather)) {
			return ourWeather === toID(weather);
		}
		return weather.map(toID).includes(ourWeather);
	}

	getWeather() {
		return this.battle.dex.conditions.getByID(this.weather);
	}

	setTerrain(status: string | Effect, source: Pokemon | 'debug' | null = null, sourceEffect: Effect | null = null) {
		status = this.battle.dex.conditions.get(status);
		if (!sourceEffect && this.battle.effect) sourceEffect = this.battle.effect;
		if (!source && this.battle.event && this.battle.event.target) source = this.battle.event.target;
		if (source === 'debug') source = this.battle.sides[0].active[0];
		if (!source) throw new Error(`setting terrain without a source`);

		if (this.terrain === status.id) return false;
		const prevTerrain = this.terrain;
		const prevTerrainState = this.terrainState;
		this.terrain = status.id;
		this.terrainState = {
			id: status.id,
			source,
			sourceSlot: source.getSlot(),
			duration: status.duration,
		};
		if (status.durationCallback) {
			this.terrainState.duration = status.durationCallback.call(this.battle, source, source, sourceEffect);
		}
		if (!this.battle.singleEvent('FieldStart', status, this.terrainState, this, source, sourceEffect)) {
			this.terrain = prevTerrain;
			this.terrainState = prevTerrainState;
			return false;
		}
		this.battle.runEvent('TerrainStart', source, source, status);
		return true;
	}

	clearTerrain() {
		if (!this.terrain) return false;
		const prevTerrain = this.getTerrain();
		this.battle.singleEvent('FieldEnd', prevTerrain, this.terrainState, this);
		this.terrain = '';
		this.terrainState = {id: ''};
		return true;
	}

	effectiveTerrain(target?: Pokemon | Side | Battle) {
		if (this.battle.event && !target) target = this.battle.event.target;
		return this.battle.runEvent('TryTerrain', target) ? this.terrain : '';
	}

	isTerrain(terrain: string | string[], target?: Pokemon | Side | Battle) {
		const ourTerrain = this.effectiveTerrain(target);
		if (!Array.isArray(terrain)) {
			return ourTerrain === toID(terrain);
		}
		return terrain.map(toID).includes(ourTerrain);
	}

	getTerrain() {
		return this.battle.dex.conditions.getByID(this.terrain);
	}

	setDiffusion(status: string | Effect, source: Pokemon | 'debug' | null = null, sourceEffect: Effect | null = null) {
		status = this.battle.dex.conditions.get(status);
		if (!sourceEffect && this.battle.effect) sourceEffect = this.battle.effect;
		if (!source && this.battle.event && this.battle.event.target) source = this.battle.event.target;
		if (source === 'debug') source = this.battle.sides[0].active[0];
		if (!source) throw new Error(`setting diffusion without a source`);

		if (this.diffusion === status.id) return false;
		const prevDiffusion = this.diffusion;
		const prevDiffusionState = this.diffusionState;
		this.diffusion = status.id;
		this.diffusionState = {
			id: status.id,
			source,
			sourceSlot: source.getSlot(),
			duration: status.duration,
		};
		if (status.durationCallback) {
			this.diffusionState.duration = status.durationCallback.call(this.battle, source, source, sourceEffect);
		}
		if (!this.battle.singleEvent('FieldStart', status, this.diffusionState, this, source, sourceEffect)) {
			this.diffusion = prevDiffusion;
			this.diffusionState = prevDiffusionState;
			return false;
		}
		this.battle.runEvent('DiffusionStart', source, source, status);
		return true;
	}

	clearDiffusion() {
		if (!this.diffusion) return false;
		const prevDiffusion = this.getDiffusion();
		this.battle.singleEvent('FieldEnd', prevDiffusion, this.diffusionState, this);
		this.diffusion = '';
		this.diffusionState = {id: ''};
		return true;
	}

	effectiveDiffusion(target?: Pokemon | Side | Battle) {
		if (this.battle.event && !target) target = this.battle.event.target;
		return this.battle.runEvent('TryDiffusion', target) ? this.diffusion : '';
	}

	isDiffusion(diffusion: string | string[], target?: Pokemon | Side | Battle) {
		const ourDiffusion = this.effectiveDiffusion(target);
		if (!Array.isArray(diffusion)) {
			return ourDiffusion === toID(diffusion);
		}
		return diffusion.map(toID).includes(ourDiffusion);
	}

	getDiffusion() {
		return this.battle.dex.conditions.getByID(this.diffusion);
	}

	addPseudoWeather(
		status: string | Condition,
		source: Pokemon | 'debug' | null = null,
		sourceEffect: Effect | null = null
	): boolean {
		if (!source && this.battle.event && this.battle.event.target) source = this.battle.event.target;
		if (source === 'debug') source = this.battle.sides[0].active[0];
		status = this.battle.dex.conditions.get(status);

		let state = this.pseudoWeather[status.id];
		if (state) {
			if (!(status as any).onFieldRestart) return false;
			return this.battle.singleEvent('FieldRestart', status, state, this, source, sourceEffect);
		}
		state = this.pseudoWeather[status.id] = {
			id: status.id,
			source,
			sourceSlot: source?.getSlot(),
			duration: status.duration,
		};
		if (status.durationCallback) {
			if (!source) throw new Error(`setting fieldcond without a source`);
			state.duration = status.durationCallback.call(this.battle, source, source, sourceEffect);
		}
		if (!this.battle.singleEvent('FieldStart', status, state, this, source, sourceEffect)) {
			delete this.pseudoWeather[status.id];
			return false;
		}
		return true;
	}

	getPseudoWeather(status: string | Effect) {
		status = this.battle.dex.conditions.get(status);
		return this.pseudoWeather[status.id] ? status : null;
	}

	removePseudoWeather(status: string | Effect) {
		status = this.battle.dex.conditions.get(status);
		const state = this.pseudoWeather[status.id];
		if (!state) return false;
		this.battle.singleEvent('FieldEnd', status, state, this);
		delete this.pseudoWeather[status.id];
		return true;
	}

	destroy() {
		// deallocate ourself

		// get rid of some possibly-circular references
		(this as any).battle = null!;
	}
}
