/**
 * Core commands
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * These are core commands - basic commands required for Pokemon Showdown
 * to run. A lot of these are sent by the client.
 *
 * System commands should not be modified, added, or removed. If you'd
 * like to modify or add commands, add or edit files in chat-plugins/
 *
 * For the API, see chat-plugins/COMMANDS.md
 *
 * @license MIT
 */

/* eslint no-else-return: "error" */
import {Utils} from '../../lib';
import type {UserSettings} from '../users';

const avatarTable = new Set([
	'aaron',
	'aarush',
	'aarush-event',
	'acetrainercouple-gen3', 'acetrainercouple',
	'acetrainerf-gen1', 'acetrainerf-gen1rb', 'acetrainerf-gen2', 'acetrainerf-gen3', 'acetrainerf-gen3rs', 'acetrainerf-gen4dp', 'acetrainerf-gen4', 'acetrainerf',
	'acetrainer-gen1', 'acetrainer-gen1rb', 'acetrainer-gen2', 'acetrainer-gen3jp', 'acetrainer-gen3', 'acetrainer-gen3rs', 'acetrainer-gen4dp', 'acetrainer-gen4', 'acetrainer',
	'acetrainersnowf', 'acetrainersnowf-2',
	'acetrainersnow', 'acetrainersnow-2',
	'actias-hero',
	'adrik',
	'adrik-and-faina',
	'agatha-gen1', 'agatha-gen1rb', 'agatha-gen3',
	'agnes',
	'alder',
	'alma', 'conor', 'cullen', 'essi', 'essi-and-conor', 'ibrahim', 'imara', 'leander', 'lilac', 'malik', 'river-fnf', 'yasmin',
	'alma-beach', 'conor-beach', 'cullen-beach', 'cullen-and-river', 'essi-beach', 'essi-and-conor-beach', 'ibrahim-beach', 'imara-beach', 'leander-beach', 'lilac-beach', 'malik-beach', 'yasmin-beach',
	'alvaro',
	'amaya',
	'amir', 'amir-student',
	'anabel-gen3',
	'anastasia',
	'antonella', 'antonella-student',
	'archer',
	'archie-gen3',
	'argenta',
	'ariana',
	'aromalady-gen3', 'aromalady-gen3rs', 'aromalady',
	'artemis',
	'artist-gen4', 'artist',
	'ash-alola', 'ash-hoenn', 'ash-kalos', 'ash-unova', 'ash-capbackward', 'ash-johto', 'ash-sinnoh', 'ash',
	'awwon-villain',
	'aya', 'aya-and-prim',
	'ayra', 'ayra-malefic', 'ayra-malefic-2',
	'backersf',
	'backers',
	'backpackerf',
	'backpacker',
	'baker',
	'barney',
	'barney-wedding',
	'barry',
	'battlegirl-gen3', 'battlegirl-gen4', 'battlegirl',
	'beauty-gen1', 'beauty-gen1rb', 'beauty-gen2jp', 'beauty-gen2', 'beauty-gen3', 'beauty-gen3rs', 'beauty-gen4dp', 'beauty-gen5bw2', 'beauty',
	'bellelba', 'bellelba-2',
	'bellepa',
	'benedict',
	'benga',
	'benji',
	'bernadette',
	'bertha',
	'beter', 'beter-hero', 'beter-old',
	'bianca-pwt', 'bianca',
	'biker-gen1', 'biker-gen1rb', 'biker-gen2', 'biker-gen3', 'biker-gen4', 'biker',
	'bill-gen3',
	'birch-gen3',
	'birdkeeper-gen1', 'birdkeeper-gen1rb', 'birdkeeper-gen2', 'birdkeeper-gen3', 'birdkeeper-gen3rs', 'birdkeeper-gen4dp', 'birdkeeper',
	'blackbelt-gen1', 'blackbelt-gen1rb', 'blackbelt-gen2', 'blackbelt-gen3', 'blackbelt-gen3rs', 'blackbelt-gen4dp', 'blackbelt-gen4', 'blackbelt',
	'blaine-gen1', 'blaine-gen1rb', 'blaine-gen2', 'blaine-gen3', 'blaine',
	'bloop',
	'blue-gen1champion', 'blue-gen1', 'blue-gen1rbchampion', 'blue-gen1rb', 'blue-gen1rbtwo', 'blue-gen1two', 'blue-gen2', 'blue-gen3champion', 'blue-gen3', 'blue-gen3two', 'blue',
	'boarder-gen2', 'boarder',
	'brainiac',
	'brandon-gen3',
	'brawly-gen3', 'brawly',
	'brendan-gen3', 'brendan-gen3rs',
	'briar',
	'brock-gen1', 'brock-gen1rb', 'brock-gen2', 'brock-gen3', 'brock',
	'brooke', 'brooke-2',
	'bruno-gen1', 'bruno-gen1rb', 'bruno-gen2', 'bruno-gen3', 'bruno',
	'brycenman',
	'brycen',
	'buck',
	'bugcatcher-gen1', 'bugcatcher-gen1rb', 'bugcatcher-gen2', 'bugcatcher-gen3', 'bugcatcher-gen3rs', 'bugcatcher-gen4dp', 'bugcatcher',
	'bugger',
	'bugmaniac-gen3',
	'bugsy-gen2', 'bugsy',
	'bun-villain', 'bun-villain-2',
	'burc', 'burc-villain',
	'burgh',
	'burglar-gen1', 'burglar-gen1rb', 'burglar-gen2', 'burglar-gen3', 'burglar',
	'byron',
	'cairo',
	'cart', 'cart-draft', 'cart-villain',
	'caitlin', 'caitlin-gen4',
	'cameraman',
	'camper-gen2', 'camper-gen3', 'camper-gen3rs', 'camper',
	'candice',
	'candra',
	'candra-event',
	'candra-and-aarush',
	'candra-and-aarush-event',
	'century-villain',
	'chandler',
	'channeler-gen1', 'channeler-gen1rb', 'channeler-gen3',
	'cheren-gen5bw2', 'cheren',
	'cheryl',
	'chili',
	'chuck-gen2', 'chuck',
	'cilan',
	'cherry',
	'clair-gen2', 'clair',
	'clarence-and-gwyneth', 'clarence', 'gwyneth',
	'clay',
	'clemont',
	'clerkf',
	'clerk-boss', 'clerk',
	'clown',
	'cloudy-villain',
	'colin', 'colin-2', 'colin-villain',
	'collector-gen3', 'collector',
	'colress',
	'cooper-villain',
	'courtney-gen3',
	'cowgirl',
	'crasherwake',
	'cress',
	'crushgirl-gen3',
	'crushkin-gen3',
	'cueball-gen1', 'cueball-gen1rb', 'cueball-gen3',
	'cyclistf-gen4', 'cyclistf',
	'cyclist-gen4', 'cyclist',
	'cynthia-gen4', 'cynthia',
	'cyrill', 'cyrill-jacket',
	'cyrus',
	'dahlia',
	'daisy-gen3',
	'dancer',
	'dangelo',
	'dani',
	'darach', 'darach-caitlin',
	'dawn-gen4pt', 'dawn',
	'depotagent',
	'djsucia',
	'doctor',
	'dominique',
	'doubleteam',
	'dragonsblood', 'dragonsblood-f',
	'dragontamer-gen3', 'dragontamer',
	'drake-gen3',
	'drayden',
	'eclipse',
	'elder',
	'elesa-gen5bw2', 'elesa',
	'emmet',
	'engineer-gen1', 'engineer-gen1rb', 'engineer-gen3',
	'enrique', 'enrique-2',
	'erika-gen1', 'erika-gen1rb', 'erika-gen2', 'erika-gen3', 'erika',
	'estrella',
	'ethan-gen2c', 'ethan-gen2', 'ethan-pokeathlon', 'ethan',
	'eugene',
	'eusine-gen2', 'eusine',
	'expertf-gen3',
	'expert-gen3',
	'ezekiel',
	'fabi',
	'faina',
	'faina-imposter',
	'falkner-gen2',
	'falkner',
	'fantina',
	'farnoush',
	'federico',
	'fennel2',
	'fiances',
	'fina', 'fina-and-coco',
	'firebreather-gen2',
	'firebreather',
	'fisherman-gen1', 'fisherman-gen1rb', 'fisherman-gen2jp', 'fisherman-gen3', 'fisherman-gen3rs', 'fisherman-gen4', 'fisherman',
	'flannery-gen3', 'flannery',
	'flint',
	'furisodegirl-pink-2',
	'galacticgruntf',
	'galacticgrunt',
	'galaxy-hero',
	'gambler-gen1', 'gambler-gen1rb', 'gambler',
	'gamer-gen3',
	'gardenia',
	'gentleman-gen1', 'gentleman-gen1rb', 'gentleman-gen2', 'gentleman-gen3', 'gentleman-gen3rs', 'gentleman-gen4dp', 'gentleman-gen4', 'gentleman',
	'ghetsis-gen5bw', 'ghetsis',
	'giovanni-gen1', 'giovanni-gen1rb', 'giovanni-gen3', 'giovanni',
	'glacia-gen3',
	'graeme',
	'greta-gen3',
	'grimsley',
	'guitarist-gen2', 'guitarist-gen3', 'guitarist-gen4', 'guitarist',
	'gus', 'gus-student',
	'hajime',
	'harlequin', 'harlequin-2',
	'hexmaniac-gen3jp', 'hexmaniac-gen3',
	'hiker-gen1', 'hiker-gen1rb', 'hiker-gen2', 'hiker-gen3', 'hiker-gen3rs', 'hiker-gen4', 'hiker',
	'hilbert-wonderlauncher', 'hilbert',
	'hilda-wonderlauncher', 'hilda',
	'hooligans',
	'hoopster',
	'hugh',
	'idol',
	'infielder',
	'ingo',
	'interviewers-gen3',
	'interviewers',
	'iris-gen5bw2', 'iris',
	'izar',
	'izar-event',
	'janine-gen2', 'janine',
	'janitor',
	'jasmine-gen2', 'jasmine',
	'jelani',
	'jessiejames-gen1',
	'jogger',
	'jooj', 'jooj-2', 'jooj-hero', 'jooj-hero-2',
	'jrtrainerf-gen1', 'jrtrainerf-gen1rb',
	'jrtrainer-gen1', 'jrtrainer-gen1rb',
	'juan-gen3',
	'juan',
	'juanca', 'juanca-and-anastasia',
	'juggler-gen1', 'juggler-gen1rb', 'juggler-gen2', 'juggler-gen3', 'juggler', 'juggler-2',
	'jumpy', 'jumpy-swimsuit', 'jumpy-hero', 'jumpy-disguise',
	'junch',
	'jupiter',
	'kaeo',
	'kaito', 'kaito-and-onoufri',
	'karen-gen2', 'karen',
	'karmilla',
	'katarina',
	'kimonogirl-gen2', 'kimonogirl',
	'kindler-gen3',
	'koga-gen1', 'koga-gen2', 'koga-gen1rb', 'koga-gen3', 'koga',
	'kris-gen2',
	'kumar',
	'lady-gen3', 'lady-gen3rs', 'lady-gen4', 'lady',
	'lance-gen1', 'lance-gen1rb', 'lance-gen2', 'lance-gen3', 'lance',
	'lass-gen1', 'lass-gen1rb', 'lass-gen2', 'lass-gen3', 'lass-gen3rs', 'lass-gen4dp', 'lass-gen4', 'lass',
	'leaf-gen3',
	'lenora',
	'leonard',
	'lesion',
	'linebacker',
	'li',
	'lionhugs-hero', 'lionhugs-hero-2',
	'liza',
	'lorelei-gen1', 'lorelei-gen1rb', 'lorelei-gen3',
	'louise',
	'ltsurge-gen1', 'ltsurge-gen1rb', 'ltsurge-gen2', 'ltsurge-gen3', 'ltsurge',
	'lucas-gen4pt', 'lucas',
	'lucian',
	'lucretia',
	'lucy-gen3',
	'lunch', 'lunch-ivy', 'lunch-maria', 'lunch-lucas', 'lunch-patches', 'lunch-hero', 'lunch-hero-2',
	'lyra-pokeathlon', 'lyra',
	'madame-gen4dp', 'madame-gen4', 'madame',
	'maid-gen4', 'maid',
	'marian',
	'marley',
	'marli',
	'marlon',
	'marshal',
	'mars',
	'matt-gen3',
	'maxie-gen3',
	'may-gen3', 'may-gen3rs',
	'maylene',
	'meadow',
	'meadow-wedding',
	'medium-gen2jp', 'medium',
	'mickey',
	'mira',
	'mistress',
	'misty-gen1', 'misty-gen2', 'misty-gen1rb', 'misty-gen3', 'misty',
	'mitch',
	'moby',
	'morty-gen2', 'morty',
	'mrfuji-gen3',
	'mudd',
	'musician',
	'nate-wonderlauncher', 'nate',
	'newlyweds',
	'ninjaboy-gen3', 'ninjaboy',
	'nikita', 'nikita-furisode', 'nikita-wedding',
	'noel', 'noel-2', 'noel-beach', 'noel-beach-2',
	'noland-gen3',
	'noobscrub',
	'noor',
	'norman-gen3', 'norman',
	'n',
	'nurse',
	'nurseryaide',
	'oak-gen1', 'oak-gen1rb', 'oak-gen2', 'oak-gen3',
	'officer-gen2',
	'oldcouple-gen3',
	'olenka',
	'oustinia', 'oleg', 'onisim', 'onoufri', 'onisim-and-oleg',
	'owen',
	'painter-gen3',
	'palmer',
	'parasollady-gen3', 'parasollady-gen4', 'parasollady',
	'petra',
	'petrel',
	'phero', 'phero-villain',
	'phoebe-gen3',
	'picnicker-gen2', 'picnicker-gen3', 'picnicker-gen3rs', 'picnicker',
	'pika',
	'pilot',
	'piper', 'piper-dress',
	'plasmagruntf-gen5bw', 'plasmagruntf',
	'plasmagrunt-gen5bw', 'plasmagrunt',
	'pokefanf-gen2', 'pokefanf-gen3', 'pokefanf-gen4', 'pokefanf',
	'pokefan-gen2', 'pokefan-gen3', 'pokefan-gen4', 'pokefan',
	'pokekid',
	'pokemaniac-gen1', 'pokemaniac-gen1rb', 'pokemaniac-gen2', 'pokemaniac-gen3', 'pokemaniac-gen3rs', 'pokemaniac',
	'pokemonbreederf-gen3', 'pokemonbreederf-gen3frlg', 'pokemonbreederf-gen4', 'pokemonbreederf',
	'pokemonbreeder-gen3', 'pokemonbreeder-gen4', 'pokemonbreeder',
	'pokemonrangerf-gen3', 'pokemonrangerf-gen3rs', 'pokemonrangerf-gen4', 'pokemonrangerf',
	'pokemonranger-gen3', 'pokemonranger-gen3rs', 'pokemonranger-gen4', 'pokemonranger',
	'policeman-gen4', 'policeman',
	'portia',
	'portia-dw',
	'preschoolerf',
	'preschooler',
	'prim',
	'proton',
	'pryce-gen2', 'pryce',
	'psychicf-gen3', 'psychicf-gen3rs', 'psychicf-gen4', 'psychicfjp-gen3', 'psychicf',
	'psychic-gen1', 'psychic-gen1rb', 'psychic-gen2', 'psychic-gen3', 'psychic-gen3rs', 'psychic-gen4', 'psychic',
	'pumpkin',
	'quincy-dw',
	'rancher',
	'red-gen1main', 'red-gen1', 'red-gen1rb', 'red-gen1title', 'red-gen2', 'red-gen3', 'red',
	'reed',
	'renato',
	'reporter',
	'resix', 'greesix', 'blusix', 'yellosix', 'purpsix', 'browsix',
	'rex', 'rex-hero',
	'richboy-gen3', 'richboy-gen4', 'richboy',
	'rifk', 'rifk-villain',
	'riley',
	'roark',
	'rocker-gen1', 'rocker-gen1rb', 'rocker-gen3',
	'rocket-gen1', 'rocket-gen1rb',
	'rocketgruntf-gen2', 'rocketgruntf',
	'rocketgrunt-gen2', 'rocketgrunt',
	'rocketgruntf-fnf', 'rocketgrunt-fnf',
	'rocketexecutivef-gen2',
	'rocketexecutive-gen2',
	'rodeo-clown', 'rodeo-duo',
	'roll-in', 'roll-in-hero',
	'rood',
	'rosa-wonderlauncher', 'rosa',
	'roughneck-gen4', 'roughneck',
	'roxanne-gen3', 'roxanne',
	'roxie',
	'ruinmaniac-gen3', 'ruinmaniac-gen3rs', 'ruinmaniac',
	'sabrina-gen1', 'sabrina-gen1rb', 'sabrina-gen2', 'sabrina-gen3', 'sabrina',
	'sage-gen2', 'sage-gen2jp', 'sage',
	'sailor-gen1', 'sailor-gen1rb', 'sailor-gen2', 'sailor-gen3jp', 'sailor-gen3', 'sailor-gen3rs', 'sailor',
	'santiago',
	'saurbot-pokedex',
	'saturn',
	'schoolboy-gen2',
	'schoolkidf-gen3', 'schoolkidf-gen4', 'schoolkidf',
	'schoolkid-gen3', 'schoolkid-gen4dp', 'schoolkid-gen4', 'schoolkid',
	'scientistf',
	'scientist-gen1', 'scientist-gen1rb', 'scientist-gen2', 'scientist-gen3', 'scientist-gen4dp', 'scientist-gen4', 'scientist',
	'shadou', 'shadou-shadow',
	'shadowtriad',
	'shauntal',
	'shelly-gen3',
	'sidney-gen3',
	'silver-gen2kanto', 'silver-gen2', 'silver',
	'sisandbro-gen3', 'sisandbro-gen3rs', 'sisandbro',
	'skierf-gen4dp', 'skierf',
	'skier-gen2', 'skier',
	'skullgruntf-fnf', 'skullgrunt-fnf',
	'skyla',
	'skytrainerf-2',
	'smasher',
	'sneha',
	'sol', 'sol-wedding',
	'spenser-gen3',
	'srandjr-gen3',
	'steven-gen3', 'steven',
	'stperformer-2',
	'striker', 'striker2',
	'supernerd-gen1', 'supernerd-gen1rb', 'supernerd-gen2', 'supernerd-gen3', 'supernerd',
	'swimmerf-gen2', 'swimmerf-gen3', 'swimmerf-gen3rs', 'swimmerf-gen4dp', 'swimmerf-gen4', 'swimmerfjp-gen2', 'swimmerf',
	'swimmer-gen1', 'swimmer-gen1rb', 'swimmer-gen4dp', 'swimmer-gen4jp', 'swimmer-gen4', 'swimmerm-gen2', 'swimmerm-gen3', 'swimmerm-gen3rs', 'swimmer',
	'tabitha-gen3',
	'tamer-gen1', 'tamer-gen1rb', 'tamer-gen3',
	'tara',
	'tara-event',
	'tara-and-izar',
	'tara-and-izar-event',
	'tateandliza-gen3',
	'tate',
	'teacher-gen2', 'teacher',
	'teamaquabeta-gen3',
	'teamaquagruntf-gen3',
	'teamaquagruntm-gen3',
	'teammagmagruntf-gen3',
	'teammagmagruntm-gen3',
	'teamrocketgruntf-gen3',
	'teamrocketgruntm-gen3',
	'teamrocket',
	'tempo',
	'thanu',
	'theodore',
	'thorton',
	'tiana-hero', 'tiana-hero-2',
	'triathletebikerf-gen3',
	'triathletebikerm-gen3',
	'triathleterunnerf-gen3',
	'triathleterunnerm-gen3',
	'triathleteswimmerf-gen3',
	'triathleteswimmerm-gen3',
	'tuberf-gen3', 'tuberf-gen3rs', 'tuberf',
	'tuber-gen3', 'tuber',
	'tucker-gen3',
	'twins-gen2', 'twins-gen3', 'twins-gen3rs', 'twins-gen4dp', 'twins-gen4', 'twins',
	'tyra',
	'unknownf',
	'unknown',
	'valentina',
	'valerian',
	'venusgrunt', 'venusgruntf',
	'veteranf',
	'veteran-gen4', 'veteran-gen4-2', 'veteran',
	'violet-hero',
	'vivii', 'vivian', 'vivian-and-ninette', 'vivian-hero',
	'virtuagruntm', 'virtuagruntf',
	'void', 'void-annulled', 'void-annulled-hero',
	'volkner',
	'waiter-gen4dp', 'waiter-gen4', 'waiter',
	'waitress-gen4', 'waitress',
	'wallace-gen3', 'wallace-gen3rs', 'wallace',
	'wally-gen3',
	'wattson-gen3', 'wattson',
	'whitney-gen2', 'whitney',
	'will-gen2', 'will',
	'winona-gen3', 'winona',
	'worker-gen4',
	'workerice', 'workerice-2',
	'worker',
	'worker2-gen6-2',
	'yellow',
	'yolanda',
	'youngcouple-gen3', 'youngcouple-gen3rs', 'youngcouple-gen4dp', 'youngcouple',
	'youngster-gen1', 'youngster-gen1rb', 'youngster-gen2', 'youngster-gen3', 'youngster-gen3rs', 'youngster-gen4', 'youngster-gen4dp', 'youngster',
	'zayn',
	'zinzolin',
]);

