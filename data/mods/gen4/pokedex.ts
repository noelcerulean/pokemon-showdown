export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	clefable: {
		inherit: true,
		abilities: {0: "Cute Charm"},
	},
	clefgar: {
		inherit: true,
		abilities: {0: "Cute Charm", 1: "Levitate"},
	},
	weezing: {
		inherit: true,
		abilities: {0: "Levitate", H: "Noxious Emission"},
	},
	sunflora: {
		inherit: true,
		abilities: {0: "Chlorophyll", H: "Drought"},
	},
	misdreavus: {
		inherit: true,
		abilities: {0: "Levitate"},
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
	glalie: {
		inherit: true,
		abilities: {0: "Ice Body", H: "Snow Warning"},
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
