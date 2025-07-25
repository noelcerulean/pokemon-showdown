// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// FnF Showdown Formats
	///////////////////////////////////////////////////////////////////

	{
		section: "FnF Showdown Formats",
		column: 1,
	},
	{
		name: "[Gen 7] Draft",

		mod: 'gen7',
		ruleset: ['Standard Draft', 'Swagger Clause'],
		banlist: [
			'Uber', 'Latias-Mega', 'Latios-Mega', 'Ignajara + Ignition', 'Gothitelle + Shadow Tag', 'Blaziken + Speed Boost',
			'Battle Bond', 'Power Construct', 'King\'s Rock', 'Bright Powder', 'Lax Incense', 'Razor Fang', 'Quick Claw', 'Baton Pass', 'Kommonium Z',
			'Poliwrathium Z', 'Mewnium Z', 'Sand Veil', 'Snow Cloak', 'Melodium Z', 'Meloettium Z', 'Corrupted Rock', 'Sorceromium Z',
		],
		unbanlist: ['Scizor-Mega', 'Kartana', 'Heatran', 'Medicham-Mega', 'Mightyena'],
	},
	{
		name: "[Gen 7] Safari",

		mod: 'gen7',
		ruleset: ['Standard Draft', 'Swagger Clause'],
		banlist: [
			'Ignajara + Ignition', 'Gothitelle + Shadow Tag', 'Blaziken + Speed Boost', 'Greninja + Amphibious', 'Battle Bond', 'Power Construct',
			'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass', 'Kommonium Z', 'Poliwrathium Z', 'Mewnium Z', 'Melodium Z', 'Meloettium Z',
			'Pickpossium Z',
		],
	},
	{
		name: "[Gen 7] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/tags/ou/">USM OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8162240/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard', 'Z-Move Clause', 'Swagger Clause'],
		banlist: [
			'Uber', 'Geomancy', 'Arena Trap', 'Sand Veil', 'Snow Cloak', 'Battle Bond', 'Shadow Tag', 'Ignajara + Ignition', 'Blaziken + Speed Boost',
			'Power Construct', 'King\'s Rock', 'Corrupted Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass', 'Kommonium Z', 'Melodium Z', 'Meloettium Z',
			'Pickpossium Z',
		],
	},
	{
		name: "[Gen 7] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621217/">USM UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641346/">USM UU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU'],
		banlist: ['OU', 'UUBL', 'Mewnium Z', 'Aurora Veil', 'Poliwrathium Z'],
		unbanlist: ['Geomancy'],
	},
	{
		name: "[Gen 7] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645338/">USM RU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645873/">USM RU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] UU'],
		banlist: ['UU', 'RUBL', 'Drizzle', 'Drought', 'Icy Rock', 'Mordant Rock'],
	},
	{
		name: "[Gen 7] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632667/">USM NU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645166/">USM NU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] RU'],
		banlist: ['RU', 'NUBL', 'Heat Rock', 'Damp Rock', 'Light Clay'],
	},
	{
		name: "[Gen 7] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3611496/">USM PU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3614892/">USM PU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 7] OU Plus",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/tags/ou/">USM OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8162240/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard', 'Z-Move Clause'],
		banlist: [
			'Uber', 'Arena Trap', 'Sand Veil', 'Snow Cloak', 'Shadow Tag', 'Kyurem-Black + Dragon Dance', 'Dark Void',
			'Power Construct', 'King\'s Rock', 'Corrupted Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass', 'Kommonium Z', 'Melodium Z', 'Meloettium Z'
		],
		unbanlist: [
			'Aegislash', 'Alakazam-Mega', 'Deoxys-Defense', 'Genesect', 'Gothigearna', 'Greninja-Ash', 'Heatran',
			'Kartana', 'Kyurem-Black', 'Landorus-Base', 'Latias-Mega', 'Latios-Mega', 'Magearna', 'Medicham-Mega',
			'Naganadel', 'Rapidash-Mega', 'Scizor-Mega', 'Skarmory-Mega', 'Tapu Lele', 'Trevenant-Mega', 'Zygarde-Base',
			'Scrafty-Mega', 'Porygon-Z-Mega', 'Darkrai',
		],
	},
	{
		name: "[Gen 7] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286276/">USM Ubers</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard', 'Mega Rayquaza Clause'],
		banlist: [
			'Baton Pass', 'Dark Void',
			'Braixen-Nonzerda', 'Bulbasaur-Saur', 'Carbink-Floatamo', 'Eelektross-Mr.Lamprey', 'Emboar-Dynamite', 'Entei-Bismuth', 'Espeon-Daybreak', 'Hakamo-o-Jacinto',
			'Ho-Oh-Rainbow', 'Jirachi-Wishmaker', 'Kecleon-Genocalypse', 'Kingdra-K.Marxdra', 'Milotic-Lothraxia', 'Porygon2-Pory.EXE', 'Raichu-Malachite',
			'Raikou-Jasper', 'Simisear-Hanuman', 'Soarsparce-Alfred', 'Suicune-Opal', 'Typhlosion-Vesuvius', 'Umbreon-Nocturne', 'Vaporeon-Linguine',
			'Wooper-Wooperoth', 'Yanmega-Zumbra',
			'Aegislash-Zato', 'Camerupt-Maxie', 'Chikorita-Minty', 'Decidueye-Apollo', 'Dewott-Lutryla', 'Eevee-Durum', 'Flareon-Lasagna', 'Fraxure-Frenzy',
			'Glaceon-Manicotti', 'Golisopod-Musashi', 'Golurk-Titan', 'Gyarados-Alarix', 'Gyarados-Alarix-Mega', 'Honchkrow-Godfather', 'Jolteon-Radiatori',
			'Kurstraw-Crona', 'Leafeon-Tagliatelle', 'Meganium-Aniseed', 'Sceptile-Moscho', 'Sylveon-Farfalle', 'Zweilous-Terror',
			'Alarixite', 'Corrupted Rock',
			'Aron-Goldie', 'Furfrou-Princess', 'Garchomp-Xeon', 'Gourgeist-Demitri', 'Heatmor-Huangshan', 'Lileep-Goober', 'Marill-Dredge', 'Meowstic-Royal',
			'Muk-TheSludge', 'Noivern-Eyrie', 'Ribombee-Shura', 'Shroomish-Geastrales', 'Spinarak-Sugar', 'Longeon-Spaghetti', 'Snorunt-Sherbet',
			'Castform-Atom', 'Mareanie-Barbara', 'Ditto-Mini', 'Zapdos-Strato', 'Moltres-Thermo', 'Articuno-Exo', 'Roboheeyem-Curio', 'Lugia-Seafoam',
		],
	},
	{
		name: "[Gen 7] Shadowmons",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286276/">USM Ubers</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard', 'Mega Rayquaza Clause'],
		banlist: ['Uber', 'Baton Pass', 'Ho-Oh-Rainbow', 'Golurk-Titan', 'Lugia-Seafoam', 'Gyarados-Alarix', 'Alarixite', 'Magic Guard', 'Rock Head', 'Fraxure-Frenzy + Sheer Force'],
		unbanlist: [
			'Braixen-Nonzerda', 'Bulbasaur-Saur', 'Carbink-Floatamo', 'Eelektross-Mr.Lamprey', 'Emboar-Dynamite', 'Entei-Bismuth', 'Espeon-Daybreak', 'Hakamo-o-Jacinto',
			'Jirachi-Wishmaker', 'Kecleon-Genocalypse', 'Kingdra-K.Marxdra', 'Milotic-Lothraxia', 'Porygon2-Pory.EXE', 'Raichu-Malachite',
			'Raikou-Jasper', 'Simisear-Hanuman', 'Soarsparce-Alfred', 'Suicune-Opal', 'Typhlosion-Vesuvius', 'Umbreon-Nocturne', 'Vaporeon-Linguine',
			'Wooper-Wooperoth', 'Yanmega-Zumbra',
			'Aegislash-Zato', 'Camerupt-Maxie', 'Chikorita-Minty', 'Decidueye-Apollo', 'Dewott-Lutryla', 'Eevee-Durum', 'Flareon-Lasagna', 'Fraxure-Frenzy',
			'Glaceon-Manicotti', 'Golisopod-Musashi', 'Gyarados-Alarix-Mega', 'Honchkrow-Godfather', 'Jolteon-Radiatori',
			'Kurstraw-Crona', 'Leafeon-Tagliatelle', 'Meganium-Aniseed', 'Sceptile-Moscho', 'Sylveon-Farfalle', 'Zweilous-Terror',
			'Aron-Goldie', 'Furfrou-Princess', 'Garchomp-Xeon', 'Gourgeist-Demitri', 'Heatmor-Huangshan', 'Lileep-Goober', 'Marill-Dredge', 'Meowstic-Royal',
			'Muk-TheSludge', 'Noivern-Eyrie', 'Ribombee-Shura', 'Shroomish-Geastrales', 'Spinarak-Sugar', 'Longeon-Spaghetti', 'Snorunt-Sherbet',
			'Castform-Atom', 'Mareanie-Barbara', 'Ditto-Mini', 'Zapdos-Strato', 'Moltres-Thermo', 'Articuno-Exo', 'Roboheeyem-Curio',
		],
	},
	{
		name: "[Gen 7] Shadow Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286276/">USM Ubers</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard', 'Mega Rayquaza Clause'],
		banlist: ['Baton Pass', 'Dark Void', 'Ho-Oh-Rainbow'],
	},
	{
		name: "[Gen 7] Multi Battle FnF",

		mod: 'gen7',
		gameType: 'multi',
		ruleset: [
			'Max Team Size = 3',
			'Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Swagger Clause',
		],
	},
	{
		name: "[Gen 7] Free-For-All Battle",
		desc: `4 players fight each other in a free for all match.`,

		mod: 'gen7',
		gameType: 'freeforall',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['Eevium Z'],
	},
	{
		name: "[Gen 7] Story",

		mod: 'gen7',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: [
			'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass', 'Magcargo-Armored + Flame Absorb',
			'Ano', 'Bagno', 'Baneno', 'Bonsno', 'Bulbano', 'Bunno', 'Butterno', 'Charino',
			'Dewno', 'Flyno', 'Gliscno', 'Gravno', 'Hypdian', 'Hypganium', 'Hypgar',
			'Hypgong', 'Hyplotic', 'Hypmie', 'Hypnodash', 'Hypsicott', 'Hyptuff', 'Ivyno',
			'Krokono', 'Lantno', 'Ledyno', 'Luxino', 'Machno', 'Mantno', 'Meganino', 'Mimeno',
			'Misdreano', 'Molno', 'Mudno', 'Phanpno', 'Pidgeono', 'Pilosno', 'Rapidno',
			'Sandno', 'Sandsno', 'Scizno', 'Shupno', 'Slowkno', 'Slugno', 'Stantno', 'Starno',
			'Sunflono', 'Tyno', 'Venono', 'Venuno', 'Vileno', 'Wiggno', 'Woopno', 'Zoruno',
			'Pichno', 'Fearno', 'Togetno', 'Drifno', 'Onno', 'Skarmno', 'Axno', 'Fraxno', 'Marno',
			'Azumano', 'Pinsno', 'Herano', 'Senno', 'Smoono', 'Houndno', 'Zuno', 'Kangasno', 'Kyuno',
			'Ekno', 'Hitmonno', 'Jirachno', 'Machono',
		],
	},
	{
		name: "[Gen 7] Story Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661293/">USUM Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8394179/">USUM Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8394190/">USUM Doubles OU Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Story Doubles', 'Swagger Clause'],
		banlist: [
			'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass',
			'Ano', 'Bagno', 'Baneno', 'Bonsno', 'Bulbano', 'Bunno', 'Butterno', 'Charino',
			'Dewno', 'Flyno', 'Gliscno', 'Gravno', 'Hypdian', 'Hypganium', 'Hypgar',
			'Hypgong', 'Hyplotic', 'Hypmie', 'Hypnodash', 'Hypsicott', 'Hyptuff', 'Ivyno',
			'Krokono', 'Lantno', 'Ledyno', 'Luxino', 'Machno', 'Mantno', 'Meganino', 'Mimeno',
			'Misdreano', 'Molno', 'Mudno', 'Phanpno', 'Pidgeono', 'Pilosno', 'Rapidno',
			'Sandno', 'Sandsno', 'Scizno', 'Shupno', 'Slowkno', 'Slugno', 'Stantno', 'Starno',
			'Sunflono', 'Tyno', 'Venono', 'Venuno', 'Vileno', 'Wiggno', 'Woopno', 'Zoruno',
			'Pichno', 'Fearno', 'Togetno', 'Drifno', 'Onno', 'Skarmno', 'Axno', 'Fraxno', 'Marno',
			'Azumano', 'Pinsno', 'Herano', 'Senno', 'Smoono', 'Houndno', 'Zuno', 'Kangasno', 'Kyuno',
			'Ekno', 'Hitmonno', 'Jirachno', 'Machono',
		],
	},

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "Z-Move Metas",
		column: 2,
	},
	{
		name: "[Gen 7] Z-Move OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/tags/ou/">USM OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8162240/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: [
			'Uber', 'Geomancy', 'Arena Trap', 'Sand Veil', 'Snow Cloak', 'Battle Bond', 'Shadow Tag', 'Ignajara + Ignition', 'Blaziken + Speed Boost',
			'Power Construct', 'King\'s Rock', 'Corrupted Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass', 'Kommonium Z', 'Melodium Z', 'Meloettium Z',
			'Pickpossium Z',
		],
	},
	{
		name: "[Gen 7] Z-Move UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621217/">USM UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641346/">USM UU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] Z-Move OU'],
		banlist: ['OU', 'UUBL', 'Mewnium Z', 'Aurora Veil', 'Poliwrathium Z'],
		unbanlist: ['Geomancy'],
	},
	{
		name: "[Gen 7] Z-Move RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645338/">USM RU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645873/">USM RU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] Z-Move UU'],
		banlist: ['UU', 'RUBL', 'Drizzle', 'Drought', 'Icy Rock', 'Mordant Rock'],
	},
	{
		name: "[Gen 7] Z-Move NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632667/">USM NU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645166/">USM NU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] Z-Move RU'],
		banlist: ['RU', 'NUBL', 'Light Clay'],
	},
	{
		name: "[Gen 7] Z-Move PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3611496/">USM PU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3614892/">USM PU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] Z-Move NU'],
		banlist: ['NU', 'PUBL'],
	},
		{
		name: "[Gen 7] Z-Move OU Plus",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/tags/ou/">USM OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8162240/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard'],
		banlist: [
			'Uber', 'Arena Trap', 'Sand Veil', 'Snow Cloak', 'Shadow Tag', 'Kyurem-Black + Dragon Dance', 'Dark Void',
			'Power Construct', 'King\'s Rock', 'Corrupted Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass', 'Melodium Z', 'Meloettium Z'
		],
		unbanlist: [
			'Aegislash', 'Alakazam-Mega', 'Deoxys-Defense', 'Genesect', 'Gothigearna', 'Greninja-Ash', 'Heatran',
			'Kartana', 'Kyurem-Black', 'Landorus-Base', 'Latias-Mega', 'Latios-Mega', 'Magearna', 'Medicham-Mega',
			'Naganadel', 'Rapidash-Mega', 'Scizor-Mega', 'Skarmory-Mega', 'Tapu Lele', 'Trevenant-Mega', 'Zygarde-Base',
			'Scrafty-Mega', 'Porygon-Z-Mega', 'Darkrai',
		],
	},

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
		column: 2,
	},
	{
		name: "[Gen 7] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,

		mod: 'gen7',
		ruleset: ['Not Fully Evolved', 'Standard'],
		banlist: [
			'Chansey', 'Delcatty', 'Doublade', 'Electabuzz', 'Gligar', 'Golbat', 'Gurdurr', 'Lickitung-FnF', 'Magneton', 'Monferno', 'Onix', 'Piloswine',
			'Porygon2', 'Rhydon', 'Scyther', 'Sneasel', 'Type: Null', 'Vigoroth',
			'Arena Trap', 'Drought', 'Shadow Tag', 'Aurora Veil', 'Baton Pass',
		],
	},
	{
		name: "[Gen 7] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/formats/lc/">USM LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3639319/">USM LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621440/">USM LC Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['Little Cup', 'Standard', 'Swagger Clause'],
		banlist: [
			'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon',
			'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Trapinch', 'Vulpix-Base', 'Wingull', 'Yanma', 'Lugito',
			'Eevium Z', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
		],
		unbanlist: ['Chinchou', 'Mantyke'],
	},
	{
		name: "[Gen 7] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411581/">USM Monotype</a>`,
		],

		mod: 'gen7',
		ruleset: ['Same Type Clause', 'Standard', 'Swagger Clause'],
		banlist: [
			'Uber', 'Hoopa-Unbound', 'Kartana', 'Kiwuit', 'Medichamite', 'Zygarde-10%', 'Celesteela', 'Despotide',
			'Meloettium Z', 'Melodium Z', 'Despotidium Z', 'Psychic Surge', 'Poliwrathium Z', 'Sand Veil', 'Snow Cloak',
			'King\'s Rock', 'Bright Powder', 'Lax Incense', 'Razor Fang', 'Quick Claw', 'Ignajara + Ignition',
			'Battle Bond', 'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Mordant Rock', 'Terrain Extender', 'Baton Pass',
			'Blaziken + Speed Boost', 'Kommonium Z', 'Toxicroak-Armored', 'Pickpossium Z',
		],
		unbanlist: ['Deoxys-Defense', 'Scizor-Mega', 'Trevenant-Mega'],
	},
	{
		name: "[Gen 7] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587441/">Anything Goes Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591711/">Anything Goes Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646736/">Anything Goes Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 7] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031460/">USUM 1v1</a>`,
		],

		mod: 'gen7',
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Swagger Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
		],
		banlist: [
			'Arceus', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Snorlax', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zekrom',
			'Moody', 'Focus Sash', 'Perish Song', 'Detect + Fightinium Z',
		],
	},
	{
		name: "[Gen 7] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646743/">ZU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3643412/">ZU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646739/">ZU Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] PU'],
		banlist: [
			'PU', 'Carracosta', 'Crabominable', 'Gorebyss', 'Jynx', 'Raticate-Alola',
			'Shiftry', 'Throh', 'Turtonator', 'Type: Null', 'Ursaring', 'Victreebel',
		],
	},
	{
		name: "[Gen 7] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621207/">USUM CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8691482/">USUM CAP Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8691484/">USUM CAP Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU', '+CAP'],
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// US/UM Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "US/UM Doubles & Triples",
		column: 2,
	},
	{
		name: "[Gen 7] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661293/">USUM Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8394179/">USUM Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8394190/">USUM Doubles OU Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void'],
	},
	{
		name: "[Gen 7] Doubles Ubers",

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['Dark Void'],
	},
	{
		name: "[Gen 7] Doubles UU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3598014/">Doubles UU Metagame Discussion</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['[Gen 7] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 7] Triples OU",

		mod: 'gen7',
		gameType: 'triples',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void'],
	},
	{
		name: "[Gen 7] Triples Ubers",

		mod: 'gen7',
		gameType: 'triples',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['Dark Void'],
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// Other Gens OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Gens OU",
		column: 4,
	},
	{
		name: "[Gen 1] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133786/">RBY Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3572352/">RBY OU Viability Rankings</a>`,
		],

		mod: 'gen1',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 2] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133788/">GSC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3556533/">GSC OU Viability Rankings</a>`,
		],

		mod: 'gen2',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 3] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133789/">ADV Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503019/">ADV OU Viability Rankings</a>`,
		],

		mod: 'gen3',
		ruleset: ['Standard', '3 Baton Pass Clause'],
		banlist: ['Uber', 'Mr. Mime', 'Smeargle + Baton Pass', 'Sand Veil'],
	},
	{
		name: "[Gen 4] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3506147/">DPP OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133790/">DPP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3683332/">DPP OU Viability Rankings</a>`,
		],

		mod: 'gen4',
		ruleset: ['Standard'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Sand Veil', 'Swinub + Snow Cloak', 'Piloswine + Snow Cloak', 'Mamoswine + Snow Cloak', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 5] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133791/">BW2 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658220/">BW2 OU Viability Rankings</a>`,
		],

		mod: 'gen5',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Sleep Moves Clause', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Rush', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Soul Dew'],
	},
	{
		name: "[Gen 6] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/ou/">ORAS OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133793/">ORAS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 8] SwSh OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672210/">OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672556/">OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674058/">OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},

	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex",
		column: 4,
	},
	{
		name: "[Gen 8] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666135/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667921/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666572/">National Dex Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darkrai', 'Darmanitan-Galar',
			'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega',
			'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Solgaleo', 'Spectrier', 'Tornadus-Therian',
			'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			'Moody', 'Power Construct', 'Baton Pass', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Kommonium Z',
		],
	},
	{
		name: "[Gen 8] National Dex UU",

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex'],
		banlist: [
			// National Dex OU
			'Blissey', 'Chansey', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Clefable', 'Corviknight', 'Diancie-Mega', 'Excadrill',
			'Ferrothorn', 'Garchomp', 'Gliscor', 'Greninja', 'Heatran', 'Kartana', 'Kommo-o', 'Kyurem', 'Landorus-Therian',
			'Lopunny-Mega', 'Magnezone', 'Mawile-Mega', 'Medicham-Mega', 'Pelipper', 'Rillaboom', 'Scizor-Mega', 'Serperior',
			'Slowbro-Base', 'Swampert-Mega', 'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Toxapex', 'Tyranitar', 'Victini', 'Volcarona',
			'Weavile', 'Zapdos-Base',
			'ND UUBL', // National Dex UUBL
			'Drizzle', 'Drought',
			// Slowbronite is banned so it doesn't validate on Galarian Slowbro
			'Slowbronite',
			// National Dex suspect
			'Blaziken',
		],
		// Used to distinguish UU from below UU in the client
		restricted: [
			'Absol-Mega', 'Aegislash', 'Aggron-Mega', 'Altaria-Mega', 'Amoonguss', 'Beedrill-Mega', 'Bisharp', 'Breloom', 'Buzzwole', 'Celesteela',
			'Chesnaught', 'Crobat', 'Donphan', 'Dragonite', 'Hippowdon', 'Honchkrow', 'Hoopa-Unbound', 'Infernape', 'Jirachi', 'Keldeo', 'Krookodile',
			'Mamoswine', 'Mandibuzz', 'Manectric-Mega', 'Melmetal', 'Mew', 'Mienshao', 'Moltres-Base', 'Nihilego', 'Porygon2', 'Regieleki', 'Ribombee',
			'Rotom-Heat', 'Rotom-Wash', 'Sableye-Mega', 'Scizor', 'Shuckle', 'Skarmory', 'Slowking', 'Slowking-Galar', 'Staraptor', 'Swampert', 'Tangrowth',
			'Umbreon', 'Urshifu-Rapid-Strike',
		],
	},
	{
		name: "[Gen 8] National Dex Doubles",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'Dynamax Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Gravity Sleep Clause', 'Swagger Clause'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darkrai', 'Darmanitan-Galar',
			'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega',
			'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Solgaleo', 'Spectrier', 'Tornadus-Therian',
			'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			'Moody', 'Shadow Tag', 'Power Construct', 'Baton Pass', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Kommonium Z',
		],
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 3,
	},
	{
		name: "[Gen 7] Almost Any Ability",
		desc: "Pok&eacute;mon can use any ability, barring the few that are restricted.",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587901/">Almost Any Ability</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU', '2 Ability Clause', '!Obtainable Abilities'],
		banlist: [
			'Archeops', 'Buzzwole', 'Dragonite', 'Hoopa-Unbound', 'Kartana', 'Keldeo', 'Kyurem-Black', 'Regigigas', 'Shedinja', 'Slaking', 'Terrakion', 'Weavile', 'Victini',
			'Antlure', 'Bagwormicade', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Huge Power', 'Illusion', 'Imposter', 'Inflate', 'Innards Out',
			'Magnet Pull', 'Melody Allegretto', 'Mystic Power', 'Parental Bond', 'Protean', 'Pure Power', 'Simple', 'Speed Boost', 'Stakeout', 'Water Bubble', 'Wonder Guard',
			'Neutralizing Gas', 'Arcana', 'Ignition', 'Amphibious',
			'Shadow Armor', 'Shadow Conduction', 'Shadow Convection', 'Shadow Dust', 'Shadow Hydraulics', 'Shadow Rebirth',
		],
		unbanlist: ['Aegislash', 'Blaziken', 'Genesect', 'Landorus-Base', 'Metagross-Mega', 'Naganadel', 'Pheromosa'],
	},
	{
		name: "[Gen 7] Attack Swap",
		desc: "Every Pok&eacute;mon's Attack and Sp. Attack stats are reversed..",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3662020/">Flipped</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU'],
		banlist: ['Azumarill', 'Bunmochi', 'Sharpedonite', 'Sceptilite', 'Nidoking'],
		unbanlist: ['Rapidash-Mega', 'Tapu Lele'],
		onModifySpecies(template, target, source, effect) {
			const newTemplate = this.dex.deepClone(template);
			const baseStats = template.baseStats;
			const spe = this.dex.species.get(target.set.species).baseStats.spe;
			newTemplate.baseStats = {hp: baseStats.hp, atk: baseStats.spa, def: baseStats.def, spa: baseStats.atk, spd: baseStats.spd, spe: baseStats.spe};
			return newTemplate;
		},
	},
	{
		name: "[Gen 7] Balanced Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8407209/">USM Balanced Hackmons</a>`,
		],

		mod: 'gen7',
		ruleset: ['-Nonexistent', '2 Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'CFZ Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Groudon-Primal', 'Rayquaza-Mega', 'Gengarite', 'Comatose + Sleep Talk', 'Chatter',
			'Antlure', 'Arena Trap', 'Contrary', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody', 'Mystic Power',
			'Parental Bond', 'Protean', 'Psychic Surge', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Amphibious', 'Shadow Evoboost',
			'Shadow Concentrate', 'Ultimate Craftsman',
		],
	},
	{
		name: "[Gen 7] Camomons",
		desc: "Pok&eacute;mon change type to match their first two moves.",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/camomons.3598418/">Almost Any Ability</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU', 'Camomons Mod'],
		banlist: [
			'Dragonite', 'Kartana', 'Kyurem-Black', 'Shedinja',
		],
	},
	{
		name: "[Gen 7] Cross Evolution",
		desc: `Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and up to 2 moves from the next stage Pok&eacute;mon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3594854/">Cross Evolution</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard', 'Overflow Stat Mod', '2 Ability Clause'],
		banlist: ['Sneasel', 'Kurstraw', 'Type: Null', 'Wormadam', 'Wormadam-Sandy', 'Wormadam-Trash', 'King\'s Rock', 'Baton Pass'],
		restricted: ['Shedinja', 'Solgaleo', 'Lunala'],
		onValidateTeam(team) {
			const names = new Set<ID>();
			for (const set of team) {
				const name = set.name;
				if (names.has(this.dex.toID(name))) {
					return [
						`Your Pok\u00e9mon must have different nicknames.`,
						`(You have more than one Pok\u00e9mon named '${name}')`,
					];
				}
				names.add(this.dex.toID(name));
			}
			if (!names.size) {
				return [
					`${this.format.name} works using nicknames; your team has 0 nicknamed Pok\u00e9mon.`,
					`(If this was intentional, add a nickname to one Pok\u00e9mon that isn't the name of a Pok\u00e9mon species.)`,
				];
			}
		},
		checkCanLearn(move, species, lsetData, set) {
			// @ts-ignore
			if (!set.sp?.exists || !set.crossSpecies?.exists) {
				return this.checkCanLearn(move, species, lsetData, set);
			}
			// @ts-ignore
			const problem = this.checkCanLearn(move, set.sp);
			if (!problem) return null;
			// @ts-ignore
			if (!set.crossMovesLeft) return problem;
			// @ts-ignore
			if (this.checkCanLearn(move, set.crossSpecies)) return problem;
			// @ts-ignore
			set.crossMovesLeft--;
			return null;
		},
		validateSet(set, teamHas) {
			const crossSpecies = this.dex.species.get(set.name);
			let problems = this.dex.formats.get('Pokemon').onChangeSet?.call(this, set, this.format) || null;
			if (Array.isArray(problems) && problems.length) return problems;
			const crossNonstandard = (!this.ruleTable.has('standardnatdex') && crossSpecies.isNonstandard === 'Past') ||
				crossSpecies.isNonstandard === 'Future';
			const crossIsCap = !this.ruleTable.has('+pokemontag:cap') && crossSpecies.isNonstandard === 'CAP';
			if (!crossSpecies.exists || crossNonstandard || crossIsCap) return this.validateSet(set, teamHas);
			const species = this.dex.species.get(set.species);
			const check = this.checkSpecies(set, species, species, {});
			if (check) return [check];
			const nonstandard = !this.ruleTable.has('standardnatdex') && species.isNonstandard === 'Past';
			const isCap = !this.ruleTable.has('+pokemontag:cap') && species.isNonstandard === 'CAP';
			if (!species.exists || nonstandard || isCap || species === crossSpecies) return this.validateSet(set, teamHas);
			if (!species.nfe) return [`${species.name} cannot cross evolve because it doesn't evolve.`];
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable");
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it isn't an evolution.`];
			}
			if (this.ruleTable.isRestrictedSpecies(crossSpecies)) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it is banned.`];
			}
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) {
				return [
					`${species.name} cannot cross evolve into ${crossSpecies.name} because they are not consecutive evolution stages.`,
				];
			}
			const item = this.dex.items.get(set.item);
			if (item.itemUser?.length) {
				if (!item.itemUser.includes(crossSpecies.name) || crossSpecies.name !== species.name) {
					return [`${species.name} cannot use ${item.name} because it is cross evolved into ${crossSpecies.name}.`];
				}
			}
			const ability = this.dex.abilities.get(set.ability);
			if (!this.ruleTable.isRestricted(`ability:${ability.id}`) || Object.values(species.abilities).includes(ability.name)) {
				set.species = crossSpecies.name;
			}

			// @ts-ignore
			set.sp = species;
			// @ts-ignore
			set.crossSpecies = crossSpecies;
			// @ts-ignore
			set.crossMovesLeft = 2;
			problems = this.validateSet(set, teamHas);
			set.name = crossSpecies.name;
			set.species = species.name;
			return problems;
		},
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // chat
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === target.set.species) return;
			const crossSpecies = this.dex.species.get(target.set.name);
			if (!crossSpecies.exists) return;
			if (species.battleOnly || !species.nfe) return;
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable");
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) return;
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) return;

			const mixedSpecies = this.dex.deepClone(species);
			mixedSpecies.weightkg =
				Math.max(0.1, +(species.weightkg + crossSpecies.weightkg - crossPrevoSpecies.weightkg)).toFixed(1);
			mixedSpecies.nfe = false;
			mixedSpecies.evos = [];
			mixedSpecies.eggGroups = crossSpecies.eggGroups;
			mixedSpecies.abilities = crossSpecies.abilities;
			mixedSpecies.bst = 0;
			let i: StatID;
			for (i in species.baseStats) {
				const statChange = crossSpecies.baseStats[i] - crossPrevoSpecies.baseStats[i];
				mixedSpecies.baseStats[i] = this.clampIntRange(species.baseStats[i] + statChange, 1, 255);
				mixedSpecies.bst += mixedSpecies.baseStats[i];
			}
			if (crossSpecies.types[0] !== crossPrevoSpecies.types[0]) mixedSpecies.types[0] = crossSpecies.types[0];
			if (crossSpecies.types[1] !== crossPrevoSpecies.types[1]) {
				mixedSpecies.types[1] = crossSpecies.types[1] || crossSpecies.types[0];
			}
			if (mixedSpecies.types[0] === mixedSpecies.types[1]) mixedSpecies.types = [mixedSpecies.types[0]];

			return mixedSpecies;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.baseSpecies = pokemon.species;
			}
		},
	},
	{
		name: "[Gen 7] Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (AG/Uber Pok&eacute;mon) depending on its position in the team. If there is no Uber Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3597618/">Godly Gift</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] Ubers'],
		banlist: ['Huge Power', 'Mystic Power', 'Pure Power', 'Shadow Tag', 'Blissey', 'Chansey', 'Deoxys-Attack', 'Sableye-Mega', 'Toxapex', 'Uber > 1', 'Mawilite', 'Uber ++ Power Construct'],
		onValidateTeam(team) {
			const gods = new Set<string>();
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				if (typeof species.battleOnly === 'string') species = this.dex.species.get(species.battleOnly);
				if (set.item && this.dex.items.get(set.item).megaStone) {
					const item = this.dex.items.get(set.item);
					if (item.megaEvolves === species.baseSpecies) {
						species = this.dex.species.get(item.megaStone);
					}
				}
				if (this.ruleTable.has('standardnatdex')) {
					const format = this.dex.formats.getRuleTable(this.dex.formats.get('gen8nationaldex'));
					if (format.isBannedSpecies(species)) gods.add(species.name);
				} else {
					if (['ag', 'uber'].includes(this.toID(species.tier)) || this.toID(set.ability) === 'powerconstruct') {
						gods.add(species.name);
					}
				}
			}
			if (gods.size > 1) {
				return [`You have too many Gods.`, `(${Array.from(gods).join(', ')} are Gods.)`];
			}
		},
		onModifySpeciesPriority: 3,
		onModifySpecies(species, target, source) {
			if (source || !target?.side) return;
			const god = target.side.team.find(set => {
				let godSpecies = this.dex.species.get(set.species);
				const isNatDex = this.format.ruleTable?.has('standardnatdex');
				const validator = this.dex.formats.getRuleTable(
					this.dex.formats.get(`gen${isNatDex && this.gen < 8 ? 8 : this.gen}${isNatDex ? 'nationaldex' : 'ou'}`)
				);
				if (this.toID(set.ability) === 'powerconstruct') {
					return true;
				}
				if (set.item) {
					const item = this.dex.items.get(set.item);
					if (item.megaEvolves === set.species) godSpecies = this.dex.species.get(item.megaStone);
				}
				const isBanned = validator.isBannedSpecies(godSpecies);
				return isBanned;
			}) || target.side.team[0];
			const stat = Dex.stats.ids()[target.side.team.indexOf(target.set)];
			const newSpecies = this.dex.deepClone(species);
			let godSpecies = this.dex.species.get(god.species);
			if (godSpecies.forme === 'Crowned') {
				godSpecies = this.dex.species.get(godSpecies.changesFrom || godSpecies.baseSpecies);
			}
			if (typeof godSpecies.battleOnly === 'string') {
				godSpecies = this.dex.species.get(godSpecies.battleOnly);
			}
			newSpecies.bst -= newSpecies.baseStats[stat];
			newSpecies.baseStats[stat] = godSpecies.baseStats[stat];
			newSpecies.bst += newSpecies.baseStats[stat];
			return newSpecies;
		},
	},
	{
		name: "[Gen 7] Hypnomons",

		mod: 'gen7hypnomons',
		ruleset: [
			'Obtainable Moves', 'Obtainable Abilities', 'Obtainable Formes',
			'EV Limit = Auto', 'Obtainable Misc', 'Team Preview', 'HP Percentage Mod',
			'Species Clause', 'Sleep Clause Mod', 'Cancel Mod', 'Endless Battle Clause',
			'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause',
		],
		banlist: ['All Pokemon'],
		unbanlist: [
			'Ano', 'Bagno', 'Baneno', 'Bonsno', 'Bulbano', 'Bunno', 'Butterno', 'Charino',
			'Dewno', 'Flyno', 'Gliscno', 'Gravno', 'Hypdian', 'Hypganium', 'Hypgar',
			'Hypgong', 'Hyplotic', 'Hypmie', 'Hypnodash', 'Hypsicott', 'Hyptuff', 'Ivyno',
			'Krokono', 'Lantno', 'Ledyno', 'Luxino', 'Machno', 'Mantno', 'Meganino', 'Mimeno',
			'Misdreano', 'Molno', 'Mudno', 'Phanpno', 'Pidgeono', 'Pilosno', 'Rapidno',
			'Sandno', 'Sandsno', 'Scizno', 'Shupno', 'Slowkno', 'Slugno', 'Stantno', 'Starno',
			'Sunflono', 'Tyno', 'Venono', 'Venuno', 'Vileno', 'Wiggno', 'Woopno', 'Zoruno',
			'Pichno', 'Fearno', 'Togetno', 'Drifno', 'Onno', 'Skarmno', 'Axno', 'Fraxno', 'Marno',
			'Azumano', 'Pinsno', 'Herano', 'Senno', 'Smoono', 'Houndno', 'Zuno', 'Kangasno', 'Kyuno',
			'Ekno', 'Hitmonno', 'Jirachno', 'Machono',
		],
	},
	{
		name: "[Gen 7] Mix and Mega",
		desc: `Mega Stones and Primal Orbs can be used on almost any Pok&eacute;mon with no Mega Evolution limit.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8778656/">USM Mix and Mega</a>`,
		],

		mod: 'gen7mixandmega',
		ruleset: ['Standard', 'Mega Rayquaza Clause', 'Overflow Stat Mod'],
		banlist: ['Shadow Tag', 'Gengarite', 'Baton Pass', 'Electrify', 'Ho-Oh-Rainbow', 'Golurk-Titan', 'Lugia-Seafoam', 'Gyarados-Alarix', 'Gyarados-Alarix-Mega'],
		restricted: [
			'Arceus', 'Deoxys', 'Dialga', 'Dragonite', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem', 'Landorus-Therian', 'Lugia',
			'Lunala', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shuckle',
			'Slaking', 'Solgaleo', 'Terrakion', 'Xerneas', 'Yveltal', 'Zekrom',
			'Beedrillite', 'Blazikenite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite', 'Ultranecrozium Z', 'Furretite', 'Altarianite',
			'Braixen-Nonzerda', 'Bulbasaur-Saur', 'Carbink-Floatamo', 'Eelektross-Mr.Lamprey', 'Emboar-Dynamite', 'Entei-Bismuth', 'Espeon-Daybreak', 'Hakamo-o-Jacinto',
			'Jirachi-Wishmaker', 'Kecleon-Genocalypse', 'Kingdra-K.Marxdra', 'Milotic-Lothraxia', 'Porygon2-Pory.EXE', 'Raichu-Malachite',
			'Raikou-Jasper', 'Simisear-Hanuman', 'Soarsparce-Alfred', 'Suicune-Opal', 'Typhlosion-Vesuvius', 'Umbreon-Nocturne', 'Vaporeon-Linguine',
			'Wooper-Wooperoth', 'Yanmega-Zumbra',
			'Aegislash-Zato', 'Camerupt-Maxie', 'Chikorita-Minty', 'Decidueye-Apollo', 'Dewott-Lutryla', 'Eevee-Durum', 'Flareon-Lasagna', 'Fraxure-Frenzy',
			'Glaceon-Manicotti', 'Golisopod-Musashi', 'Honchkrow-Godfather', 'Jolteon-Radiatori',
			'Kurstraw-Crona', 'Leafeon-Tagliatelle', 'Meganium-Aniseed', 'Sceptile-Moscho', 'Sylveon-Farfalle', 'Zweilous-Terror',
			'Feebas-Vanessa', 'Granbull-Nobunaga', 'Alomomola-Medella', 'Haxorus-Shredder',
			'Aron-Goldie', 'Furfrou-Princess', 'Garchomp-Xeon', 'Gourgeist-Demitri', 'Heatmor-Huangshan', 'Lileep-Goober', 'Marill-Dredge', 'Meowstic-Royal',
			'Muk-TheSludge', 'Noivern-Eyrie', 'Ribombee-Shura', 'Shroomish-Geastrales', 'Spinarak-Sugar', 'Longeon-Spaghetti', 'Snorunt-Sherbet',
			'Castform-Atom', 'Mareanie-Barbara', 'Ditto-Mini', 'Zapdos-Strato', 'Moltres-Thermo', 'Articuno-Exo', 'Roboheeyem-Curio',
		],
		unbanlist: ['Deoxys-Defense', 'Kyurem-Base', 'Necrozma-Base'],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!item.exists) continue;
				if (itemTable.has(item.id) && (item.megaStone || item.onPrimal)) {
					return [
						`You are limited to one of each Mega Stone and Primal Orb.`,
						`(You have more than one ${item.name}.)`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const item = this.dex.items.get(set.item);
			if (!item.megaEvolves && !item.onPrimal && item.id !== 'ultranecroziumz') return;
			if (species.baseSpecies === item.megaEvolves || (item.onPrimal && item.itemUser?.includes(species.baseSpecies)) ||
				(species.name.startsWith('Necrozma-') && item.id === 'ultranecroziumz')) {
				return;
			}
			if (this.ruleTable.isRestricted(`item:${item.id}`) || this.ruleTable.isRestrictedSpecies(species) ||
				set.ability === 'Power Construct') {
				return [`${set.species} is not allowed to hold ${item.name}.`];
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 7] Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3588652/">Pok&eacute;bilities</a>`,
		],
		mod: 'gen7',
		ruleset: ['[Gen 7] OU', 'Evasion Abilities Clause'],
		banlist: ['Excadrill', 'Mawile', 'Mightyena', 'Porygon-Z', 'Clefable'],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const unSeenAbilities = Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])
				.filter(ability => ability !== set.ability);
			if (unSeenAbilities.length && this.toID(set.ability) !== this.toID(species.abilities['S'])) {
				for (const abilityName of unSeenAbilities) {
					const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
					if (banReason) {
						return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
					}
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
					continue;
				}
				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.filter(key => key !== 'S' && (key !== 'H' || !pokemon.species.unreleasedHidden))
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => ability !== pokemon.ability);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
			pokemon.m.innates = undefined;
		},
	},
	{
		name: "[Gen 7] Re-Evolution",
		desc: "Pok&eacute;mon gain stats equal to the difference with their previous stage.",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3703643/">Re-Evolution</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] Ubers', 'Evasion Abilities Clause', 'Overflow Stat Mod'],
		banlist: ['Gyarados', 'Lunala', 'Milotic', 'Naganadel', 'Solgaleo', 'Volcarona', "King's Rock"],
		onModifySpecies(template, target, format, effect) {
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			const baseSpecies = this.dex.species.get(template.baseSpecies);
			if (!baseSpecies.prevo) return;
			const prevo = this.dex.species.get(baseSpecies.prevo);
			const newTemplate = this.dex.deepClone(template);
			let stat: StatID;
			for (stat in prevo.baseStats) {
				newTemplate.baseStats[stat] = this.clampIntRange(newTemplate.baseStats[stat] + baseSpecies.baseStats[stat] - prevo.baseStats[stat], 1, 255);
			}
			newTemplate.bst = newTemplate.baseStats.hp + newTemplate.baseStats.atk + newTemplate.baseStats.def + newTemplate.baseStats.spa + newTemplate.baseStats.spd + newTemplate.baseStats.spe;
			return newTemplate;
		},
	},
	{
		name: "[Gen 7] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8697545/">USM STABmons</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU', 'STABmons Move Legality'],
		banlist: ['Aerodactyl', 'Aerodactyl-Mega', 'Araquanid', 'Blacephalon', 'Kartana', 'Komala', 'Kyurem-Black', 'Porygon-Z', 'Silvally', 'Tapu Koko', 'Tapu Lele', 'Thundurus', 'Thundurus-Therian'],
		restricted: ['Acupressure', 'Belly Drum', 'Chatter', 'Combardment', 'Extreme Speed', 'Geomancy', 'Lovely Kiss', 'Seasonal Spirit', 'Shell Smash', 'Shift Gear', 'Spore', 'Thousand Arrows', 'V-create'],
	},
	{
		name: "[Gen 7] Twisted Dimension",
		desc: `Trick Room is always active. Using Trick Room reverts the playing field to normal for 5 turns.`,
		mod: 'gen7',
		ruleset: ['[Gen 7] OU', 'Evasion Abilities Clause', 'Twisted Dimension Mod', 'Adjust Level = 100'],
		banlist: ['Final Gambit', 'Iron Ball', 'Power Anklet', 'Power Band', 'Power Belt', 'Power Bracer', 'Power Lens', 'Power Weight'],
	},
	{
		name: "[Gen 7] FnF VGC 2018",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3631800/">VGC 2018 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3622041/">VGC 2018 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3628885/">VGC 2018 Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 7', 'VGC Timer'],
		banlist: [
			'Braixen-Nonzerda', 'Bulbasaur-Saur', 'Carbink-Floatamo', 'Eelektross-Mr.Lamprey', 'Emboar-Dynamite', 'Entei-Bismuth', 'Espeon-Daybreak', 'Hakamo-o-Jacinto',
			'Ho-Oh-Rainbow', 'Jirachi-Wishmaker', 'Kecleon-Genocalypse', 'Kingdra-K.Marxdra', 'Milotic-Lothraxia', 'Porygon2-Pory.EXE', 'Raichu-Malachite',
			'Raikou-Jasper', 'Simisear-Hanuman', 'Soarsparce-Alfred', 'Suicune-Opal', 'Typhlosion-Vesuvius', 'Umbreon-Nocturne', 'Vaporeon-Linguine',
			'Wooper-Wooperoth', 'Yanmega-Zumbra',
			'Aegislash-Zato', 'Camerupt-Maxie', 'Chikorita-Minty', 'Decidueye-Apollo', 'Dewott-Lutryla', 'Eevee-Durum', 'Flareon-Lasagna', 'Fraxure-Frenzy',
			'Glaceon-Manicotti', 'Golisopod-Musashi', 'Golurk-Titan', 'Gyarados-Alarix', 'Gyarados-Alarix-Mega', 'Honchkrow-Godfather', 'Jolteon-Radiatori',
			'Kurstraw-Crona', 'Leafeon-Tagliatelle', 'Meganium-Aniseed', 'Sceptile-Moscho', 'Sylveon-Farfalle', 'Zweilous-Terror',
			'Oranguru + Symbiosis', 'Unown', 'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry', 'Battle Bond',
			'Alarixite',
			'Aron-Goldie', 'Furfrou-Princess', 'Garchomp-Xeon', 'Gourgeist-Demitri', 'Heatmor-Huangshan', 'Lileep-Goober', 'Marill-Dredge', 'Meowstic-Royal',
			'Muk-TheSludge', 'Noivern-Eyrie', 'Ribombee-Shura', 'Shroomish-Geastrales', 'Spinarak-Sugar', 'Longeon-Spaghetti', 'Snorunt-Sherbet',
			'Castform-Atom', 'Mareanie-Barbara', 'Ditto-Mini', 'Zapdos-Strato', 'Moltres-Thermo', 'Articuno-Exo', 'Roboheeyem-Curio', 'Lugia-Seafoam',
		],
	},
	{
		name: "[Gen 7] FnF VGC 2019",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641100/">VGC 2019 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641123/">VGC 2019 Viability Rankings</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 7', 'VGC Timer', 'Limit Two Restricted'],
		restricted: [
			'Restricted Legendary',
			'Braixen-Nonzerda', 'Bulbasaur-Saur', 'Carbink-Floatamo', 'Eelektross-Mr.Lamprey', 'Emboar-Dynamite', 'Entei-Bismuth', 'Espeon-Daybreak', 'Hakamo-o-Jacinto',
			'Ho-Oh-Rainbow', 'Jirachi-Wishmaker', 'Kecleon-Genocalypse', 'Kingdra-K.Marxdra', 'Milotic-Lothraxia', 'Porygon2-Pory.EXE', 'Raichu-Malachite',
			'Raikou-Jasper', 'Simisear-Hanuman', 'Soarsparce-Alfred', 'Suicune-Opal', 'Typhlosion-Vesuvius', 'Umbreon-Nocturne', 'Vaporeon-Linguine',
			'Wooper-Wooperoth', 'Yanmega-Zumbra',
			'Aegislash-Zato', 'Camerupt-Maxie', 'Chikorita-Minty', 'Decidueye-Apollo', 'Dewott-Lutryla', 'Eevee-Durum', 'Flareon-Lasagna', 'Fraxure-Frenzy',
			'Glaceon-Manicotti', 'Golisopod-Musashi', 'Golurk-Titan', 'Gyarados-Alarix', 'Gyarados-Alarix-Mega', 'Honchkrow-Godfather', 'Jolteon-Radiatori',
			'Kurstraw-Crona', 'Leafeon-Tagliatelle', 'Meganium-Aniseed', 'Sceptile-Moscho', 'Sylveon-Farfalle', 'Zweilous-Terror',
			'Feebas-Vanessa', 'Granbull-Nobunaga', 'Alomomola-Medella', 'Haxorus-Shredder',
			'Alarixite',
			'Aron-Goldie', 'Furfrou-Princess', 'Garchomp-Xeon', 'Gourgeist-Demitri', 'Heatmor-Huangshan', 'Lileep-Goober', 'Marill-Dredge', 'Meowstic-Royal',
			'Muk-TheSludge', 'Noivern-Eyrie', 'Ribombee-Shura', 'Shroomish-Geastrales', 'Spinarak-Sugar', 'Longeon-Spaghetti', 'Snorunt-Sherbet',
			'Castform-Atom', 'Mareanie-Barbara', 'Ditto-Mini', 'Zapdos-Strato', 'Moltres-Thermo', 'Articuno-Exo', 'Roboheeyem-Curio', 'Lugia-Seafoam',
		],
		banlist: ['Unown', 'Battle Bond'],
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 1,
	},

	{
		name: "[Gen 7] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591157/">Sets and Suggestions</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3616946/">Role Compendium</a>`,
		],

		mod: 'gen7',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Random Doubles Battle",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3601525/">Sets and Suggestions</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen7',
		team: 'randomFactory',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 7] Monotype Random Battle",

		mod: 'gen7',
		team: 'random',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 7] Challenge Cup",

		mod: 'gen7',
		team: 'randomCC',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Free-For-All Random Battle",

		mod: 'gen7',
		team: 'random',
		gameType: 'freeforall',
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 7] Multi Random Battle",

		mod: 'gen7',
		team: 'random',
		gameType: 'multi',
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod',
		],
	},
	{
		name: "[Gen 8] SwSh Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
	},
	{
		name: "[Gen 6] Random Battle",

		mod: 'gen6',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 5] Random Battle",

		mod: 'gen5',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 4] Random Battle",

		mod: 'gen4',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 3] Random Battle",

		mod: 'gen3',
		team: 'random',
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 2] Random Battle",

		mod: 'gen2',
		team: 'random',
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] Random Battle",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Standard'],
	},
];
