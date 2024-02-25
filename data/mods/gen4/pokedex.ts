export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	sunkern: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Early Bird"},
	},
	miltank: {
		inherit: true,
		abilities: {0: "Thick Fat"},
	},
	milotic: {
		inherit: true,
		evoType: 'levelExtra',
		evoCondition: 'with high Beauty',
	},
	snorunt: {
		inherit: true,
		abilities: {0: "Ice Body", 1: "Inner Focus"},
	},
	glalie: {
		inherit: true,
		abilities: {0: "Ice Body", 1: "Inner Focus"},
	},
	froslass: {
		inherit: true,
		abilities: {0: "Snow Cloak"},
	},
	luvdisc: {
		inherit: true,
		abilities: {0: "Swift Swim"},
	},
	rotomheat: {
		inherit: true,
		types: ["Electric", "Ghost"],
	},
	rotomwash: {
		inherit: true,
		types: ["Electric", "Ghost"],
	},
	rotomfrost: {
		inherit: true,
		types: ["Electric", "Ghost"],
	},
	rotomfan: {
		inherit: true,
		types: ["Electric", "Ghost"],
	},
	rotommow: {
		inherit: true,
		types: ["Electric", "Ghost"],
	},
};