const avatarTableAkumaTsubasa = new Set([
	'chaser', 'chaserf', 'cipher-peon', 'cipher-peonf', 'cipher-peon-event', 'cipher-peonf-event',
	'dakim', 'dakim-event', 'ein', 'ein-event', 'gonzap', 'gonzap-event', 'hunter', 'hunterf',
	'mirorb', 'mirorb-event', 'nascour', 'nascour-event', 'stperformer', 'venus', 'venus-event',
	'exol', 'snattle', 'lovrina', 'gorigan', 'eldes', 'ardos', 'greevil',
]);

const avatarTableBeliot419 = new Set([
	'acerola', 'aetheremployee', 'aetheremployeef', 'aetherfoundation', 'aetherfoundationf', 'anabel-gen7',
	'beauty-gen7', 'blue-gen7', 'burnet', 'colress-gen7', 'dexio', 'elio', 'faba', 'gladion-stance',
	'gladion', 'grimsley-gen7', 'hapu', 'hau-stance', 'hau', 'hiker-gen7', 'ilima', 'kahili', 'kiawe',
	'kukui-stand', 'kukui', 'lana', 'lass-gen7', 'lillie-z', 'lillie', 'lusamine-nihilego', 'lusamine',
	'mallow', 'mina', 'molayne', 'nanu', 'officeworker', 'olivia', 'plumeria', 'pokemonbreeder-gen7',
	'pokemonbreederf-gen7', 'preschoolers', 'red-gen7', 'risingstar', 'risingstarf', 'ryuki',
	'samsonoak', 'selene', 'sightseerf', 'sina', 'sophocles', 'teacher-gen7', 'theroyal', 'wally',
	'wicke', 'youngathlete', 'youngathletef', 'youngster-gen7',
]);

const avatarTableFiftyShadesofRez = new Set([
	'rose-zerosuit',
]);

const avatarTableSelena = new Set([
	'kris',
]);

const avatarTableHoro = new Set([
	'roy', 'liko', 'red-lgpe',
]);

const avatarTableAutumnSpire = new Set([
	'florist', 'gentleman-gen3-2',
]);

const avatarTableRADU = new Set([
	'miku-ice',
]);

const avatarTableFlamibane = new Set([
	'miku-ghost',
]);

const avatarTablewisteriapurple = new Set([
	'miku-fairy',
]);

const avatarTableGnomowladny = new Set([
	'az', 'brawly-gen6', 'bryony', 'drasna', 'evelyn', 'furisodegirl-black', 'furisodegirl-pink', 'guzma',
	'hala', 'korrina', 'malva', 'nita', 'olympia', 'ramos', 'shelly', 'sidney', 'siebold', 'tierno',
	'valerie', 'viola', 'wallace-gen6', 'wikstrom', 'winona-gen6', 'wulfric', 'xerosic', 'youngn', 'zinnia',
]);

const avatarTableBrumirage = new Set([
	'adaman', 'agatha-lgpe', 'akari', 'allister', 'archie-gen6', 'arezu', 'avery', 'ballguy', 'bea', 'bede',
	'bede-leader', 'brendan-contest', 'burnet-radar', 'calaba', 'calem', 'chase', 'cogita', 'cynthia-gen7',
	'cynthia-masters', 'diantha', 'doctor-gen8', 'elaine', 'gloria', 'gordie', 'hilda-masters2', 'hop',
	'irida', 'kabu', 'klara', 'koga-lgpe', 'leon', 'leon-tower', 'lian', 'lisia', 'lorelei-lgpe', 'magnolia',
	'mai', 'marnie', 'may-contest', 'melony', 'milo', 'mina-lgpe', 'mustard', 'mustard-master', 'nessa',
	'oleana', 'opal', 'peony', 'pesselle', 'phoebe-gen6', 'piers', 'raihan', 'rei', 'rose', 'sabi',
	'sanqua', 'shielbert', 'sonia', 'sonia-professor', 'sordward', 'sordward-shielbert', 'tateandliza-gen6',
	'victor', 'victor-dojo', 'volo', 'yellgrunt', 'yellgruntf', 'zisu',
	'sada-ai', 'turo-ai', 'miku-flying', 'miku-ground',
]);

const avatarTableZacWeavile = new Set([
	'alain', 'charm', 'coin', 'elio-usum', 'emma', 'essentia', 'gloria-dojo', 'marnie-league', 'morgan',
	'shauna', 'skullgrunt', 'skullgruntf', 'courtney', 'dulse', 'magmagrunt', 'magmagruntf', 'phyco', 'selene-usum',
	'soliera', 'zossie',
	'arven-v', 'dexio-gen6', 'flannery-gen6', 'green', 'grusha', 'mela', 'norman-gen6', 'penny',
	'sina-gen6', 'steven-gen6',
	'atticus', 'eri', 'giacomo', 'ginchiyo-conquest', 'hanbei-conquest', 'hero-conquest', 'hero2-conquest',
	'heroine-conquest', 'heroine2-conquest', 'kunoichi-conquest', 'kunoichi2-conquest', 'masamune-conquest',
	'nobunaga-conquest', 'oichi-conquest', 'ortega', 'ranmaru-conquest', 'serena-anime',
]);

