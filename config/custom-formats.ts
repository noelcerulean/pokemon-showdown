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

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "FnF Showdown Formats",
	},

	{
		name: "[Gen 7] Free-For-All",
		desc: `4 players fight each other in a free for all match.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3681641/">Free-For-All</a>`,
		],

		mod: 'gen7',
		gameType: 'freeforall',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['Eevium Z'],
	},
	{
		name: "[Gen 7] Multi Battle",

		mod: 'gen7',
		gameType: 'multi',
		ruleset: [
			'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Swagger Clause',
		],
	},
];
