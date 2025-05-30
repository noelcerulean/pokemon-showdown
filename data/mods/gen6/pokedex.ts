export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	charizardmegax: {
		inherit: true,
		color: "Red",
	},
	arbok: {
		inherit: true,
		baseStats: {hp: 60, atk: 85, def: 69, spa: 65, spd: 79, spe: 80},
	},
	pikachu: {
		inherit: true,
		formeOrder: ["Pikachu", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Cosplay"],
	},
	dugtrio: {
		inherit: true,
		baseStats: {hp: 35, atk: 80, def: 50, spa: 50, spd: 70, spe: 120},
	},
	alakazammega: {
		inherit: true,
		baseStats: {hp: 55, atk: 50, def: 65, spa: 175, spd: 95, spe: 150},
	},
	farfetchd: {
		inherit: true,
		baseStats: {hp: 52, atk: 65, def: 55, spa: 58, spd: 62, spe: 60},
	},
	clefgar: {
		inherit: true,
		abilities: {0: "Magic Guard", 1: "Levitate"},
	},
	gengar: {
		inherit: true,
		abilities: {0: "Levitate"},
	},
	voltorb: {
		inherit: true,
		abilities: {0: "Soundproof", 1: "Static"},
	},
	electrode: {
		inherit: true,
		abilities: {0: "Soundproof", 1: "Static"},
	},
	exeggutor: {
		inherit: true,
		baseStats: {hp: 95, atk: 95, def: 85, spa: 125, spd: 65, spe: 55},
	},
	ariados: {
		inherit: true,
		baseStats: {hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 40},
	},
	jumpluff: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Leaf Guard", H: "Infiltrator"},
	},
	qwilfish: {
		inherit: true,
		baseStats: {hp: 65, atk: 95, def: 75, spa: 55, spd: 55, spe: 85},
	},
	magcargo: {
		inherit: true,
		baseStats: {hp: 50, atk: 50, def: 120, spa: 80, spd: 80, spe: 30},
	},
	corsola: {
		inherit: true,
		baseStats: {hp: 55, atk: 55, def: 85, spa: 65, spd: 85, spe: 35},
	},
	mantine: {
		inherit: true,
		baseStats: {hp: 65, atk: 40, def: 70, spa: 80, spd: 140, spe: 70},
	},
	raikou: {
		inherit: true,
		abilities: {0: "Pressure", H: "Volt Absorb"},
		unreleasedHidden: true,
	},
	entei: {
		inherit: true,
		abilities: {0: "Pressure", H: "Flash Fire"},
		unreleasedHidden: true,
	},
	suicune: {
		inherit: true,
		abilities: {0: "Pressure", H: "Water Absorb"},
		unreleasedHidden: true,
	},
	beautifly: {
		inherit: true,
		abilities: {0: "Swarm", 1: "Early Bird", H: "Rivalry"},
	},
	swellow: {
		inherit: true,
		baseStats: {hp: 60, atk: 85, def: 60, spa: 50, spd: 50, spe: 125},
	},
	wingull: {
		inherit: true,
		abilities: {0: "Keen Eye", 1: "Drizzle", H: "Rain Dish"},
	},
	pelipper: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 100, spa: 85, spd: 70, spe: 65},
		abilities: {0: "Keen Eye", H: "Rain Dish"},
	},
	masquerain: {
		inherit: true,
		baseStats: {hp: 70, atk: 60, def: 62, spa: 80, spd: 82, spe: 60},
	},
	delcatty: {
		inherit: true,
		baseStats: {hp: 70, atk: 65, def: 65, spa: 55, spd: 55, spe: 70},
	},
	torkoal: {
		inherit: true,
		abilities: {0: "White Smoke", H: "Shell Armor"},
	},
	cacnea: {
		inherit: true,
		abilities: {0: "Rough Skin", H: "Water Absorb"},
	},
	cacturne: {
		inherit: true,
		abilities: {0: "Rough Skin", H: "Water Absorb"},
	},
	castform: {
		inherit: true,
		color: "White",
	},
	castformsunny: {
		inherit: true,
		color: "White",
	},
	castformrainy: {
		inherit: true,
		color: "White",
	},
	castformsandy: {
		inherit: true,
		color: "White",
	},
	castformsmoggy: {
		inherit: true,
		color: "White",
	},
	castformshady: {
		inherit: true,
		color: "White",
	},
	chimecho: {
		inherit: true,
		baseStats: {hp: 65, atk: 50, def: 70, spa: 95, spd: 80, spe: 65},
	},
	luvdisc: {
		inherit: true,
		abilities: {0: "Swift Swim", H: "Hydration"},
	},
	latiasmega: {
		inherit: true,
		color: "Red",
	},
	latiosmega: {
		inherit: true,
		color: "Blue",
	},
	burmy: {
		inherit: true,
		color: "Gray",
	},
	wormadam: {
		inherit: true,
		color: "Gray",
	},
	wormadamsandy: {
		inherit: true,
		color: "Gray",
	},
	wormadamtrash: {
		inherit: true,
		color: "Gray",
	},
	cherrim: {
		inherit: true,
		color: "Pink",
	},
	arceus: {
		inherit: true,
		color: "Gray",
	},
	arceusbug: {
		inherit: true,
		color: "Gray",
		requiredItem: "Insect Plate",
	},
	arceusdark: {
		inherit: true,
		color: "Gray",
		requiredItem: "Dread Plate",
	},
	arceusdragon: {
		inherit: true,
		color: "Gray",
		requiredItem: "Draco Plate",
	},
	arceuselectric: {
		inherit: true,
		color: "Gray",
		requiredItem: "Zap Plate",
	},
	arceusfairy: {
		inherit: true,
		color: "Gray",
		requiredItem: "Pixie Plate",
	},
	arceusfighting: {
		inherit: true,
		color: "Gray",
		requiredItem: "Fist Plate",
	},
	arceusfire: {
		inherit: true,
		color: "Gray",
		requiredItem: "Flame Plate",
	},
	arceusflying: {
		inherit: true,
		color: "Gray",
		requiredItem: "Sky Plate",
	},
	arceusghost: {
		inherit: true,
		color: "Gray",
		requiredItem: "Spooky Plate",
	},
	arceusgrass: {
		inherit: true,
		color: "Gray",
		requiredItem: "Meadow Plate",
	},
	arceusground: {
		inherit: true,
		color: "Gray",
		requiredItem: "Earth Plate",
	},
	arceusice: {
		inherit: true,
		color: "Gray",
		requiredItem: "Icicle Plate",
	},
	arceuspoison: {
		inherit: true,
		color: "Gray",
		requiredItem: "Toxic Plate",
	},
	arceuspsychic: {
		inherit: true,
		color: "Gray",
		requiredItem: "Mind Plate",
	},
	arceusrock: {
		inherit: true,
		color: "Gray",
		requiredItem: "Stone Plate",
	},
	arceussteel: {
		inherit: true,
		color: "Gray",
		requiredItem: "Iron Plate",
	},
	arceuswater: {
		inherit: true,
		color: "Gray",
		requiredItem: "Splash Plate",
	},
	roggenrola: {
		inherit: true,
		abilities: {0: "Sturdy", H: "Sand Force"},
	},
	boldore: {
		inherit: true,
		abilities: {0: "Sturdy", H: "Sand Force"},
	},
	gigalith: {
		inherit: true,
		abilities: {0: "Sturdy", H: "Sand Force"},
	},
	woobat: {
		inherit: true,
		baseStats: {hp: 55, atk: 45, def: 43, spa: 55, spd: 43, spe: 72},
	},
	audinomega: {
		inherit: true,
		color: "Pink",
	},
	darmanitanzen: {
		inherit: true,
		color: "Red",
	},
	crustle: {
		inherit: true,
		baseStats: {hp: 70, atk: 95, def: 125, spa: 65, spd: 75, spe: 45},
	},
	vanillite: {
		inherit: true,
		abilities: {0: "Ice Body", H: "Weak Armor"},
	},
	vanillish: {
		inherit: true,
		abilities: {0: "Ice Body", H: "Weak Armor"},
	},
	vanilluxe: {
		inherit: true,
		abilities: {0: "Ice Body", H: "Weak Armor"},
	},
	deerling: {
		inherit: true,
		color: "Yellow",
	},
	cubchoo: {
		inherit: true,
		abilities: {0: "Snow Cloak", H: "Rattled"},
	},
	beartic: {
		inherit: true,
		baseStats: {hp: 95, atk: 110, def: 80, spa: 70, spd: 80, spe: 50},
		abilities: {0: "Snow Cloak", H: "Swift Swim"},
	},
	cryogonal: {
		inherit: true,
		baseStats: {hp: 70, atk: 50, def: 30, spa: 95, spd: 135, spe: 105},
	},
	greninja: {
		inherit: true,
		abilities: {0: "Torrent", H: "Amphibious"},
	},
	vivillon: {
		inherit: true,
		color: "Black",
	},
	meowstic: {
		inherit: true,
		color: "White",
	},
	zygarde: {
		inherit: true,
		abilities: {0: "Aura Break"},
	},
	necturna: {
		inherit: true,
		baseStats: {hp: 64, atk: 120, def: 100, spa: 85, spd: 120, spe: 81},
	},
	aurumoth: {
		inherit: true,
		abilities: {0: "Weak Armor", 1: "No Guard", H: "Illusion"},
	},
	malaconda: {
		inherit: true,
		abilities: {0: "Harvest", 1: "Infiltrator"},
	},
	naviathan: {
		inherit: true,
		abilities: {0: "Water Veil", 1: "Heatproof", H: "Light Metal"},
	},
	crucibellemega: {
		inherit: true,
		baseStats: {hp: 106, atk: 135, def: 75, spa: 85, spd: 125, spe: 114},
	},
	syclant: {
		inherit: true,
		abilities: {0: "Compound Eyes", 1: "Mountaineer"},
	},
	revenankh: {
		inherit: true,
		abilities: {0: "Shed Skin", 1: "Air Lock"},
	},
	pyroak: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Battle Armor"},
	},
	fidgit: {
		inherit: true,
		abilities: {0: "Persistent", 1: "Vital Spirit"},
	},
	stratagem: {
		inherit: true,
		abilities: {0: "Levitate", 1: "Technician"},
	},
	arghonaut: {
		inherit: true,
		abilities: {0: "Unaware"},
	},
	kitsunoh: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Limber"},
	},
	cyclohm: {
		inherit: true,
		abilities: {0: "Shield Dust", 1: "Static"},
	},
	colossoil: {
		inherit: true,
		abilities: {0: "Rebound", 1: "Guts"},
	},
	krilowatt: {
		inherit: true,
		abilities: {0: "Trace", 1: "Magic Guard"},
	},
	voodoom: {
		inherit: true,
		abilities: {0: "Volt Absorb", 1: "Lightning Rod"},
	},
};