const avatarTableIceJkai = new Set([
	'matt-gen6',
]);

const avatarTableKyleDove = new Set([
	'acetrainerf-gen6', 'acetrainerf-gen6xy', 'acetrainer-gen6', 'acetrainer-gen6-2', 'acetrainer-gen6xy', 'aquagrunt-2', 'aquagruntf-2',
	'aromalady-gen6', 'artistf-gen6', 'artist-gen6', 'artist-gen8', 'backpacker-gen6', 'backpacker-gen8',
	'battlegirl-gen6', 'battlegirl-gen6xy', 'beauty-gen6', 'beauty-gen6xy', 'beauty-gen8', 'birdkeeper-gen6',
	'blackbelt-gen6', 'blackbelt-gen8', 'bugcatcher-gen6', 'bugmaniac-gen6', 'butler', 'cabbie', 'cafemaster',
	'cameraman-gen6', 'cameraman-gen8', 'camper-gen6', 'chef', 'clerkf-gen8', 'clerk-gen8', 'collector-gen6',
	'cook', 'dancer-gen8', 'delinquent', 'doctorf-gen8', 'dragontamer-gen6', 'expertf-gen6', 'expert-gen6',
	'fairytalegirl', 'fisher-gen8', 'fisherman-gen6', 'fisherman-gen6xy', 'freediver', 'furisodegirl-blue',
	'furisodegirl-white', 'garcon', 'gardener', 'gentleman-gen6', 'gentleman-gen6xy', 'gentleman-gen8',
	'guitarist-gen6', 'hexmaniac-gen6', 'hiker-gen6', 'hiker-gen8', 'interviewers-gen6', 'kindler-gen6', 'lady-gen6',
	'lady-gen6oras', 'lass-gen6', 'lass-gen6oras', 'lass-gen8', 'leaguestaff', 'leaguestafff', 'madame-gen6',
	'madame-gen8', 'maid-gen6', 'model-gen8', 'musician-gen8', 'ninjaboy-gen6', 'owner', 'parasollady-gen6',
	'picnicker-gen6', 'pokefanf-gen6', 'pokefanf-gen6xy', 'pokefan-gen6', 'pokefan-gen6xy', 'pokekidf-gen8',
	'pokekid-gen8', 'pokemaniac-gen6', 'pokemonbreederf-gen6', 'pokemonbreederf-gen6xy', 'pokemonbreederf-gen8',
	'pokemonbreeder-gen6', 'pokemonbreeder-gen6xy', 'pokemonbreeder-gen8', 'pokemonrangerf-gen6', 'pokemonrangerf-gen6xy',
	'pokemonranger-gen6', 'pokemonranger-gen6xy', 'policeman-gen8', 'postman', 'preschoolerf-gen6', 'preschooler-gen6',
	'psychic-gen6', 'punkgirl', 'punkguy', 'railstaff', 'reporter-gen6', 'reporter-gen8', 'richboy-gen6', 'richboy-gen6xy',
	'risingstarf-gen6', 'risingstar-gen6', 'rollerskater', 'rollerskaterf', 'ruinmaniac-gen6', 'sailor-gen6', 'schoolboy',
	'schoolgirl', 'schoolkidf-gen6', 'schoolkidf-gen8', 'schoolkid-gen6', 'schoolkid-gen8', 'scientistf-gen6',
	'scientist-gen6', 'scubadiver', 'skytrainer', 'skytrainerf', 'streetthug', 'swimmerf2-gen6', 'swimmerf-gen6',
	'swimmerf-gen8', 'swimmer-gen6', 'swimmer-gen8', 'teammates', 'tourist', 'touristf', 'touristf2',
	'triathletebiker-gen6', 'triathleterunner-gen6', 'triathleteswimmer-gen6', 'tuberf-gen6', 'tuber-gen6', 'twins-gen6',
	'veteranf-gen6', 'veteran-gen6', 'waitress-gen6', 'worker2-gen6', 'workerf-gen8', 'worker-gen6', 'worker-gen8',
	'youngcouple-gen6', 'youngster-gen6', 'youngster-gen6xy', 'youngster-gen8',
	'acerola-masters', 'bea-masters', 'blue-masters', 'brendan-masters', 'brock-masters', 'burgh-masters', 'caitlin-masters',
	'cynthia-masters2', 'cyrus-masters', 'dawn-masters', 'dawn-masters2', 'diantha-masters', 'elesa-masters', 'emmet-masters',
	'erika-masters', 'erika-masters2', 'ethan-masters', 'giovanni-masters', 'gloria-masters', 'grimsley-masters',
	'guzma-masters', 'hilbert-masters', 'hilda-masters', 'ingo-masters', 'jasmine-masters', 'korrina-masters', 'kris-masters',
	'lance-masters', 'leaf-masters', 'leon-masters', 'leon-masters2', 'lillie-masters', 'lillie-masters2', 'lillie-masters3',
	'lusamine-masters', 'lyra-masters', 'lyra-masters2', 'marnie-masters', 'marnie-masters2', 'may-masters', 'may-masters2',
	'may-masters3', 'misty-masters', 'morty-masters', 'morty-masters2', 'n-masters', 'n-masters2', 'nessa-masters',
	'raihan-masters', 'red-masters', 'rosa-masters', 'sabrina-masters', 'serena-masters', 'serena-masters2',
	'siebold-masters', 'skyla-masters', 'sonia-masters', 'steven-masters', 'steven-masters2', 'volkner-masters',
	'anthea', 'beni-ninja', 'beni', 'birch', 'blaine-lgpe', 'blue-lgpe', 'brigette', 'brock-lgpe', 'caraliss', 'cedricjuniper',
	'celio', 'charon', 'clover', 'colza', 'concordia', 'cyllene', 'dawn-contest', 'elm', 'erika-lgpe', 'fennel', 'gaeric',
	'ginter', 'giovanni-lgpe', 'grant', 'ingo-hisui', 'iscan', 'kamado-armor', 'kamado', 'kurt', 'lance-lgpe', 'lanette',
	'laventon', 'lucas-contest', 'lucy', 'lysandre', 'melli', 'misty-lgpe', 'noland', 'palina', 'plumeria-league', 'rowan',
	'roxanne-gen6', 'rye', 'sabrina-lgpe', 'scott', 'securitycorps', 'securitycorpsf', 'serena', 'sycamore', 'taohua', 'vessa',
	'acetrainer-gen7', 'acetrainerf-gen7', 'anthe', 'anvin', 'beauty-masters', 'bellhop', 'bellis', 'blackbelt-gen7',
	'burglar-lgpe', 'channeler-lgpe', 'choy', 'collector-gen7', 'collector-masters', 'cook-gen7', 'cynthia-anime', 'dagero',
	'dancer-gen7', 'firefighter', 'fisherman-gen7', 'gentleman-gen7', 'gentleman-lgpe', 'golfer', 'grace', 'hayley',
	'janitor-gen7', 'jasmine-contest', 'johanna', 'johanna-contest', 'madame-gen7', 'mom-alola', 'mom-hoenn', 'mom-johto',
	'mom-unova2', 'oak', 'officeworkerf', 'piers-league', 'pokemoncenterlady', 'policeman-gen7', 'preschooler-gen7',
	'preschoolerf-gen7', 'psychic-lgpe', 'punkgirl-gen7', 'punkgirl-masters', 'punkguy-gen7', 'rosa-pokestar', 'scientist-gen7',
	'sightseer', 'streetthug-masters', 'surfer', 'swimmer-gen7', 'swimmer-masters', 'swimmerf-gen7', 'swimmerf2-gen7', 'trialguide',
	'trialguidef', 'tuli', 'ultraforestkartenvoy', 'veteran-gen7', 'veteranf-gen7', 'worker-gen7', 'worker-lgpe', 'youngster-masters',
	'akari-isekai', 'allister-masters', 'arven-s', 'brassius-2', 'clavell-s', 'cynthia-anime2', 'cynthia-masters3', 'florian-s',
	'geeta', 'hassel', 'hilda-masters3', 'iono-2', 'iris-masters', 'jacq-2', 'juliana-s', 'katy', 'kofu', 'larry', 'miriam', 'nemona-v',
	'poppy', 'red-masters2', 'rei-isekai', 'rika', 'rosa-masters2', 'ryme', 'sada', 'stargrunt-s', 'stargrunt-v', 'stargruntf-s',
	'stargruntf-v', 'steven-masters3', 'tulip', 'turo', 'tyme', 'wally-masters',
	'amelia-shuffle', 'beauty-gen9', 'bede-masters', 'calem-masters', 'clerk-unite', 'dawn-masters3', 'dendra', 'diantha-masters2',
	'erbie-unite', 'hilbert-masters2', 'hop-masters', 'jasmine-masters2', 'lisia-masters', 'marnie-masters3', 'matt', 'n-masters3',
	'paulo-masters', 'phorus-unite', 'pokemaniac-gen9', 'serena-masters3', 'tabitha', 'tina-masters', 'trevor', 'whitney-masters',
	'youngster-gen9', 'zirco-unite',
	'acerola-masters2', 'aetherfoundation2', 'amarys', 'artist-gen9', 'backpacker-gen9', 'blackbelt-gen9', 'blue-masters2', 'brassius',
	'brendan-rs', 'briar-sv', 'cabbie-gen9', 'caretaker', 'clair-masters', 'clive-v', 'cook-gen9', 'courier', 'crispin', 'cyrano',
	'delinquent-gen9', 'delinquentf-gen9', 'delinquentf2-gen9', 'drayton', 'flaregrunt', 'flaregruntf', 'florian-festival', 'gloria-league',
	'gloria-tundra', 'hau-masters', 'hiker-gen9', 'hyde', 'iono', 'janitor-gen9', 'juliana-festival', 'kieran-champion', 'lacey', 'lana-masters',
	'leaf-masters2', 'liza-gen6', 'lysandre-masters', 'may-e', 'may-rs', 'miku-fire', 'miku-grass', 'miku-psychic', 'miku-water', 'mina-masters',
	'mustard-champion', 'nate-masters', 'nate-pokestar', 'ogreclan', 'perrin', 'piers-masters', 'red-masters3', 'rosa-pokestar2',
	'roxanne-masters', 'roxie-masters', 'ruffian', 'sycamore-masters', 'tate-gen6', 'tucker', 'victor-league', 'victor-tundra', 'viola-masters',
	'wallace-masters', 'worker-gen9', 'yukito-hideko',
	'acerola-masters3', 'bianca-masters', 'cheren-masters', 'gardenia-masters',
	'aarune', 'adaman-masters', 'allister-unmasked', 'anabel', 'aquagrunt', 'aquagrunt-rse', 'aquagruntf', 'aquagruntf-rse', 'aquasuit',
	'archie-usum', 'arlo', 'baoba', 'barry-masters', 'bill', 'blanche', 'blanche-casual', 'brandon', 'candela', 'candela-casual', 'candice-masters',
	'christoph', 'cliff', 'curtis', 'daisy', 'dana', 'gladion-masters', 'greta', 'gurkinn', 'harmony', 'heath', 'irida-masters', 'jacq', 'jamie',
	'magmagrunt-rse', 'magmagruntf-rse', 'magmasuit', 'magnus', 'mateo', 'mirror', 'mohn', 'mohn-anime', 'mom-paldea', 'mom-unova', 'mrbriney',
	'mrstone', 'nancy', 'nate-pokestar3', 'nemona-masters', 'neroli', 'paxton', 'peony-league', 'phil', 'player-go', 'playerf-go', 'rhi', 'rita',
	'river', 'rosa-pokestar3', 'sabrina-frlg', 'selene-masters', 'sierra', 'spark', 'spark-casual', 'spenser', 'toddsnap', 'toddsnap2', 'trace',
	'victor-masters', 'vince', 'wally-rse', 'willow', 'willow-casual', 'yancy', 'zinnia-masters',
]);

const avatarTableHyooppa = new Set([
	'brendan', 'maxie-gen6', 'may', 'brendan-e',
]);

const avatarTableGrapo = new Set([
	'peonia', 'skyla-masters2', 'volo-ginkgo', 'glacia', 'rosa-masters3', 'phoebe-masters', 'scottie-masters',
]);

for (const avatar of avatarTableAkumaTsubasa) avatarTable.add(avatar);
for (const avatar of avatarTableBeliot419) avatarTable.add(avatar);
for (const avatar of avatarTableFiftyShadesofRez) avatarTable.add(avatar);
for (const avatar of avatarTableSelena) avatarTable.add(avatar);
for (const avatar of avatarTableHoro) avatarTable.add(avatar);
for (const avatar of avatarTableAutumnSpire) avatarTable.add(avatar);
for (const avatar of avatarTableRADU) avatarTable.add(avatar);
for (const avatar of avatarTableFlamibane) avatarTable.add(avatar);
for (const avatar of avatarTablewisteriapurple) avatarTable.add(avatar);
for (const avatar of avatarTableGnomowladny) avatarTable.add(avatar);
for (const avatar of avatarTableBrumirage) avatarTable.add(avatar);
for (const avatar of avatarTableZacWeavile) avatarTable.add(avatar);
for (const avatar of avatarTableIceJkai) avatarTable.add(avatar);
for (const avatar of avatarTableKyleDove) avatarTable.add(avatar);
for (const avatar of avatarTableHyooppa) avatarTable.add(avatar);
for (const avatar of avatarTableGrapo) avatarTable.add(avatar);

