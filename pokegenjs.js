/*
Copyright 2015 Bradley Jarvis <bradleydjarvis@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var Long = dcodeIO.Long;


function Pokemon(name, abilities, growthID, genders) {
	this.name = name;
	this.ability1 = abilities[0];
	this.ability2 = abilities[1];
	this.abilityH = abilities[2];
	this.growthID = growthID;
	this.genders = genders;
}

var Natures = [
"Hardy",
"Lonely",
"Brave",
"Adamant",
"Naughty",
"Bold",
"Docile",
"Relaxed",
"Impish",
"Lax",
"Timid",
"Hasty",
"Serious",
"Jolly",
"Naive",
"Modest",
"Mild",
"Quiet",
"Bashful",
"Rash",
"Calm",
"Gentle",
"Sassy",
"Careful",
"Quirky"
];

var AbilityList = [
"None",
"Stench",
"Drizzle",
"Speed Boost",
"Battle Armor",
"Sturdy",
"Damp",
"Limber",
"Sand Veil",
"Static",
"Volt Absorb",
"Water Absorb",
"Oblivious",
"Cloud Nine",
"Compound Eyes",
"Insomnia",
"Color Change",
"Immunity",
"Flash Fire",
"Shield Dust",
"Own Tempo",
"Suction Cups",
"Intimidate",
"Shadow Tag",
"Rough Skin",
"Wonder Guard",
"Levitate",
"Effect Spore",
"Synchronize",
"Clear Body",
"Natural Cure",
"Lightning Rod",
"Serene Grace",
"Swift Swim",
"Chlorophyll",
"Illuminate",
"Trace",
"Huge Power",
"Poison Point",
"Inner Focus",
"Magma Armor",
"Water Veil",
"Magnet Pull",
"Soundproof",
"Rain Dish",
"Sand Stream",
"Pressure",
"Thick Fat",
"Early Bird",
"Flame Body",
"Run Away",
"Keen Eye",
"Hyper Cutter",
"Pickup",
"Truant",
"Hustle",
"Cute Charm",
"Plus",
"Minus",
"Forecast",
"Sticky Hold",
"Shed Skin",
"Guts",
"Marvel Scale",
"Liquid Ooze",
"Overgrow",
"Blaze",
"Torrent",
"Swarm",
"Rock Head",
"Drought",
"Arena Trap",
"Vital Spirit",
"White Smoke",
"Pure Power",
"Shell Armor",
"Air Lock",
"Tangled Feet",
"Motor Drive",
"Rivalry",
"Steadfast",
"Snow Cloak",
"Gluttony",
"Anger Point",
"Unburden",
"Heatproof",
"Simple",
"Dry Skin",
"Download",
"Iron Fist",
"Poison Heal",
"Adaptability",
"Skill Link",
"Hydration",
"Solar Power",
"Quick Feet",
"Normalize",
"Sniper",
"Magic Guard",
"No Guard",
"Stall",
"Technician",
"Leaf Guard",
"Klutz",
"Mold Breaker",
"Super Luck",
"Aftermath",
"Anticipation",
"Forewarn",
"Unaware",
"Tinted Lens",
"Filter",
"Slow Start",
"Scrappy",
"Storm Drain",
"Ice Body",
"Solid Rock",
"Snow Warning",
"Honey Gather",
"Frisk",
"Reckless",
"Multitype",
"Flower Gift",
"Bad Dreams",
"Pickpocket",
"Sheer Force",
"Contrary",
"Unnerve",
"Defiant",
"Defeatist",
"Cursed Body",
"Healer",
"Friend Guard",
"Weak Armor",
"Heavy Metal",
"Light Metal",
"Multiscale",
"Toxic Boost",
"Flare Boost",
"Harvest",
"Telepathy",
"Moody",
"Overcoat",
"Poison Touch",
"Regenerator",
"Big Pecks",
"Sand Rush",
"Wonder Skin",
"Analytic",
"Illusion",
"Imposter",
"Infiltrator",
"Mummy",
"Moxie",
"Justified",
"Rattled",
"Magic Bounce",
"Sap Sipper",
"Prankster",
"Sand Force",
"Iron Barbs",
"Zen Mode",
"Victory Star",
"Turboblaze",
"Teravolt",
"Aroma Veil",
"Flower Veil",
"Cheek Pouch",
"Protean",
"Fur Coat",
"Magician",
"Bulletproof",
"Competitive",
"Strong Jaw",
"Refrigerate",
"Sweet Veil",
"Stance Change",
"Gale Wings",
"Mega Launcher",
"Grass Pelt",
"Symbiosis",
"Tough Claws",
"Pixilate",
"Gooey",
"Aerilate",
"Parental Bond",
"Dark Aura",
"Fairy Aura",
"Aura Break",
"Primordial Sea",
"Desolate Land",
"Delta Stream"
]

var Pokedex = [
new Pokemon("None", [0,0,0], 0, 0),
new Pokemon("Bulbasaur",[65,65,34],4,1),
new Pokemon("Ivysaur",[65,65,34],4,1),
new Pokemon("Venusaur",[65,65,34],4,1),
new Pokemon("Charmander",[66,66,94],4,1),
new Pokemon("Charmeleon",[66,66,94],4,1),
new Pokemon("Charizard",[66,66,94],4,1),
new Pokemon("Squirtle",[67,67,44],4,1),
new Pokemon("Wartortle",[67,67,44],4,1),
new Pokemon("Blastoise",[67,67,44],4,1),
new Pokemon("Caterpie",[19,19,50],2,1),
new Pokemon("Metapod",[61,61,61],2,1),
new Pokemon("Butterfree",[14,14,110],2,1),
new Pokemon("Weedle",[19,19,50],2,1),
new Pokemon("Kakuna",[61,61,61],2,1),
new Pokemon("Beedrill",[68,68,97],2,1),
new Pokemon("Pidgey",[51,77,145],4,1),
new Pokemon("Pidgeotto",[51,77,145],4,1),
new Pokemon("Pidgeot",[51,77,145],4,1),
new Pokemon("Rattata",[50,62,55],2,1),
new Pokemon("Raticate",[50,62,55],2,1),
new Pokemon("Spearow",[51,51,97],2,1),
new Pokemon("Fearow",[51,51,97],2,1),
new Pokemon("Ekans",[22,61,127],2,1),
new Pokemon("Arbok",[22,61,127],2,1),
new Pokemon("Pikachu",[9,9,31],2,1),
new Pokemon("Raichu",[9,9,31],2,1),
new Pokemon("Sandshrew",[8,8,146],2,1),
new Pokemon("Sandslash",[8,8,146],2,1),
new Pokemon("Nidoran♀",[38,79,55],4,2),
new Pokemon("Nidorina",[38,79,55],4,2),
new Pokemon("Nidoqueen",[38,79,125],4,2),
new Pokemon("Nidoran♂",[38,79,55],4,0),
new Pokemon("Nidorino",[38,79,55],4,0),
new Pokemon("Nidoking",[38,79,125],4,0),
new Pokemon("Clefairy",[56,98,132],3,1),
new Pokemon("Clefable",[56,98,109],3,1),
new Pokemon("Vulpix",[18,18,70],2,1),
new Pokemon("Ninetales",[18,18,70],2,1),
new Pokemon("Jigglypuff",[56,172,132],3,1),
new Pokemon("Wigglytuff",[56,172,119],3,1),
new Pokemon("Zubat",[39,39,151],2,1),
new Pokemon("Golbat",[39,39,151],2,1),
new Pokemon("Oddish",[34,34,50],4,1),
new Pokemon("Gloom",[34,34,1],4,1),
new Pokemon("Vileplume",[34,34,27],4,1),
new Pokemon("Paras",[27,87,6],2,1),
new Pokemon("Parasect",[27,87,6],2,1),
new Pokemon("Venonat",[14,110,50],2,1),
new Pokemon("Venomoth",[19,110,147],2,1),
new Pokemon("Diglett",[8,71,159],2,1),
new Pokemon("Dugtrio",[8,71,159],2,1),
new Pokemon("Meowth",[53,101,127],2,1),
new Pokemon("Persian",[7,101,127],2,1),
new Pokemon("Psyduck",[6,13,33],2,1),
new Pokemon("Golduck",[6,13,33],2,1),
new Pokemon("Mankey",[72,83,128],2,1),
new Pokemon("Primeape",[72,83,128],2,1),
new Pokemon("Growlithe",[22,18,154],1,1),
new Pokemon("Arcanine",[22,18,154],1,1),
new Pokemon("Poliwag",[11,6,33],4,1),
new Pokemon("Poliwhirl",[11,6,33],4,1),
new Pokemon("Poliwrath",[11,6,33],4,1),
new Pokemon("Abra",[28,39,98],4,1),
new Pokemon("Kadabra",[28,39,98],4,1),
new Pokemon("Alakazam",[28,39,98],4,1),
new Pokemon("Machop",[62,99,80],4,1),
new Pokemon("Machoke",[62,99,80],4,1),
new Pokemon("Machamp",[62,99,80],4,1),
new Pokemon("Bellsprout",[34,34,82],4,1),
new Pokemon("Weepinbell",[34,34,82],4,1),
new Pokemon("Victreebel",[34,34,82],4,1),
new Pokemon("Tentacool",[29,64,44],1,1),
new Pokemon("Tentacruel",[29,64,44],1,1),
new Pokemon("Geodude",[69,5,8],4,1),
new Pokemon("Graveler",[69,5,8],4,1),
new Pokemon("Golem",[69,5,8],4,1),
new Pokemon("Ponyta",[50,18,49],2,1),
new Pokemon("Rapidash",[50,18,49],2,1),
new Pokemon("Slowpoke",[12,20,144],2,1),
new Pokemon("Slowbro",[12,20,144],2,1),
new Pokemon("Magnemite",[42,5,148],2,3),
new Pokemon("Magneton",[42,5,148],2,3),
new Pokemon("Farfetch'd",[51,39,128],2,1),
new Pokemon("Doduo",[50,48,77],2,1),
new Pokemon("Dodrio",[50,48,77],2,1),
new Pokemon("Seel",[47,93,115],2,1),
new Pokemon("Dewgong",[47,93,115],2,1),
new Pokemon("Grimer",[1,60,143],2,1),
new Pokemon("Muk",[1,60,143],2,1),
new Pokemon("Shellder",[75,92,142],1,1),
new Pokemon("Cloyster",[75,92,142],1,1),
new Pokemon("Gastly",[26,26,26],4,1),
new Pokemon("Haunter",[26,26,26],4,1),
new Pokemon("Gengar",[26,26,26],4,1),
new Pokemon("Onix",[69,5,133],2,1),
new Pokemon("Drowzee",[15,108,39],2,1),
new Pokemon("Hypno",[15,108,39],2,1),
new Pokemon("Krabby",[52,75,125],2,1),
new Pokemon("Kingler",[52,75,125],2,1),
new Pokemon("Voltorb",[43,9,106],2,3),
new Pokemon("Electrode",[43,9,106],2,3),
new Pokemon("Exeggcute",[34,34,139],1,1),
new Pokemon("Exeggutor",[34,34,139],1,1),
new Pokemon("Cubone",[69,31,4],2,1),
new Pokemon("Marowak",[69,31,4],2,1),
new Pokemon("Hitmonlee",[7,120,84],2,0),
new Pokemon("Hitmonchan",[51,89,39],2,0),
new Pokemon("Lickitung",[20,12,13],2,1),
new Pokemon("Koffing",[26,26,26],2,1),
new Pokemon("Weezing",[26,26,26],2,1),
new Pokemon("Rhyhorn",[31,69,120],1,1),
new Pokemon("Rhydon",[31,69,120],1,1),
new Pokemon("Chansey",[30,32,131],3,2),
new Pokemon("Tangela",[34,102,144],2,1),
new Pokemon("Kangaskhan",[48,113,39],2,2),
new Pokemon("Horsea",[33,97,6],2,1),
new Pokemon("Seadra",[38,97,6],2,1),
new Pokemon("Goldeen",[33,41,31],2,1),
new Pokemon("Seaking",[33,41,31],2,1),
new Pokemon("Staryu",[35,30,148],1,3),
new Pokemon("Starmie",[35,30,148],1,3),
new Pokemon("Mr. Mime",[43,111,101],2,1),
new Pokemon("Scyther",[68,101,80],2,1),
new Pokemon("Jynx",[12,108,87],2,2),
new Pokemon("Electabuzz",[9,9,72],2,1),
new Pokemon("Magmar",[49,49,72],2,1),
new Pokemon("Pinsir",[52,104,153],1,1),
new Pokemon("Tauros",[22,83,125],1,0),
new Pokemon("Magikarp",[33,33,155],1,1),
new Pokemon("Gyarados",[22,22,153],1,1),
new Pokemon("Lapras",[11,75,93],1,1),
new Pokemon("Ditto",[7,7,150],2,3),
new Pokemon("Eevee",[50,91,107],2,1),
new Pokemon("Vaporeon",[11,11,93],2,1),
new Pokemon("Jolteon",[10,10,95],2,1),
new Pokemon("Flareon",[18,18,62],2,1),
new Pokemon("Porygon",[36,88,148],2,3),
new Pokemon("Omanyte",[33,75,133],2,1),
new Pokemon("Omastar",[33,75,133],2,1),
new Pokemon("Kabuto",[33,4,133],2,1),
new Pokemon("Kabutops",[33,4,133],2,1),
new Pokemon("Aerodactyl",[69,46,127],1,1),
new Pokemon("Snorlax",[17,47,82],1,1),
new Pokemon("Articuno",[46,46,81],1,3),
new Pokemon("Zapdos",[46,46,9],1,3),
new Pokemon("Moltres",[46,46,49],1,3),
new Pokemon("Dratini",[61,61,63],1,1),
new Pokemon("Dragonair",[61,61,63],1,1),
new Pokemon("Dragonite",[39,39,136],1,1),
new Pokemon("Mewtwo",[46,46,127],1,3),
new Pokemon("Mew",[28,28,28],4,3),
new Pokemon("Chikorita",[65,65,102],4,1),
new Pokemon("Bayleef",[65,65,102],4,1),
new Pokemon("Meganium",[65,65,102],4,1),
new Pokemon("Cyndaquil",[66,66,18],4,1),
new Pokemon("Quilava",[66,66,18],4,1),
new Pokemon("Typhlosion",[66,66,18],4,1),
new Pokemon("Totodile",[67,67,125],4,1),
new Pokemon("Croconaw",[67,67,125],4,1),
new Pokemon("Feraligatr",[67,67,125],4,1),
new Pokemon("Sentret",[50,51,119],2,1),
new Pokemon("Furret",[50,51,119],2,1),
new Pokemon("Hoothoot",[15,51,110],2,1),
new Pokemon("Noctowl",[15,51,110],2,1),
new Pokemon("Ledyba",[68,48,155],3,1),
new Pokemon("Ledian",[68,48,89],3,1),
new Pokemon("Spinarak",[68,15,97],3,1),
new Pokemon("Ariados",[68,15,97],3,1),
new Pokemon("Crobat",[39,39,151],2,1),
new Pokemon("Chinchou",[10,35,11],1,1),
new Pokemon("Lanturn",[10,35,11],1,1),
new Pokemon("Pichu",[9,9,31],2,1),
new Pokemon("Cleffa",[56,98,132],3,1),
new Pokemon("Igglybuff",[56,172,132],3,1),
new Pokemon("Togepi",[55,32,105],3,1),
new Pokemon("Togetic",[55,32,105],3,1),
new Pokemon("Natu",[28,48,156],2,1),
new Pokemon("Xatu",[28,48,156],2,1),
new Pokemon("Mareep",[9,9,57],4,1),
new Pokemon("Flaaffy",[9,9,57],4,1),
new Pokemon("Ampharos",[9,9,57],4,1),
new Pokemon("Bellossom",[34,34,131],4,1),
new Pokemon("Marill",[47,37,157],3,1),
new Pokemon("Azumarill",[47,37,157],3,1),
new Pokemon("Sudowoodo",[5,69,155],2,1),
new Pokemon("Politoed",[11,6,2],4,1),
new Pokemon("Hoppip",[34,102,151],4,1),
new Pokemon("Skiploom",[34,102,151],4,1),
new Pokemon("Jumpluff",[34,102,151],4,1),
new Pokemon("Aipom",[50,53,92],3,1),
new Pokemon("Sunkern",[34,94,48],4,1),
new Pokemon("Sunflora",[34,94,48],4,1),
new Pokemon("Yanma",[3,14,119],2,1),
new Pokemon("Wooper",[6,11,109],2,1),
new Pokemon("Quagsire",[6,11,109],2,1),
new Pokemon("Espeon",[28,28,156],2,1),
new Pokemon("Umbreon",[28,28,39],2,1),
new Pokemon("Murkrow",[15,105,158],4,1),
new Pokemon("Slowking",[12,20,144],2,1),
new Pokemon("Misdreavus",[26,26,26],3,1),
new Pokemon("Unown",[26,26,26],2,3),
new Pokemon("Wobbuffet",[23,23,140],2,1),
new Pokemon("Girafarig",[39,48,157],2,1),
new Pokemon("Pineco",[5,5,142],2,1),
new Pokemon("Forretress",[5,5,142],2,1),
new Pokemon("Dunsparce",[32,50,155],2,1),
new Pokemon("Gligar",[52,8,17],4,1),
new Pokemon("Steelix",[69,5,125],2,1),
new Pokemon("Snubbull",[22,50,155],3,1),
new Pokemon("Granbull",[22,95,155],3,1),
new Pokemon("Qwilfish",[38,33,22],2,1),
new Pokemon("Scizor",[68,101,135],2,1),
new Pokemon("Shuckle",[5,82,126],4,1),
new Pokemon("Heracross",[68,62,153],1,1),
new Pokemon("Sneasel",[39,51,124],4,1),
new Pokemon("Teddiursa",[53,95,118],2,1),
new Pokemon("Ursaring",[62,95,127],2,1),
new Pokemon("Slugma",[40,49,133],2,1),
new Pokemon("Magcargo",[40,49,133],2,1),
new Pokemon("Swinub",[12,81,47],1,1),
new Pokemon("Piloswine",[12,81,47],1,1),
new Pokemon("Corsola",[55,30,144],3,1),
new Pokemon("Remoraid",[55,97,141],2,1),
new Pokemon("Octillery",[21,97,141],2,1),
new Pokemon("Delibird",[72,55,15],3,1),
new Pokemon("Mantine",[33,11,41],1,1),
new Pokemon("Skarmory",[51,5,133],1,1),
new Pokemon("Houndour",[48,18,127],1,1),
new Pokemon("Houndoom",[48,18,127],1,1),
new Pokemon("Kingdra",[33,97,6],2,1),
new Pokemon("Phanpy",[53,53,8],2,1),
new Pokemon("Donphan",[5,5,8],2,1),
new Pokemon("Porygon2",[36,88,148],2,3),
new Pokemon("Stantler",[22,119,157],1,1),
new Pokemon("Smeargle",[20,101,141],3,1),
new Pokemon("Tyrogue",[62,80,72],2,0),
new Pokemon("Hitmontop",[22,101,80],2,0),
new Pokemon("Smoochum",[12,108,93],2,2),
new Pokemon("Elekid",[9,9,72],2,1),
new Pokemon("Magby",[49,49,72],2,1),
new Pokemon("Miltank",[47,113,157],1,2),
new Pokemon("Blissey",[30,32,131],3,2),
new Pokemon("Raikou",[46,46,10],1,3),
new Pokemon("Entei",[46,46,18],1,3),
new Pokemon("Suicune",[46,46,11],1,3),
new Pokemon("Larvitar",[62,62,8],1,1),
new Pokemon("Pupitar",[61,61,61],1,1),
new Pokemon("Tyranitar",[45,45,127],1,1),
new Pokemon("Lugia",[46,46,136],1,3),
new Pokemon("Ho-Oh",[46,46,144],1,3),
new Pokemon("Celebi",[30,30,30],4,3),
new Pokemon("Treecko",[65,65,84],4,1),
new Pokemon("Grovyle",[65,65,84],4,1),
new Pokemon("Sceptile",[65,65,84],4,1),
new Pokemon("Torchic",[66,66,3],4,1),
new Pokemon("Combusken",[66,66,3],4,1),
new Pokemon("Blaziken",[66,66,3],4,1),
new Pokemon("Mudkip",[67,67,6],4,1),
new Pokemon("Marshtomp",[67,67,6],4,1),
new Pokemon("Swampert",[67,67,6],4,1),
new Pokemon("Poochyena",[50,95,155],2,1),
new Pokemon("Mightyena",[22,95,153],2,1),
new Pokemon("Zigzagoon",[53,82,95],2,1),
new Pokemon("Linoone",[53,82,95],2,1),
new Pokemon("Wurmple",[19,19,50],2,1),
new Pokemon("Silcoon",[61,61,61],2,1),
new Pokemon("Beautifly",[68,68,79],2,1),
new Pokemon("Cascoon",[61,61,61],2,1),
new Pokemon("Dustox",[19,19,14],2,1),
new Pokemon("Lotad",[33,44,20],4,1),
new Pokemon("Lombre",[33,44,20],4,1),
new Pokemon("Ludicolo",[33,44,20],4,1),
new Pokemon("Seedot",[34,48,124],4,1),
new Pokemon("Nuzleaf",[34,48,124],4,1),
new Pokemon("Shiftry",[34,48,124],4,1),
new Pokemon("Taillow",[62,62,113],4,1),
new Pokemon("Swellow",[62,62,113],4,1),
new Pokemon("Wingull",[51,51,44],2,1),
new Pokemon("Pelipper",[51,51,44],2,1),
new Pokemon("Ralts",[28,36,140],1,1),
new Pokemon("Kirlia",[28,36,140],1,1),
new Pokemon("Gardevoir",[28,36,140],1,1),
new Pokemon("Surskit",[33,33,44],2,1),
new Pokemon("Masquerain",[22,22,127],2,1),
new Pokemon("Shroomish",[27,90,95],6,1),
new Pokemon("Breloom",[27,90,101],6,1),
new Pokemon("Slakoth",[54,54,54],1,1),
new Pokemon("Vigoroth",[72,72,72],1,1),
new Pokemon("Slaking",[54,54,54],1,1),
new Pokemon("Nincada",[14,14,50],5,1),
new Pokemon("Ninjask",[3,3,151],5,1),
new Pokemon("Shedinja",[25,25,25],5,3),
new Pokemon("Whismur",[43,43,155],4,1),
new Pokemon("Loudred",[43,43,113],4,1),
new Pokemon("Exploud",[43,43,113],4,1),
new Pokemon("Makuhita",[47,62,125],6,1),
new Pokemon("Hariyama",[47,62,125],6,1),
new Pokemon("Azurill",[47,37,157],3,1),
new Pokemon("Nosepass",[5,42,159],2,1),
new Pokemon("Skitty",[56,96,147],3,1),
new Pokemon("Delcatty",[56,96,147],3,1),
new Pokemon("Sableye",[51,100,158],4,1),
new Pokemon("Mawile",[52,22,125],3,1),
new Pokemon("Aron",[5,69,134],1,1),
new Pokemon("Lairon",[5,69,134],1,1),
new Pokemon("Aggron",[5,69,134],1,1),
new Pokemon("Meditite",[74,74,140],2,1),
new Pokemon("Medicham",[74,74,140],2,1),
new Pokemon("Electrike",[9,31,58],1,1),
new Pokemon("Manectric",[9,31,58],1,1),
new Pokemon("Plusle",[57,57,31],2,1),
new Pokemon("Minun",[58,58,10],2,1),
new Pokemon("Volbeat",[35,68,158],5,0),
new Pokemon("Illumise",[12,110,158],6,2),
new Pokemon("Roselia",[30,38,102],4,1),
new Pokemon("Gulpin",[64,60,82],6,1),
new Pokemon("Swalot",[64,60,82],6,1),
new Pokemon("Carvanha",[24,24,3],1,1),
new Pokemon("Sharpedo",[24,24,3],1,1),
new Pokemon("Wailmer",[41,12,46],6,1),
new Pokemon("Wailord",[41,12,46],6,1),
new Pokemon("Numel",[12,86,20],2,1),
new Pokemon("Camerupt",[40,116,83],2,1),
new Pokemon("Torkoal",[73,73,75],2,1),
new Pokemon("Spoink",[47,20,82],3,1),
new Pokemon("Grumpig",[47,20,82],3,1),
new Pokemon("Spinda",[20,77,126],3,1),
new Pokemon("Trapinch",[52,71,125],4,1),
new Pokemon("Vibrava",[26,26,26],4,1),
new Pokemon("Flygon",[26,26,26],4,1),
new Pokemon("Cacnea",[8,8,11],4,1),
new Pokemon("Cacturne",[8,8,11],4,1),
new Pokemon("Swablu",[30,30,13],5,1),
new Pokemon("Altaria",[30,30,13],5,1),
new Pokemon("Zangoose",[17,17,137],5,1),
new Pokemon("Seviper",[61,61,151],6,1),
new Pokemon("Lunatone",[26,26,26],3,3),
new Pokemon("Solrock",[26,26,26],3,3),
new Pokemon("Barboach",[12,107,93],2,1),
new Pokemon("Whiscash",[12,107,93],2,1),
new Pokemon("Corphish",[52,75,91],6,1),
new Pokemon("Crawdaunt",[52,75,91],6,1),
new Pokemon("Baltoy",[26,26,26],2,3),
new Pokemon("Claydol",[26,26,26],2,3),
new Pokemon("Lileep",[21,21,114],5,1),
new Pokemon("Cradily",[21,21,114],5,1),
new Pokemon("Anorith",[4,4,33],5,1),
new Pokemon("Armaldo",[4,4,33],5,1),
new Pokemon("Feebas",[33,12,91],5,1),
new Pokemon("Milotic",[63,172,56],5,1),
new Pokemon("Castform",[59,59,59],2,1),
new Pokemon("Kecleon",[16,16,168],4,1),
new Pokemon("Shuppet",[15,119,130],3,1),
new Pokemon("Banette",[15,119,130],3,1),
new Pokemon("Duskull",[26,26,119],3,1),
new Pokemon("Dusclops",[46,46,119],3,1),
new Pokemon("Tropius",[34,94,139],1,1),
new Pokemon("Chimecho",[26,26,26],3,1),
new Pokemon("Absol",[46,105,154],4,1),
new Pokemon("Wynaut",[23,23,140],2,1),
new Pokemon("Snorunt",[39,115,141],2,1),
new Pokemon("Glalie",[39,115,141],2,1),
new Pokemon("Spheal",[47,115,12],4,1),
new Pokemon("Sealeo",[47,115,12],4,1),
new Pokemon("Walrein",[47,115,12],4,1),
new Pokemon("Clamperl",[75,75,155],5,1),
new Pokemon("Huntail",[33,33,41],5,1),
new Pokemon("Gorebyss",[33,33,93],5,1),
new Pokemon("Relicanth",[33,69,5],1,1),
new Pokemon("Luvdisc",[33,33,93],3,1),
new Pokemon("Bagon",[69,69,125],1,1),
new Pokemon("Shelgon",[69,69,142],1,1),
new Pokemon("Salamence",[22,22,153],1,1),
new Pokemon("Beldum",[29,29,135],1,3),
new Pokemon("Metang",[29,29,135],1,3),
new Pokemon("Metagross",[29,29,135],1,3),
new Pokemon("Regirock",[29,29,5],1,3),
new Pokemon("Regice",[29,29,115],1,3),
new Pokemon("Registeel",[29,29,135],1,3),
new Pokemon("Latias",[26,26,26],1,2),
new Pokemon("Latios",[26,26,26],1,0),
new Pokemon("Kyogre",[2,2,2],1,3),
new Pokemon("Groudon",[70,70,70],1,3),
new Pokemon("Rayquaza",[76,76,76],1,3),
new Pokemon("Jirachi",[32,32,32],1,3),
new Pokemon("Deoxys",[46,46,46],1,3),
new Pokemon("Turtwig",[65,65,75],4,1),
new Pokemon("Grotle",[65,65,75],4,1),
new Pokemon("Torterra",[65,65,75],4,1),
new Pokemon("Chimchar",[66,66,89],4,1),
new Pokemon("Monferno",[66,66,89],4,1),
new Pokemon("Infernape",[66,66,89],4,1),
new Pokemon("Piplup",[67,67,128],4,1),
new Pokemon("Prinplup",[67,67,128],4,1),
new Pokemon("Empoleon",[67,67,128],4,1),
new Pokemon("Starly",[51,51,120],4,1),
new Pokemon("Staravia",[22,22,120],4,1),
new Pokemon("Staraptor",[22,22,120],4,1),
new Pokemon("Bidoof",[86,109,141],2,1),
new Pokemon("Bibarel",[86,109,141],2,1),
new Pokemon("Kricketot",[61,61,50],4,1),
new Pokemon("Kricketune",[68,68,101],4,1),
new Pokemon("Shinx",[79,22,62],4,1),
new Pokemon("Luxio",[79,22,62],4,1),
new Pokemon("Luxray",[79,22,62],4,1),
new Pokemon("Budew",[30,38,102],4,1),
new Pokemon("Roserade",[30,38,101],4,1),
new Pokemon("Cranidos",[104,104,125],5,1),
new Pokemon("Rampardos",[104,104,125],5,1),
new Pokemon("Shieldon",[5,5,43],5,1),
new Pokemon("Bastiodon",[5,5,43],5,1),
new Pokemon("Burmy",[61,61,142],2,1),
new Pokemon("Wormadam",[107,107,142],2,2),
new Pokemon("Mothim",[68,68,110],2,0),
new Pokemon("Combee",[118,118,55],4,1),
new Pokemon("Vespiquen",[46,46,127],4,2),
new Pokemon("Pachirisu",[50,53,10],2,1),
new Pokemon("Buizel",[33,33,41],2,1),
new Pokemon("Floatzel",[33,33,41],2,1),
new Pokemon("Cherubi",[34,34,34],2,1),
new Pokemon("Cherrim",[122,122,122],2,1),
new Pokemon("Shellos",[60,114,159],2,1),
new Pokemon("Gastrodon",[60,114,159],2,1),
new Pokemon("Ambipom",[101,53,92],3,1),
new Pokemon("Drifloon",[106,84,138],6,1),
new Pokemon("Drifblim",[106,84,138],6,1),
new Pokemon("Buneary",[50,103,7],2,1),
new Pokemon("Lopunny",[56,103,7],2,1),
new Pokemon("Mismagius",[26,26,26],3,1),
new Pokemon("Honchkrow",[15,105,153],4,1),
new Pokemon("Glameow",[7,20,51],3,1),
new Pokemon("Purugly",[47,20,128],3,1),
new Pokemon("Chingling",[26,26,26],3,1),
new Pokemon("Stunky",[1,106,51],2,1),
new Pokemon("Skuntank",[1,106,51],2,1),
new Pokemon("Bronzor",[26,85,134],2,3),
new Pokemon("Bronzong",[26,85,134],2,3),
new Pokemon("Bonsly",[5,69,155],2,1),
new Pokemon("Mime Jr.",[43,111,101],2,1),
new Pokemon("Happiny",[30,32,132],3,2),
new Pokemon("Chatot",[51,77,145],4,1),
new Pokemon("Spiritomb",[46,46,151],2,1),
new Pokemon("Gible",[8,8,24],1,1),
new Pokemon("Gabite",[8,8,24],1,1),
new Pokemon("Garchomp",[8,8,24],1,1),
new Pokemon("Munchlax",[53,47,82],1,1),
new Pokemon("Riolu",[80,39,158],4,1),
new Pokemon("Lucario",[80,39,154],4,1),
new Pokemon("Hippopotas",[45,45,159],1,1),
new Pokemon("Hippowdon",[45,45,159],1,1),
new Pokemon("Skorupi",[4,97,51],1,1),
new Pokemon("Drapion",[4,97,51],1,1),
new Pokemon("Croagunk",[107,87,143],2,1),
new Pokemon("Toxicroak",[107,87,143],2,1),
new Pokemon("Carnivine",[26,26,26],1,1),
new Pokemon("Finneon",[33,114,41],5,1),
new Pokemon("Lumineon",[33,114,41],5,1),
new Pokemon("Mantyke",[33,11,41],1,1),
new Pokemon("Snover",[117,117,43],1,1),
new Pokemon("Abomasnow",[117,117,43],1,1),
new Pokemon("Weavile",[46,46,124],4,1),
new Pokemon("Magnezone",[42,5,148],2,3),
new Pokemon("Lickilicky",[20,12,13],2,1),
new Pokemon("Rhyperior",[31,116,120],1,1),
new Pokemon("Tangrowth",[34,102,144],2,1),
new Pokemon("Electivire",[78,78,72],2,1),
new Pokemon("Magmortar",[49,49,72],2,1),
new Pokemon("Togekiss",[55,32,105],3,1),
new Pokemon("Yanmega",[3,110,119],2,1),
new Pokemon("Leafeon",[102,102,34],2,1),
new Pokemon("Glaceon",[81,81,115],2,1),
new Pokemon("Gliscor",[52,8,90],4,1),
new Pokemon("Mamoswine",[12,81,47],1,1),
new Pokemon("Porygon-Z",[91,88,148],2,3),
new Pokemon("Gallade",[80,80,154],1,0),
new Pokemon("Probopass",[5,42,159],2,1),
new Pokemon("Dusknoir",[46,46,119],3,1),
new Pokemon("Froslass",[81,81,130],2,2),
new Pokemon("Rotom",[26,26,26],2,3),
new Pokemon("Uxie",[26,26,26],1,3),
new Pokemon("Mesprit",[26,26,26],1,3),
new Pokemon("Azelf",[26,26,26],1,3),
new Pokemon("Dialga",[46,46,140],1,3),
new Pokemon("Palkia",[46,46,140],1,3),
new Pokemon("Heatran",[18,18,49],1,1),
new Pokemon("Regigigas",[112,112,112],1,3),
new Pokemon("Giratina",[46,46,140],1,3),
new Pokemon("Cresselia",[26,26,26],1,2),
new Pokemon("Phione",[93,93,93],1,3),
new Pokemon("Manaphy",[93,93,93],1,3),
new Pokemon("Darkrai",[123,123,123],1,3),
new Pokemon("Shaymin",[30,30,30],4,3),
new Pokemon("Arceus",[121,121,121],1,3),
new Pokemon("Victini",[162,162,162],1,3),
new Pokemon("Snivy",[65,65,126],4,1),
new Pokemon("Servine",[65,65,126],4,1),
new Pokemon("Serperior",[65,65,126],4,1),
new Pokemon("Tepig",[66,66,47],4,1),
new Pokemon("Pignite",[66,66,47],4,1),
new Pokemon("Emboar",[66,66,120],4,1),
new Pokemon("Oshawott",[67,67,75],4,1),
new Pokemon("Dewott",[67,67,75],4,1),
new Pokemon("Samurott",[67,67,75],4,1),
new Pokemon("Patrat",[50,51,148],2,1),
new Pokemon("Watchog",[35,51,148],2,1),
new Pokemon("Lillipup",[72,53,50],4,1),
new Pokemon("Herdier",[22,146,113],4,1),
new Pokemon("Stoutland",[22,146,113],4,1),
new Pokemon("Purrloin",[7,84,158],2,1),
new Pokemon("Liepard",[7,84,158],2,1),
new Pokemon("Pansage",[82,82,65],2,1),
new Pokemon("Simisage",[82,82,65],2,1),
new Pokemon("Pansear",[82,82,66],2,1),
new Pokemon("Simisear",[82,82,66],2,1),
new Pokemon("Panpour",[82,82,67],2,1),
new Pokemon("Simipour",[82,82,67],2,1),
new Pokemon("Munna",[108,28,140],3,1),
new Pokemon("Musharna",[108,28,140],3,1),
new Pokemon("Pidove",[145,105,79],4,1),
new Pokemon("Tranquill",[145,105,79],4,1),
new Pokemon("Unfezant",[145,105,79],4,1),
new Pokemon("Blitzle",[31,78,157],2,1),
new Pokemon("Zebstrika",[31,78,157],2,1),
new Pokemon("Roggenrola",[5,5,159],4,1),
new Pokemon("Boldore",[5,5,159],4,1),
new Pokemon("Gigalith",[5,5,159],4,1),
new Pokemon("Woobat",[109,103,86],2,1),
new Pokemon("Swoobat",[109,103,86],2,1),
new Pokemon("Drilbur",[146,159,104],2,1),
new Pokemon("Excadrill",[146,159,104],2,1),
new Pokemon("Audino",[131,144,103],3,1),
new Pokemon("Timburr",[62,125,89],4,1),
new Pokemon("Gurdurr",[62,125,89],4,1),
new Pokemon("Conkeldurr",[62,125,89],4,1),
new Pokemon("Tympole",[33,93,11],4,1),
new Pokemon("Palpitoad",[33,93,11],4,1),
new Pokemon("Seismitoad",[33,143,11],4,1),
new Pokemon("Throh",[62,39,104],2,0),
new Pokemon("Sawk",[5,39,104],2,0),
new Pokemon("Sewaddle",[68,34,142],4,1),
new Pokemon("Swadloon",[102,34,142],4,1),
new Pokemon("Leavanny",[68,34,142],4,1),
new Pokemon("Venipede",[38,68,3],4,1),
new Pokemon("Whirlipede",[38,68,3],4,1),
new Pokemon("Scolipede",[38,68,3],4,1),
new Pokemon("Cottonee",[158,151,34],2,1),
new Pokemon("Whimsicott",[158,151,34],2,1),
new Pokemon("Petilil",[34,20,102],2,2),
new Pokemon("Lilligant",[34,20,102],2,2),
new Pokemon("Basculin",[120,91,104],2,1),
new Pokemon("Sandile",[22,153,83],4,1),
new Pokemon("Krokorok",[22,153,83],4,1),
new Pokemon("Krookodile",[22,153,83],4,1),
new Pokemon("Darumaka",[55,55,39],4,1),
new Pokemon("Darmanitan",[125,125,161],4,1),
new Pokemon("Maractus",[11,34,114],2,1),
new Pokemon("Dwebble",[5,75,133],2,1),
new Pokemon("Crustle",[5,75,133],2,1),
new Pokemon("Scraggy",[61,153,22],2,1),
new Pokemon("Scrafty",[61,153,22],2,1),
new Pokemon("Sigilyph",[147,98,110],2,1),
new Pokemon("Yamask",[152,152,152],2,1),
new Pokemon("Cofagrigus",[152,152,152],2,1),
new Pokemon("Tirtouga",[116,5,33],2,1),
new Pokemon("Carracosta",[116,5,33],2,1),
new Pokemon("Archen",[129,129,129],2,1),
new Pokemon("Archeops",[129,129,129],2,1),
new Pokemon("Trubbish",[1,60,106],2,1),
new Pokemon("Garbodor",[1,133,106],2,1),
new Pokemon("Zorua",[149,149,149],4,1),
new Pokemon("Zoroark",[149,149,149],4,1),
new Pokemon("Minccino",[56,101,92],3,1),
new Pokemon("Cinccino",[56,101,92],3,1),
new Pokemon("Gothita",[119,172,23],4,1),
new Pokemon("Gothorita",[119,172,23],4,1),
new Pokemon("Gothitelle",[119,172,23],4,1),
new Pokemon("Solosis",[142,98,144],4,1),
new Pokemon("Duosion",[142,98,144],4,1),
new Pokemon("Reuniclus",[142,98,144],4,1),
new Pokemon("Ducklett",[51,145,93],2,1),
new Pokemon("Swanna",[51,145,93],2,1),
new Pokemon("Vanillite",[115,115,133],1,1),
new Pokemon("Vanillish",[115,115,133],1,1),
new Pokemon("Vanilluxe",[115,115,133],1,1),
new Pokemon("Deerling",[34,157,32],2,1),
new Pokemon("Sawsbuck",[34,157,32],2,1),
new Pokemon("Emolga",[9,9,78],2,1),
new Pokemon("Karrablast",[68,61,99],2,1),
new Pokemon("Escavalier",[68,75,142],2,1),
new Pokemon("Foongus",[27,27,144],2,1),
new Pokemon("Amoonguss",[27,27,144],2,1),
new Pokemon("Frillish",[11,130,6],2,1),
new Pokemon("Jellicent",[11,130,6],2,1),
new Pokemon("Alomomola",[131,93,144],3,1),
new Pokemon("Joltik",[14,127,68],2,1),
new Pokemon("Galvantula",[14,127,68],2,1),
new Pokemon("Ferroseed",[160,160,160],2,1),
new Pokemon("Ferrothorn",[160,160,107],2,1),
new Pokemon("Klink",[57,58,29],4,3),
new Pokemon("Klang",[57,58,29],4,3),
new Pokemon("Klinklang",[57,58,29],4,3),
new Pokemon("Tynamo",[26,26,26],1,1),
new Pokemon("Eelektrik",[26,26,26],1,1),
new Pokemon("Eelektross",[26,26,26],1,1),
new Pokemon("Elgyem",[140,28,148],2,1),
new Pokemon("Beheeyem",[140,28,148],2,1),
new Pokemon("Litwick",[18,49,151],4,1),
new Pokemon("Lampent",[18,49,151],4,1),
new Pokemon("Chandelure",[18,49,151],4,1),
new Pokemon("Axew",[79,104,127],1,1),
new Pokemon("Fraxure",[79,104,127],1,1),
new Pokemon("Haxorus",[79,104,127],1,1),
new Pokemon("Cubchoo",[81,81,155],2,1),
new Pokemon("Beartic",[81,81,33],2,1),
new Pokemon("Cryogonal",[26,26,26],2,3),
new Pokemon("Shelmet",[93,75,142],2,1),
new Pokemon("Accelgor",[93,60,84],2,1),
new Pokemon("Stunfisk",[9,7,8],2,1),
new Pokemon("Mienfoo",[39,144,120],4,1),
new Pokemon("Mienshao",[39,144,120],4,1),
new Pokemon("Druddigon",[24,125,104],2,1),
new Pokemon("Golett",[89,103,99],2,3),
new Pokemon("Golurk",[89,103,99],2,3),
new Pokemon("Pawniard",[128,39,46],2,1),
new Pokemon("Bisharp",[128,39,46],2,1),
new Pokemon("Bouffalant",[120,157,43],2,1),
new Pokemon("Rufflet",[51,125,55],1,0),
new Pokemon("Braviary",[51,125,128],1,0),
new Pokemon("Vullaby",[145,142,133],1,2),
new Pokemon("Mandibuzz",[145,142,133],1,2),
new Pokemon("Heatmor",[82,18,73],2,1),
new Pokemon("Durant",[68,55,54],2,1),
new Pokemon("Deino",[55,55,55],1,1),
new Pokemon("Zweilous",[55,55,55],1,1),
new Pokemon("Hydreigon",[26,26,26],1,1),
new Pokemon("Larvesta",[49,49,68],1,1),
new Pokemon("Volcarona",[49,49,68],1,1),
new Pokemon("Cobalion",[154,154,154],1,3),
new Pokemon("Terrakion",[154,154,154],1,3),
new Pokemon("Virizion",[154,154,154],1,3),
new Pokemon("Tornadus",[158,158,128],1,0),
new Pokemon("Thundurus",[158,158,128],1,0),
new Pokemon("Reshiram",[163,163,163],1,3),
new Pokemon("Zekrom",[164,164,164],1,3),
new Pokemon("Landorus",[159,159,125],1,0),
new Pokemon("Kyurem",[46,46,46],1,3),
new Pokemon("Keldeo",[154,154,154],1,3),
new Pokemon("Meloetta",[32,32,32],1,3),
new Pokemon("Genesect",[88,88,88],1,3),
new Pokemon("Chespin",[65,65,171],4,1),
new Pokemon("Quilladin",[65,65,171],4,1),
new Pokemon("Chesnaught",[65,65,171],4,1),
new Pokemon("Fennekin",[66,66,170],4,1),
new Pokemon("Braixen",[66,66,170],4,1),
new Pokemon("Delphox",[66,66,170],4,1),
new Pokemon("Froakie",[67,67,168],4,1),
new Pokemon("Frogadier",[67,67,168],4,1),
new Pokemon("Greninja",[67,67,168],4,1),
new Pokemon("Bunnelby",[53,167,37],2,1),
new Pokemon("Diggersby",[53,167,37],2,1),
new Pokemon("Fletchling",[145,145,177],4,1),
new Pokemon("Fletchinder",[49,49,177],4,1),
new Pokemon("Talonflame",[49,49,177],4,1),
new Pokemon("Scatterbug",[19,14,132],2,1),
new Pokemon("Spewpa",[61,61,132],2,1),
new Pokemon("Vivillon",[19,14,132],2,1),
new Pokemon("Litleo",[79,127,153],4,1),
new Pokemon("Pyroar",[79,127,153],4,1),
new Pokemon("Flabébé",[166,166,180],2,2),
new Pokemon("Floette",[166,166,180],2,2),
new Pokemon("Florges",[166,166,180],2,2),
new Pokemon("Skiddo",[157,157,179],2,1),
new Pokemon("Gogoat",[157,157,179],2,1),
new Pokemon("Pancham",[89,104,113],2,1),
new Pokemon("Pangoro",[89,104,113],2,1),
new Pokemon("Furfrou",[169,169,169],2,1),
new Pokemon("Espurr",[51,151,20],2,1),
new Pokemon("Meowstic",[51,151,158],2,1),
new Pokemon("Honedge",[99,99,99],2,1),
new Pokemon("Doublade",[99,99,99],2,1),
new Pokemon("Aegislash",[176,176,176],2,1),
new Pokemon("Spritzee",[131,131,165],2,1),
new Pokemon("Aromatisse",[131,131,165],2,1),
new Pokemon("Swirlix",[175,175,84],2,1),
new Pokemon("Slurpuff",[175,175,84],2,1),
new Pokemon("Inkay",[126,21,151],2,1),
new Pokemon("Malamar",[126,21,151],2,1),
new Pokemon("Binacle",[181,97,124],2,1),
new Pokemon("Barbaracle",[181,97,124],2,1),
new Pokemon("Skrelp",[38,143,91],2,1),
new Pokemon("Dragalge",[38,143,91],2,1),
new Pokemon("Clauncher",[178,178,178],1,1),
new Pokemon("Clawitzer",[178,178,178],1,1),
new Pokemon("Helioptile",[87,8,94],2,1),
new Pokemon("Heliolisk",[87,8,94],2,1),
new Pokemon("Tyrunt",[173,173,5],2,1),
new Pokemon("Tyrantrum",[173,173,69],2,1),
new Pokemon("Amaura",[174,174,117],2,1),
new Pokemon("Aurorus",[174,174,117],2,1),
new Pokemon("Sylveon",[56,56,182],2,1),
new Pokemon("Hawlucha",[7,84,104],2,1),
new Pokemon("Dedenne",[167,53,57],2,1),
new Pokemon("Carbink",[29,29,5],1,3),
new Pokemon("Goomy",[157,93,183],1,1),
new Pokemon("Sliggoo",[157,93,183],1,1),
new Pokemon("Goodra",[157,93,183],1,1),
new Pokemon("Klefki",[158,158,170],3,1),
new Pokemon("Phantump",[30,119,139],2,1),
new Pokemon("Trevenant",[30,119,139],2,1),
new Pokemon("Pumpkaboo",[53,119,15],2,1),
new Pokemon("Gourgeist",[53,119,15],2,1),
new Pokemon("Bergmite",[20,115,5],2,1),
new Pokemon("Avalugg",[20,115,5],2,1),
new Pokemon("Noibat",[119,151,140],2,1),
new Pokemon("Noivern",[119,151,140],2,1),
new Pokemon("Xerneas",[187,187,187],1,3),
new Pokemon("Yveltal",[186,186,186],1,3),
new Pokemon("Zygarde",[188,188,188],1,3),
new Pokemon("Diancie",[29,29,29],1,3),
new Pokemon("Hoopa",[170,170,170],1,3),
new Pokemon("Volcanion",[11,11,11],1,3)
];

var growthTable = [[],[0,0,10,33,80,156,270,428,640,911,1250,1663,2160,2746,3430,4218,5120,6141,7290,8573,10000,11576,13310,15208,17280,19531,21970,24603,27440,30486,33750,37238,40960,44921,49130,53593,58320,63316,68590,74148,80000,86151,92610,99383,106480,113906,121670,129778,138240,147061,156250,165813,175760,186096,196830,207968,219520,231491,243890,256723,270000,283726,297910,312558,327680,343281,359370,375953,393040,410636,428750,447388,466560,486271,506530,527343,548720,570666,593190,616298,640000,664301,689210,714733,740880,767656,795070,823128,851840,881211,911250,941963,973360,1005446,1038230,1071718,1105920,1140841,1176490,1212873,1250000],
[0,0,8,27,64,125,216,343,512,729,1000,1331,1728,2197,2744,3375,4096,4913,5832,6859,8000,9261,10648,12167,13824,15625,17576,19683,21952,24389,27000,29791,32768,35937,39304,42875,46656,50653,54872,59319,64000,68921,74088,79507,85184,91125,97336,103823,110592,117649,125000,132651,140608,148877,157464,166375,175616,185193,195112,205379,216000,226981,238328,250047,262144,274625,287496,300763,314432,328509,343000,357911,373248,389017,405224,421875,438976,456533,474552,493039,512000,531441,551368,571787,592704,614125,636056,658503,681472,704969,729000,753571,778688,804357,830584,857375,884736,912673,941192,970299,1000000],
[0,0,6,21,51,100,172,274,409,583,800,1064,1382,1757,2195,2700,3276,3930,4665,5487,6400,7408,8518,9733,11059,12500,14060,15746,17561,19511,21600,23832,26214,28749,31443,34300,37324,40522,43897,47455,51200,55136,59270,63605,68147,72900,77868,83058,88473,94119,100000,106120,112486,119101,125971,133100,140492,148154,156089,164303,172800,181584,190662,200037,209715,219700,229996,240610,251545,262807,274400,286328,298598,311213,324179,337500,351180,365226,379641,394431,409600,425152,441094,457429,474163,491300,508844,526802,545177,563975,583200,602856,622950,643485,664467,685900,707788,730138,752953,776239,800000],
[0,0,9,57,96,135,179,236,314,419,560,742,973,1261,1612,2035,2535,3120,3798,4575,5460,6458,7577,8825,10208,11735,13411,15244,17242,19411,21760,24294,27021,29949,33084,36435,40007,43808,47846,52127,56660,61450,66505,71833,77440,83335,89523,96012,102810,109923,117360,125126,133229,141677,150476,159635,169159,179056,189334,199999,211060,222522,234393,246681,259392,272535,286115,300140,314618,329555,344960,360838,377197,394045,411388,429235,447591,466464,485862,505791,526260,547274,568841,590969,613664,636935,660787,685228,710266,735907,762160,789030,816525,844653,873420,902835,932903,963632,995030,1027103,1059860],
[0,0,15,52,122,237,406,637,942,1326,1800,2369,3041,3822,4719,5737,6881,8155,9564,11111,12800,14632,16610,18737,21012,23437,26012,28737,31610,34632,37800,41111,44564,48155,51881,55737,59719,63822,68041,72369,76800,81326,85942,90637,95406,100237,105122,110052,115015,120001,125000,131324,137795,144410,151165,158056,165079,172229,179503,186894,194400,202013,209728,217540,225443,233431,241496,249633,257834,267406,276458,286328,296358,305767,316074,326531,336255,346965,357812,367807,378880,390077,400293,411686,423190,433572,445239,457001,467489,479378,491346,501878,513934,526049,536557,548720,560922,571333,583539,591882,600000],
[0,0,4,13,32,65,112,178,276,393,540,745,967,1230,1591,1957,2457,3046,3732,4526,5440,6482,7666,9003,10506,12187,14060,16140,18439,20974,23760,26811,30146,33780,37731,42017,46656,50653,55969,60505,66560,71677,78533,84277,91998,98415,107069,114205,123863,131766,142500,151222,163105,172697,185807,196322,210739,222231,238036,250562,267840,281456,300293,315059,335544,351520,373744,390991,415050,433631,459620,479600,507617,529063,559209,582187,614566,639146,673863,700115,737280,765275,804997,834809,877201,908905,954084,987754,1035837,1071552,1122660,1160499,1214753,1254796,1312322,1354652,1415577,1460276,1524731,1571884,1640000]];

var items = [
"None",
"Master Ball",
"Ultra Ball",
"Great Ball",
"Poke Ball",
"Safari Ball",
"Net Ball",
"Dive Ball",
"Nest Ball",
"Repeat Ball",
"Timer Ball",
"Luxury Ball",
"Premier Ball",
"Dusk Ball",
"Heal Ball",
"Quick Ball",
"Cherish Ball",
"Potion",
"Antidote",
"Burn Heal",
"Ice Heal",
"Awakening",
"Paralyze Heal",
"Full Restore",
"Max Potion",
"Hyper Potion",
"Super Potion",
"Full Heal",
"Revive",
"Max Revive",
"Fresh Water",
"Soda Pop",
"Lemonade",
"Moomoo Milk",
"Energy Powder",
"Energy Root",
"Heal Powder",
"Revival Herb",
"Ether",
"Max Ether",
"Elixir",
"Max Elixir",
"Lava Cookie",
"Berry Juice",
"Sacred Ash",
"HP Up",
"Protein",
"Iron",
"Carbos",
"Calcium",
"Rare Candy",
"PP Up",
"Zinc",
"PP Max",
"Old Gateau",
"Guard Spec.",
"Dire Hit",
"X Attack",
"X Defense",
"X Speed",
"X Accuracy",
"X Sp. Atk",
"X Sp. Def",
"Poke Doll",
"Fluffy Tail",
"Blue Flute",
"Yellow Flute",
"Red Flute",
"Black Flute",
"White Flute",
"Shoal Salt",
"Shoal Shell",
"Red Shard",
"Blue Shard",
"Yellow Shard",
"Green Shard",
"Super Repel",
"Max Repel",
"Escape Rope",
"Repel",
"Sun Stone",
"Moon Stone",
"Fire Stone",
"Thunder Stone",
"Water Stone",
"Leaf Stone",
"Tiny Mushroom",
"Big Mushroom",
"Pearl",
"Big Pearl",
"Stardust",
"Star Piece",
"Nugget",
"Heart Scale",
"Honey",
"Growth Mulch",
"Damp Mulch",
"Stable Mulch",
"Gooey Mulch",
"Root Fossil",
"Claw Fossil",
"Helix Fossil",
"Dome Fossil",
"Old Amber",
"Armor Fossil",
"Skull Fossil",
"Rare Bone",
"Shiny Stone",
"Dusk Stone",
"Dawn Stone",
"Oval Stone",
"Odd Keystone",
"Griseous Orb",
"???",
"???",
"???",
"Douse Drive",
"Shock Drive",
"Burn Drive",
"Chill Drive",
"???",
"???",
"???",
"???",
"???",
"???",
"???",
"???",
"???",
"???",
"???",
"???",
"???",
"???",
"Sweet Heart",
"Adamant Orb",
"Lustrous Orb",
"Greet Mail",
"Favored Mail",
"RSVP Mail",
"Thanks Mail",
"Inquiry Mail",
"Like Mail",
"Reply Mail",
"Bridge Mail S",
"Bridge Mail D",
"Bridge Mail T",
"Bridge Mail V",
"Bridge Mail M",
"Cheri Berry",
"Chesto Berry",
"Pecha Berry",
"Rawst Berry",
"Aspear Berry",
"Leppa Berry",
"Oran Berry",
"Persim Berry",
"Lum Berry",
"Sitrus Berry",
"Figy Berry",
"Wiki Berry",
"Mago Berry",
"Aguav Berry",
"Iapapa Berry",
"Razz Berry",
"Bluk Berry",
"Nanab Berry",
"Wepear Berry",
"Pinap Berry",
"Pomeg Berry",
"Kelpsy Berry",
"Qualot Berry",
"Hondew Berry",
"Grepa Berry",
"Tamato Berry",
"Cornn Berry",
"Magost Berry",
"Rabuta Berry",
"Nomel Berry",
"Spelon Berry",
"Pamtre Berry",
"Watmel Berry",
"Durin Berry",
"Belue Berry",
"Occa Berry",
"Passho Berry",
"Wacan Berry",
"Rindo Berry",
"Yache Berry",
"Chople Berry",
"Kebia Berry",
"Shuca Berry",
"Coba Berry",
"Payapa Berry",
"Tanga Berry",
"Charti Berry",
"Kasib Berry",
"Haban Berry",
"Colbur Berry",
"Babiri Berry",
"Chilan Berry",
"Liechi Berry",
"Ganlon Berry",
"Salac Berry",
"Petaya Berry",
"Apicot Berry",
"Lansat Berry",
"Starf Berry",
"Enigma Berry",
"Micle Berry",
"Custap Berry",
"Jaboca Berry",
"Rowap Berry",
"Bright Powder",
"White Herb",
"Macho Brace",
"Exp. Share",
"Quick Claw",
"Soothe Bell",
"Mental Herb",
"Choice Band",
"King’s Rock",
"Silver Powder",
"Amulet Coin",
"Cleanse Tag",
"Soul Dew",
"Deep Sea Tooth",
"Deep Sea Scale",
"Smoke Ball",
"Everstone",
"Focus Band",
"Lucky Egg",
"Scope Lens",
"Metal Coat",
"Leftovers",
"Dragon Scale",
"Light Ball",
"Soft Sand",
"Hard Stone",
"Miracle Seed",
"Black Glasses",
"Black Belt",
"Magnet",
"Mystic Water",
"Sharp Beak",
"Poison Barb",
"Never-Melt Ice",
"Spell Tag",
"Twisted Spoon",
"Charcoal",
"Dragon Fang",
"Silk Scarf",
"Up-Grade",
"Shell Bell",
"Sea Incense",
"Lax Incense",
"Lucky Punch",
"Metal Powder",
"Thick Club",
"Stick",
"Red Scarf",
"Blue Scarf",
"Pink Scarf",
"Green Scarf",
"Yellow Scarf",
"Wide Lens",
"Muscle Band",
"Wise Glasses",
"Expert Belt",
"Light Clay",
"Life Orb",
"Power Herb",
"Toxic Orb",
"Flame Orb",
"Quick Powder",
"Focus Sash",
"Zoom Lens",
"Metronome",
"Iron Ball",
"Lagging Tail",
"Destiny Knot",
"Black Sludge",
"Icy Rock",
"Smooth Rock",
"Heat Rock",
"Damp Rock",
"Grip Claw",
"Choice Scarf",
"Sticky Barb",
"Power Bracer",
"Power Belt",
"Power Lens",
"Power Band",
"Power Anklet",
"Power Weight",
"Shed Shell",
"Big Root",
"Choice Specs",
"Flame Plate",
"Splash Plate",
"Zap Plate",
"Meadow Plate",
"Icicle Plate",
"Fist Plate",
"Toxic Plate",
"Earth Plate",
"Sky Plate",
"Mind Plate",
"Insect Plate",
"Stone Plate",
"Spooky Plate",
"Draco Plate",
"Dread Plate",
"Iron Plate",
"Odd Incense",
"Rock Incense",
"Full Incense",
"Wave Incense",
"Rose Incense",
"Luck Incense",
"Pure Incense",
"Protector",
"Electirizer",
"Magmarizer",
"Dubious Disc",
"Reaper Cloth",
"Razor Claw",
"Razor Fang",
"TM01",
"TM02",
"TM03",
"TM04",
"TM05",
"TM06",
"TM07",
"TM08",
"TM09",
"TM10",
"TM11",
"TM12",
"TM13",
"TM14",
"TM15",
"TM16",
"TM17",
"TM18",
"TM19",
"TM20",
"TM21",
"TM22",
"TM23",
"TM24",
"TM25",
"TM26",
"TM27",
"TM28",
"TM29",
"TM30",
"TM31",
"TM32",
"TM33",
"TM34",
"TM35",
"TM36",
"TM37",
"TM38",
"TM39",
"TM40",
"TM41",
"TM42",
"TM43",
"TM44",
"TM45",
"TM46",
"TM47",
"TM48",
"TM49",
"TM50",
"TM51",
"TM52",
"TM53",
"TM54",
"TM55",
"TM56",
"TM57",
"TM58",
"TM59",
"TM60",
"TM61",
"TM62",
"TM63",
"TM64",
"TM65",
"TM66",
"TM67",
"TM68",
"TM69",
"TM70",
"TM71",
"TM72",
"TM73",
"TM74",
"TM75",
"TM76",
"TM77",
"TM78",
"TM79",
"TM80",
"TM81",
"TM82",
"TM83",
"TM84",
"TM85",
"TM86",
"TM87",
"TM88",
"TM89",
"TM90",
"TM91",
"TM92",
"HM01",
"HM02",
"HM03",
"HM04",
"HM05",
"HM06",
"???",
"???",
"Explorer Kit",
"Loot Sack",
"Rule Book",
"Poke Radar",
"Point Card",
"Journal",
"Seal Case",
"Fashion Case",
"Seal Bag",
"Pal Pad",
"Works Key",
"Old Charm",
"Galactic Key",
"Red Chain",
"Town Map",
"Vs. Seeker",
"Coin Case",
"Old Rod",
"Good Rod",
"Super Rod",
"Sprayduck",
"Poffin Case",
"Bike",
"Suite Key",
"Oak’s Letter",
"Lunar Wing",
"Member Card",
"Azure Flute",
"S.S. Ticket",
"Contest Pass",
"Magma Stone",
"Parcel",
"Coupon 1",
"Coupon 2",
"Coupon 3",
"Storage Key",
"Secret Potion",
"Vs. Recorder",
"Gracidea",
"Secret Key",
"Apricorn Box",
"Unown Report",
"Berry Pots",
"Dowsing Machine",
"Blue Card",
"Slowpoke Tail",
"Clear Bell",
"Card Key",
"Basement Key",
"Squirt Bottle",
"Red Scale",
"Lost Item",
"Pass",
"Machine Part",
"Silver Wing",
"Rainbow Wing",
"Mystery Egg",
"Red Apricorn",
"Blue Apricorn",
"Yellow Apricorn",
"Green Apricorn",
"Pink Apricorn",
"White Apricorn",
"Black Apricorn",
"Fast Ball",
"Level Ball",
"Lure Ball",
"Heavy Ball",
"Love Ball",
"Friend Ball",
"Moon Ball",
"Sport Ball",
"Park Ball",
"Photo Album",
"GB Sounds",
"Tidal Bell",
"Rage Candy Bar",
"Data Card 01",
"Data Card 02",
"Data Card 03",
"Data Card 04",
"Data Card 05",
"Data Card 06",
"Data Card 07",
"Data Card 08",
"Data Card 09",
"Data Card 10",
"Data Card 11",
"Data Card 12",
"Data Card 13",
"Data Card 14",
"Data Card 15",
"Data Card 16",
"Data Card 17",
"Data Card 18",
"Data Card 19",
"Data Card 20",
"Data Card 21",
"Data Card 22",
"Data Card 23",
"Data Card 24",
"Data Card 25",
"Data Card 26",
"Data Card 27",
"Jade Orb",
"Lock Capsule",
"Red Orb",
"Blue Orb",
"Enigma Stone",
"Prism Scale",
"Eviolite",
"Float Stone",
"Rocky Helmet",
"Air Balloon",
"Red Card",
"Ring Target",
"Binding Band",
"Absorb Bulb",
"Cell Battery",
"Eject Button",
"Fire Gem",
"Water Gem",
"Electric Gem",
"Grass Gem",
"Ice Gem",
"Fighting Gem",
"Poison Gem",
"Ground Gem",
"Flying Gem",
"Psychic Gem",
"Bug Gem",
"Rock Gem",
"Ghost Gem",
"Dragon Gem",
"Dark Gem",
"Steel Gem",
"Normal Gem",
"Health Wing",
"Muscle Wing",
"Resist Wing",
"Genius Wing",
"Clever Wing",
"Swift Wing",
"Pretty Wing",
"Cover Fossil",
"Plume Fossil",
"Liberty Pass",
"Pass Orb",
"Dream Ball",
"Poke Toy",
"Prop Case",
"Dragon Skull",
"Balm Mushroom",
"Big Nugget",
"Pearl String",
"Comet Shard",
"Relic Copper",
"Relic Silver",
"Relic Gold",
"Relic Vase",
"Relic Band",
"Relic Statue",
"Relic Crown",
"Casteliacone",
"Dire Hit 2",
"X Speed 2",
"X Sp. Atk 2",
"X Sp. Def 2",
"X Defense 2",
"X Attack 2",
"X Accuracy 2",
"X Speed 3",
"X Sp. Atk 3",
"X Sp. Def 3",
"X Defense 3",
"X Attack 3",
"X Accuracy 3",
"X Speed 6",
"X Sp. Atk 6",
"X Sp. Def 6",
"X Defense 6",
"X Attack 6",
"X Accuracy 6",
"Ability Urge",
"Item Drop",
"Item Urge",
"Reset Urge",
"Dire Hit 3",
"Light Stone",
"Dark Stone",
"TM93",
"TM94",
"TM95",
"Xtransceiver",
"???",
"Gram 1",
"Gram 2",
"Gram 3",
"Xtransceiver",
"Medal Box",
"DNA Splicers",
"DNA Splicers",
"Permit",
"Oval Charm",
"Shiny Charm",
"Plasma Card",
"Grubby Hanky",
"Colress Machine",
"Dropped Item",
"Dropped Item",
"Reveal Glass",
"Weakness Policy",
"Assault Vest",
"Holo Caster",
"Prof’s Letter",
"Roller Skates",
"Pixie Plate",
"Ability Capsule",
"Whipped Dream",
"Sachet",
"Luminous Moss",
"Snowball",
"Safety Goggles",
"Poke Flute",
"Rich Mulch",
"Surprise Mulch",
"Boost Mulch",
"Amaze Mulch",
"Gengarite",
"Gardevoirite",
"Ampharosite",
"Venusaurite",
"Charizardite X",
"Blastoisinite",
"Mewtwonite X",
"Mewtwonite Y",
"Blazikenite",
"Medichamite",
"Houndoominite",
"Aggronite",
"Banettite",
"Tyranitarite",
"Scizorite",
"Pinsirite",
"Aerodactylite",
"Lucarionite",
"Abomasite",
"Kangaskhanite",
"Gyaradosite",
"Absolite",
"Charizardite Y",
"Alakazite",
"Heracronite",
"Mawilite",
"Manectite",
"Garchompite",
"Latiasite",
"Latiosite",
"Roseli Berry",
"Kee Berry",
"Maranga Berry",
"Sprinklotad",
"TM96",
"TM97",
"TM98",
"TM99",
"TM100",
"Power Plant Pass",
"Mega Ring",
"Intriguing Stone",
"Common Stone",
"Discount Coupon",
"Elevator Key",
"TMV Pass",
"Honor of Kalos",
"Adventure Rules",
"Strange Souvenir",
"Lens Case",
"Travel Trunk",
"Travel Trunk",
"Lumiose Galette",
"Shalour Sable",
"Jaw Fossil",
"Sail Fossil",
"Looker Ticket",
"Bike",
"Holo Caster",
"Fairy Gem",
"Mega Charm",
"Mega Glove",
"Mach Bike",
"Acro Bike",
"Wailmer Pail",
"Devon Parts",
"Soot Sack",
"Basement Key",
"Pokeblock Kit",
"Letter",
"Eon Ticket",
"Scanner",
"Go-Goggles",
"Meteorite",
"Key to Room 1",
"Key to Room 2",
"Key to Room 4",
"Key to Room 6",
"Storage Key",
"Devon Scope",
"S.S. Ticket",
"HM07",
"Devon Scuba Gear",
"Contest Costume",
"Contest Costume",
"Magma Suit",
"Aqua Suit",
"Pair of Tickets",
"Mega Bracelet",
"Mega Pendant",
"Mega Glasses",
"Mega Anchor",
"Mega Stickpin",
"Mega Tiara",
"Mega Anklet",
"Meteorite",
"Swampertite",
"Sceptilite",
"Sablenite",
"Altarianite",
"Galladite",
"Audinite",
"Metagrossite",
"Sharpedonite",
"Slowbronite",
"Steelixite",
"Pidgeotite",
"Glalitite",
"Diancite",
"Prison Bottle",
"Mega Cuff",
"Cameruptite",
"Lopunnite",
"Salamencite",
"Beedrillite",
"Meteorite",
"Meteorite",
"Key Stone",
"Meteorite Shard",
"Eon Flute"
]

var countries = [[1,"Japan",[[000,"-"],[002,"Tokyo"],[003,"Hokkaido"],[004,"Aomori"],[005,"Iwate"],[006,"Miyagi"],[007,"Akita"],[008,"Yamagata"],[009,"Fukushima"],[010,"Ibaraki"],[011,"Tochigi"],[012,"Gunma"],[013,"Saitama"],[014,"Chiba"],[015,"Kanagawa"],[016,"Toyama"],[017,"Ishikawa"],[018,"Fukui"],[019,"Yamanashi"],[020,"Nagano"],[021,"Niigata"],[022,"Gifu"],[023,"Shizuoka"],[024,"Aichi"],[025,"Mie"],[026,"Shiga"],[027,"Kyoto"],[028,"Osaka"],[029,"Hyogo"],[030,"Nara"],[031,"Wakayama"],[032,"Tottori"],[033,"Shimane"],[034,"Okayama"],[035,"Hiroshima"],[036,"Yamaguchi"],[037,"Tokushima"],[038,"Kagawa"],[039,"Ehime"],[040,"Kochi"],[041,"Fukuoka"],[042,"Saga"],[043,"Nagasaki"],[044,"Kumamoto"],[045,"Oita"],[046,"Miyazaki"],[047,"Kagoshima"],[048,"Okinawa"]]],
[8,"Anguilla",[[000,"-"],[001,"Anguilla"]]],
[9,"Antigua and Barbuda",[[000,"-"],[002,"Saint John"],[003,"Barbuda"],[004,"Saint George"],[005,"Saint Mary"],[006,"Saint Paul"],[007,"Saint Peter"],[008,"Saint Philip"]]],
[10,"Argentina",[[000,"-"],[002,"Distrito Federal"],[003,"Buenos Aires"],[004,"Catamarca"],[005,"Chaco"],[006,"Chubut"],[007,"Córdoba"],[008,"Corrientes"],[009,"Entre Ríos"],[010,"Formosa"],[011,"Jujuy"],[012,"La Pampa"],[013,"La Rioja"],[014,"Mendoza"],[015,"Misiones"],[016,"Neuquén"],[017,"Río Negro"],[018,"Salta"],[019,"San Juan"],[020,"San Luis"],[021,"Santa Cruz"],[022,"Santa Fe"],[023,"Santiago del Estero"],[024,"Tierra del Fuego"],[025,"Tucumán"]]],
[11,"Aruba",[[000,"-"],[001,"Aruba"]]],
[12,"Bahamas",[[000,"-"],[001,"Bahamas"]]],
[13,"Barbados",[[000,"-"],[001,"Barbados"]]],
[14,"Belize",[[000,"-"],[002,"Cayo"],[003,"Belize"],[004,"Corozal"],[005,"Orange Walk"],[006,"Stann Creek"],[007,"Toledo"]]],
[15,"Bolivia",[[000,"-"],[002,"La Paz"],[003,"Chuquisaca"],[004,"Cochabamba"],[005,"El Beni"],[006,"Oruro"],[007,"Pando"],[008,"Potosí"],[009,"Santa Cruz"],[010,"Tarija"]]],
[16,"Brazil",[[000,"-"],[002,"Distrito Federal"],[003,"Acre"],[004,"Alagoas"],[005,"Amapá"],[006,"Amazonas"],[007,"Bahia"],[008,"Ceará"],[009,"Espírito Santo"],[010,"Mato Grosso do Sul"],[011,"Maranhão"],[012,"Mato Grosso"],[013,"Minas Gerais"],[014,"Pará"],[015,"Paraíba"],[016,"Paraná"],[017,"Piauí"],[018,"Rio de Janeiro"],[019,"Rio Grande do Norte"],[020,"Rio Grande do Sul"],[021,"Rondônia"],[022,"Roraima"],[023,"Santa Catarina"],[024,"São Paulo"],[025,"Sergipe"],[026,"Goiás"],[027,"Pernambuco"],[028,"Tocantins"]]],
[17,"British Virgin Islands",[[000,"-"],[001,"British Virgin Islands"]]],
[18,"Canada",[[000,"-"],[002,"Ontario"],[003,"Alberta"],[004,"British Columbia"],[005,"Manitoba"],[006,"New Brunswick"],[007,"Newfoundland and Labrador"],[008,"Nova Scotia"],[009,"Prince Edward Island"],[010,"Quebec"],[011,"Saskatchewan"],[012,"Yukon"],[013,"Northwest Territories"],[014,"Nunavut"]]],
[19,"Cayman Islands",[[000,"-"],[001,"Cayman Islands"]]],
[20,"Chile",[[000,"-"],[002,"Región Metropolitana"],[003,"Valparaíso"],[004,"Aisén del General Carlos Ibáñez del Campo"],[005,"Antofagasta"],[006,"Araucanía"],[007,"Atacama"],[008,"Bío-Bío"],[009,"Coquimbo"],[010,"Libertador General Bernardo O'Higgins"],[011,"Los Lagos"],[012,"Magallanes y Antártica Chilena"],[013,"Maule"],[014,"Tarapacá"]]],
[21,"Colombia",[[000,"-"],[002,"Distrito Capital"],[003,"Cundinamarca"],[004,"Amazonas"],[005,"Antioquia"],[006,"Arauca"],[007,"Atlántico"],[008,"Bolívar"],[009,"Boyacá"],[010,"Caldas"],[011,"Caquetá"],[012,"Cauca"],[013,"Cesar"],[014,"Chocó"],[015,"Córdoba"],[016,"Guaviare"],[017,"Guainía"],[018,"Huila"],[019,"La Guajira"],[020,"Magdalena"],[021,"Meta"],[022,"Nariño"],[023,"Norte de Santander"],[024,"Putumayo"],[025,"Quindío"],[026,"Risaralda"],[027,"Archipiélago de San Andrés"],[028,"Santander"],[029,"Sucre"],[030,"Tolima"],[031,"Valle del Cauca"],[032,"Vaupés"],[033,"Vichada"],[034,"Casanare"]]],
[22,"Costa Rica",[[000,"-"],[002,"San José"],[003,"Alajuela"],[004,"Cartago"],[005,"Guanacaste"],[006,"Heredia"],[007,"Limón"],[008,"Puntarenas"]]],
[23,"Dominica",[[000,"-"],[001,"Dominica"]]],
[24,"Dominican Republic",[[000,"-"],[002,"Distrito Nacional"],[003,"Azua"],[004,"Baoruco"],[005,"Barahona"],[006,"Dajabón"],[007,"Duarte"],[008,"Espaillat"],[009,"Independencia"],[010,"La Altagracia"],[011,"Elías Piña"],[012,"La Romana"],[013,"María Trinidad Sánchez"],[014,"Monte Cristi"],[015,"Pedernales"],[016,"Peravia"],[017,"Puerto Plata"],[018,"Salcedo"],[019,"Samaná"],[020,"Sánchez Ramírez"],[021,"San Juan"],[022,"San Pedro de Macorís"],[023,"Santiago"],[024,"Santiago Rodríguez"],[025,"Valverde"],[026,"El Seíbo"],[027,"Hato Mayor"],[028,"La Vega"],[029,"Monseñor Nouel"],[030,"Monte Plata"],[031,"San Cristóbal"]]],
[25,"Ecuador",[[000,"-"],[002,"Pichincha"],[003,"Galápagos"],[004,"Azuay"],[005,"Bolívar"],[006,"Cañar"],[007,"Carchi"],[008,"Chimborazo"],[009,"Cotopaxi"],[010,"El Oro"],[011,"Esmeraldas"],[012,"Guayas"],[013,"Imbabura"],[014,"Loja"],[015,"Los Ríos"],[016,"Manabí"],[017,"Morona-Santiago"],[018,"Pastaza"],[019,"Tungurahua"],[020,"Zamora-Chinchipe"],[021,"Sucumbios"],[022,"Napo"],[023,"Orellana"],[024,"Santa Elena"],[025,"Santo Domingo de los Tsáchilas"]]],
[26,"El Salvador",[[000,"-"],[002,"San Salvador"],[003,"Ahuachapán"],[004,"Cabañas"],[005,"Chalatenango"],[006,"Cuscatlán"],[007,"La Libertad"],[008,"La Paz"],[009,"La Unión"],[010,"Morazán"],[011,"San Miguel"],[012,"Santa Ana"],[013,"San Vicente"],[014,"Sonsonate"],[015,"Usulután"]]],
[27,"French Guiana",[[000,"-"],[001,"French Guiana"]]],
[28,"Grenada",[[000,"-"],[001,"Grenada"]]],
[29,"Guadeloupe",[[000,"-"],[001,"Guadeloupe"]]],
[30,"Guatemala",[[000,"-"],[002,"Guatemala"],[003,"Alta Verapaz"],[004,"Baja Verapaz"],[005,"Chimaltenango"],[006,"Chiquimula"],[007,"El Progreso"],[008,"Escuintla"],[009,"Huehuetenango"],[010,"Izabal"],[011,"Jalapa"],[012,"Jutiapa"],[013,"Petén"],[014,"Quetzaltenango"],[015,"Quiché"],[016,"Retalhuleu"],[017,"Sacatepéquez"],[018,"San Marcos"],[019,"Santa Rosa"],[020,"Sololá"],[021,"Suchitepéquez"],[022,"Totonicapán"],[023,"Zacapa"]]],
[31,"Guyana",[[000,"-"],[002,"Demerara-Mahaica"],[003,"Barima-Waini"],[004,"Cuyuni-Mazaruni"],[005,"East Berbice-Corentyne"],[006,"Essequibo Islands-West Demerara"],[007,"Mahaica-Berbice"],[008,"Pomeroon-Supenaam"],[009,"Potaro-Siparuni"],[010,"Upper Demerara-Berbice"],[011,"Upper Takutu-Upper Essequibo"]]],
[32,"Haiti",[[000,"-"],[002,"Ouest"],[003,"Nord-Ouest"],[004,"Artibonite"],[005,"Centre"],[006,"Grand'Anse"],[007,"Nord"],[008,"Nord-Est"],[009,"Sud"],[010,"Sud-Est"],[011,"Nippes"]]],
[33,"Honduras",[[000,"-"],[002,"Francisco Morazán"],[003,"Atlántida"],[004,"Choluteca"],[005,"Colón"],[006,"Comayagua"],[007,"Copán"],[008,"Cortés"],[009,"El Paraíso"],[010,"Gracias a Dios"],[011,"Intibucá"],[012,"Islas de la Bahía"],[013,"La Paz"],[014,"Lempira"],[015,"Ocotepeque"],[016,"Olancho"],[017,"Santa Bárbara"],[018,"Valle"],[019,"Yoro"]]],
[34,"Jamaica",[[000,"-"],[002,"Saint Thomas"],[003,"Clarendon"],[004,"Hanover"],[005,"Manchester"],[006,"Portland"],[007,"Saint Andrew"],[008,"Saint Ann"],[009,"Saint Catherine"],[010,"Saint Elizabeth"],[011,"Saint James"],[012,"Saint Mary"],[013,"Trelawny"],[014,"Westmoreland"],[015,"Kingston"]]],
[35,"Martinique",[[000,"-"],[001,"Martinique"]]],
[36,"Mexico",[[000,"-"],[002,"Distrito Federal"],[003,"Aguascalientes"],[004,"Baja California"],[005,"Baja California Sur"],[006,"Campeche"],[007,"Chiapas"],[008,"Chihuahua"],[009,"Coahuila de Zaragoza"],[010,"Colima"],[011,"Durango"],[012,"Guanajuato"],[013,"Guerrero"],[014,"Hidalgo"],[015,"Jalisco"],[016,"México"],[017,"Michoacán de Ocampo"],[018,"Morelos"],[019,"Nayarit"],[020,"Nuevo León"],[021,"Oaxaca"],[022,"Puebla"],[023,"Querétaro de Arteaga"],[024,"Quintana Roo"],[025,"San Luis Potosí"],[026,"Sinaloa"],[027,"Sonora"],[028,"Tabasco"],[029,"Tamaulipas"],[030,"Tlaxcala"],[031,"Veracruz-Llave"],[032,"Yucatán"],[033,"Zacatecas"]]],
[37,"Montserrat",[[000,"-"],[001,"Montserrat"]]],
[38,"Netherlands Antilles",[[000,"-"],[001,"Netherlands Antilles"]]],
[39,"Nicaragua",[[000,"-"],[002,"Managua"],[003,"Boaco"],[004,"Carazo"],[005,"Chinandega"],[006,"Chontales"],[007,"Estelí"],[008,"Granada"],[009,"Jinotega"],[010,"León"],[011,"Madriz"],[012,"Masaya"],[013,"Matagalpa"],[014,"Nueva Segovia"],[015,"Río San Juan"],[016,"Rivas"],[017,"Atlántico Norte"],[018,"Atlántico Sur"]]],
[40,"Panama",[[000,"-"],[002,"Panamá"],[003,"Bocas del Toro"],[004,"Chiriquí"],[005,"Coclé"],[006,"Colón"],[007,"Darién"],[008,"Herrera"],[009,"Los Santos"],[010,"Kuna Yala"],[011,"Veraguas"]]],
[41,"Paraguay",[[000,"-"],[002,"Central"],[003,"Alto Paraná"],[004,"Amambay"],[005,"Caaguazú"],[006,"Caazapá"],[007,"Concepción"],[008,"Cordillera"],[009,"Guairá"],[010,"Itapúa"],[011,"Misiones"],[012,"Ñeembucú"],[013,"Paraguarí"],[014,"Presidente Hayes"],[015,"San Pedro"],[016,"Canindeyú"],[017,"Asunción"],[018,"Alto Paraguay"],[019,"Boquerón"]]],
[42,"Peru",[[000,"-"],[002,"Lima"],[003,"Amazonas"],[004,"Ancash"],[005,"Apurímac"],[006,"Arequipa"],[007,"Ayacucho"],[008,"Cajamarca"],[009,"Callao"],[010,"Cuzco"],[011,"Huancavelica"],[012,"Huánuco"],[013,"Ica"],[014,"Junín"],[015,"La Libertad"],[016,"Lambayeque"],[017,"Loreto"],[018,"Madre de Dios"],[019,"Moquegua"],[020,"Pasco"],[021,"Piura"],[022,"Puno"],[023,"San Martín"],[024,"Tacna"],[025,"Tumbes"],[026,"Ucayali"]]],
[43,"St. Kitts and Nevis",[[000,"-"],[002,"Saint George Basseterre"],[003,"Christ Church Nichola Town"],[004,"Saint Anne Sandy Point"],[005,"Saint George Gingerland"],[006,"Saint James Windward"],[007,"Saint John Capesterre"],[008,"Saint John Figtree"],[009,"Saint Mary Cayon"],[010,"Saint Paul Capesterre"],[011,"Saint Paul Charlestown"],[012,"Saint Peter Basseterre"],[013,"Saint Thomas Lowland"],[014,"Saint Thomas Middle Island"],[015,"Trinity Palmetto Point"]]],
[44,"St. Lucia",[[000,"-"],[001,"St. Lucia"]]],
[45,"St. Vincent and the Grenadines",[[000,"-"],[001,"St. Vincent and the Grenadines"]]],
[46,"Suriname",[[000,"-"],[002,"Paramaribo"],[003,"Brokopondo"],[004,"Commewijne"],[005,"Coronie"],[006,"Marowijne"],[007,"Nickerie"],[008,"Para"],[009,"Saramacca"],[010,"Sipaliwini"],[011,"Wanica"]]],
[47,"Trinidad and Tobago",[[000,"-"],[002,"Port-of-Spain"],[003,"Arima"],[004,"Caroni"],[005,"Mayaro"],[006,"Nariva"],[007,"Saint Andrew"],[008,"Saint David"],[009,"Saint George"],[010,"Saint Patrick"],[011,"San Fernando"],[012,"Tobago"],[013,"Victoria"],[014,"Point Fortin"]]],
[48,"Turks and Caicos Islands",[[000,"-"],[001,"Turks and Caicos Islands"]]],
[49,"United States",[[000,"-"],[002,"District of Columbia"],[003,"Alaska"],[004,"Alabama"],[005,"Arkansas"],[006,"Arizona"],[007,"California"],[008,"Colorado"],[009,"Connecticut"],[010,"Delaware"],[011,"Florida"],[012,"Georgia"],[013,"Hawaii"],[014,"Iowa"],[015,"Idaho"],[016,"Illinois"],[017,"Indiana"],[018,"Kansas"],[019,"Kentucky"],[020,"Louisiana"],[021,"Massachusetts"],[022,"Maryland"],[023,"Maine"],[024,"Michigan"],[025,"Minnesota"],[026,"Missouri"],[027,"Mississippi"],[028,"Montana"],[029,"North Carolina"],[030,"North Dakota"],[031,"Nebraska"],[032,"New Hampshire"],[033,"New Jersey"],[034,"New Mexico"],[035,"Nevada"],[036,"New York"],[037,"Ohio"],[038,"Oklahoma"],[039,"Oregon"],[040,"Pennsylvania"],[041,"Rhode Island"],[042,"South Carolina"],[043,"South Dakota"],[044,"Tennessee"],[045,"Texas"],[046,"Utah"],[047,"Virginia"],[048,"Vermont"],[049,"Washington"],[050,"Wisconsin"],[051,"West Virginia"],[052,"Wyoming"],[053,"Puerto Rico"]]],
[50,"Uruguay",[[000,"-"],[002,"Montevideo"],[003,"Artigas"],[004,"Canelones"],[005,"Cerro Largo"],[006,"Colonia"],[007,"Durazno"],[008,"Flores"],[009,"Florida"],[010,"Lavalleja"],[011,"Maldonado"],[012,"Paysandú"],[013,"Río Negro"],[014,"Rivera"],[015,"Rocha"],[016,"Salto"],[017,"San José"],[018,"Soriano"],[019,"Tacuarembó"],[020,"Treinta y Tres"]]],
[51,"US Virgin Islands",[[000,"-"],[001,"US Virgin Islands"]]],
[52,"Venezuela",[[000,"-"],[002,"Distrito Federal"],[003,"Amazonas"],[004,"Anzoátegui"],[005,"Apure"],[006,"Aragua"],[007,"Barinas"],[008,"Bolívar"],[009,"Carabobo"],[010,"Cojedes"],[011,"Delta Amacuro"],[012,"Falcón"],[013,"Guárico"],[014,"Lara"],[015,"Mérida"],[016,"Miranda"],[017,"Monagas"],[018,"Nueva Esparta"],[019,"Portuguesa"],[020,"Sucre"],[021,"Táchira"],[022,"Trujillo"],[023,"Yaracuy"],[024,"Zulia"],[025,"Dependencias Federales"],[026,"Vargas"]]],
[64,"Albania",[[000,"-"],[002,"Tirana"],[003,"Berat"],[004,"Dibër"],[005,"Durrës"],[006,"Elbasan"],[007,"Fier"],[008,"Gjirokastër"],[009,"Korçë"],[010,"Kukës"],[011,"Lezhë"],[012,"Shkodër"],[013,"Vlorë"]]],
[65,"Australia",[[000,"-"],[002,"Australian Capital Territory"],[003,"New South Wales"],[004,"Northern Territory"],[005,"Queensland"],[006,"South Australia"],[007,"Tasmania"],[008,"Victoria"],[009,"Western Australia"]]],
[66,"Austria",[[000,"-"],[002,"Vienna"],[003,"Burgenland"],[004,"Carinthia"],[005,"Lower Austria"],[006,"Upper Austria"],[007,"Salzburg"],[008,"Styria"],[009,"Tyrol"],[010,"Vorarlberg"]]],
[67,"Belgium",[[000,"-"],[002,"Brussels Region"],[003,"Flanders"],[004,"Wallonia"]]],
[68,"Bosnia and Herzegovina",[[000,"-"],[002,"Federation of Bosnia and Herzegovina"],[003,"Republika Srpska"],[004,"Brčko District"]]],
[69,"Botswana",[[000,"-"],[001,"Botswana"]]],
[70,"Bulgaria",[[000,"-"],[002,"Sofia City"],[003,"Sofia Province"],[004,"Blagoevgrad"],[005,"Pleven"],[006,"Vidin"],[007,"Varna"],[008,"Burgas"],[009,"Dobrich"],[010,"Gabrovo"],[011,"Haskovo"],[012,"Yambol"],[013,"Kardzhali"],[014,"Kyustendil"],[015,"Lovech"],[016,"Montana"],[017,"Pazardzhik"],[018,"Pernik"],[019,"Plovdiv"],[020,"Razgrad"],[021,"Ruse"],[022,"Silistra"],[023,"Sliven"],[024,"Smolyan"],[025,"Stara Zagora"],[026,"Shumen"],[027,"Targovishte"],[028,"Veliko Tarnovo"],[029,"Vratsa"]]],
[71,"Croatia",[[000,"-"],[006,"Zagreb"],[007,"Bjelovar-Bilogora County"],[008,"Brod-Posavina County"],[009,"Dubrovnik-Neretva County"],[010,"Istria County"],[011,"Karlovac County"],[012,"Koprivnica-Križevci County"],[013,"Krapina-Zagorje County"],[014,"Lika-Senj County"],[015,"Međimurje County"],[016,"Osijek-Baranja County"],[017,"Požega-Slavonia County"],[018,"Primorje-Gorski Kotar County"],[019,"Sisak-Moslavina County"],[020,"Split-Dalmatia County"],[021,"Šibenik-Knin County"],[022,"Varaždin County"],[023,"Virovitica-Podravina County"],[024,"Vukovar-Syrmia County"],[025,"Zadar County"],[026,"Zagreb County"]]],
[72,"Cyprus",[[000,"-"],[001,"Cyprus"]]],
[73,"Czech Republic",[[000,"-"],[002,"Prague"],[003,"Central Bohemian Region"],[004,"South Bohemian Region"],[005,"Plzeň Region"],[006,"Karlovy Vary Region"],[007,"Ústí nad Labem Region"],[008,"Liberec Region"],[009,"Hradec Králové Region"],[010,"Pardubice Region"],[011,"Olomouc Region"],[012,"Moravian-Silesian Region"],[013,"South Moravian Region"],[014,"Zlín Region"],[015,"Vysočina Region"]]],
[74,"Denmark (Kingdom of)",[[000,"-"],[018,"Greenland"],[019,"Capital Region of Denmark"],[020,"Central Denmark Region"],[021,"North Denmark Region"],[022,"Region Zealand"],[023,"Region of Southern Denmark"],[024,"Faroe Islands"]]],
[75,"Estonia",[[000,"-"],[001,"Estonia"]]],
[76,"Finland",[[000,"-"],[008,"Uusimaa / Nyland"],[009,"Lappi / Lapland"],[010,"Pohjois-Pohjanmaa / Norra Österbotten"],[011,"Kainuu / Kajanaland"],[012,"Pohjois-Karjala / Norra Karelen"],[013,"Pohjois-Savo / Norra Savolax"],[014,"Etelä-Savo / Södra Savolax"],[015,"Etelä-Pohjanmaa / Södra Österbotten"],[016,"Pohjanmaa / Österbotten"],[017,"Pirkanmaa / Birkaland"],[018,"Satakunta / Satakunda"],[019,"Keski-Pohjanmaa / Mellersta Österbotten"],[020,"Keski-Suomi / Mellersta Finland"],[021,"Varsinais-Suomi / Egentliga Finland"],[022,"Etelä-Karjala / Södra Karelen"],[023,"Päijät-Häme / Päijänne Tavastland"],[024,"Kanta-Häme / Egentliga Tavastland"],[025,"Itä-Uusimaa / Östra Nyland"],[026,"Kymenlaakso / Kymmenedalen"],[027,"Ahvenanmaa / Åland"]]],
[77,"France",[[000,"-"],[002,"Île-de-France"],[003,"Alsace"],[004,"Aquitaine"],[005,"Auvergne"],[006,"Lower Normandy"],[007,"Burgundy"],[008,"Brittany"],[009,"Centre"],[010,"Champagne-Ardenne"],[011,"Corsica"],[012,"Franche-Comté"],[013,"Upper Normandy"],[014,"Languedoc-Roussillon"],[015,"Limousin"],[016,"Lorraine"],[017,"Midi-Pyrénées"],[018,"Nord-Pas-de-Calais"],[019,"Pays de la Loire"],[020,"Picardy"],[021,"Poitou-Charentes"],[022,"Provence-Alpes-Côte d'Azur"],[023,"Rhône-Alpes"],[024,"Guadeloupe"],[025,"Martinique"],[026,"French Guiana"],[027,"Réunion"]]],
[78,"Germany",[[000,"-"],[002,"Berlin"],[003,"Hesse"],[004,"Baden-Württemberg"],[005,"Bavaria"],[006,"Brandenburg"],[007,"Bremen"],[008,"Hamburg"],[009,"Mecklenburg-Vorpommern"],[010,"Lower Saxony"],[011,"North Rhine-Westphalia"],[012,"Rhineland-Palatinate"],[013,"Saarland"],[014,"Saxony"],[015,"Saxony-Anhalt"],[016,"Schleswig-Holstein"],[017,"Thuringia"]]],
[79,"Greece",[[000,"-"],[002,"Attica"],[003,"Central Greece"],[004,"Central Macedonia"],[005,"Crete"],[006,"East Macedonia and Thrace"],[007,"Epirus"],[008,"Ionian Islands"],[009,"North Aegean"],[010,"Peloponnese"],[011,"South Aegean"],[012,"Thessaly"],[013,"West Greece"],[014,"West Macedonia"]]],
[80,"Hungary",[[000,"-"],[002,"Budapest"],[003,"Bács-Kiskun County"],[004,"Baranya County"],[005,"Békés County"],[006,"Borsod-Abaúj-Zemplén County"],[007,"Csongrád County"],[008,"Fejér County"],[009,"Győr-Moson-Sopron County"],[010,"Hajdú-Bihar County"],[011,"Heves County"],[012,"Jász-Nagykun-Szolnok County"],[013,"Komárom-Esztergom County"],[014,"Nógrád County"],[015,"Pest County"],[016,"Somogy County"],[017,"Szabolcs-Szatmár-Bereg County"],[018,"Tolna County"],[019,"Vas County"],[020,"Veszprém County"],[021,"Zala County"]]],
[81,"Iceland",[[000,"-"],[001,"Iceland"]]],
[82,"Ireland",[[000,"-"],[002,"Dublin"],[010,"County Carlow"],[011,"County Cavan"],[012,"County Clare"],[013,"County Cork"],[014,"County Donegal"],[015,"County Galway"],[016,"County Kerry"],[017,"County Kildare"],[018,"County Kilkenny"],[019,"County Laois"],[020,"County Leitrim"],[021,"County Limerick"],[022,"County Longford"],[023,"County Louth"],[024,"County Mayo"],[025,"County Meath"],[026,"County Monaghan"],[027,"County Offaly"],[028,"County Roscommon"],[029,"County Sligo"],[030,"County Tipperary"],[031,"County Waterford"],[032,"County Westmeath"],[033,"County Wexford"],[034,"County Wicklow"]]],
[83,"Italy",[[000,"-"],[002,"Lazio"],[003,"Aosta Valley"],[004,"Piedmont"],[005,"Liguria"],[006,"Lombardy"],[007,"Trentino-Alto Adige"],[008,"Veneto"],[009,"Friuli Venezia Giulia"],[010,"Emilia-Romagna"],[011,"Tuscany"],[012,"Umbria"],[013,"Marche"],[014,"Abruzzo"],[015,"Molise"],[016,"Campania"],[017,"Apulia"],[018,"Basilicata"],[019,"Calabria"],[020,"Sicily"],[021,"Sardinia"]]],
[84,"Latvia",[[000,"-"],[001,"Latvia"]]],
[85,"Lesotho",[[000,"-"],[002,"Maseru"],[003,"Berea"],[004,"Butha-Buthe"],[005,"Leribe"],[006,"Mafeteng"],[007,"Mohale's Hoek"],[008,"Mokhotlong"],[009,"Qacha's Nek"],[010,"Quthing"],[011,"Thaba-Tseka"]]],
[86,"Liechtenstein",[[000,"-"],[001,"Liechtenstein"]]],
[87,"Lithuania",[[000,"-"],[002,"Vilnius"],[003,"Alytus"],[004,"Kaunas"],[005,"Klaipėda"],[006,"Marijampolė"],[007,"Panevėžys"],[008,"Šiauliai"],[009,"Taurage"],[010,"Telšiai"],[011,"Utena"]]],
[88,"Luxembourg",[[000,"-"],[001,"Luxembourg"]]],
[89,"Macedonia (Republic of)",[[000,"-"],[001,"Macedonia (Republic of)"]]],
[90,"Malta",[[000,"-"],[001,"Malta"]]],
[91,"Montenegro",[[000,"-"],[001,"Montenegro"]]],
[92,"Mozambique",[[000,"-"],[001,"Mozambique"]]],
[93,"Namibia",[[000,"-"],[001,"Namibia"]]],
[94,"Netherlands",[[000,"-"],[002,"North Holland"],[003,"Drenthe"],[004,"Flevoland"],[005,"Friesland"],[006,"Gelderland"],[007,"Groningen"],[008,"Limburg"],[009,"North Brabant"],[010,"Overijssel"],[011,"South Holland"],[012,"Utrecht"],[013,"Zeeland"]]],
[95,"New Zealand",[[000,"-"],[002,"Wellington"],[003,"Auckland"],[004,"Bay of Plenty"],[005,"Canterbury"],[006,"Otago"],[007,"Hawke's Bay"],[008,"Manawatu-Wanganui"],[009,"Nelson"],[010,"Northland"],[012,"Southland"],[013,"Taranaki"],[014,"Waikato"],[015,"Gisborne"],[016,"West Coast"],[017,"Marlborough"],[018,"Tasman"]]],
[96,"Norway",[[000,"-"],[007,"Oslo"],[008,"Akershus"],[009,"Aust-Agder"],[010,"Buskerud"],[011,"Finnmark"],[012,"Hedmark"],[013,"Hordaland"],[014,"Møre og Romsdal"],[015,"Nordland"],[016,"Nord-Trøndelag"],[017,"Oppland"],[018,"Rogaland"],[019,"Sogn og Fjordane"],[020,"Sør-Trøndelag"],[021,"Telemark"],[022,"Troms"],[023,"Vest-Agder"],[024,"Vestfold"],[025,"Østfold"],[026,"Svalbard"]]],
[97,"Poland",[[000,"-"],[002,"Masovia"],[003,"Lower Silesia"],[004,"Kuyavian-Pomeranian Voivodeship"],[005,"Lodz"],[006,"Lublin"],[007,"Lubusz"],[008,"Lesser Poland"],[009,"Opole"],[010,"Subcarpathia"],[011,"Podlachia"],[012,"Pomerania"],[013,"Silesia"],[014,"Świętokrzyskie"],[015,"Warmian-Masurian Voivodeship"],[016,"Greater Poland"],[017,"Western Pomerania"]]],
[98,"Portugal",[[000,"-"],[002,"Lisbon"],[007,"Madeira"],[008,"Azores"],[009,"Aveiro"],[010,"Beja"],[011,"Braga"],[012,"Bragança"],[013,"Castelo Branco"],[014,"Coimbra"],[015,"Évora"],[016,"Faro"],[017,"Guarda"],[018,"Leiria"],[019,"Portalegre"],[020,"Porto"],[021,"Santarém"],[022,"Setúbal"],[023,"Viana do Castelo"],[024,"Vila Real"],[025,"Viseu"]]],
[99,"Romania",[[000,"-"],[002,"Bucharest"],[003,"Alba"],[004,"Arad"],[005,"Arges"],[006,"Bacau"],[007,"Bihor"],[008,"Bistrita-Nasaud"],[009,"Botosani"],[010,"Braila"],[011,"Brasov"],[012,"Buzau"],[013,"Calarasi"],[014,"Caras-Severin"],[015,"Cluj"],[016,"Constanta"],[017,"Covasna"],[018,"Dâmbovita"],[019,"Dolj"],[020,"Galati"],[021,"Giurgiu"],[022,"Gorj"],[023,"Harghita"],[024,"Hunedoara"],[025,"Ialomita"],[026,"Iasi"],[027,"Ilfov"],[028,"Maramures"],[029,"Mehedinti"],[030,"Mures"],[031,"Neamt"],[032,"Olt"],[033,"Prahova"],[034,"Salaj"],[035,"Satu Mare"],[036,"Sibiu"],[037,"Suceava"],[038,"Teleorman"],[039,"Timis"],[040,"Tulcea"],[041,"Vâlcea"],[042,"Vaslui"],[043,"Vrancea"]]],
[100,"Russia",[[000,"-"],[009,"Moscow City"],[010,"Adygey"],[011,"Gorno-Altay"],[012,"Altay"],[013,"Amur"],[014,"Arkhangel'sk"],[015,"Astrakhan'"],[016,"Bashkortostan"],[017,"Belgorod"],[018,"Bryansk"],[019,"Buryat"],[020,"Chechnya"],[021,"Chelyabinsk"],[022,"Chukot"],[023,"Chuvash"],[024,"Dagestan"],[025,"Ingushetia"],[026,"Irkutsk"],[027,"Ivanovo"],[028,"Kabardin-Balkar"],[029,"Kaliningrad"],[030,"Kalmyk"],[031,"Kaluga"],[032,"Kamchatka"],[033,"Karachay-Cherkess"],[034,"Karelia"],[035,"Kemerovo"],[036,"Khabarovsk"],[037,"Khakassia"],[038,"Khanty-Mansiy"],[039,"Kirov"],[040,"Komi"],[041,"Kostroma"],[042,"Krasnodar"],[043,"Krasnoyarsk"],[044,"Kurgan"],[045,"Kursk"],[046,"Leningrad"],[047,"Lipetsk"],[048,"Magadan"],[049,"Mariy-El"],[050,"Mordovia"],[051,"Moscow"],[052,"Murmansk"],[053,"Nenets"],[054,"Nizhegorod"],[055,"Novgorod"],[056,"Novosibirsk"],[057,"Omsk"],[058,"Orenburg"],[059,"Orel"],[060,"Penza"],[061,"Perm'"],[062,"Primor'ye"],[063,"Pskov"],[064,"Rostov"],[065,"Ryazan'"],[066,"Sakha"],[067,"Sakhalin"],[068,"Samara"],[069,"St. Petersburg"],[070,"Saratov"],[071,"North Ossetia"],[072,"Smolensk"],[073,"Stavropol'"],[074,"Sverdlovsk"],[075,"Tambov"],[076,"Tatarstan"],[077,"Tomsk"],[078,"Tula"],[079,"Tver'"],[080,"Tyumen'"],[081,"Tuva"],[082,"Udmurt"],[083,"Ul'yanovsk"],[084,"Vladimir"],[085,"Volgograd"],[086,"Vologda"],[087,"Voronezh"],[088,"Yamal-Nenets"],[089,"Yaroslavl'"],[090,"Yevrey"],[091,"Zabaykal'ye"]]],
[101,"Serbia and Kosovo",[[000,"-"],[001,"Serbia and Kosovo"]]],
[102,"Slovakia",[[000,"-"],[002,"Bratislava"],[003,"Banská Bystrica"],[004,"Košice"],[005,"Nitra"],[006,"Prešov"],[007,"Trencín"],[008,"Trnava"],[009,"Žilina"]]],
[103,"Slovenia",[[000,"-"],[001,"Slovenia"]]],
[104,"South Africa",[[000,"-"],[002,"Gauteng"],[003,"Western Cape"],[004,"Northern Cape"],[005,"Eastern Cape"],[006,"KwaZulu-Natal"],[007,"Free State"],[008,"North West"],[009,"Mpumalanga"],[010,"Limpopo"]]],
[105,"Spain",[[000,"-"],[002,"Madrid"],[003,"Andalusia"],[004,"Aragon"],[005,"Principality of Asturias"],[006,"Balearic Islands"],[007,"Canary Islands"],[008,"Cantabria"],[009,"Castile-La Mancha"],[010,"Castilla y León"],[011,"Catalonia"],[012,"Valencia"],[013,"Extremadura"],[014,"Galicia"],[015,"Murcia"],[016,"Navarre"],[017,"Basque Country"],[018,"La Rioja"],[019,"Ceuta"],[020,"Melilla"]]],
[106,"Swaziland",[[000,"-"],[002,"Hhohho"],[003,"Lubombo"],[004,"Manzini"],[005,"Shiselweni"]]],
[107,"Sweden",[[000,"-"],[002,"Stockholm County"],[003,"Skåne County"],[004,"Västra Götaland County"],[005,"Östergötland County"],[006,"Södermanland County"],[007,"Värmland County"],[008,"Uppsala County"],[009,"Gävleborg County"],[010,"Västerbotten County"],[011,"Norrbotten County"],[012,"Gotland Island"],[013,"Jämtland County"],[014,"Dalarna County"],[015,"Blekinge County"],[016,"Örebro County"],[017,"Västernorrland County"],[018,"Jönköping County"],[019,"Kronoberg County"],[020,"Kalmar County"],[021,"Västmanland County"],[022,"Halland County"]]],
[108,"Switzerland",[[000,"-"],[002,"Bern"],[004,"Aargau"],[005,"Basel-City"],[006,"Fribourg"],[007,"Geneva"],[008,"Glarus"],[009,"Graubünden"],[010,"Jura"],[011,"Luzern"],[012,"Neuchâtel"],[013,"Obwalden"],[014,"St. Gallen"],[015,"Schaffhausen"],[016,"Schwyz"],[017,"Solothurn"],[018,"Thurgau"],[019,"Ticino"],[020,"Uri"],[021,"Valais"],[022,"Vaud"],[023,"Zug"],[024,"Zurich"],[025,"Appenzell Outer Rhodes"],[026,"Appenzell Inner Rhodes"],[027,"Basel-Landschaft"],[028,"Nidwalden"]]],
[109,"Turkey",[[000,"-"],[002,"Ankara"],[003,"İstanbul"],[004,"İzmir"],[005,"Bursa"],[006,"Adana"],[007,"Gaziantep"],[008,"Konya"],[009,"Antalya"],[010,"Diyarbakır"],[011,"Mersin"],[012,"Kayseri"],[014,"Şanlıurfa"],[015,"Malatya"],[016,"Erzurum"],[017,"Samsun"],[018,"Van"],[019,"Kahramanmaraş"],[020,"Denizli"],[021,"Batman"],[022,"Elazığ"],[023,"Sakarya"],[024,"Kocaeli"],[025,"Sivas"],[026,"Manisa"],[027,"Trabzon"],[028,"Balıkesir"],[029,"Adıyaman"],[030,"Tekirdağ"],[031,"Kırıkkale"],[032,"Osmaniye"],[033,"Kütahya"],[034,"Çorum"],[035,"Isparta"],[036,"Aydın"],[037,"Hatay"],[038,"Mardin"],[039,"Aksaray"],[040,"Afyonkarahisar"],[041,"Tokat"],[042,"Edirne"],[043,"Karaman"],[044,"Ordu"],[045,"Siirt"],[046,"Erzincan"],[047,"Çankırı"],[048,"Zonguldak"],[049,"Yozgat"],[050,"Uşak"],[051,"Ağrı"],[052,"Amasya"],[053,"Ardahan"],[054,"Artvin"],[055,"Bartın"],[056,"Bayburt"],[057,"Bilecik"],[058,"Bingöl"],[059,"Bitlis"],[060,"Bolu"],[061,"Burdur"],[062,"Çanakkale"],[063,"Düzce"],[064,"Eskişehir"],[065,"Giresun"],[066,"Gümüşhane"],[067,"Hakkari"],[068,"Iğdır"],[069,"Karabük"],[070,"Kars"],[071,"Kastamonu"],[072,"Kilis"],[073,"Kırklareli"],[074,"Kırşehir"],[075,"Muğla"],[076,"Muş"],[077,"Nevşehir"],[078,"Niğde"],[079,"Rize"],[080,"Sinop"],[081,"Şırnak"],[082,"Tunceli"],[083,"Yalova"]]],
[110,"United Kingdom",[[000,"-"],[002,"England"],[004,"Scotland"],[005,"Wales"],[006,"Northern Ireland"]]],
[111,"Zambia",[[000,"-"],[001,"Zambia"]]],
[112,"Zimbabwe",[[000,"-"],[001,"Zimbabwe"]]],
[113,"Azerbaijan",[[000,"-"],[001,"Azerbaijan"]]],
[114,"Mauritania",[[000,"-"],[001,"Mauritania"]]],
[115,"Mali",[[000,"-"],[001,"Mali"]]],
[116,"Niger",[[000,"-"],[001,"Niger"]]],
[117,"Chad",[[000,"-"],[001,"Chad"]]],
[118,"Sudan",[[000,"-"],[001,"Sudan"]]],
[119,"Eritrea",[[000,"-"],[001,"Eritrea"]]],
[120,"Djibouti",[[000,"-"],[001,"Djibouti"]]],
[121,"Somalia",[[000,"-"],[001,"Somalia"]]],
[122,"Andorra",[[000,"-"],[001,"Andorra"]]],
[123,"Gibraltar",[[000,"-"],[001,"Gibraltar"]]],
[124,"Guernsey",[[000,"-"],[001,"Guernsey"]]],
[125,"Isle of Man",[[000,"-"],[001,"Isle of Man"]]],
[126,"Jersey",[[000,"-"],[001,"Jersey"]]],
[127,"Monaco",[[000,"-"],[001,"Monaco"]]],
[128,"Taiwan",[[000,"-"],[002,"Taipei City"],[003,"Kaohsiung City"],[004,"Keelung City"],[005,"Hsinchu City"],[006,"Taichung City"],[007,"Chiayi City"],[008,"Tainan City"],[009,"New Taipei City"],[010,"Taoyuan County"],[011,"HsinChu County"],[012,"Miaoli County"],[014,"Changhua County"],[015,"Nantou County"],[016,"Yunlin County"],[017,"Chiayi County"],[020,"Pingtung County"],[021,"Yilan County"],[022,"Hualien County"],[023,"Taitung County"],[024,"Penghu County"],[025,"Kinmen County"],[026,"Lienchiang County"]]],
[136,"South Korea",[[000,"-"],[002,"Seoul-teukbyeolsi"],[003,"Busan-gwangyeoksi"],[004,"Daegu-gwangyeoksi"],[005,"Incheon-gwangyeoksi"],[006,"Gwangju-gwangyeoksi"],[007,"Daejeon-gwangyeoksi"],[008,"Ulsan-gwangyeoksi"],[009,"Gyeonggi-do"],[010,"Gangwon-do"],[011,"Chungcheongbuk-do"],[012,"Chungcheongnam-do"],[013,"Jeollabuk-do"],[014,"Jeollanam-do"],[015,"Gyeongsangbuk-do"],[016,"Gyeongsangnam-do"],[017,"Jeju-teukbyeoljachido"]]],
[144,"Hong Kong",[[000,"-"],[001,"Hong Kong"]]],
[153,"Singapore",[[000,"-"],[001,"Singapore"]]],
[156,"Malaysia",[[000,"-"],[002,"Kuala Lumpur"],[003,"Johor"],[004,"Kedah"],[005,"Kelantan"],[006,"Melaka"],[007,"Negeri Sembilan"],[008,"Pahang"],[009,"Perak"],[010,"Perlis"],[011,"Penang"],[012,"Sarawak"],[013,"Selangor"],[014,"Terengganu"],[015,"Labuan"],[016,"Sabah"],[017,"Putrajaya"]]],
[160,"China",[[000,"-"],[002,"Beijing"],[003,"Chongqing"],[004,"Shanghai"],[005,"Tianjin"],[006,"Anhui"],[007,"Fujian"],[008,"Gansu"],[009,"Guangdong"],[010,"Guizhou"],[011,"Hainan"],[012,"Hebei"],[013,"Heilongjiang"],[014,"Henan"],[015,"Hubei"],[016,"Húnán"],[017,"Jiangsu"],[018,"Jiangxi"],[019,"Jilin"],[020,"Liaoning"],[021,"Qinghai"],[022,"Shanxi"],[023,"Shandong"],[024,"Shanxi"],[025,"Sichuan"],[026,"Yunnan"],[027,"Zhejiang"],[029,"Guangxi-Zhuangzu"],[030,"Nei-Menggu"],[031,"Ningxia-huizu"],[032,"Xinjiang-Weiwu'er-zu"],[033,"Xizang"]]],
[168,"U.A.E.",[[000,"-"],[002,"Abu Dhabi"],[003,"Ajman"],[004,"Ash Shariqah"],[005,"Ras al-Khaimah"],[006,"Dubai"],[007,"Al Fujayrah"],[008,"Umm al Qaywayn"]]],
[169,"India",[[000,"-"],[002,"Delhi"],[003,"Andaman and Nicobar Islands"],[004,"Andhra Pradesh"],[005,"Assam"],[006,"Chandīgarh"],[007,"Dadra and Nagar Haveli"],[008,"Gujarāt"],[009,"Haryāna"],[010,"Himachal Pradesh"],[012,"Kerala"],[013,"Lakshadweep"],[014,"Mahārāshtra"],[015,"Manipur"],[016,"Meghālaya"],[017,"Karnātaka"],[018,"Nāgāland"],[019,"Odisha"],[020,"Puducherry"],[021,"Punjab"],[022,"Rājasthān"],[023,"Tamil Nadu"],[024,"Tripura"],[025,"West Bengal"],[026,"Sikkim"],[028,"Mizoram"],[029,"Daman and Diu"],[030,"Goa"],[031,"Bihār"],[032,"Madhya Pradesh"],[033,"Uttar Pradesh"],[034,"Chhattīsgarh"],[035,"Jharkhand"],[036,"Uttarakhand"],[037,"Other"]]],
[174,"Saudi Arabia",[[000,"-"],[002,"Ar Riyad"],[003,"Al Bahah"],[004,"Al Madinah"],[005,"Ash Sharqiyah"],[006,"Al Qasim"],[007,"'Asir"],[008,"Ha'il"],[009,"Makkah"],[010,"Al Hudud ash Shamaliyah"],[011,"Najran"],[012,"Jizan"],[013,"Tabuk"],[014,"Al Jawf"]]],
[184,"San Marino",[[000,"-"],[001,"San Marino"]]],
[185,"Vatican City",[[000,"-"],[001,"Vatican City"]]],
[186,"Bermuda",[[000,"-"],[001,"Bermuda"]]]
]

var Moves = ["(None)",
"Pound",
"Karate Chop",
"Double Slap",
"Comet Punch",
"Mega Punch",
"Pay Day",
"Fire Punch",
"Ice Punch",
"Thunder Punch",
"Scratch",
"Vice Grip",
"Guillotine",
"Razor Wind",
"Swords Dance",
"Cut",
"Gust",
"Wing Attack",
"Whirlwind",
"Fly",
"Bind",
"Slam",
"Vine Whip",
"Stomp",
"Double Kick",
"Mega Kick",
"Jump Kick",
"Rolling Kick",
"Sand Attack",
"Headbutt",
"Horn Attack",
"Fury Attack",
"Horn Drill",
"Tackle",
"Body Slam",
"Wrap",
"Take Down",
"Thrash",
"Double-Edge",
"Tail Whip",
"Poison Sting",
"Twineedle",
"Pin Missile",
"Leer",
"Bite",
"Growl",
"Roar",
"Sing",
"Supersonic",
"Sonic Boom",
"Disable",
"Acid",
"Ember",
"Flamethrower",
"Mist",
"Water Gun",
"Hydro Pump",
"Surf",
"Ice Beam",
"Blizzard",
"Psybeam",
"Bubble Beam",
"Aurora Beam",
"Hyper Beam",
"Peck",
"Drill Peck",
"Submission",
"Low Kick",
"Counter",
"Seismic Toss",
"Strength",
"Absorb",
"Mega Drain",
"Leech Seed",
"Growth",
"Razor Leaf",
"Solar Beam",
"Poison Powder",
"Stun Spore",
"Sleep Powder",
"Petal Dance",
"String Shot",
"Dragon Rage",
"Fire Spin",
"Thunder Shock",
"Thunderbolt",
"Thunder Wave",
"Thunder",
"Rock Throw",
"Earthquake",
"Fissure",
"Dig",
"Toxic",
"Confusion",
"Psychic",
"Hypnosis",
"Meditate",
"Agility",
"Quick Attack",
"Rage",
"Teleport",
"Night Shade",
"Mimic",
"Screech",
"Double Team",
"Recover",
"Harden",
"Minimize",
"Smokescreen",
"Confuse Ray",
"Withdraw",
"Defense Curl",
"Barrier",
"Light Screen",
"Haze",
"Reflect",
"Focus Energy",
"Bide",
"Metronome",
"Mirror Move",
"Self-Destruct",
"Egg Bomb",
"Lick",
"Smog",
"Sludge",
"Bone Club",
"Fire Blast",
"Waterfall",
"Clamp",
"Swift",
"Skull Bash",
"Spike Cannon",
"Constrict",
"Amnesia",
"Kinesis",
"Soft-Boiled",
"High Jump Kick",
"Glare",
"Dream Eater",
"Poison Gas",
"Barrage",
"Leech Life",
"Lovely Kiss",
"Sky Attack",
"Transform",
"Bubble",
"Dizzy Punch",
"Spore",
"Flash",
"Psywave",
"Splash",
"Acid Armor",
"Crabhammer",
"Explosion",
"Fury Swipes",
"Bonemerang",
"Rest",
"Rock Slide",
"Hyper Fang",
"Sharpen",
"Conversion",
"Tri Attack",
"Super Fang",
"Slash",
"Substitute",
"Struggle",
"Sketch",
"Triple Kick",
"Thief",
"Spider Web",
"Mind Reader",
"Nightmare",
"Flame Wheel",
"Snore",
"Curse",
"Flail",
"Conversion 2",
"Aeroblast",
"Cotton Spore",
"Reversal",
"Spite",
"Powder Snow",
"Protect",
"Mach Punch",
"Scary Face",
"Feint Attack",
"Sweet Kiss",
"Belly Drum",
"Sludge Bomb",
"Mud-Slap",
"Octazooka",
"Spikes",
"Zap Cannon",
"Foresight",
"Destiny Bond",
"Perish Song",
"Icy Wind",
"Detect",
"Bone Rush",
"Lock-On",
"Outrage",
"Sandstorm",
"Giga Drain",
"Endure",
"Charm",
"Rollout",
"False Swipe",
"Swagger",
"Milk Drink",
"Spark",
"Fury Cutter",
"Steel Wing",
"Mean Look",
"Attract",
"Sleep Talk",
"Heal Bell",
"Return",
"Present",
"Frustration",
"Safeguard",
"Pain Split",
"Sacred Fire",
"Magnitude",
"Dynamic Punch",
"Megahorn",
"Dragon Breath",
"Baton Pass",
"Encore",
"Pursuit",
"Rapid Spin",
"Sweet Scent",
"Iron Tail",
"Metal Claw",
"Vital Throw",
"Morning Sun",
"Synthesis",
"Moonlight",
"Hidden Power",
"Cross Chop",
"Twister",
"Rain Dance",
"Sunny Day",
"Crunch",
"Mirror Coat",
"Psych Up",
"Extreme Speed",
"Ancient Power",
"Shadow Ball",
"Future Sight",
"Rock Smash",
"Whirlpool",
"Beat Up",
"Fake Out",
"Uproar",
"Stockpile",
"Spit Up",
"Swallow",
"Heat Wave",
"Hail",
"Torment",
"Flatter",
"Will-O-Wisp",
"Memento",
"Facade",
"Focus Punch",
"Smelling Salts",
"Follow Me",
"Nature Power",
"Charge",
"Taunt",
"Helping Hand",
"Trick",
"Role Play",
"Wish",
"Assist",
"Ingrain",
"Superpower",
"Magic Coat",
"Recycle",
"Revenge",
"Brick Break",
"Yawn",
"Knock Off",
"Endeavor",
"Eruption",
"Skill Swap",
"Imprison",
"Refresh",
"Grudge",
"Snatch",
"Secret Power",
"Dive",
"Arm Thrust",
"Camouflage",
"Tail Glow",
"Luster Purge",
"Mist Ball",
"Feather Dance",
"Teeter Dance",
"Blaze Kick",
"Mud Sport",
"Ice Ball",
"Needle Arm",
"Slack Off",
"Hyper Voice",
"Poison Fang",
"Crush Claw",
"Blast Burn",
"Hydro Cannon",
"Meteor Mash",
"Astonish",
"Weather Ball",
"Aromatherapy",
"Fake Tears",
"Air Cutter",
"Overheat",
"Odor Sleuth",
"Rock Tomb",
"Silver Wind",
"Metal Sound",
"Grass Whistle",
"Tickle",
"Cosmic Power",
"Water Spout",
"Signal Beam",
"Shadow Punch",
"Extrasensory",
"Sky Uppercut",
"Sand Tomb",
"Sheer Cold",
"Muddy Water",
"Bullet Seed",
"Aerial Ace",
"Icicle Spear",
"Iron Defense",
"Block",
"Howl",
"Dragon Claw",
"Frenzy Plant",
"Bulk Up",
"Bounce",
"Mud Shot",
"Poison Tail",
"Covet",
"Volt Tackle",
"Magical Leaf",
"Water Sport",
"Calm Mind",
"Leaf Blade",
"Dragon Dance",
"Rock Blast",
"Shock Wave",
"Water Pulse",
"Doom Desire",
"Psycho Boost",
"Roost",
"Gravity",
"Miracle Eye",
"Wake-Up Slap",
"Hammer Arm",
"Gyro Ball",
"Healing Wish",
"Brine",
"Natural Gift",
"Feint",
"Pluck",
"Tailwind",
"Acupressure",
"Metal Burst",
"U-turn",
"Close Combat",
"Payback",
"Assurance",
"Embargo",
"Fling",
"Psycho Shift",
"Trump Card",
"Heal Block",
"Wring Out",
"Power Trick",
"Gastro Acid",
"Lucky Chant",
"Me First",
"Copycat",
"Power Swap",
"Guard Swap",
"Punishment",
"Last Resort",
"Worry Seed",
"Sucker Punch",
"Toxic Spikes",
"Heart Swap",
"Aqua Ring",
"Magnet Rise",
"Flare Blitz",
"Force Palm",
"Aura Sphere",
"Rock Polish",
"Poison Jab",
"Dark Pulse",
"Night Slash",
"Aqua Tail",
"Seed Bomb",
"Air Slash",
"X-Scissor",
"Bug Buzz",
"Dragon Pulse",
"Dragon Rush",
"Power Gem",
"Drain Punch",
"Vacuum Wave",
"Focus Blast",
"Energy Ball",
"Brave Bird",
"Earth Power",
"Switcheroo",
"Giga Impact",
"Nasty Plot",
"Bullet Punch",
"Avalanche",
"Ice Shard",
"Shadow Claw",
"Thunder Fang",
"Ice Fang",
"Fire Fang",
"Shadow Sneak",
"Mud Bomb",
"Psycho Cut",
"Zen Headbutt",
"Mirror Shot",
"Flash Cannon",
"Rock Climb",
"Defog",
"Trick Room",
"Draco Meteor",
"Discharge",
"Lava Plume",
"Leaf Storm",
"Power Whip",
"Rock Wrecker",
"Cross Poison",
"Gunk Shot",
"Iron Head",
"Magnet Bomb",
"Stone Edge",
"Captivate",
"Stealth Rock",
"Grass Knot",
"Chatter",
"Judgment",
"Bug Bite",
"Charge Beam",
"Wood Hammer",
"Aqua Jet",
"Attack Order",
"Defend Order",
"Heal Order",
"Head Smash",
"Double Hit",
"Roar of Time",
"Spacial Rend",
"Lunar Dance",
"Crush Grip",
"Magma Storm",
"Dark Void",
"Seed Flare",
"Ominous Wind",
"Shadow Force",
"Hone Claws",
"Wide Guard",
"Guard Split",
"Power Split",
"Wonder Room",
"Psyshock",
"Venoshock",
"Autotomize",
"Rage Powder",
"Telekinesis",
"Magic Room",
"Smack Down",
"Storm Throw",
"Flame Burst",
"Sludge Wave",
"Quiver Dance",
"Heavy Slam",
"Synchronoise",
"Electro Ball",
"Soak",
"Flame Charge",
"Coil",
"Low Sweep",
"Acid Spray",
"Foul Play",
"Simple Beam",
"Entrainment",
"After You",
"Round",
"Echoed Voice",
"Chip Away",
"Clear Smog",
"Stored Power",
"Quick Guard",
"Ally Switch",
"Scald",
"Shell Smash",
"Heal Pulse",
"Hex",
"Sky Drop",
"Shift Gear",
"Circle Throw",
"Incinerate",
"Quash",
"Acrobatics",
"Reflect Type",
"Retaliate",
"Final Gambit",
"Bestow",
"Inferno",
"Water Pledge",
"Fire Pledge",
"Grass Pledge",
"Volt Switch",
"Struggle Bug",
"Bulldoze",
"Frost Breath",
"Dragon Tail",
"Work Up",
"Electroweb",
"Wild Charge",
"Drill Run",
"Dual Chop",
"Heart Stamp",
"Horn Leech",
"Sacred Sword",
"Razor Shell",
"Heat Crash",
"Leaf Tornado",
"Steamroller",
"Cotton Guard",
"Night Daze",
"Psystrike",
"Tail Slap",
"Hurricane",
"Head Charge",
"Gear Grind",
"Searing Shot",
"Techno Blast",
"Relic Song",
"Secret Sword",
"Glaciate",
"Bolt Strike",
"Blue Flare",
"Fiery Dance",
"Freeze Shock",
"Ice Burn",
"Snarl",
"Icicle Crash",
"V-create",
"Fusion Flare",
"Fusion Bolt",
"Flying Press",
"Mat Block",
"Belch",
"Rototiller",
"Sticky Web",
"Fell Stinger",
"Phantom Force",
"Trick-or-Treat",
"Noble Roar",
"Ion Deluge",
"Parabolic Charge",
"Forest’s Curse",
"Petal Blizzard",
"Freeze-Dry",
"Disarming Voice",
"Parting Shot",
"Topsy-Turvy",
"Draining Kiss",
"Crafty Shield",
"Flower Shield",
"Grassy Terrain",
"Misty Terrain",
"Electrify",
"Play Rough",
"Fairy Wind",
"Moonblast",
"Boomburst",
"Fairy Lock",
"King’s Shield",
"Play Nice",
"Confide",
"Diamond Storm",
"Steam Eruption",
"Hyperspace Hole",
"Water Shuriken",
"Mystical Fire",
"Spiky Shield",
"Aromatic Mist",
"Eerie Impulse",
"Venom Drench",
"Powder",
"Geomancy",
"Magnetic Flux",
"Happy Hour",
"Electric Terrain",
"Dazzling Gleam",
"Celebrate",
"Hold Hands",
"Baby-Doll Eyes",
"Nuzzle",
"Hold Back",
"Infestation",
"Power-Up Punch",
"Oblivion Wing",
"Thousand Arrows",
"Thousand Waves",
"Land’s Wrath",
"Light of Ruin",
"Origin Pulse",
"Precipice Blades",
"Dragon Ascent",
"Hyperspace Fury"
]

var Locations = [
[0, "(None)"],
[2, "Mystery Zone"],
[4, "Faraway Place"],
[6, "Vaniville Town"],
[8, "Route 1"],
[9, "Vaniville Pathway"],
[10, "Aquacorde Town"],
[12, "Route 2"],
[13, "Avance Trail"],
[14, "Santalune Forest"],
[16, "Route 3"],
[17, "Ouvert Way"],
[18, "Santalune City"],
[20, "Route 4"],
[21, "Parterre Way"],
[22, "Lumiose City"],
[24, "Prism Tower"],
[26, "Lysandre Labs"],
[28, "Route 5"],
[29, "Versant Road"],
[30, "Camphrier Town"],
[32, "Shabboneau Castle"],
[34, "Route 6"],
[35, "Palais Lane"],
[36, "Parfum Palace"],
[38, "Route 7"],
[39, "Riviere Walk"],
[40, "Cyllage City"],
[42, "Route 8"],
[43, "Muraille Coast"],
[44, "Ambrette Town"],
[46, "Route 9"],
[47, "Spikes Passage"],
[48, "Battle Chateau"],
[50, "Route 10"],
[51, "Menhir Trail"],
[52, "Geosenge Town"],
[54, "Route 11"],
[55, "Miroir Way"],
[56, "Reflection Cave"],
[58, "Shalour City"],
[60, "Tower of Mastery"],
[62, "Route 12"],
[63, "Fourrage Road"],
[64, "Coumarine City"],
[66, "Route 13"],
[67, "Lumiose Badlands"],
[68, "Route 14"],
[69, "Laverre Nature Trail"],
[70, "Laverre City"],
[72, "Poke Ball Factory"],
[74, "Route 15"],
[75, "Brun Way"],
[76, "Dendemille Town"],
[78, "Route 16"],
[79, "Melancolie Path"],
[80, "[~ 80]"],
[81, "[~ 81]"],
[82, "Frost Cavern"],
[84, "Route 17"],
[85, "Mamoswine Road"],
[86, "Anistar City"],
[88, "Route 18"],
[89, "Vallee Etroite Way"],
[90, "Couriway Town"],
[92, "Route 19"],
[93, "Grande Vallee Way"],
[94, "Snowbelle City"],
[96, "Route 20"],
[97, "Winding Woods"],
[98, "Pokemon Village"],
[100, "Route 21"],
[101, "Derniere Way"],
[102, "Route 22"],
[103, "Detourner Way"],
[104, "Victory Road"],
[106, "Pokemon League"],
[108, "Kiloude City"],
[110, "Battle Maison"],
[112, "Azure Bay"],
[114, "Dendemille Gate"],
[116, "Couriway Gate"],
[118, "Ambrette Gate"],
[120, "Lumiose Gate"],
[122, "Shalour Gate"],
[124, "Coumarine Gate"],
[126, "Laverre Gate"],
[128, "Anistar Gate"],
[130, "Snowbelle Gate"],
[132, "Glittering Cave"],
[134, "Connecting Cave"],
[135, "Zubat Roost"],
[136, "Kalos Power Plant"],
[138, "Team Flare Secret HQ"],
[140, "Terminus Cave"],
[142, "Lost Hotel"],
[144, "Chamber of Emptiness"],
[146, "Sea Spirit’s Den"],
[148, "Friend Safari"],
[150, "Blazing Chamber"],
[152, "Flood Chamber"],
[154, "Ironworks Chamber"],
[156, "Dragonmark Chamber"],
[158, "Radiant Chamber"],
[160, "Pokemon League Gate"],
[162, "Lumiose Station"],
[164, "Kiloude Station"],
[166, "Ambrette Aquarium"],
[168, "Unknown Dungeon"],
[170, "Littleroot Town"],
[172, "Oldale Town"],
[174, "Dewford Town"],
[176, "Lavaridge Town"],
[178, "Fallarbor Town"],
[180, "Verdanturf Town"],
[182, "Pacifidlog Town"],
[184, "Petalburg City"],
[186, "Slateport City"],
[188, "Mauville City"],
[190, "Rustboro City"],
[192, "Fortree City"],
[194, "Lilycove City"],
[196, "Mossdeep City"],
[198, "Sootopolis City"],
[200, "Ever Grande City"],
[202, "Pokemon League"],
[204, "Route 101"],
[206, "Route 102"],
[208, "Route 103"],
[210, "Route 104"],
[212, "Route 105"],
[214, "Route 106"],
[216, "Route 107"],
[218, "Route 108"],
[220, "Route 109"],
[222, "Route 110"],
[224, "Route 111"],
[226, "Route 112"],
[228, "Route 113"],
[230, "Route 114"],
[232, "Route 115"],
[234, "Route 116"],
[236, "Route 117"],
[238, "Route 118"],
[240, "Route 119"],
[242, "Route 120"],
[244, "Route 121"],
[246, "Route 122"],
[248, "Route 123"],
[250, "Route 124"],
[252, "Route 125"],
[254, "Route 126"],
[256, "Route 127"],
[258, "Route 128"],
[260, "Route 129"],
[262, "Route 130"],
[264, "Route 131"],
[266, "Route 132"],
[268, "Route 133"],
[270, "Route 134"],
[272, "Meteor Falls"],
[274, "Rusturf Tunnel"],
[276, "???"],
[278, "Desert Ruins"],
[280, "Granite Cave"],
[282, "Petalburg Woods"],
[284, "Mt. Chimney"],
[286, "Jagged Pass"],
[288, "Fiery Path"],
[290, "Mt. Pyre"],
[292, "Team Aqua Hideout"],
[294, "Seafloor Cavern"],
[296, "Cave of Origin"],
[298, "Victory Road"],
[300, "Shoal Cave"],
[302, "New Mauville"],
[304, "Sea Mauville"],
[306, "Island Cave"],
[308, "Ancient Tomb"],
[310, "Sealed Chamber"],
[312, "Scorched Slab"],
[314, "Team Magma Hideout"],
[316, "Sky Pillar"],
[318, "Battle Resort"],
[320, "Southern Island"],
[322, "S.S. Tidal"],
[324, "Safari Zone"],
[326, "Mirage Forest"],
[328, "Mirage Cave"],
[330, "Mirage Island"],
[332, "Mirage Mountain"],
[334, "Trackless Forest"],
[336, "Pathless Plain"],
[338, "Nameless Cavern"],
[340, "Fabled Cave"],
[342, "Gnarled Den"],
[344, "Crescent Isle"],
[346, "Secret Islet"],
[348, "Soaring in the sky"],
[350, "Secret Shore"],
[352, "Secret Meadow"],
[354, "Secret Base"],
[30001, "a Link Trade"],
[30002, "a Link Trade"],
[30003, "the Kanto region"],
[30004, "the Johto region"],
[30005, "the Hoenn region"],
[30006, "the Sinnoh region"],
[30007, "a distant land"],
//[30008, "----------"],
[30009, "the Unova region"],
[30010, "the Kalos region"],
[30011, "Pokemon Link"],
[40001, "a lovely place"],
[40002, "a faraway place"],
[40003, "a Pokemon movie"],
[40004, "Pokemon Movie 13"],
[40005, "Pokemon Movie 14"],
[40006, "Pokemon Movie 15"],
[40007, "Pokemon Movie 16"],
[40008, "Pokemon Movie 17"],
[40009, "Pokemon Movie 18"],
[40010, "a Pokemon Center"],
[40011, "the Pokemon cartoon"],
[40012, "PC Tokyo"],
[40013, "PC Osaka"],
[40014, "PC Fukuoka"],
[40015, "PC Nagoya"],
[40016, "PC Sapporo"],
[40017, "PC Yokohama"],
[40018, "PC Tohoku"],
[40019, "PC Tokyo Bay"],
[40020, "a Pokemon Store"],
[40021, "a WCS"],
[40022, "WCS 2013"],
[40023, "WCS 2014"],
[40024, "WCS 2015"],
[40025, "WCS 2016"],
[40026, "WCS 2017"],
[40027, "WCS 2018"],
[40028, "Worlds"],
[40029, "Worlds 2013"],
[40030, "Worlds 2014"],
[40031, "Worlds 2015"],
[40032, "Worlds 2016"],
[40033, "Worlds 2017"],
[40034, "Worlds 2018"],
[40035, "a VGE"],
[40036, "VGE 2013"],
[40037, "VGE 2014"],
[40038, "VGE 2015"],
[40039, "VGE 2016"],
[40040, "VGE 2017"],
[40041, "VGE 2018"],
[40042, "a Pokemon event"],
[40043, "a Battle Competition"],
[40044, "a game event"],
[40045, "the Pokemon Fan Club"],
[40046, "a Pokemon TV program"],
[40047, "a concert"],
[40048, "an online Present"],
[40049, "the PGL"],
[40050, "Pokemon Event 13"],
[40051, "Pokemon Event 14"],
[40052, "Pokemon Event 15"],
[40053, "Pokemon Event 16"],
[40054, "Pokemon Event 17"],
[40055, "Pokemon Event 18"],
[40056, "Pokemon Festa"],
[40057, "Pokemon Festa 13"],
[40058, "Pokemon Festa 14"],
[40059, "Pokemon Festa 15"],
[40060, "Pokemon Festa 16"],
[40061, "Pokemon Festa 17"],
[40062, "Pokemon Festa 18"],
[40063, "POKEPARK"],
[40064, "POKEPARK"],
[40065, "POKEPARK"],
[40066, "POKEPARK"],
[40067, "POKEPARK"],
[40068, "POKEPARK"],
[40069, "POKEPARK"],
[40070, "an event site"],
[40071, "GAME FREAK"],
[40072, "a stadium"],
[40073, "a VGC"],
[40074, "the VGC 2013"],
[40075, "the VGC 2014"],
[40076, "the VGC 2015"],
[40077, "the VGC 2016"],
[40078, "the VGC 2017"],
[40079, "the VGC 2018"],
[60001, "﻿a stranger"],
[60002, "Day Care helpers"],
[60003, "a treasure hunter"],
[60004, "an old hot-springs visitor"]
];

function next() {
	var result = new Long.fromString("0x5D588B656C078965", true, 16).multiply(seed);
	result = new result.add(Long.fromString("0x0000000000269EC3", true, 16));
	seed = result;
	return seed;
}

function setup() {
	populateSpecies();
	speciesChange();
	populateNatures();
	populateHeldItems();
	populateCountries();
	populateSubRegion(null);
	populateRCountries();
	populateRSubRegion(null);
	populateBalls();
	populateMoves();
	populateLocations();
	$('#metDate').datepick();
	$('#metDate').datepick('setDate', new Date());
	$('#eggMetDate').datepick();
	$('#eggMetDate').datepick('setDate', new Date());
}

function populateSpecies() {
	var speciesSelect = document.getElementById('species');
	var speciesSelect2 = document.getElementById('species2');
	var speciesSelect3 = document.getElementById('species3');
	var speciesSelect4 = document.getElementById('species4');
	for (var i = 0; i < 200; i++) {
		var option = document.createElement('option');
		option.text = Pokedex[i].name;
		speciesSelect.add(option);
	}

	var none2 = document.createElement('option');
	none2.text = "None";
	speciesSelect2.add(none2);

	for (var i = 200; i < 399; i++) {
		var option = document.createElement('option');
		option.text = Pokedex[i].name;
		speciesSelect2.add(option);
	}

	var none3 = document.createElement('option');
	none3.text = "None";
	speciesSelect3.add(none3);

	for (var i = 399; i < 598; i++) {
		var option = document.createElement('option');
		option.text = Pokedex[i].name;
		speciesSelect3.add(option);
	}

	var none4 = document.createElement('option');
	none4.text = "None";
	speciesSelect4.add(none4);

	for (var i = 598; i < Pokedex.length; i++) {
		var option = document.createElement('option');
		option.text = Pokedex[i].name;
		speciesSelect4.add(option);
	}
}

function populateNatures() {
	var natureSelect = document.getElementById('nature');
	for (var i = 0; i < Natures.length; i++) {
		var option = document.createElement('option');
		option.text = Natures[i];
		natureSelect.add(option);
	}
}

function populateHeldItems() {
	var HISelect = document.getElementById('heldItem');
	var HISelect2 = document.getElementById('heldItem2');
	var HISelect3 = document.getElementById('heldItem3');
	var HISelect4 = document.getElementById('heldItem4');

	for (var i = 0; i < 200; i++) {
		var option = document.createElement('option');
		option.text = items[i];
		HISelect.add(option);
	}

	var none2 = document.createElement('option');
	none2.text = "None";
	HISelect2.add(none2);

	for (var i = 200; i < 399; i++) {
		var option = document.createElement('option');
		option.text = items[i];
		HISelect2.add(option);
	}

	var none3 = document.createElement('option');
	none3.text = "None";
	HISelect3.add(none3);

	for (var i = 399; i < 598; i++) {
		var option = document.createElement('option');
		option.text = items[i];
		HISelect3.add(option);
	}

	var none4 = document.createElement('option');
	none4.text = "None";
	HISelect4.add(none4);

	for (var i = 599; i < items.length; i++) {
		var option = document.createElement('option');
		option.text = items[i];
		HISelect4.add(option);
	}

}

function populateBalls() {
	var ballSelect = document.getElementById('ball');
	for (var i = 1; i < 17; i++) {
		var option = document.createElement('option');
		option.text = items[i];
		ballSelect.add(option);
	}
	for (var i = 492; i < 500; i++) {
		var option = document.createElement('option');
		option.text = items[i];
		ballSelect.add(option);
	}
	var option = document.createElement('option');
	option.text = items[576];
	ballSelect.add(option);
}

function populateSubRegion(cID) {
	if (cID == null) {
		cID = document.getElementById('country').selectedIndex;
	}
	var srSelect = document.getElementById('subregion');
	for (var i = srSelect.length-1; i >= 0; i--) {
		srSelect.remove(i);
	}
	for (var i = 0; i < countries[cID][2].length; i++) {
		var option = document.createElement('option');
		option.text = countries[cID][2][i][1];
		srSelect.add(option);
	}
}

function populateRSubRegion(cID) {
	if (cID == null) {
		cID = document.getElementById('rcountry').selectedIndex - 1;
	}
	var srSelect = document.getElementById('rsubregion');
	for (var i = srSelect.length-1; i >= 0; i--) {
		srSelect.remove(i);
	}
	if (cID == -1) {
		var option = document.createElement('option');
		option.text = "(None)";
		srSelect.add(option);
		return;
	}
	for (var i = 0; i < countries[cID][2].length; i++) {
		var option = document.createElement('option');
		option.text = countries[cID][2][i][1];
		srSelect.add(option);
	}
}

function populateCountries() {
	var cSelect = document.getElementById('country');
	for (var i = 0; i < countries.length; i++) {
		var option = document.createElement('option');
		option.text = countries[i][1];
		cSelect.add(option);
	}
}

function populateRCountries() {
	var cSelect = document.getElementById('rcountry');
	for (var i = -1; i < countries.length; i++) {
		var option = document.createElement('option');
		if (i == -1) {
			option.text = "(None)";
		} else {
			option.text = countries[i][1];
		}
		cSelect.add(option);
	}
}

function populateMoves() {
	var selectArray = [document.getElementById('move1'),
	document.getElementById('move2'),
	document.getElementById('move3'),
	document.getElementById('move4'),
	document.getElementById('rmove1'),
	document.getElementById('rmove2'),
	document.getElementById('rmove3'),
	document.getElementById('rmove4')];
	var selectArray2 = [document.getElementById('move12'),
	document.getElementById('move22'),
	document.getElementById('move32'),
	document.getElementById('move42'),
	document.getElementById('rmove12'),
	document.getElementById('rmove22'),
	document.getElementById('rmove32'),
	document.getElementById('rmove42')];
	var selectArray3 = [document.getElementById('move13'),
	document.getElementById('move23'),
	document.getElementById('move33'),
	document.getElementById('move43'),
	document.getElementById('rmove13'),
	document.getElementById('rmove23'),
	document.getElementById('rmove33'),
	document.getElementById('rmove43')];
	var selectArray4 = [document.getElementById('move14'),
	document.getElementById('move24'),
	document.getElementById('move34'),
	document.getElementById('move44'),
	document.getElementById('rmove14'),
	document.getElementById('rmove24'),
	document.getElementById('rmove34'),
	document.getElementById('rmove44')];

	for (var i = 0; i < 200; i++) {
		for (var j = 0; j < selectArray.length; j++) {
			var option = document.createElement('option');
			option.text = Moves[i];
			selectArray[j].add(option);
		}
	}
	for (var i = 0; i < selectArray2.length; i++) {
		var option = document.createElement('option');
		option.text = "(None)";
		selectArray2[i].add(option);
	}
	for (var i = 0; i < selectArray3.length; i++) {
		var option = document.createElement('option');
		option.text = "(None)";
		selectArray3[i].add(option);
	}
	for (var i = 0; i < selectArray4.length; i++) {
		var option = document.createElement('option');
		option.text = "(None)";
		selectArray4[i].add(option);
	}
	for (var i = 200; i < 399; i++) {
		for (var j = 0; j < selectArray2.length; j++) {
			var option = document.createElement('option');
			option.text = Moves[i];
			selectArray2[j].add(option);
		}
	}
	for (var i = 399; i < 598; i++) {
		for (var j = 0; j < selectArray3.length; j++) {
			var option = document.createElement('option');
			option.text = Moves[i];
			selectArray3[j].add(option);
		}
	}
	for (var i = 598; i < Moves.length; i++) {
		for (var j = 0; j < selectArray4.length; j++) {
			var option = document.createElement('option');
			option.text = Moves[i];
			selectArray4[j].add(option);
		}
	}
}

function populateLocations() {
	var selectArray = [document.getElementById('metLocation'),
	document.getElementById('eggMetLocation')];
	var selectArray2 = [document.getElementById('metLocation2'),
	document.getElementById('eggMetLocation2')];

	for (var i = 0; i < 200; i++) {
		for (var j = 0; j < selectArray.length; j++) {
			var option = document.createElement('option');
			option.text = Locations[i][1];
			selectArray[j].add(option);
		}
	}
	for (var i = 0; i < selectArray2.length; i++) {
		var option = document.createElement('option');
		option.text = "None";
		selectArray2[i].add(option);
	}
	for (var i = 200; i < Locations.length; i++) {
		for (var j = 0; j < selectArray2.length; j++) {
			var option = document.createElement('option');
			option.text = Locations[i][1];
			selectArray2[j].add(option);
		}
	}
}

function pidValidate() {
	var regexp = /^[a-zA-Z0-9]+$/gi;
	var pid = document.getElementById('pid').value;
	var result = regexp.exec(pid);
	if (result == null && pid != "") {
		if (pid.length == 1) {
			document.getElementById('pid').value = "";
		} else {
			document.getElementById('pid').value = pid.substr(0,pid.length-1);
		}
	}
}

function lvlValidateold() {
	var regexp = /^[0-9]+$/gi;
	var lvl = document.getElementById('lvl').value;
	var result = regexp.exec(lvl);
	if (result == null && lvl != "") {
		if (lvl.length == 1) {
			document.getElementById('lvl').value = "";
		} else {
			document.getElementById('lvl').value = lvl.substr(0,lvl.length-1);
		}
	} else if (result != null && lvl != "") {
		if (parseInt(lvl) > 100) {
			lvl = lvl.substr(0,lvl.length-1);
			document.getElementById('lvl').value = lvl;
		}

		var species = document.getElementById('species');
		var speciesIndex = species.selectedIndex;
		if (speciesIndex != 0) {
			var EXP = growthTable[Pokedex[speciesIndex].growthID][parseInt(lvl)];
			document.getElementById('exp').value = EXP.toString();
		}
	}
}

function lvlValidate(lvlInput) {
	var regexp = /^[0-9]+$/gi;
	var lvl = lvlInput.value;
	var result = regexp.exec(lvl);
	if (result == null && lvl != "") {
		if (lvl.length == 1) {
			lvlInput.value = "";
		} else {
			lvlInput.value = lvl.substr(0,lvl.length-1);
		}
	} else if (result != null && lvl != "") {
		if (parseInt(lvl) > 100) {
			lvl = lvl.substr(0,lvl.length-1);
			lvlInput.value = lvl;
		}

		var speciesIndex = 0;
		if (document.getElementById('species').selectedIndex != 0) {
			speciesIndex = document.getElementById('species').selectedIndex;
		} else if (document.getElementById('species2').selectedIndex != 0) {
			speciesIndex = document.getElementById('species2').selectedIndex + 199;
		} else if (document.getElementById('species3').selectedIndex != 0) {
			speciesIndex = document.getElementById('species3').selectedIndex + 398;
		} else if (document.getElementById('species4').selectedIndex != 0) {
			speciesIndex = document.getElementById('species4').selectedIndex + 597;
		}
		if (speciesIndex != 0) {
			var EXP = growthTable[Pokedex[speciesIndex].growthID][parseInt(lvl)];
			document.getElementById('exp').value = EXP.toString();
		}
	}
}

function fshipValidate() {
	var regexp = /^[0-9]+$/gi;
	var fship = document.getElementById('fship').value;
	var result = regexp.exec(fship);
	if (result == null && fship != "") {
		if (fship.length == 1) {
			document.getElementById('fship').value = "";
		} else {
			document.getElementById('fship').value = fship.substr(0,fship.length-1);
		}
	} else if (result != null && fship != "") {
		if (parseInt(fship) > 255) {
			fship = fship.substr(0,fship.length-1);
			document.getElementById('fship').value = fship;
		}
	}
}

function idValidate(idInput) {
	var regexp = /^[0-9]+$/gi;
	var id = idInput.value;
	var result = regexp.exec(id);
	if (result == null && id != "") {
		if (id.length == 1) {
			idInput.value = "";
		} else {
			idInput.value = id.substr(0,id.length-1);
		}
	} else if (result != null && id != "") {
		if (parseInt(id) > 65535) {
			id = id.substr(0,id.length-1);
			idInput.value = id;
		}
	}
}

function otValidate(otInput) {
	console.log("OT VALIDATE UNIMPLEMENTED");
}

function rollEC() {
	var EC = randu32();
	var ECString = EC.toString(16).toUpperCase();
	while (ECString.length < 8) {
		ECString = "0" + ECString;
	}
	document.getElementById('EC').value = ECString;
}

function ivChange(ivf) {
	var regexp = /^[0-9]+$/gi;
	var iv = ivf.value;
	var result = regexp.exec(iv);
	if (result == null && iv != "") {
		if (iv.length == 1) {
			ivf.value = "";
		} else {
			ivf.value = iv.substr(0,iv.length-1);
		}
	} else if (result != null && iv != "") {
		if (parseInt(iv) > 31) {
			iv = iv.substr(0,iv.length-1);
			ivf.value = iv;
		}
	}
}

function evChange(evInput) {
	var regexp = /^[0-9]+$/gi;
	var ev = evInput.value;
	var result = regexp.exec(ev);
	if (result == null && ev != "") {
		if (ev.length == 1) {
			evInput.value = "";
		} else {
			evInput.value = ev.substr(0,ev.length-1);
		}
	} else if (result != null && ev != "") {
		if (parseInt(ev) > 252) {
			ev = ev.substr(0,ev.length-1);
			evInput.value = ev;
		}
	}
}

function speciesChange() {
	var species = 0;
	if (document.getElementById('species').selectedIndex != 0) {
		species = document.getElementById('species').selectedIndex;
	} else if (document.getElementById('species2').selectedIndex != 0) {
		species = document.getElementById('species2').selectedIndex + 199;
	} else if (document.getElementById('species3').selectedIndex != 0) {
		species = document.getElementById('species3').selectedIndex + 398;
	} else if (document.getElementById('species4').selectedIndex != 0) {
		species = document.getElementById('species4').selectedIndex + 597;
	}
	var abilitySelect = document.getElementById('ability');
	for (var i = 0; i < 3; i++) {
		abilitySelect.remove(0);
	}
	var ability1 = document.createElement('option');
	ability1.text = AbilityList[Pokedex[species].ability1] + " (1)";
	var ability2 = document.createElement('option');
	ability2.text = AbilityList[Pokedex[species].ability2] + " (2)";
	var ability3 = document.createElement('option');
	ability3.text = AbilityList[Pokedex[species].abilityH] + " (H)";
	abilitySelect.add(ability1);
	abilitySelect.add(ability2);
	abilitySelect.add(ability3);

	var genderLabel = document.getElementById('gender');
	var genderBtn = document.getElementById('genderbtn');
	var genders = Pokedex[species].genders;

	if (genders == 0) {
		genderbtn.disabled = true;
		genderLabel.value = "Male";
	} else if (genders == 2) {
		genderbtn.disabled = true;
		genderLabel.value = "Female";
	} else if (genders == 3) {
		genderbtn.disabled = true;
		genderLabel.value = "Genderless";
	} else {
		genderbtn.disabled = false;
		genderLabel.value = "Male";
	}
}

function changeGenders(genderLabelID) {
	var genderLabel = document.getElementById(genderLabelID);
	if (genderLabel.value == "Male") {
		genderLabel.value = "Female";
	} else if (genderLabel.value == "Female") {
		genderLabel.value = "Male";
	}
}

function rollPID() {
	var pid = randu32();
	var pidString = pid.toString(16).toUpperCase();
	while (pidString.length < 8) {
		pidString = "0" + pidString;
	}
	document.getElementById('pid').value = pidString;

}

function setShinyPID() {
	var PID = document.getElementById('pid').value;
	var TID = document.getElementById('TID').value;
	var SID = document.getElementById('SID').value;
	var sPID = genShinyPID(TID, SID, PID);
	var pidString = sPID.toString(16).toUpperCase();
	while (pidString.length < 8) {
		pidString = "0" + pidString;
	}
	document.getElementById('pid').value = pidString;
}

function LCRNGu32(seed, radix) {
	if (seed == null) {
		this.seed = new Long.fromString("0", true, 10);
	} else {
		if (radix == null) {
			this.seed = new Long.fromString(seed, true, 16);
		} else {
			this.seed = new Long.fromString(seed, true, radix);
		}
	}

	this.next = function () {
		var result = new Long.fromString("0x41C64E6D", true, 16).multiply(this.seed);
		result = result.add(new Long.fromString("0x00006073", true, 16));
		result = result.and(new Long.fromString("0xFFFFFFFF", true, 16));
		this.seed = result;
		return result;
	}

	this.nextCrypt = function (str) {
		var result = this.next();
		result = result.shiftRightUnsigned(new Long.fromString("16", true, 10));
		result = result.xor(new Long.fromString(str, true, 10));
		return result;
	}

}

var BLOCKA = 8;
var BLOCKB = 64;
var BLOCKC = 120;
var BLOCKD = 176;

function swapBlock(a, b, ekx) {
	var tmpBlock = new ArrayBuffer(56);
	var tmpBlocku8 = new Uint8Array(tmpBlock);
	var EKXu8 = new Uint8Array(ekx);
	for (var i = 0; i < 56; i++) {
		tmpBlocku8[i] = EKXu8[i+a];
		EKXu8[i+a] = EKXu8[i+b];
		EKXu8[i+b] = tmpBlocku8[i];
	}
}

function randu32() {
	var first=Math.floor(Math.random()*0x10000);
	var second=Math.floor(Math.random()*0x10000);
	var result = new Long.fromString(first.toString() + second.toString(), true, 10);
	result = result.and(new Long.fromString("0xFFFFFFFF", true, 16));
	return result;
}

function shufflePk6(pk6) {
	var pk6u32 = new Uint32Array(pk6);
	var pv = pk6u32[0].toFixed();
	var shiftOrder = new Long.fromString(pv, true, 10);
	shiftOrder = shiftOrder.and(new Long.fromString("0x3E000", true, 16));
	shiftOrder = shiftOrder.shiftRightUnsigned(new Long.fromString("0xD", true, 16));
	shiftOrder = shiftOrder.modulo(new Long.fromString("24", true, 10));
	if (shiftOrder.equals(new Long.fromString("1", true, 10))) {
		swapBlock(BLOCKC, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("2", true, 10))) {
		swapBlock(BLOCKB, BLOCKC, pk6);
	} else if (shiftOrder.equals(new Long.fromString("3", true, 10))) {
		swapBlock(BLOCKB, BLOCKC, pk6);
		swapBlock(BLOCKC, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("4", true, 10))) {
		swapBlock(BLOCKB, BLOCKC, pk6);
		swapBlock(BLOCKB, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("5", true, 10))) {
		swapBlock(BLOCKB, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("6", true, 10))) {
		swapBlock(BLOCKA, BLOCKB, pk6);
	} else if (shiftOrder.equals(new Long.fromString("7", true, 10))) {
		swapBlock(BLOCKA, BLOCKB, pk6);
		swapBlock(BLOCKC, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("8", true, 10))) {
		swapBlock(BLOCKA, BLOCKB, pk6);
		swapBlock(BLOCKB, BLOCKC, pk6);
	} else if (shiftOrder.equals(new Long.fromString("9", true, 10))) {
		swapBlock(BLOCKA, BLOCKB, pk6);
		swapBlock(BLOCKB, BLOCKC, pk6);
		swapBlock(BLOCKC, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("10", true, 10))) {
		swapBlock(BLOCKA, BLOCKB, pk6);
		swapBlock(BLOCKB, BLOCKC, pk6);
		swapBlock(BLOCKB, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("11", true, 10))) {
		swapBlock(BLOCKA, BLOCKB, pk6);
		swapBlock(BLOCKB, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("12", true, 10))) {
		swapBlock(BLOCKA, BLOCKB, pk6);
		swapBlock(BLOCKA, BLOCKC, pk6);
	} else if (shiftOrder.equals(new Long.fromString("13", true, 10))) {
		swapBlock(BLOCKA, BLOCKB, pk6);
		swapBlock(BLOCKA, BLOCKC, pk6);
		swapBlock(BLOCKC, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("14", true, 10))) {
		swapBlock(BLOCKA, BLOCKC, pk6);
	} else if (shiftOrder.equals(new Long.fromString("15", true, 10))) {
		swapBlock(BLOCKA, BLOCKC, pk6);
		swapBlock(BLOCKC, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("16", true, 10))) {
		swapBlock(BLOCKA, BLOCKC, pk6);
		swapBlock(BLOCKB, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("17", true, 10))) {
		swapBlock(BLOCKA, BLOCKC, pk6);
		swapBlock(BLOCKB, BLOCKD, pk6);
		swapBlock(BLOCKC, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("18", true, 10))) {
		swapBlock(BLOCKA, BLOCKD, pk6);
		swapBlock(BLOCKB, BLOCKD, pk6);
		swapBlock(BLOCKC, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("19", true, 10))) {
		swapBlock(BLOCKA, BLOCKD, pk6);
		swapBlock(BLOCKB, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("20", true, 10))) {
		swapBlock(BLOCKA, BLOCKC, pk6);
		swapBlock(BLOCKA, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("21", true, 10))) {
		swapBlock(BLOCKA, BLOCKD, pk6);
	} else if (shiftOrder.equals(new Long.fromString("22", true, 10))) {
		swapBlock(BLOCKA, BLOCKC, pk6);
		swapBlock(BLOCKB, BLOCKD, pk6);
		swapBlock(BLOCKA, BLOCKB, pk6);
	} else if (shiftOrder.equals(new Long.fromString("23", true, 10))) {
		swapBlock(BLOCKA, BLOCKD, pk6);
		swapBlock(BLOCKB, BLOCKC, pk6);
	}
	console.log("SHIFT ORDER: " + shiftOrder.toString(10));
}

var gPkmn = null;

function buildPkx() {
	var pkmn = new ArrayBuffer(260);
	var pkmnu8 = new Uint8Array(pkmn);
	var pkmnu16 = new Uint16Array(pkmn);
	var pkmnu32 = new Uint32Array(pkmn);

	var EC = new Long.fromString(document.getElementById('EC').value, true, 16);
	EC = EC.toNumber();
	pkmnu32[0] = EC;

	var species = 0;
	if (document.getElementById('species').selectedIndex != 0) {
		species = document.getElementById('species').selectedIndex;
	} else if (document.getElementById('species2').selectedIndex != 0) {
		species = document.getElementById('species2').selectedIndex + 199;
	} else if (document.getElementById('species3').selectedIndex != 0) {
		species = document.getElementById('species3').selectedIndex + 398;
	} else if (document.getElementById('species4').selectedIndex != 0) {
		species = document.getElementById('species4').selectedIndex + 597;
	}
	pkmnu16[4] = species;

	var heldItem = 0;
	if (document.getElementById('heldItem').selectedIndex != 0) {
		heldItem = document.getElementById('heldItem').selectedIndex;
	} else if (document.getElementById('heldItem3').selectedIndex != 0) {
		heldItem = document.getElementById('heldItem3').selectedIndex + 199;
	} else if (document.getElementById('heldItem3').selectedIndex != 0) {
		heldItem = document.getElementById('heldItem3').selectedIndex + 398;
	} else if (document.getElementById('heldItem4').selectedIndex != 0) {
		heldItem = document.getElementById('heldItem4').selectedIndex + 597;
	}
	pkmnu16[5] = heldItem;

	var TID = parseInt(document.getElementById('TID').value);
	pkmnu16[6] = TID;

	var SID = parseInt(document.getElementById('SID').value);
	pkmnu16[7] = SID;

	var EXP = parseInt(document.getElementById('exp').value);
	pkmnu32[4] = EXP;

	var AbilityNo = document.getElementById('ability').selectedIndex;
	var Ability = 0;
	if (AbilityNo == 2) {
		pkmnu8[21] = 4;
		pkmnu8[20] = Pokedex[species].abilityH;
	} else if (AbilityNo == 0) {
		pkmnu8[21] = 1;
		pkmnu8[20] = Pokedex[species].ability1;
	} else if (AbilityNo == 1) {
		pkmnu8[21] = 2;
		pkmnu8[20] = Pokedex[species].ability2;
	}

	var PID = new Long.fromString(document.getElementById('pid').value, true, 16);
	PID = PID.toNumber();
	pkmnu32[6] = PID;

	var Nature = document.getElementById('nature').selectedIndex;
	pkmnu8[0x1c] = Nature;

	var fatefulEncounter = false;
	if (document.getElementById('fatefulEncounter').checked) {
		pkmnu8[0x1d] = pkmnu8[0x1d] | 0x1;
	}

	if (document.getElementById('gender').value == "Female") {
		pkmnu8[0x1d] = pkmnu8[0x1d] | 0x2;
	} else if (document.getElementById('gender').value == "Genderless") {
		pkmnu8[0x1d] = pkmnu8[0x1d] | 0x4;
	}

	pkmnu8[0x1E] = parseInt(document.getElementById('hpEVf').value);
	pkmnu8[0x1F] = parseInt(document.getElementById('atkEVf').value);
	pkmnu8[0x20] = parseInt(document.getElementById('defEVf').value);
	pkmnu8[0x21] = parseInt(document.getElementById('speEVf').value);
	pkmnu8[0x22] = parseInt(document.getElementById('spaEVf').value);
	pkmnu8[0x23] = parseInt(document.getElementById('spdEVf').value);

	if (document.getElementById('classicRibbon').checked == true) {
		pkmnu8[0x33] = pkmnu8[0x33] | 0x4;
	}

	if (document.getElementById('isNicknamed').checked == true) {
		var nickname = document.getElementById('nickname').value;
		for (var i = 32; i < nickname.length + 32; i++) {
			pkmnu16[i] = nickname.charCodeAt(i - 32);
		}
	} else {
		for (var i = 32; i < Pokedex[species].name.length + 32; i++) {
			pkmnu16[i] = Pokedex[species].name.charCodeAt(i - 32);
		}
	}

	// Moves
	var move1 = 0;
	if (document.getElementById('move1').selectedIndex != 0) {
		move1 = document.getElementById('move1').selectedIndex;
	} else if (document.getElementById('move12').selectedIndex != 0) {
		move1 = document.getElementById('move12').selectedIndex + 199;
	} else if (document.getElementById('move13').selectedIndex != 0) {
		move1 = document.getElementById('move13').selectedIndex + 398;
	} else if (document.getElementById('move14').selectedIndex != 0) {
		move1 = document.getElementById('move14').selectedIndex + 597;
	}
	pkmnu16[45] = move1;

	var move2 = 0;
	if (document.getElementById('move2').selectedIndex != 0) {
		move2 = document.getElementById('move2').selectedIndex;
	} else if (document.getElementById('move22').selectedIndex != 0) {
		move2 = document.getElementById('move22').selectedIndex + 199;
	} else if (document.getElementById('move23').selectedIndex != 0) {
		move2 = document.getElementById('move23').selectedIndex + 398;
	} else if (document.getElementById('move24').selectedIndex != 0) {
		move2 = document.getElementById('move24').selectedIndex + 597;
	}
	pkmnu16[46] = move2;

	var move3 = 0;
	if (document.getElementById('move3').selectedIndex != 0) {
		move3 = document.getElementById('move3').selectedIndex;
	} else if (document.getElementById('move32').selectedIndex != 0) {
		move3 = document.getElementById('move32').selectedIndex + 199;
	} else if (document.getElementById('move33').selectedIndex != 0) {
		move3 = document.getElementById('move33').selectedIndex + 398;
	} else if (document.getElementById('move34').selectedIndex != 0) {
		move3 = document.getElementById('move34').selectedIndex + 597;
	}
	pkmnu16[47] = move3;

	var move4 = 0;
	if (document.getElementById('move4').selectedIndex != 0) {
		move4 = document.getElementById('move4').selectedIndex;
	} else if (document.getElementById('move42').selectedIndex != 0) {
		move4 = document.getElementById('move42').selectedIndex + 199;
	} else if (document.getElementById('move43').selectedIndex != 0) {
		move4 = document.getElementById('move43').selectedIndex + 398;
	} else if (document.getElementById('move44').selectedIndex != 0) {
		move4 = document.getElementById('move44').selectedIndex + 597;
	}
	pkmnu16[48] = move4;

	var rmove1 = 0;
	if (document.getElementById('rmove1').selectedIndex != 0) {
		rmove1 = document.getElementById('rmove1').selectedIndex;
	} else if (document.getElementById('rmove12').selectedIndex != 0) {
		rmove1 = document.getElementById('rmove12').selectedIndex + 199;
	} else if (document.getElementById('rmove13').selectedIndex != 0) {
		rmove1 = document.getElementById('rmove13').selectedIndex + 398;
	} else if (document.getElementById('rmove14').selectedIndex != 0) {
		rmove1 = document.getElementById('rmove14').selectedIndex + 597;
	}
	pkmnu16[53] = rmove1;

	var rmove2 = 0;
	if (document.getElementById('rmove2').selectedIndex != 0) {
		rmove2 = document.getElementById('rmove2').selectedIndex;
	} else if (document.getElementById('rmove22').selectedIndex != 0) {
		rmove2 = document.getElementById('rmove22').selectedIndex + 199;
	} else if (document.getElementById('rmove23').selectedIndex != 0) {
		rmove2 = document.getElementById('rmove23').selectedIndex + 398;
	} else if (document.getElementById('rmove24').selectedIndex != 0) {
		rmove2 = document.getElementById('rmove24').selectedIndex + 597;
	}
	pkmnu16[54] = rmove2;

	var rmove3 = 0;
	if (document.getElementById('rmove3').selectedIndex != 0) {
		rmove3 = document.getElementById('rmove3').selectedIndex;
	} else if (document.getElementById('rmove32').selectedIndex != 0) {
		rmove3 = document.getElementById('rmove32').selectedIndex + 199;
	} else if (document.getElementById('rmove33').selectedIndex != 0) {
		rmove3 = document.getElementById('rmove33').selectedIndex + 398;
	} else if (document.getElementById('rmove34').selectedIndex != 0) {
		rmove3 = document.getElementById('rmove34').selectedIndex + 597;
	}
	pkmnu16[55] = rmove3;

	var rmove4 = 0;
	if (document.getElementById('rmove4').selectedIndex != 0) {
		rmove4 = document.getElementById('rmove4').selectedIndex;
	} else if (document.getElementById('rmove42').selectedIndex != 0) {
		rmove4 = document.getElementById('rmove42').selectedIndex + 199;
	} else if (document.getElementById('rmove43').selectedIndex != 0) {
		rmove4 = document.getElementById('rmove43').selectedIndex + 398;
	} else if (document.getElementById('rmove44').selectedIndex != 0) {
		rmove4 = document.getElementById('rmove44').selectedIndex + 597;
	}
	pkmnu16[56] = rmove4;

	// IVs
	pkmnu32[29] = pkmnu32[29] | parseInt(document.getElementById('hpIVf').value);
	pkmnu32[29] = pkmnu32[29] | (parseInt(document.getElementById('atkIVf').value) << 5);
	pkmnu32[29] = pkmnu32[29] | (parseInt(document.getElementById('defIVf').value) << 10);
	pkmnu32[29] = pkmnu32[29] | (parseInt(document.getElementById('speIVf').value) << 15);
	pkmnu32[29] = pkmnu32[29] | (parseInt(document.getElementById('spaIVf').value) << 20);
	pkmnu32[29] = pkmnu32[29] | (parseInt(document.getElementById('spdIVf').value) << 25);

	if (document.getElementById('isEgg').checked) {
		pkmnu32[29] = pkmnu32[29] | 0x40000000;
	}

	if (document.getElementById('isNicknamed').checked) {
		pkmnu32[29] = pkmnu32[29] | 0x80000000;
	}

	var type = document.getElementById('type').selectedIndex;

	if (type != 0) {
		var notOTHandler = document.getElementById('nOT').value;
		for (var i = 60; i < notOTHandler.length + 60; i++) {
			pkmnu16[i] = notOTHandler.charCodeAt(i - 60);
		}
		if (document.getElementById('nOTGender').value == "Female") {
			pkmnu8[0x92] = 1;
		}
		pkmnu8[0x93] = 1;

		if (document.getElementById('rcountry').selectedIndex != 0) {
			var countryIndex = document.getElementById('rcountry').selectedIndex;
			var regionIndex = document.getElementById('rsubregion').selectedIndex;
			var countryID = countries[countryIndex][0];
			var regionID = countries[countryIndex][2][regionIndex][0];
			pkmnu8[0x94] = regionID;
			pkmnu8[0x95] = countryID;
		}

		pkmnu8[0xA4] = 0x1;
		pkmnu8[0xA5] = 0x2F;
	}

	var OT = document.getElementById('OT').value;
		for (var i = 88; i < OT.length + 88; i++) {
			pkmnu16[i] = OT.charCodeAt(i - 88);
	}

	if (document.getElementById('eventMem').checked == false) {
		pkmnu8[0xCC] = 0x1;
		pkmnu8[0xCD] = 0x2F;
	}

	if (document.getElementById('asEgg').checked) {
		var eggDate = $('#eggMetDate').datepick('getDate')[0];
		pkmnu8[0xD1] = parseInt($.datepick.formatDate('yy', eggDate));
		pkmnu8[0xD2] = parseInt($.datepick.formatDate('mm', eggDate));
		pkmnu8[0xD3] = parseInt($.datepick.formatDate('dd', eggDate));

		var eggMetLocationIndex = 0;
		if (document.getElementById('eggMetLocation').selectedIndex != 0) {
			eggMetLocationIndex = document.getElementById('eggMetLocation').selectedIndex;
		} else if (document.getElementById('eggMetLocation2').selectedIndex != 0) {
			eggMetLocationIndex = document.getElementById('eggMetLocation2').selectedIndex + 199;
		}
		pkmnu16[108] = Locations[eggMetLocationIndex][0];
	}

	var metDate = $('#metDate').datepick('getDate')[0];
	pkmnu8[0xD4] = parseInt($.datepick.formatDate('yy', metDate));
	pkmnu8[0xD5] = parseInt($.datepick.formatDate('mm', metDate));
	pkmnu8[0xD6] = parseInt($.datepick.formatDate('dd', metDate));

	var metLocationIndex = 0;
	if (document.getElementById('metLocation').selectedIndex != 0) {
		metLocationIndex = document.getElementById('metLocation').selectedIndex;
	} else if (document.getElementById('metLocation2').selectedIndex != 0) {
		metLocationIndex = document.getElementById('metLocation2').selectedIndex + 199;
	}
	pkmnu16[109] = Locations[metLocationIndex][0];

	pkmnu8[0xDC] = document.getElementById('ball').selectedIndex + 1;

	pkmnu8[0xDD] = parseInt(document.getElementById('metlvl').value);

	if (document.getElementById('otGender').value == "Female") {
		pkmnu8[0xDD] = pkmnu8[0xDD] | 0x80;
	}

	var origin = document.getElementById('origin').selectedIndex;
	if (origin == 0) {
		pkmnu8[0xDF] = 27;
	} else if (origin == 1) {
		pkmnu8[0xDF] = 26;
	} else if (origin == 3) {
		pkmnu8[0xDF] = 24;
	} else if (origin == 4) {
		pkmnu8[0xDF] = 25;
	}

	var countryIndex = document.getElementById('country').selectedIndex;
	var regionIndex = document.getElementById('subregion').selectedIndex;
	var countryID = countries[countryIndex][0];
	var regionID = countries[countryIndex][2][regionIndex][0];
	pkmnu8[0xE1] = regionID;
	pkmnu8[0xE0] = countryID;

	pkmnu8[0xE2] = document.getElementById('3dsregion').selectedIndex;
	pkmnu8[0xE3] = document.getElementById('lang').selectedIndex + 1;

	var checksum = new Long.fromString("0", true, 10);
	for (var i = 4; i < 116; i++) {
		checksum = checksum.add(new Long.fromString(pkmnu16[i].toFixed(), true, 10));
	}
	checksum = checksum.and(new Long.fromString("0xFFFF", true, 16));

	pkmnu16[3] = checksum.toNumber();


	var str = "";
	for (var i = 0; i < 260; i++) {
		var tmplng = new Long.fromString(pkmnu8[i].toFixed());
		if (tmplng.toString(16).length == 1) {
			str += "0" + tmplng.toString(16) + " ";
		} else {
			str += tmplng.toString(16) + " ";
		}
	}

	console.log(str);
	shufflePk6(pkmn);
	encryptPk6(pkmn);
	gPkmn = pkmn;

}

function buildQRCode() {
	buildPkx();
	makeQRcode(gPkmn);
}

function buildInject() {
	buildPkx();
	inject(gPkmn);
}

function makeDitto() {
	rollPID();
	rollEC();
	document.getElementById('species').selectedIndex = 132;
	speciesChange();
	document.getElementById('lvl').value = "38";
	lvlValidate(document.getElementById('lvl'));
	document.getElementById('metlvl').value = "38";
	lvlValidate(document.getElementById('metlvl'));
	document.getElementById('lang').selectedIndex = 1;
	document.getElementById('metLocation').selectedIndex = 189;
	document.getElementById('ball').selectedIndex = 3;
	document.getElementById('hpIVf').value = "31";
	document.getElementById('atkIVf').value = "31";
	document.getElementById('defIVf').value = "31";
	document.getElementById('spaIVf').value = "31";
	document.getElementById('spdIVf').value = "31";
	document.getElementById('speIVf').value = "31";
	document.getElementById('move1').selectedIndex = 144;
}

function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

function inject(pkmn) {
	var pkmnstr = _arrayBufferToBase64(pkmn);
	window.location = "http://lunarcookies.github.io/b1s1.html#" + pkmnstr;
}

function makeQRcode(pkmn) {
	var pkmnstr = _arrayBufferToBase64(pkmn);
	var qrcode = new QRCode("qrcode", {
    text: "http://lunarcookies.github.io/b1s1.html#" + pkmnstr,
    width: 300,
    height: 300,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.L
});
}

function encryptPk6(pk6) {
	var pk6u16 = new Uint16Array(pk6);
	var pk6u32 = new Uint32Array(pk6);
	var decryptBlocks = new LCRNGu32(pk6u32[0].toFixed(), 10);
	for (var i = 4; i < 116; i++) {
		pk6u16[i] = decryptBlocks.nextCrypt(pk6u16[i].toFixed()).toNumber();
	}

	var decryptBattleStats = new LCRNGu32(pk6u32[0].toFixed(), 10);
	for (var i = 116; i < 130; i++) {
		pk6u16[i] = decryptBattleStats.nextCrypt(pk6u16[i].toFixed()).toNumber();
	}
}

function isShiny(TID, SID, PID) {
	var TID = new Long.fromString(TID, true, 10);
	var SID = new Long.fromString(SID, true, 10);
	var PIDu = new Long.fromString(PID, true, 16).shiftRightUnsigned(new Long.fromString("16", true, 10));
	var PIDl = new Long.fromString(PID, true, 16).and(new Long.fromString("0xFFFF", true, 16));
	var TSV = TID.xor(SID);
	TSV = TSV.shiftRightUnsigned(new Long.fromString("4", true, 10));
	console.log("TSV: " + TSV.toString(10));
	var PSV = PIDu.xor(PIDl);
	PSV = PSV.shiftRightUnsigned(new Long.fromString("4", true, 10));
	console.log("PSV: " + PSV.toString(10));
	if (TSV.equals(PSV)) {
		return true;
	} else {
		return false;
	}
}

function genShinyPID(TID, SID, PID) {
	var TID = new Long.fromString(TID, true, 10);
	var SID = new Long.fromString(SID, true, 10);
	var PIDu = new Long.fromString(PID, true, 16).shiftRightUnsigned(new Long.fromString("16", true, 10));
	var PIDl = new Long.fromString(PID, true, 16).and(new Long.fromString("0xFFFF", true, 16));
	var TSV = TID.xor(SID);
	var PSV = PIDu.xor(PIDl);
	var XOR = TSV.xor(PSV);
	XOR = XOR.and(Long.fromString("0xFFFE", true, 16));
	XOR = XOR.or(PIDu.and(Long.fromString("1", true, 10)));

	var result = PIDu.xor(XOR).shiftLeft(Long.fromString("16", true, 10)).add(PIDl);
	return result;

}