export const crqHandlers: {[k: string]: Chat.CRQHandler} = {
	userdetails(target, user, trustable) {
		if (target.length > 18) {
			return null;
		}

		const targetUser = Users.get(target);
		if (!trustable || !targetUser) {
			return {
				id: target,
				userid: toID(target),
				name: target,
				rooms: false,
			};
		}
		interface RoomData {p1?: string; p2?: string; isPrivate?: boolean | 'hidden' | 'voice'}
		let roomList: {[roomid: string]: RoomData} | false = {};
		for (const roomid of targetUser.inRooms) {
			const targetRoom = Rooms.get(roomid);
			if (!targetRoom) continue; // shouldn't happen
			const roomData: RoomData = {};
			if (targetRoom.settings.isPrivate) {
				if (!user.inRooms.has(roomid) && !user.games.has(roomid)) continue;
				roomData.isPrivate = true;
			}
			if (targetRoom.battle) {
				if (targetUser.settings.hideBattlesFromTrainerCard && user.id !== targetUser.id && !user.can('lock')) continue;
				const battle = targetRoom.battle;
				roomData.p1 = battle.p1 ? ' ' + battle.p1.name : '';
				roomData.p2 = battle.p2 ? ' ' + battle.p2.name : '';
			}
			let roomidWithAuth: string = roomid;
			if (targetRoom.auth.has(targetUser.id)) {
				roomidWithAuth = targetRoom.auth.getDirect(targetUser.id) + roomid;
			}
			roomList[roomidWithAuth] = roomData;
		}
		if (!targetUser.connected) roomList = false;
		let group = targetUser.tempGroup;
		if (targetUser.locked) group = Config.punishgroups?.locked?.symbol ?? '\u203d';
		if (targetUser.namelocked) group = Config.punishgroups?.namelocked?.symbol ?? '✖';
		const sectionleader = Users.globalAuth.sectionLeaders.has(targetUser.id);
		return {
			id: target,
			userid: targetUser.id,
			name: targetUser.name,
			avatar: targetUser.avatar,
			group: group,
			customgroup: sectionleader ? "Section Leader" : undefined,
			autoconfirmed: !!targetUser.autoconfirmed,
			status: targetUser.getStatus(),
			rooms: roomList,
		};
	},
	roomlist(target, user, trustable) {
		if (!trustable) return false;
		return {rooms: Rooms.global.getBattles(target)};
	},
	rooms(target, user, trustable) {
		if (!trustable) return false;
		return Rooms.global.getRooms(user);
	},
	laddertop(target, user, trustable) {
		if (!trustable) return false;
		const [format, prefix] = target.split(',').map(x => x.trim());
		return Ladders(toID(format)).getTop(prefix);
	},
	roominfo(target, user, trustable) {
		if (!trustable) return false;

		if (target.length > 225) {
			return null;
		}
		const targetRoom = Rooms.get(target);
		if (!targetRoom || (
			targetRoom.settings.isPrivate && !user.inRooms.has(targetRoom.roomid) && !user.games.has(targetRoom.roomid)
		)) {
			const roominfo = {id: target, error: 'not found or access denied'};
			return roominfo;
		}
		let visibility;
		if (targetRoom.settings.isPrivate) {
			visibility = (targetRoom.settings.isPrivate === 'hidden') ? 'hidden' : 'secret';
		} else {
			visibility = 'public';
		}

		const roominfo: AnyObject = {
			id: target,
			roomid: targetRoom.roomid,
			title: targetRoom.title,
			type: targetRoom.type,
			visibility: visibility,
			modchat: targetRoom.settings.modchat,
			modjoin: targetRoom.settings.modjoin,
			auth: {},
			users: [],
		};

		for (const [id, rank] of targetRoom.auth) {
			if (!roominfo.auth[rank]) roominfo.auth[rank] = [];
			roominfo.auth[rank].push(id);
		}

		for (const userid in targetRoom.users) {
			const curUser = targetRoom.users[userid];
			if (!curUser.named) continue;
			const userinfo = curUser.getIdentity(targetRoom.roomid);
			roominfo.users.push(userinfo);
		}
		return roominfo;
	},
};

export const commands: Chat.ChatCommands = {

	version(target, room, user) {
		if (!this.runBroadcast()) return;
		const version = Chat.packageData.version;
		this.sendReplyBox(this.tr`Server version: <b>${version}</b>`);
	},

	userlist(target, room, user) {
		room = this.requireRoom();
		const userList = [];

		for (const id in room.users) {
			const curUser = Users.get(room.users[id]);
			if (!curUser?.named) continue;
			userList.push(Utils.escapeHTML(curUser.getIdentity(room.roomid)));
		}

		let output = `There ${Chat.plural(userList, "are", "is")} <strong style="color:#24678d">${Chat.count(userList, "</strong> users")} in this room:<br />`;
		output += userList.join(`, `);

		this.sendReplyBox(output);
	},
	userlisthelp: [`/userlist - Displays a list of users who are currently in the room.`],

	mee: 'me',
	me(target, room, user) {
		if (this.cmd === 'mee' && /[A-Z-a-z0-9/]/.test(target.charAt(0))) {
			return this.errorReply(this.tr`/mee - must not start with a letter or number`);
		}
		target = this.checkChat(`/${this.cmd} ${target || ''}`);

		if (this.message.startsWith(`/ME`)) {
			const uppercaseIdentity = user.getIdentity(room?.roomid).toUpperCase();
			if (this.pmTarget) {
				const msg = `|pm|${uppercaseIdentity}|${this.pmTarget.getIdentity()}|${target}`;
				user.send(msg);
				if (this.pmTarget !== user) this.pmTarget.send(msg);
			} else {
				this.add(`|c|${uppercaseIdentity}|${target}`);
			}
			return;
		}

		return target;
	},

	shrug(target) {
		target = target ? ' ' + target + ' ' : '';
		if (target.startsWith(' /me')) target = target.slice(1);
		return this.checkChat(target + '¯\\_(ツ)_/¯');
	},
	shrughelp: ['/shrug [message] - Sends the given message, if any, appended with ¯\\_(ツ)_/¯'],

	tableflip(target) {
		target = target ? ' ' + target + ' ' : '';
		if (target.startsWith(' /me')) target = target.slice(1);
		return this.checkChat(target + '(╯°□°）╯︵ ┻━┻');
	},
	tablefliphelp: ['/tableflip [message] - Sends the given message, if any, appended with (╯°□°）╯︵ ┻━┻'],

	tableunflip(target) {
		target = target ? ' ' + target + ' ' : '';
		if (target.startsWith(' /me')) target = target.slice(1);
		return this.checkChat(target + '┬──┬◡ﾉ(° -°ﾉ)');
	},
	tableunfliphelp: ['/tableunflip [message] - Sends the given message, if any, appended with ┬──┬◡ﾉ(° -°ﾉ)'],

	'battle!': 'battle',
	battle(target, room, user, connection, cmd) {
		if (cmd === 'battle') {
			return this.sendReply(this.tr`What?! How are you not more excited to battle?! Try /battle! to show me you're ready.`);
		}
		if (!target) target = "randombattle";
		return this.parse(`/search ${target}`);
	},

	avatar(target, room, user) {
		if (!target) return this.parse(`${this.cmdToken}avatars`);
		const parts = target.split(',');
		let avatar = parts[0].toLowerCase().replace(/[^a-z0-9-]+/g, '');
		let avatarIsValid = true;
		if (!avatarTable.has(avatar)) {
			const avatarNum = parseInt(avatar);
			if (!avatarNum || avatarNum > 294 || avatarNum < 1) {
				avatarIsValid = false;
			} else {
				avatar = '' + avatarNum;
			}
		}

		const avatarsAuto = Config.customavatars || {};
		const avatarsManual = Config.allowedavatars || {};
		function customAvatarIsValid(userid: ID) {
			if (avatarsAuto[userid] === avatar) {
				return true;
			}
			if (avatarsAuto[userid] === '#' + avatar) {
				avatar = '#' + avatar;
				return true;
			}
			if (Object.hasOwnProperty.call(avatarsManual, '#' + avatar)) {
				avatar = '#' + avatar;
			}
			if (Object.hasOwnProperty.call(avatarsManual, avatar)) {
				if (avatarsManual[avatar].includes(userid)) {
					return true;
				}
			}
			return false;
		}
		avatarIsValid = avatarIsValid || [user.id, ...user.previousIDs].some(customAvatarIsValid);

		if (!avatarIsValid) {
			if (parts[1]) return false;
			if (avatar.startsWith('#')) {
				this.errorReply(this.tr`Access denied for custom avatar - make sure you're on the right account?`);
			} else {
				this.errorReply(this.tr`Invalid avatar.`);
			}
			return false;
		}

		user.avatar = avatar;
		const avatarUrl = avatar.startsWith('#') ? `trainers-custom/${avatar.slice(1)}.png` : `trainers/${avatar}.png`;
		if (!parts[1]) {
			this.sendReply(`${this.tr`Avatar changed to:`}\n|raw|<img src="//${Config.routes.client}/sprites/${avatarUrl}" alt="${avatar}" width="80" height="80" class="pixelated" />`);
			if (avatarTableBeliot419.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}<a href="https://www.deviantart.com/beliot419">Beliot419</a>)`);
			}
			if (avatarTableAkumaTsubasa.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}<a href="https://www.deviantart.com/akuma-tsubasa">Akuma-Tsubasa</a>)`);
			}
			if (avatarTableGnomowladny.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}Gnomowladny)`);
			}
			if (avatarTableIceJkai.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}<a href="https://www.deviantart.com/icejkai">IceJkai</a>)`);
			}
			if (avatarTableBrumirage.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}<a href="https://twitter.com/Brumirage">Brumirage</a>)`);
			}
			if (avatarTableZacWeavile.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}ZacWeavile)`);
			}
			if (avatarTableKyleDove.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}<a href="https://twitter.com/DoveKyle">Kyledove</a>)`);
			}
			if (avatarTableHyooppa.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}<a href="https://twitter.com/hyo_oppa">hyo-oppa</a>)`);
			}
			if (avatarTableGrapo.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}<a href="https://twitter.com/Grapo_Sprites">Grapo</a>)`);
			}
			if (avatarTableFiftyShadesofRez.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}Fifty Shades of Rez)`);
			}
			if (avatarTableSelena.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}Selena)`);
			}
			if (avatarTableHoro.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}Horo)`);
			}
			if (avatarTableAutumnSpire.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}AutumnSpire)`);
			}
			if (avatarTableRADU.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}RADU)`);
			}
			if (avatarTableFlamibane.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}Flamibane)`);
			}
			if (avatarTablewisteriapurple.has(avatar)) {
				this.sendReply(`|raw|(${this.tr`Artist: `}wisteriapurple)`);
			}
		}
	},
	avatarhelp: [`/avatar [avatar name or number] - Change your trainer sprite.`],

	signout: 'logout',
	logout(target, room, user) {
		user.resetName();
	},

	noreply(target, room, user) {
		if (!target.startsWith('/')) return this.parse('/help noreply');
		return this.parse(target, {isQuiet: true});
	},
	noreplyhelp: [`/noreply [command] - Runs the command without displaying the response.`],

	async msgroom(target, room, user, connection) {
		const [targetId, message] = Utils.splitFirst(target, ',').map(i => i.trim());
		if (!targetId || !message) {
			return this.parse(`/help msgroom`);
		}
		this.checkRecursion();

		const targetRoom = Rooms.search(targetId.trim());
		if (!targetRoom) return this.errorReply(`Room not found.`);
		if (message.trim().startsWith('/msgroom ')) {
			return this.errorReply(`Please do not nest /msgroom inside itself.`);
		}
		const subcontext = new Chat.CommandContext({room: targetRoom, message, user, connection});
		await subcontext.parse();
	},
	msgroomhelp: [`/msgroom [room], [command] - Runs the [command] in the given [room].`],

	r: 'reply',
	reply(target, room, user) {
		if (!target) return this.parse('/help reply');
		if (!user.lastPM) {
			return this.errorReply(this.tr`No one has PMed you yet.`);
		}
		return this.parse(`/msg ${user.lastPM || ''}, ${target}`);
	},
	replyhelp: [`/reply OR /r [message] - Send a message to the last user you got a message from, or sent a message to.`],

	pm: 'msg',
	whisper: 'msg',
	w: 'msg',
	msg(target, room, user, connection) {
		if (!target) return this.parse('/help msg');
		if (!target.includes(',')) {
			this.errorReply(this.tr`You forgot the comma.`);
			return this.parse('/help msg');
		}
		this.checkRecursion();

		const {targetUser, targetUsername, rest: message} = this.splitUser(target);
		if (targetUsername === '~') {
			this.pmTarget = null;
			this.room = null;
		} else if (!targetUser) {
			let error = this.tr`User ${targetUsername} not found. Did you misspell their name?`;
			error = `|pm|${this.user.getIdentity()}| ${targetUsername}|/error ${error}`;
			connection.send(error);
			return;
		} else {
			this.pmTarget = targetUser;
			this.room = null;
		}

		if (targetUser && !targetUser.connected) {
			return this.errorReply(this.tr`User ${targetUsername} is offline.`);
		}

		return this.parse(message);
	},
	msghelp: [`/msg OR /whisper OR /w [username], [message] - Send a private message.`],

	inv: 'invite',
	invite(target, room, user) {
		if (!target) return this.parse('/help invite');

		const pmTarget = this.pmTarget; // not room means it's a PM
		if (!pmTarget) {
			const {targetUser, rest: targetRoomid} = this.requireUser(target);
			const targetRoom = targetRoomid ? Rooms.search(targetRoomid) : room;
			if (!targetRoom) return this.errorReply(this.tr`The room "${targetRoomid}" was not found.`);
			return this.parse(`/pm ${targetUser.name}, /invite ${targetRoom.roomid}`);
		}

		const targetRoom = Rooms.search(target);
		if (!targetRoom) return this.errorReply(this.tr`The room "${target}" was not found.`);

		const invitesBlocked = pmTarget.settings.blockInvites;
		if (invitesBlocked) {
			if (invitesBlocked === true ? !user.can('lock') : !Users.globalAuth.atLeast(user, invitesBlocked as GroupSymbol)) {
				Chat.maybeNotifyBlocked('invite', pmTarget, user);
				return this.errorReply(`This user is currently blocking room invites.`);
			}
		}
		if (!targetRoom.checkModjoin(pmTarget)) {
			this.room = targetRoom;
			this.parse(`/roomvoice ${pmTarget.name}`);
			if (!targetRoom.checkModjoin(pmTarget)) {
				return this.errorReply(this.tr`You do not have permission to invite people into this room.`);
			}
		}
		if (pmTarget.id in targetRoom.users) {
			return this.errorReply(this.tr`This user is already in "${targetRoom.title}".`);
		}
		return this.checkChat(`/invite ${targetRoom.roomid}`);
	},
	invitehelp: [
		`/invite [username] - Invites the player [username] to join the room you sent the command to.`,
		`/invite [username], [roomname] - Invites the player [username] to join the room [roomname].`,
		`(in a PM) /invite [roomname] - Invites the player you're PMing to join the room [roomname].`,
	],

	blockpm: 'blockpms',
	ignorepms: 'blockpms',
	ignorepm: 'blockpms',
	blockpms(target, room, user) {
		target = target.toLowerCase().trim();
		if (target === 'ac') target = 'autoconfirmed';

		if (user.settings.blockPMs === (target || true)) {
			return this.errorReply(this.tr`You are already blocking private messages! To unblock, use /unblockpms`);
		}
		if (Users.Auth.isAuthLevel(target)) {
			user.settings.blockPMs = target;
			this.sendReply(this.tr`You are now blocking private messages, except from staff and ${target}.`);
		} else if (target === 'autoconfirmed' || target === 'trusted' || target === 'unlocked') {
			user.settings.blockPMs = target;
			target = this.tr(target);
			this.sendReply(this.tr`You are now blocking private messages, except from staff and ${target} users.`);
		} else {
			user.settings.blockPMs = true;
			this.sendReply(this.tr`You are now blocking private messages, except from staff.`);
		}
		user.update();
		return true;
	},
	blockpmshelp: [
		`/blockpms - Blocks private messages except from staff. Unblock them with /unblockpms.`,
		`/blockpms [unlocked/ac/trusted/+] - Blocks private messages except from staff and the specified group.`,
	],

	unblockpm: 'unblockpms',
	unignorepms: 'unblockpms',
	unignorepm: 'unblockpms',
	unblockpms(target, room, user) {
		if (!user.settings.blockPMs) {
			return this.errorReply(this.tr`You are not blocking private messages! To block, use /blockpms`);
		}
		user.settings.blockPMs = false;
		user.update();
		return this.sendReply(this.tr`You are no longer blocking private messages.`);
	},
	unblockpmshelp: [`/unblockpms - Unblocks private messages. Block them with /blockpms.`],

	unblockinvites: 'blockinvites',
	blockinvites(target, room, user, connection, cmd) {
		const unblock = cmd.includes('unblock');
		if (unblock) {
			if (!user.settings.blockInvites) {
				return this.errorReply(`You are not blocking room invites! To block, use /blockinvites.`);
			}
			user.settings.blockInvites = false;
			this.sendReply(`You are no longer blocking room invites.`);
		} else {
			if (toID(target) === 'ac') target = 'autoconfirmed';
			if (user.settings.blockInvites === (target || true)) {
				return this.errorReply("You are already blocking room invites - to unblock, use /unblockinvites");
			}
			if (target in Config.groups) {
				user.settings.blockInvites = target as GroupSymbol;
				this.sendReply(this.tr`You are now blocking room invites, except from staff and ${target}.`);
			} else if (target === 'autoconfirmed' || target === 'trusted' || target === 'unlocked') {
				user.settings.blockInvites = target;
				this.sendReply(this.tr`You are now blocking room invites, except from staff and ${target} users.`);
			} else {
				user.settings.blockInvites = true;
				this.sendReply(this.tr`You are now blocking room invites, except from staff.`);
			}
		}
		return user.update();
	},

	status(target, room, user, connection, cmd) {
		if (user.locked || user.semilocked) {
			return this.errorReply(this.tr`Your status cannot be updated while you are locked or semilocked.`);
		}
		if (!target) return this.parse('/help status');

		const maxLength = 52;
		if (target.length > maxLength) {
			return this.errorReply(this.tr`Your status is too long; it must be under ${maxLength} characters.`);
		}
		target = this.statusfilter(target);
		if (!target) return this.errorReply(this.tr`Your status contains a banned word.`);

		user.setUserMessage(target);
		this.sendReply(this.tr`Your status has been set to: ${target}.`);
	},
	statushelp: [
		`/status [note] - Sets a short note as your status, visible when users click your username.`,
		 `Use /clearstatus to clear your status message.`,
	],

	donotdisturb: 'busy',
	dnd: 'busy',
	busy(target, room, user, connection, cmd) {
		if (target) {
			this.errorReply(this.tr`Setting status messages in /busy is no longer supported. Set a status using /status.`);
		}
		user.setStatusType('busy');
		const isDND = ['dnd', 'donotdisturb'].includes(cmd);
		if (isDND) {
			this.parse('/blockpms +');
			this.parse('/blockchallenges');
			user.settings.doNotDisturb = true;
		}
		this.sendReply(this.tr`You are now marked as busy.`);
	},
	busyhelp: [
		`/busy OR /donotdisturb - Marks you as busy.`,
		`Use /donotdisturb to also block private messages and challenges.`,
		`Use /back to mark yourself as back.`,
	 ],

	idle: 'away',
	afk: 'away',
	brb: 'away',
	away(target, room, user, connection, cmd) {
		if (target) {
			this.errorReply(this.tr`Setting status messages in /away is no longer supported. Set a status using /status.`);
		}
		user.setStatusType('idle');
		this.sendReply(this.tr`You are now marked as away. Send a message or use /back to indicate you are back.`);
	},
	awayhelp: [`/away - Marks you as away. Send a message or use /back to indicate you are back.`],

	cs: 'clearstatus',
	clearstatus(target, room, user) {
		if (target) return this.parse(`/forceclearstatus ${target}`);

		if (!user.userMessage) return this.sendReply(this.tr`You don't have a status message set.`);
		user.setUserMessage('');

		return this.sendReply(this.tr`You have cleared your status message.`);
	},
	clearstatushelp: [
		`/clearstatus - Clears your status message.`,
		`/clearstatus user, reason - Clears another person's status message. Requires: % @ &`,
	],

	unaway: 'back',
	unafk: 'back',
	back(target, room, user) {
		if (user.statusType === 'online') return this.errorReply(this.tr`You are already marked as back.`);
		const statusType = user.statusType;
		user.setStatusType('online');

		if (user.settings.doNotDisturb) {
			this.parse('/unblockpms');
			this.parse('/unblockchallenges');
			user.settings.doNotDisturb = false;
		}

		if (statusType) {
			return this.sendReply(this.tr`You are no longer marked as busy.`);
		}

		return this.sendReply(this.tr`You have cleared your status message.`);
	},
	backhelp: [`/back - Marks you as back if you are away.`],

	async rank(target, room, user) {
		if (!target) target = user.name;

		const values = await Ladders.visualizeAll(target);
		let buffer = `<div class="ladder"><table>`;
		buffer += Utils.html`<tr><td colspan="8">User: <strong>${target}</strong></td></tr>`;

		const ratings = values.join(``);
		if (!ratings) {
			buffer += `<tr><td colspan="8"><em>${this.tr`This user has not played any ladder games yet.`}</em></td></tr>`;
		} else {
			buffer += `<tr><th>${this.tr`Format`}</th><th><abbr title="Elo rating">Elo</abbr></th><th>${this.tr`W`}</th><th>${this.tr`L`}</th><th>${this.tr`Total`}</th>`;
			buffer += ratings;
		}
		buffer += `</table></div>`;

		this.sendReply(`|raw|${buffer}`);
	},

	showrank: 'hiderank',
	hiderank(target, room, user, connection, cmd) {
		const userGroup = Users.Auth.getGroup(Users.globalAuth.get(user.id));
		if (!userGroup['hiderank'] || !user.registered) {
			return this.errorReply(`/hiderank - Access denied.`);
		}

		const isShow = cmd === 'showrank';
		const group = (isShow ? Users.globalAuth.get(user.id) : (target.trim() || Users.Auth.defaultSymbol()) as GroupSymbol);
		if (user.tempGroup === group) {
			return this.errorReply(this.tr`You already have the temporary symbol '${group}'.`);
		}
		if (!Users.Auth.isValidSymbol(group) || !(group in Config.groups) || group === Users.SECTIONLEADER_SYMBOL) {
			return this.errorReply(this.tr`You must specify a valid group symbol.`);
		}
		if (!isShow && Config.groups[group].rank > Config.groups[user.tempGroup].rank) {
			return this.errorReply(this.tr`You may only set a temporary symbol below your current rank.`);
		}
		user.tempGroup = group;
		user.updateIdentity();
		this.sendReply(`|c|~|${this.tr`Your temporary group symbol is now`} \`\`${user.tempGroup}\`\`.`);
	},
	showrankhelp: 'hiderankhelp',
	hiderankhelp: [
		`/hiderank [rank] - Displays your global rank as the given [rank].`,
		`/showrank - Displays your true global rank instead of the rank you're hidden as.`,
	],

	language(target, room, user) {
		if (!target) {
			const language = Chat.languages.get(user.language || 'english' as ID);
			return this.sendReply(this.tr`Currently, you're viewing Pokémon Showdown in ${language}.`);
		}
		const languageID = toID(target);
		if (!Chat.languages.has(languageID)) {
			const languages = [...Chat.languages.values()].join(', ');
			return this.errorReply(this.tr`Valid languages are: ${languages}`);
		}
		user.language = languageID;
		user.update();
		const language = Chat.languages.get(languageID);
		return this.sendReply(this.tr`Pokémon Showdown will now be displayed in ${language} (except in language rooms).`);
	},
	languagehelp: [
		`/language - View your current language setting.`,
		`/language [language] - Changes the language Pokémon Showdown will be displayed to you in.`,
		`Note that rooms can set their own language, which will override this setting.`,
	],

	updatesettings(target, room, user) {
		const settings: Partial<UserSettings> = {};
		try {
			const raw = JSON.parse(target);
			if (typeof raw !== 'object' || Array.isArray(raw) || !raw) {
				this.errorReply(this.tr`/updatesettings expects JSON encoded object.`);
			}
			if (typeof raw.language === 'string') this.parse(`/noreply /language ${raw.language}`);
			for (const setting in user.settings) {
				if (setting in raw) {
					if (setting === 'blockPMs' &&
						Users.Auth.isAuthLevel(raw[setting])) {
						settings[setting] = raw[setting];
					} else {
						settings[setting as keyof UserSettings] = !!raw[setting];
					}
				}
			}
			Object.assign(user.settings, settings);
			user.update();
		} catch {
			this.errorReply(this.tr`Unable to parse settings in /updatesettings!`);
		}
	},

	/*********************************************************
	 * Battle management commands
	 *********************************************************/

	allowexportinputlog(target, room, user) {
		room = this.requireRoom();
		const battle = room.battle;
		if (!battle) {
			return this.errorReply(this.tr`Must be in a battle.`);
		}
		const targetUser = Users.getExact(target);
		if (!targetUser) {
			return this.errorReply(this.tr`User ${target} not found.`);
		}
		if (!battle.playerTable[user.id]) {
			return this.errorReply(this.tr`Must be a player in this battle.`);
		}
		if (!battle.allowExtraction[targetUser.id]) {
			return this.errorReply(this.tr`${targetUser.name} has not requested extraction.`);
		}
		if (battle.allowExtraction[targetUser.id].has(user.id)) {
			return this.errorReply(this.tr`You have already consented to extraction with ${targetUser.name}.`);
		}
		battle.allowExtraction[targetUser.id].add(user.id);
		this.addModAction(room.tr`${user.name} consents to sharing battle team and choices with ${targetUser.name}.`);
		if (!battle.inputLog) return this.errorReply(this.tr`No input log found.`);
		if (Object.keys(battle.playerTable).length === battle.allowExtraction[targetUser.id].size) {
			this.addModAction(room.tr`${targetUser.name} has extracted the battle input log.`);
			const inputLog = battle.inputLog.map(Utils.escapeHTML).join(`<br />`);
			targetUser.sendTo(
				room,
				`|html|<div class="chat"><code style="white-space: pre-wrap; overflow-wrap: break-word; display: block">${inputLog}</code></div>`,
			);
		}
	},

	requestinputlog: 'exportinputlog',
	exportinputlog(target, room, user) {
		room = this.requireRoom();
		const battle = room.battle;
		if (!battle) {
			return this.errorReply(this.tr`This command only works in battle rooms.`);
		}
		if (!battle.inputLog) {
			this.errorReply(this.tr`This command only works when the battle has ended - if the battle has stalled, use /offertie.`);
			if (user.can('forcewin')) this.errorReply(this.tr`Alternatively, you can end the battle with /forcetie.`);
			return;
		}
		this.checkCan('exportinputlog', null, room);
		if (user.can('forcewin')) {
			if (!battle.inputLog) return this.errorReply(this.tr`No input log found.`);
			this.addModAction(room.tr`${user.name} has extracted the battle input log.`);
			const inputLog = battle.inputLog.map(Utils.escapeHTML).join(`<br />`);
			user.sendTo(
				room,
				`|html|<div class="chat"><code style="white-space: pre-wrap; overflow-wrap: break-word; display: block">${inputLog}</code></div>`,
			);
		} else if (!battle.allowExtraction[user.id]) {
			battle.allowExtraction[user.id] = new Set();
			for (const player of battle.players) {
				const playerUser = player.getUser();
				if (!playerUser) continue;
				if (playerUser.id === user.id) {
					battle.allowExtraction[user.id].add(user.id);
				} else {
					playerUser.sendTo(
						room,
						Utils.html`|html|${user.name} wants to extract the battle input log. <button name="send" value="/allowexportinputlog ${user.id}">Share your team and choices with "${user.name}"</button>`
					);
				}
			}
			this.addModAction(room.tr`${user.name} wants to extract the battle input log.`);
		} else {
			// Re-request to make the buttons appear again for users who have not allowed extraction
			let logExported = true;
			for (const player of battle.players) {
				const playerUser = player.getUser();
				if (!playerUser || battle.allowExtraction[user.id].has(playerUser.id)) continue;
				logExported = false;
				playerUser.sendTo(
					room,
					Utils.html`|html|${user.name} wants to extract the battle input log. <button name="send" value="/allowexportinputlog ${user.id}">Share your team and choices with "${user.name}"</button>`
				);
			}
			if (logExported) return this.errorReply(this.tr`You already extracted the battle input log.`);
			this.sendReply(this.tr`Battle input log re-requested.`);
		}
	},
	exportinputloghelp: [`/exportinputlog - Asks players in a battle for permission to export an inputlog. Requires: &`],

	importinputlog(target, room, user, connection) {
		this.checkCan('importinputlog');
		const formatIndex = target.indexOf(`"formatid":"`);
		const nextQuoteIndex = target.indexOf(`"`, formatIndex + 12);
		if (formatIndex < 0 || nextQuoteIndex < 0) return this.errorReply(this.tr`Invalid input log.`);
		target = target.replace(/\r/g, '');
		if ((`\n` + target).includes(`\n>eval `) && !user.hasConsoleAccess(connection)) {
			return this.errorReply(this.tr`Your input log contains untrusted code - you must have console access to use it.`);
		}

		const formatid = target.slice(formatIndex + 12, nextQuoteIndex);
		const battleRoom = Rooms.createBattle({format: formatid, inputLog: target});
		if (!battleRoom) return; // createBattle will inform the user if creating the battle failed

		const nameIndex1 = target.indexOf(`"name":"`);
		const nameNextQuoteIndex1 = target.indexOf(`"`, nameIndex1 + 8);
		const nameIndex2 = target.indexOf(`"name":"`, nameNextQuoteIndex1 + 1);
		const nameNextQuoteIndex2 = target.indexOf(`"`, nameIndex2 + 8);
		if (nameIndex1 >= 0 && nameNextQuoteIndex1 >= 0 && nameIndex2 >= 0 && nameNextQuoteIndex2 >= 0) {
			const battle = battleRoom.battle!;
			battle.p1.name = target.slice(nameIndex1 + 8, nameNextQuoteIndex1);
			battle.p2.name = target.slice(nameIndex2 + 8, nameNextQuoteIndex2);
		}
		battleRoom.auth.set(user.id, Users.HOST_SYMBOL);
		for (const player of battleRoom.battle!.players) {
			player.hasTeam = true;
		}
		this.parse(`/join ${battleRoom.roomid}`);
		setTimeout(() => {
			// timer to make sure this goes under the battle
			battleRoom.add(`|uhtmlchange|invites|<div class="broadcast broadcast-blue"><strong>This is an imported replay</strong><br />Players will need to be manually added with <code>/invitebattle</code> or <code>/restoreplayers</code></div>`);
			battleRoom.add(`|uhtml|invites|`).update();
			battleRoom.battle!.sendInviteForm(user);
		}, 500);
	},
	importinputloghelp: [`/importinputlog [inputlog] - Starts a battle with a given inputlog. Requires: + % @ &`],

	showteam: 'showset',
	async showset(target, room, user, connection, cmd) {
		this.checkChat();
		const showAll = cmd === 'showteam';
		const hideStats = toID(target) === 'hidestats';
		room = this.requireRoom();
		const battle = room.battle;
		if (!showAll && !target) return this.parse(`/help showset`);
		if (!battle) return this.errorReply(this.tr`This command can only be used in a battle.`);
		let team = await battle.getTeam(user);
		if (!team) return this.errorReply(this.tr`You are not a player and don't have a team.`);

		if (!showAll) {
			const parsed = parseInt(target);
			if (isNaN(parsed)) {
				const matchedSet = team.filter(set => {
					const id = toID(target);
					return toID(set.name) === id || toID(set.species) === id;
				})[0];
				if (!matchedSet) return this.errorReply(this.tr`You don't have a Pokémon matching "${target}" in your team.`);
				team = [matchedSet];
			} else {
				const setIndex = parsed - 1;
				const indexedSet = team[setIndex];
				if (!indexedSet) {
					return this.errorReply(this.tr`You don't have a Pokémon #${parsed} on your team - your team only has ${team.length} Pokémon.`);
				}
				team = [indexedSet];
			}
		}

		let resultString = Utils.escapeHTML(Teams.export(team, {hideStats}));
		if (showAll) {
			resultString = `<details><summary>${this.tr`View team`}</summary>${resultString}</details>`;
		}
		this.runBroadcast(true);
		return this.sendReplyBox(resultString);
	},
	showsethelp: [
		`!showteam - show the team you're using in the current battle (must be used in a battle you're a player in).`,
		`!showteam hidestats - show the team you're using in the current battle, without displaying any stat-related information.`,
		`!showset [number] - shows the set of the pokemon corresponding to that number (in original Team Preview order, not necessarily current order)`,
	],
	async showbothteams(target, room, user, connection, cmd) {
		this.checkCan('revealhiddeninfo');
		const hideStats = false;
		room = this.requireRoom();
		const battle = room.battle;
		if (!battle) return this.errorReply(this.tr`This command can only be used in a battle.`);
		let resultsString = '';
		let teamsFound = 0;
		for (let player of battle.players) {
			const playerName = player.getUser();
			if (playerName) {
				const team = await battle.getTeam(playerName);
				if (team) {
					const teamString = Utils.escapeHTML(Teams.export(team, {hideStats}));
					resultsString = resultsString.concat(
						`<details><summary>${this.tr`${playerName}'s team:`}</summary>${teamString}</details>`
					);
					teamsFound += 1;
				}
			}
		}
		if (teamsFound !== battle.players.length) return this.errorReply(this.tr`Could not find a team for each player.`);
		this.runBroadcast(true);
		return this.sendReplyBox(resultsString);
	},
	showbothteamshelp: [`/showbothteams - Shows each player's team. Requires: = &`],

	acceptdraw: 'offertie',
	accepttie: 'offertie',
	offerdraw: 'offertie',
	requesttie: 'offertie',
	offertie(target, room, user, connection, cmd) {
		room = this.requireRoom();
		const battle = room.battle;
		if (!battle) return this.errorReply(this.tr`Must be in a battle room.`);
		if (!Config.allowrequestingties) {
			return this.errorReply(this.tr`This server does not allow offering ties.`);
		}
		if (room.tour) {
			return this.errorReply(this.tr`You can't offer ties in tournaments.`);
		}
		if (battle.turn < 100) {
			return this.errorReply(this.tr`It's too early to tie, please play until turn 100.`);
		}
		this.checkCan('roomvoice', null, room);
		if (cmd === 'accepttie' && !battle.players.some(player => player.wantsTie)) {
			return this.errorReply(this.tr`No other player is requesting a tie right now. It was probably canceled.`);
		}
		const player = battle.playerTable[user.id];
		if (!battle.players.some(curPlayer => curPlayer.wantsTie)) {
			this.add(this.tr`${user.name} is offering a tie.`);
			room.update();
			for (const otherPlayer of battle.players) {
				if (otherPlayer !== player) {
					otherPlayer.sendRoom(
						Utils.html`|uhtml|offertie|<button class="button" name="send" value="/accepttie"><strong>${this.tr`Accept tie`}</strong></button> <button class="button" name="send" value="/rejecttie">${this.tr`Reject`}</button>`
					);
				} else {
					player.wantsTie = true;
				}
			}
		} else {
			if (!player) {
				return this.errorReply(this.tr`Must be a player to accept ties.`);
			}
			if (!player.wantsTie) {
				player.wantsTie = true;
			} else {
				return this.errorReply(this.tr`You have already agreed to a tie.`);
			}
			player.sendRoom(Utils.html`|uhtmlchange|offertie|`);
			this.add(this.tr`${user.name} accepted the tie.`);
			if (battle.players.every(curPlayer => curPlayer.wantsTie)) {
				if (battle.players.length > 2) {
					this.add(this.tr`All players have accepted the tie.`);
				}
				battle.tie();
			}
		}
	},
	offertiehelp: [`/offertie - Offers a tie to all players in a battle; if all accept, it ties. Can only be used after 100+ turns have passed. Requires: \u2606 @ # &`],

	rejectdraw: 'rejecttie',
	rejecttie(target, room, user) {
		room = this.requireRoom();
		const battle = room.battle;
		if (!battle) return this.errorReply(this.tr`Must be in a battle room.`);
		const player = battle.playerTable[user.id];
		if (!player) {
			return this.errorReply(this.tr`Must be a player to reject ties.`);
		}
		if (!battle.players.some(curPlayer => curPlayer.wantsTie)) {
			return this.errorReply(this.tr`No other player is requesting a tie right now. It was probably canceled.`);
		}
		if (player.wantsTie) player.wantsTie = false;
		for (const otherPlayer of battle.players) {
			otherPlayer.sendRoom(Utils.html`|uhtmlchange|offertie|`);
		}
		return this.add(this.tr`${user.name} rejected the tie.`);
	},
	rejecttiehelp: [`/rejecttie - Rejects a tie offered by another player in a battle.`],

	inputlog() {
		this.parse(`/help exportinputlog`);
		this.parse(`/help importinputlog`);
	},

	/*********************************************************
	 * Battle commands
	 *********************************************************/

	forfeit(target, room, user) {
		room = this.requireRoom();
		if (!room.game) return this.errorReply(this.tr`This room doesn't have an active game.`);
		if (!room.game.forfeit) {
			return this.errorReply(this.tr`This kind of game can't be forfeited.`);
		}
		room.game.forfeit(user);
	},

	guess: 'choose',
	choose(target, room, user) {
		room = this.requireRoom();
		if (!room.game) return this.errorReply(this.tr`This room doesn't have an active game.`);
		if (!room.game.choose) return this.errorReply(this.tr`This game doesn't support /choose`);
		if (room.game.checkChat) this.checkChat();
		room.game.choose(user, target);
	},
	choosehelp: [
		`/choose [text] - Make a choice for the currently active game.`,
	],

	mv: 'move',
	attack: 'move',
	move(target, room, user) {
		this.parse(`/choose move ${target}`);
	},

	sw: 'switch',
	switch(target, room, user) {
		this.parse(`/choose switch ${target}`);
	},

	team(target, room, user) {
		this.parse(`/choose team ${target}`);
	},

	undo(target, room, user) {
		room = this.requireRoom();
		if (!room.game) return this.errorReply(this.tr`This room doesn't have an active game.`);
		if (!room.game.undo) return this.errorReply(this.tr`This game doesn't support /undo`);

		room.game.undo(user, target);
	},

	uploadreplay: 'savereplay',
	async savereplay(target, room, user, connection) {
		if (!room?.battle) {
			return this.errorReply(this.tr`You can only save replays for battles.`);
		}

		const options = (target === 'forpunishment' || target === 'silent') ? target : undefined;
		await room.uploadReplay(user, connection, options);
	},

	hidereplay(target, room, user, connection) {
		if (!room?.battle) return this.errorReply(`Must be used in a battle.`);
		this.checkCan('joinbattle', null, room);
		if (room.tour?.forcePublic) {
			return this.errorReply(this.tr`This battle can't have hidden replays, because the tournament is set to be forced public.`);
		}
		if (room.hideReplay) return this.errorReply(this.tr`The replay for this battle is already set to hidden.`);
		room.hideReplay = true;
		// If a replay has already been saved, /savereplay again to update the uploaded replay's hidden status
		if (room.battle.replaySaved) this.parse('/savereplay');
		this.addModAction(room.tr`${user.name} hid the replay of this battle.`);
	},

	addplayer: 'invitebattle',
	invitebattle(target, room, user, connection) {
		room = this.requireRoom();
		if (!room.battle) return this.errorReply(this.tr`You can only do this in battle rooms.`);
		if (room.rated) return this.errorReply(this.tr`You can only add a Player to unrated battles.`);

		this.checkCan('joinbattle', null, room);

		const {targetUser, targetUsername: name, rest: slot} = this.splitUser(target, {exactName: true});
		if (slot !== 'p1' && slot !== 'p2' && slot !== 'p3' && slot !== 'p4') {
			this.errorReply(this.tr`Player must be set to "p1" or "p2", not "${slot}".`);
			return this.parse('/help addplayer');
		}

		const battle = room.battle;
		const player = battle[slot];

		if (!player) {
			return this.errorReply(`This battle does not support having players in ${slot}`);
		}
		if (!targetUser) {
			battle.sendInviteForm(connection);
			return this.errorReply(this.tr`User ${name} not found.`);
		}
		if (player.id) {
			battle.sendInviteForm(connection);
			return this.errorReply(this.tr`This room already has a player in slot ${slot}.`);
		}
		if (player.invite) {
			battle.sendInviteForm(connection);
			return this.errorReply(`Someone else (${player.invite}) has already been invited to be ${slot}!`);
		}
		if (targetUser.id in battle.playerTable) {
			battle.sendInviteForm(connection);
			return this.errorReply(this.tr`${targetUser.name} is already a player in this battle.`);
		}

		if (targetUser.settings.blockChallenges && !user.can('bypassblocks', targetUser)) {
			battle.sendInviteForm(connection);
			Chat.maybeNotifyBlocked('challenge', targetUser, user);
			return this.errorReply(this.tr`The user '${targetUser.name}' is not accepting challenges right now.`);
		}

		// INVITE

		if (!targetUser.inRooms.has(room.roomid) || !player.hasTeam) {
			player.invite = targetUser.id;
			const playerNames = battle.players.map(p => p.id && p.name).filter(Boolean).join(', ');
			const ready = player.hasTeam ? battle.format : new Ladders.BattleReady(user.id, battle.format, user.battleSettings);
			Ladders.challenges.add(
				new Ladders.BattleInvite(user.id, targetUser.id, ready, {
					acceptCommand: `/acceptbattle ${user.id}`,
					message: `You're invited to join a battle (with ${playerNames})`,
					roomid: room.roomid,
				})
			);
			battle.sendInviteForm(battle.invitesFull() ? true : connection);
			return this.add(`||Invite sent to ${targetUser.name}!`);
		}

		room.auth.set(targetUser.id, Users.PLAYER_SYMBOL);
		const success = battle.joinGame(targetUser, slot);
		if (!success) {
			room.auth.delete(targetUser.id);
			return;
		}
		if (!battle.started) battle.sendInviteForm(connection);
	},

	async acceptbattle(target, room, user, connection) {
		const chall = Ladders.challenges.resolveAcceptCommand(this);

		const targetRoom = Rooms.get(chall.roomid);
		if (!targetRoom) return this.errorReply(`Room ${chall.roomid} not found`);
		const battle = targetRoom.battle!;
		const player = battle.players.find(maybe => maybe.invite === user.id);
		if (!player) {
			return this.errorReply(`You haven't been invited to that battle.`);
		}
		const slot = player.slot;
		if (player.id) {
			throw new Error(`Player ${player.slot} in ${chall.roomid} should not have both 'id' and 'invite'`);
		}

		let playerOpts = undefined;
		if (!player.hasTeam) {
			const ladder = Ladders(battle.format);
			const ready = await ladder.prepBattle(connection, 'challenge');
			if (!ready) return;
			playerOpts = ready.settings;
		}

		const fromUser = Ladders.challenges.accept(this);

		this.pmTarget = fromUser;
		this.sendChatMessage(`/text You accepted the battle invite`);
		this.parse(`/join ${targetRoom.roomid}`);
		battle.joinGame(user, slot, playerOpts);
	},

	uninvitebattle(target, room, user, connection) {
		room = this.requireRoom();
		this.checkCan('joinbattle', null, room);

		if (!room.battle) return this.errorReply(this.tr`You can only do this in battle rooms.`);
		const invitesFull = room.battle.invitesFull();
		const challenges = Ladders.challenges.get(target as ID);

		if (!challenges) throw new Chat.ErrorMessage(`User ${target} is not currently invited to the battle`);
		for (const challenge of challenges) {
			if (challenge.to === target && challenge.roomid === room.roomid) {
				Ladders.challenges.remove(challenge);
				Ladders.challenges.send(challenge.from, target, `/text The battle invite was changed to someone else; sorry!`);
			}
		}

		room.battle.sendInviteForm(invitesFull ? true : connection);
	},

	restoreplayers(target, room, user) {
		room = this.requireRoom();
		if (!room.battle) return this.errorReply(this.tr`You can only do this in battle rooms.`);
		if (room.rated) return this.errorReply(this.tr`You can only add a Player to unrated battles.`);

		let didSomething = false;
		for (const player of room.battle.players) {
			if (!player.id && player.name !== `Player ${player.num}`) {
				this.parse(`/invitebattle ${player.name}, ${player.slot}`);
				didSomething = true;
			}
		}

		if (!didSomething) {
			return this.errorReply(this.tr`Players could not be restored (maybe this battle already has two players?).`);
		}
	},
	restoreplayershelp: [
		`/restoreplayers - Restore previous players in an imported input log.`,
	],

	joinbattle: 'joingame',
	joingame(target, room, user) {
		room = this.requireRoom();
		if (!room.game) return this.errorReply(this.tr`This room doesn't have an active game.`);
		if (!room.game.joinGame) return this.errorReply(this.tr`This game doesn't support /joingame`);

		room.game.joinGame(user, target);
	},

	leavebattle: 'leavegame',
	partbattle: 'leavegame',
	leavegame(target, room, user) {
		room = this.requireRoom();
		if (!room.game) return this.errorReply(this.tr`This room doesn't have an active game.`);
		if (!room.game.leaveGame) return this.errorReply(this.tr`This game doesn't support /leavegame`);

		room.game.leaveGame(user);
	},

	kickbattle: 'kickgame',
	kickgame(target, room, user) {
		room = this.requireRoom();
		if (!room.battle) return this.errorReply(this.tr`You can only do this in battle rooms.`);
		if (room.battle.challengeType === 'tour' || room.battle.rated) {
			return this.errorReply(this.tr`You can only do this in unrated non-tour battles.`);
		}
		const {targetUser, rest: reason} = this.requireUser(target, {allowOffline: true});
		this.checkCan('kick', targetUser, room);
		if (room.battle.leaveGame(targetUser)) {
			const displayReason = reason ? ` (${reason})` : ``;
			this.addModAction(room.tr`${targetUser.name} was kicked from a battle by ${user.name}.${displayReason}`);
			this.modlog('KICKBATTLE', targetUser, reason, {noip: 1, noalts: 1});
		} else {
			this.errorReply("/kickbattle - User isn't in battle.");
		}
	},
	kickbattlehelp: [`/kickbattle [username], [reason] - Kicks a user from a battle with reason. Requires: % @ &`],

	kickinactive(target, room, user) {
		this.parse(`/timer on`);
	},

	timer(target, room, user) {
		target = toID(target);
		room = this.requireRoom();
		if (!room.game?.timer) {
			return this.errorReply(this.tr`You can only set the timer from inside a battle room.`);
		}
		const timer = room.game.timer as any;
		if (!timer.timerRequesters) {
			return this.sendReply(this.tr`This game's timer is managed by a different command.`);
		}
		if (!target) {
			if (!timer.timerRequesters.size) {
				return this.sendReply(this.tr`The game timer is OFF.`);
			}
			const requester = [...timer.timerRequesters].join(', ');
			return this.sendReply(this.tr`The game timer is ON (requested by ${requester})`);
		}
		const force = user.can('timer', null, room);
		if (!force && !room.game.playerTable[user.id]) {
			return this.errorReply(this.tr`Access denied.`);
		}
		if (this.meansNo(target) || target === 'stop') {
			if (timer.timerRequesters.size) {
				timer.stop(force ? undefined : user);
				if (force) {
					room.send(`|inactiveoff|${room.tr`Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.`}`);
				}
			} else {
				this.errorReply(this.tr`The timer is already off.`);
			}
		} else if (this.meansYes(target) || target === 'start') {
			timer.start(user);
		} else {
			this.errorReply(this.tr`"${target}" is not a recognized timer state.`);
		}
	},

	autotimer: 'forcetimer',
	forcetimer(target, room, user) {
		room = this.requireRoom();
		target = toID(target);
		this.checkCan('autotimer');
		if (this.meansNo(target) || target === 'stop') {
			Config.forcetimer = false;
			this.addModAction(room.tr`Forcetimer is now OFF: The timer is now opt-in. (set by ${user.name})`);
		} else if (this.meansYes(target) || target === 'start' || !target) {
			Config.forcetimer = true;
			this.addModAction(room.tr`Forcetimer is now ON: All battles will be timed. (set by ${user.name})`);
		} else {
			this.errorReply(this.tr`'${target}' is not a recognized forcetimer setting.`);
		}
	},

	forcetie: 'forcewin',
	forcewin(target, room, user) {
		room = this.requireRoom();
		this.checkCan('forcewin');
		if (!room.battle) {
			this.errorReply("/forcewin - This is not a battle room.");
			return false;
		}

		room.battle.endType = 'forced';
		if (!target) {
			room.battle.tie();
			this.modlog('FORCETIE');
			return false;
		}
		const targetUser = Users.getExact(target);
		if (!targetUser) return this.errorReply(this.tr`User '${target}' not found.`);

		room.battle.win(targetUser);
		this.modlog('FORCEWIN', targetUser.id);
	},
	forcewinhelp: [
		`/forcetie - Forces the current match to end in a tie. Requires: &`,
		`/forcewin [user] - Forces the current match to end in a win for a user. Requires: &`,
	],

	/*********************************************************
	 * Challenging and searching commands
	 *********************************************************/

	async search(target, room, user, connection) {
		if (target) {
			if (Config.laddermodchat && !Users.globalAuth.atLeast(user, Config.laddermodchat)) {
				const groupName = Config.groups[Config.laddermodchat].name || Config.laddermodchat;
				this.popupReply(this.tr`This server requires you to be rank ${groupName} or higher to search for a battle.`);
				return false;
			}
			const ladder = Ladders(target);
			if (!user.registered && Config.forceregisterelo && await ladder.getRating(user.id) >= Config.forceregisterelo) {
				user.send(
					Utils.html`|popup||html|${this.tr`Since you have reached ${Config.forceregisterelo} ELO in ${target}, you must register your account to continue playing that format on ladder.`}<p style="text-align: center"><button name="register" value="${user.id}"><b>${this.tr`Register`}</b></button></p>`
				);
				return false;
			}
			return ladder.searchBattle(user, connection);
		}
		return Ladders.cancelSearches(user);
	},

	cancelsearch(target, room, user) {
		if (target) {
			Ladders(toID(target)).cancelSearch(user);
		} else {
			Ladders.cancelSearches(user);
		}
	},

	chall: 'challenge',
	challenge(target, room, user, connection) {
		const {targetUser, targetUsername, rest: formatName} = this.splitUser(target);
		if (!targetUser?.connected) {
			return this.popupReply(this.tr`The user '${targetUsername}' was not found.`);
		}
		if (user.locked && !targetUser.locked) {
			return this.popupReply(this.tr`You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.`);
		}
		if (Punishments.isBattleBanned(user)) {
			return this.popupReply(this.tr`You are banned from battling and cannot challenge users.`);
		}
		if (!user.named) {
			return this.popupReply(this.tr`You must choose a username before you challenge someone.`);
		}
		if (Config.pmmodchat && !user.hasSysopAccess() && !Users.globalAuth.atLeast(user, Config.pmmodchat as GroupSymbol)) {
			const groupName = Config.groups[Config.pmmodchat].name || Config.pmmodchat;
			this.popupReply(this.tr`This server requires you to be rank ${groupName} or higher to challenge users.`);
			return false;
		}
		return Ladders(formatName).makeChallenge(connection, targetUser);
	},

	bch: 'blockchallenges',
	blockchall: 'blockchallenges',
	blockchalls: 'blockchallenges',
	blockchallenges(target, room, user) {
		if (toID(target) === 'ac') target = 'autoconfirmed';
		if (user.settings.blockChallenges === (target || true)) {
			return this.errorReply(this.tr`You are already blocking challenges!`);
		}
		if (Users.Auth.isAuthLevel(target)) {
			user.settings.blockChallenges = target;
			this.sendReply(this.tr`You are now blocking challenges, except from staff and ${target}.`);
		} else if (target === 'autoconfirmed' || target === 'trusted' || target === 'unlocked') {
			user.settings.blockChallenges = target;
			target = this.tr(target);
			this.sendReply(this.tr`You are now blocking challenges, except from staff and ${target} users.`);
		} else {
			user.settings.blockChallenges = true;
			this.sendReply(this.tr`You are now blocking all incoming challenge requests.`);
		}
		user.update();
	},
	blockchallengeshelp: [
		`/blockchallenges - Blocks challenges so no one can challenge you. Unblock them with /unblockchallenges.`,
	],

	unbch: 'allowchallenges',
	unblockchall: 'allowchallenges',
	unblockchalls: 'allowchallenges',
	unblockchallenges: 'allowchallenges',
	allowchallenges(target, room, user) {
		if (!user.settings.blockChallenges) return this.errorReply(this.tr`You are already available for challenges!`);
		user.settings.blockChallenges = false;
		user.update();
		this.sendReply(this.tr`You are available for challenges from now on.`);
	},
	allowchallengeshelp: [
		`/unblockchallenges - Unblocks challenges so you can be challenged again. Block them with /blockchallenges.`,
	],
	cchall: 'cancelchallenge',
	cancelchallenge(target, room, user, connection) {
		const {targetUser, targetUsername, rest} = this.splitUser(target);
		if (rest) return this.popupReply(this.tr`This command does not support specifying multiple users`);
		this.pmTarget = targetUser || this.pmTarget;
		if (!this.pmTarget) return this.popupReply(this.tr`User "${targetUsername}" not found.`);

		const chall = Ladders.challenges.search(user.id, this.pmTarget.id);
		if (!chall || chall.from !== user.id) {
			connection.popup(`You are not challenging ${this.pmTarget.name}. Maybe they accepted/rejected before you cancelled?`);
			return false;
		}

		this.sendChatMessage(`/text ${user.name} cancelled the challenge.`);
		return Ladders.challenges.remove(chall);
	},

	async accept(target, room, user, connection) {
		const {targetUser, targetUsername, rest} = this.splitUser(target);
		if (rest) return this.popupReply(this.tr`This command does not support specifying multiple users`);
		this.pmTarget = targetUser || this.pmTarget;
		if (!this.pmTarget) return this.popupReply(this.tr`User "${targetUsername}" not found.`);

		const chall = Ladders.challenges.search(user.id, this.pmTarget.id);
		if (!chall || chall.to !== user.id) {
			connection.popup(`${this.pmTarget.id} is not challenging you. Maybe they cancelled before you accepted?`);
			return false;
		}

		if (chall.acceptCommand) {
			return this.parse(chall.acceptCommand);
		}
		const gameRoom = await Ladders.acceptChallenge(connection, chall as Ladders.BattleChallenge);
		if (!gameRoom) return false;
		this.sendChatMessage(Utils.html`/nonotify ${user.name} accepted the challenge, starting &laquo;<a href="/${gameRoom.roomid}">${gameRoom.roomid}</a>&raquo;`);
		return true;
	},

	reject(target, room, user, connection) {
		const {targetUser, targetUsername, rest} = this.splitUser(target);
		if (rest) return this.popupReply(this.tr`This command does not support specifying multiple users`);
		this.pmTarget = targetUser || this.pmTarget;
		if (!this.pmTarget) return this.popupReply(this.tr`User "${targetUsername}" not found.`);

		const chall = Ladders.challenges.search(user.id, this.pmTarget.id);
		if (!chall || chall.to !== user.id) {
			connection.popup(`${this.pmTarget.id} is not challenging you. Maybe they cancelled before you rejected?`);
			return false;
		}

		this.sendChatMessage(`/text ${user.name} rejected the challenge.`);
		return Ladders.challenges.remove(chall, false);
	},

	saveteam: 'useteam',
	utm: 'useteam',
	useteam(target, room, user) {
		user.battleSettings.team = target;
	},

	vtm(target, room, user, connection) {
		if (Monitor.countPrepBattle(connection.ip, connection)) {
			return;
		}
		if (!target) return this.errorReply(this.tr`Provide a valid format.`);
		const originalFormat = Dex.formats.get(target);
		// Note: The default here of [Gen 8] Anything Goes isn't normally hit; since the web client will send a default format
		const format = originalFormat.effectType === 'Format' ? originalFormat : Dex.formats.get(
			'[Gen 8] Anything Goes'
		);
		if (format.effectType !== this.tr`Format`) return this.popupReply(this.tr`Please provide a valid format.`);

		return TeamValidatorAsync.get(format.id).validateTeam(user.battleSettings.team).then(result => {
			const matchMessage = (originalFormat === format ? "" : this.tr`The format '${originalFormat.name}' was not found.`);
			if (result.startsWith('1')) {
				connection.popup(`${(matchMessage ? matchMessage + "\n\n" : "")}${this.tr`Your team is valid for ${format.name}.`}`);
			} else {
				connection.popup(`${(matchMessage ? matchMessage + "\n\n" : "")}${this.tr`Your team was rejected for the following reasons:`}\n\n- ${result.slice(1).replace(/\n/g, '\n- ')}`);
			}
		});
	},

	hbtc: 'hidebattlesfromtrainercard',
	sbtc: 'hidebattlesfromtrainercard',
	showbattlesinusercard: 'hidebattlesfromtrainercard',
	hidebattlesfromusercard: 'hidebattlesfromtrainercard',
	showbattlesintrainercard: 'hidebattlesfromtrainercard',
	hidebattlesfromtrainercard(target, room, user, connection, cmd) {
		const shouldHide = cmd.includes('hide') || cmd === 'hbtc';
		user.settings.hideBattlesFromTrainerCard = shouldHide;
		user.update();
		if (shouldHide) {
			this.sendReply(this.tr`Battles are now hidden (except to staff) in your trainer card.`);
		} else {
			this.sendReply(this.tr`Battles are now visible in your trainer card.`);
		}
	},
	hidebattlesfromtrainercardhelp: [
		`/hidebattlesfromtrainercard OR /hbtc - Hides your battles in your trainer card.`,
		`/showbattlesintrainercard OR /sbtc - Displays your battles in your trainer card.`,
	],

	/*********************************************************
	 * Low-level
	 *********************************************************/

	cmd: 'crq',
	query: 'crq',
	async crq(target, room, user, connection) {
		// In emergency mode, clamp down on data returned from crq's
		const trustable = (!Config.emergency || (user.named && user.registered));
		let cmd;
		[cmd, target] = Utils.splitFirst(target, ' ');

		const handler = Chat.crqHandlers[cmd];
		if (!handler) return connection.send(`|queryresponse|${cmd}|null`);
		let data = handler.call(this, target, user, trustable);
		if (data && data.then) data = await data;
		connection.send(`|queryresponse|${cmd}|${JSON.stringify(data)}`);
	},

	trn(target, room, user, connection) {
		if (target === user.name) return false;

		const [name, registeredString, token] = Utils.splitFirst(target, ',', 2);
		const registered = !!parseInt(registeredString);

		return user.rename(name, token || '', registered, connection);
	},

	/*********************************************************
	 * Help commands
	 *********************************************************/

	commands: 'help',
	h: 'help',
	'?': 'help',
	man: 'help',
	help(target, room, user) {
		if (!this.runBroadcast()) return;
		target = target.toLowerCase();
		if (target.startsWith('/') || target.startsWith('!')) target = target.slice(1);

		if (!target) {
			const broadcastMsg = this.tr`(replace / with ! to broadcast. Broadcasting requires: + % @ # &)`;

			this.sendReply(`${this.tr`COMMANDS`}: /msg, /reply, /logout, /challenge, /search, /rating, /whois, /user, /report, /join, /leave, /userauth, /roomauth`);
			this.sendReply(`${this.tr`BATTLE ROOM COMMANDS`}: /savereplay, /hideroom, /inviteonly, /invite, /timer, /forfeit`);
			this.sendReply(`${this.tr`OPTION COMMANDS`}: /nick, /avatar, /ignore, /status, /away, /busy, /back, /timestamps, /highlight, /showjoins, /hidejoins, /blockchallenges, /blockpms`);
			this.sendReply(`${this.tr`INFORMATIONAL/RESOURCE COMMANDS`}: /groups, /faq, /rules, /intro, /formatshelp, /othermetas, /analysis, /punishments, /calc, /git, /cap, /roomhelp, /roomfaq ${broadcastMsg}`);
			this.sendReply(`${this.tr`DATA COMMANDS`}: /data, /dexsearch, /movesearch, /itemsearch, /learn, /statcalc, /effectiveness, /weakness, /coverage, /randommove, /randompokemon ${broadcastMsg}`);
			if (user.tempGroup !== Users.Auth.defaultSymbol()) {
				this.sendReply(`${this.tr`DRIVER COMMANDS`}: /warn, /mute, /hourmute, /unmute, /alts, /forcerename, /modlog, /modnote, /modchat, /lock, /weeklock, /unlock, /announce`);
				this.sendReply(`${this.tr`MODERATOR COMMANDS`}: /globalban, /unglobalban, /ip, /markshared, /unlockip`);
				this.sendReply(`${this.tr`ADMIN COMMANDS`}: /declare, /forcetie, /forcewin, /promote, /demote, /banip, /host, /ipsearch`);
			}
			this.sendReply(this.tr`For an overview of room commands, use /roomhelp`);
			this.sendReply(this.tr`For details of a specific command, use something like: /help data`);
			return;
		}

		const cmds = target.split(' ');

		let namespace = Chat.commands;

		let currentBestHelp: {help: string[] | Chat.AnnotatedChatHandler, for: string[]} | null = null;

		for (const [i, cmd] of cmds.entries()) {
			let nextNamespace = namespace[cmd];
			if (typeof nextNamespace === 'string') {
				const help = namespace[`${nextNamespace}help`];
				if (Array.isArray(help) || typeof help === 'function') {
					currentBestHelp = {
						help, for: cmds.slice(0, i + 1),
					};
				}
				nextNamespace = namespace[nextNamespace];
			}
			if (typeof nextNamespace === 'string') {
				throw new Error(`Recursive alias in "${target}"`);
			}
			if (Array.isArray(nextNamespace)) {
				const command = cmds.slice(0, i + 1).join(' ');
				this.sendReply(this.tr`'/${command}' is a help command.`);
				return this.parse(`/${target}`);
			}
			if (!nextNamespace) {
				for (const g in Config.groups) {
					const groupid = Config.groups[g].id;
					if (new RegExp(`(global)?(un|de)?${groupid}`).test(target)) {
						return this.parse(`/help promote`);
					}
					if (new RegExp(`room(un|de)?${groupid}`).test(target)) {
						return this.parse(`/help roompromote`);
					}
				}
				return this.errorReply(this.tr`The command '/${target}' does not exist.`);
			}

			const help = namespace[`${cmd}help`];
			if (Array.isArray(help) || typeof help === 'function') {
				currentBestHelp = {
					help, for: cmds.slice(0, i + 1),
				};
			}

			if (typeof nextNamespace === 'function') break;
			namespace = nextNamespace;
		}

		if (!currentBestHelp) {
			return this.errorReply(this.tr`Could not find help for '/${target}'. Try /help for general help.`);
		}

		const closestHelp = currentBestHelp.for.join(' ');
		if (currentBestHelp.for.length < cmds.length) {
			this.errorReply(this.tr`Could not find help for '/${target}' - displaying help for '/${closestHelp}' instead`);
		}

		const curHandler = Chat.parseCommand(`/${closestHelp}`)?.handler;
		if (curHandler?.isPrivate && !user.can('lock')) {
			return this.errorReply(this.tr`The command '/${target}' does not exist.`);
		}

		if (typeof currentBestHelp.help === 'function') {
			// If the help command is a function, parse it instead
			this.run(currentBestHelp.help);
		} else if (Array.isArray(currentBestHelp.help)) {
			this.sendReply(currentBestHelp.help.map(line => this.tr(line)).join('\n'));
		}
	},
	helphelp: [
		`/help OR /h OR /? - Gives you help.`,
		`/help [command] - Gives you help for a specific command.`,
	],
};

process.nextTick(() => {
	// We might want to migrate most of this to a JSON schema of command attributes.
	Chat.multiLinePattern.register(
		'>>>? ', '/(?:room|staff)intro ', '/(?:staff)?topic ', '/(?:add|widen)datacenters ', '/bash ', '!code ', '/code ', '/modnote ', '/mn ',
		'/eval', '!eval', '/evalbattle',
		'/importinputlog '
	);
});
