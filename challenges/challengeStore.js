// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it's very very unlikely but still possible).

//https://callofduty.fandom.com/wiki/Challenges/Call_of_Duty:_Black_Ops_Cold_War

// FIND DUPLICATE ID'S CHECKER - PASTE THIS IN THE CONSOLE
/* const lookup = Challenges.challengeStore.reduce((a, e) => {
  a[e.id] = ++a[e.id] || 0;
  return a;
}, {});

console.log(Challenges.challengeStore.filter(e => lookup[e.id])); */

class Challenge {
    /**
     * 
     * @param {number} id Integer id used to identify the challenge, must be unique.
     * @param {string} type Main type that challenge is represented as. e.g. Zombies, Multiplayer etc.
     * @param {string} category Category that the challenge falls under, this will be the tab that the
     * challenge can be found under. Note that there are main categories and sub categories, only Dark Ops 
     * challenges are directly related to a main category, other are all sub categories.
     * @param {string} name Main name/title of the challenge.
     * @param {string} desc Full description of the challenge, including completion criteria.
     * @param {string} img Image imgur id to be used for the calling card.
     * @param {array} requiredChallenges An array of any challenge ids that must be completed in order to complete this challenge. 
     * (This is mainly used for "Master" challenges where all challenges inside a sub category need to be completed)
     */
    constructor(id, type, category, name, desc, img, requiredChallenges = null, minimumRequired = null) {
        this.id = id;
        this.type = type;
        this.category = category;
        this.name = name;
        this.desc = desc;
        this.img = img ? `https://i.imgur.com/${img}.jpg` : `assets/img/cc/placeholder.jpg`;
        this.requiredChallenges = requiredChallenges;
        this.minimumRequired = minimumRequired
    }

    areAllChallengesCompleted() {
        const currentPrefs = getUserPrefs();
        if (this.minimumRequired) {
            let completedChallenges = 0;
            this.requiredChallenges.forEach((id) => {
                if (Challenges.isChallengeCompleted(id)) completedChallenges++;
            });
            // Only check to see if challenges are above minimum required.
            return (completedChallenges >= this.minimumRequired);
        } else {
            return this.requiredChallenges.every(i => currentPrefs.completedChallenges.includes(i));
        }
    }
}

class Challenges {

    static challengeStore = [
        new Challenge("hXyx0", challengeTypes.multiplayer, allSubCategories[allCategories.career].counterMeasures,
            "Masterplans", "Destroy an Enemy Field Upgrade 50 Times", "80g6zpg",
        ),
        new Challenge("1R3nE", challengeTypes.multiplayer, allSubCategories[allCategories.career].counterMeasures,
            "Peep Hole", "Destroy an Enemy Lethal Killstreak 25 Times", "nLHfjkI",
        ),
        new Challenge("R0kNm", challengeTypes.multiplayer, allSubCategories[allCategories.career].counterMeasures,
            "Glass JAw", "Kill an Enemy While At Low Health 30 Times", "0mTPIJe",
        ),
        new Challenge("ygBSW", challengeTypes.multiplayer, allSubCategories[allCategories.career].counterMeasures,
            "Air Angel", "Kill an Enemy While They Have a Spy Plane Active 30 Times", "n4uPe5a",
        ),
        new Challenge("zCK5B", challengeTypes.multiplayer, allSubCategories[allCategories.career].counterMeasures,
            "Good Boy", "Destroy an Enemy Mine or C4 15 Times", "lFWv8dU",
        ),
        new Challenge("oRzeR", challengeTypes.multiplayer, allSubCategories[allCategories.career].counterMeasures,
            "Death Spiral", "Destroy an Enemy Killstreak 30 times", "PZrNYbi",
        ),

        new Challenge("OBpIQ", challengeTypes.multiplayer, allSubCategories[allCategories.career].bootCamp,
            "Stacking Bodies", "Get 3 Kills Without Dying 20 Times", "esva8e7",
        ),
        new Challenge("tKM4B", challengeTypes.multiplayer, allSubCategories[allCategories.career].bootCamp,
            "Fatefull Mistake", "Get 50 Kills After Recently Swapping to Your Primary or Secondary Weapon", "zol7fpm",
        ),
        new Challenge("jZRwv", challengeTypes.multiplayer, allSubCategories[allCategories.career].bootCamp,
            "Precious Cargo", "Get 20 Mounted Kills", "ESg5r2m",
        ),
        new Challenge("a_qt9", challengeTypes.multiplayer, allSubCategories[allCategories.career].bootCamp,
            "No Cream", "Win 25 Matches", "gcL9jW8",
        ),
        new Challenge("ZZqaw", challengeTypes.multiplayer, allSubCategories[allCategories.career].bootCamp,
            "Killer Foliage", "Get 100 Headshots", "Z5Ne0cx",
        ),
        new Challenge("9JLbW", challengeTypes.multiplayer, allSubCategories[allCategories.career].bootCamp,
            "Prime Position", "Get 50 Croutch Kills", "50Pqdm7",
        ),

        new Challenge("dfIA_", challengeTypes.multiplayer, allSubCategories[allCategories.career].grizzledVeteran,
            "On A Mission", "Get 1000 Eliminations in Objective Modes", "xAzjsbk",
        ),
        new Challenge("uvbnB", challengeTypes.multiplayer, allSubCategories[allCategories.career].grizzledVeteran,
            "Hardcore Havoc", "Get 1000 Eliminations in Hardcore Modes", "VeHXN8u",
        ),
        new Challenge("G_tQB", challengeTypes.multiplayer, allSubCategories[allCategories.career].grizzledVeteran,
            "Helmet Driller", "Get 1000 Headshots", "6EWfWtx",
        ),
        new Challenge("Bi4sA", challengeTypes.multiplayer, allSubCategories[allCategories.career].grizzledVeteran,
            "The Goods", "Get 400 Killstreak Kills", "YVuDUvP",
        ),
        new Challenge("W11Wd", challengeTypes.multiplayer, allSubCategories[allCategories.career].grizzledVeteran,
            "Sidearm Slayer", "Get 1000 Secondary Weapon Kills", "xm2aB9I",
        ),
        new Challenge("37b3h", challengeTypes.multiplayer, allSubCategories[allCategories.career].grizzledVeteran,
            "War-Torn", "Get 10000 Eliminations", "jbitmYo",
        ),

        new Challenge("zVq0T", challengeTypes.multiplayer, allSubCategories[allCategories.career].fieldSpecialist,
            "Safety Protocol", "Get 75 Stunned Enemy Eliminations", "NAB1bA0",
        ),
        new Challenge("LU5Rs", challengeTypes.multiplayer, allSubCategories[allCategories.career].fieldSpecialist,
            "Flight Patrol", "Get 75 Kills on Enemies While They Have Radar Active", "gtH3aYT",
        ),
        new Challenge("5mYT2", challengeTypes.multiplayer, allSubCategories[allCategories.career].fieldSpecialist,
            "Grace Under Fire", "Kill an Enemy Who Was Recently Affected By a Smoke Grenade 75 Times", "RkNS4Hr",
        ),
        new Challenge("IwZ7V", challengeTypes.multiplayer, allSubCategories[allCategories.career].fieldSpecialist,
            "Rumble The Earth", "Get 100 Lethal Kills", "bLhw965",
        ),
        new Challenge("rMFpi", challengeTypes.multiplayer, allSubCategories[allCategories.career].fieldSpecialist,
            "On The Homefront", "Activate Your Field Upgrade 100 Times", "I2IOiCF",
        ),
        new Challenge("mz0cj", challengeTypes.multiplayer, allSubCategories[allCategories.career].fieldSpecialist,
            "Bombs Bursting", "Kill an Enemy Within 3 Seconds of Using Stim 30 Times", "nZWBOPY",
        ),

        new Challenge("eoeTE", challengeTypes.multiplayer, allSubCategories[allCategories.career].eliteOperator,
            "Job Well Done", "Get The Highest Eliminations to Death Ratio In a Team Game Match 5 Times", "uvvJZQD",
        ),
        new Challenge("8zYeT", challengeTypes.multiplayer, allSubCategories[allCategories.career].eliteOperator,
            "Construction Zone", "Win 100 Matches", "OscAzN6",
        ),
        new Challenge("qkQ8C", challengeTypes.multiplayer, allSubCategories[allCategories.career].eliteOperator,
            "Stormdrive", "Get Play of the Game 25 Times", "OeMfXpg",
        ),
        new Challenge("hR02X", challengeTypes.multiplayer, allSubCategories[allCategories.career].eliteOperator,
            "Sunk Cost ", "Get 30 Eliminations in a Match 30 Times", "sQWcHES",
        ),
        new Challenge("0220o", challengeTypes.multiplayer, allSubCategories[allCategories.career].eliteOperator,
            "Hell Swarm", "Achieve a 2.0 or Better Eliminations to Death Ratio with at Least 15 Eliminations 15 Times", "emDufyE",
        ),
        new Challenge("Lhxgw", challengeTypes.multiplayer, allSubCategories[allCategories.career].eliteOperator,
            "House Call", "Get the Most Eliminations In a Team Game Match 15 Times", "50h4KHv",
        ),

        new Challenge("WgDVH", challengeTypes.multiplayer, allSubCategories[allCategories.career].operations,
            "True Oasis", "Hold the Hardpoint for One Minute In a Single Match 40 Times", "Z39lY6p",
        ),
        new Challenge("VfjVv", challengeTypes.multiplayer, allSubCategories[allCategories.career].operations,
            "Death Formula", "Detonate the Bomb 25 Times in Search and Destroy", "xfL2hpK",
        ),
        new Challenge("0inK1", challengeTypes.multiplayer, allSubCategories[allCategories.career].operations,
            "Cleared For Takeoff", "Get 10 Confirms In a Kill Confirmed Match 30 Times", "acHMshp",
        ),
        new Challenge("4gnA4", challengeTypes.multiplayer, allSubCategories[allCategories.career].operations,
            "Beach Storm", "Capture 100 Objectives in Domination", "t24t2Ct",
        ),
        new Challenge("rC02_", challengeTypes.multiplayer, allSubCategories[allCategories.career].operations,
            "British Division", "Exceed 2.0 K/D Ratio On Your Team In Team Deathmatch 15 Times", "MJytxrU",
        ),
        new Challenge("xfL_r", challengeTypes.multiplayer, allSubCategories[allCategories.career].operations,
            "Crack The Code", "Get 15 Eliminations in Champion Hill Matches 15 Times", "C5t6TKe",
        ),

        new Challenge("H5vYc", challengeTypes.multiplayer, allSubCategories[allCategories.career].humiliation,
            "Long Shot", "Get a One Shot One Kill on 6 Different Players in Same Match 25 Times", "0PZWgeS",
        ),
        new Challenge("lO25i", challengeTypes.multiplayer, allSubCategories[allCategories.career].humiliation,
            "Stay Low", "Get 50 Close Range Kills without Taking Any Damage From That Player", "Nf15J6r",
        ),
        new Challenge("bJDcB", challengeTypes.multiplayer, allSubCategories[allCategories.career].humiliation,
            "Reddening Haze", "Perform 15 Finishing Moves", "xidIWE5",
        ),
        new Challenge("JPaB5", challengeTypes.multiplayer, allSubCategories[allCategories.career].humiliation,
            "Confidential", "Get 5 Equipment Impact Kills", "3hkfPiz",
        ),
        new Challenge("ZKVy5", challengeTypes.multiplayer, allSubCategories[allCategories.career].humiliation,
            "Final View", "Kill a Player With their Own Weapon 15 Times", "FArzZej",
        ),
        new Challenge("u2neO", challengeTypes.multiplayer, allSubCategories[allCategories.career].humiliation,
            "Rip Off", "Get 100 Melee Kills", "g1mxvnV",
        ),

        new Challenge("vRNHR", challengeTypes.multiplayer, allSubCategories[allCategories.career].tactician,
            "Blindfire", "Get 25 Blind Fire Kills", "d2iffNo",
        ),
        new Challenge("zQNH8", challengeTypes.multiplayer, allSubCategories[allCategories.career].tactician,
            "Momentum", "Run Through 30 Walls", "kQ6vms8",
        ),
        new Challenge("LXlxc", challengeTypes.multiplayer, allSubCategories[allCategories.career].tactician,
            "No Quarter", "Get 50 Bullet Penetration Kills", "r57B83p",
        ),
        new Challenge("ggtFU", challengeTypes.multiplayer, allSubCategories[allCategories.career].tactician,
            "Encore", "Get 100 Kills After Reloading", "qF1xSfK",
        ),
        new Challenge("evGK7", challengeTypes.multiplayer, allSubCategories[allCategories.career].tactician,
            "Sniper Nest", "Get 30 Mounted Headshots", "s8NUHn0",
        ),
        new Challenge("6aKcK", challengeTypes.multiplayer, allSubCategories[allCategories.career].tactician,
            "No Man's Land", "Get 30 Mounted MultiKills", "Boq5Oic",
        ),

        new Challenge("LrFz8", challengeTypes.multiplayer, allSubCategories[allCategories.career].killer,
            "Gunner's Glow", "Get 5 Kills Withouth Dying 35 Times", "lywV4tN",
        ),
        new Challenge("Se171", challengeTypes.multiplayer, allSubCategories[allCategories.career].killer,
            "Fiery Rage", "Get 5 Quad Kills", "ZF9DXRy",
        ),
        new Challenge("QJ7tM", challengeTypes.multiplayer, allSubCategories[allCategories.career].killer,
            "Breathe Easy", "Get 25 Triple Kills", "H89NVxW",
        ),
        new Challenge("meLOg", challengeTypes.multiplayer, allSubCategories[allCategories.career].killer,
            "Smoke Piercer", "Get 10 Kills Without Dying 20 Times", "yV6a33v",
        ),
        new Challenge("UlLGW", challengeTypes.multiplayer, allSubCategories[allCategories.career].killer,
            "Undisturbed", "Get 15 Kills Without Dying 15 Times", "TytGePk",
        ),
        new Challenge("bcVal", challengeTypes.multiplayer, allSubCategories[allCategories.career].killer,
            "Skull Crushing", "Get 75 Double Kills", "3qT73m7",
        ),

        new Challenge("uHpW1", challengeTypes.multiplayer, allSubCategories[allCategories.career].precision,
            "Last Resort", "Get 5 Collateral Kills", "g7X7AxQ",
        ),
        new Challenge("AWnCW", challengeTypes.multiplayer, allSubCategories[allCategories.career].precision,
            "Through The Trees", "Get 40 Longshot Kills", "uoJtjq4",
        ),
        new Challenge("RmwkD", challengeTypes.multiplayer, allSubCategories[allCategories.career].precision,
            "Rest Up", "Get a Headshot and a One Shot One Kill with Same Bullet 50 Times", "PctafU6",
        ),
        new Challenge("L7Upn", challengeTypes.multiplayer, allSubCategories[allCategories.career].precision,
            "Deforestation", "Get 7 Headshots In a Match 40 Times", "1HX87tB",
        ),
        new Challenge("M01vd", challengeTypes.multiplayer, allSubCategories[allCategories.career].precision,
            "Next Wave", "Get 2 One Shot One Kills Without Dying 20 Times", "zC9j4r1",
        ),
        new Challenge("H9wT2", challengeTypes.multiplayer, allSubCategories[allCategories.career].precision,
            "Warm Welcome", "Get 8 Throwing Knife Longshot Kills", "HAbWSax",
        ),

        new Challenge("fyrq3", challengeTypes.zombies, allSubCategories[allCategories.career].bootCamp,
            "Drunk With Power", "Drink from a Demonic Fountain twice in a single match 5 time(s)", "acywLWe",
        ),
        new Challenge("7o5KT", challengeTypes.zombies, allSubCategories[allCategories.career].bootCamp,
            "What's In The Box?", "Get 1000 eliminations with weapons from the Mystery Box", "3Mdj419",
        ),
        new Challenge("5zQ3A", challengeTypes.zombies, allSubCategories[allCategories.career].bootCamp,
            "Crafty Sunova-", "Craft 25 pieces of Equipment", "pbpggp0",
        ),
        new Challenge("guF7G", challengeTypes.zombies, allSubCategories[allCategories.career].bootCamp,
            "Deadly Artifacts", "Get 25 kills while using your Artifact", "qXgVupG",
        ),
        new Challenge("WIsod", challengeTypes.zombies, allSubCategories[allCategories.career].bootCamp,
            "Sir Blast-A-Lot", "Aquire and repear your armor 10 times", "ibdo2Hg",
        ),
        new Challenge("6qcx6", challengeTypes.zombies, allSubCategories[allCategories.career].bootCamp,
            "Gate Crashers", "Unlock 3 or more Stalingrad map areas in a single game 5 time(s)", "SueZwgW",
        ),

        new Challenge("Q7xRw", challengeTypes.zombies, allSubCategories[allCategories.career].darkPact,
            "Duh-Gernaur", "Kill 10 total enemies using a Brain Rotted Sturmkrieger", "8fIY7jS",
        ),
        new Challenge("wOwmP", challengeTypes.zombies, allSubCategories[allCategories.career].darkPact,
            "Ice Knowing You", "Kill 500 frozen or slowed enemies", "nGFfPhF",
        ),
        new Challenge("K0o9Z", challengeTypes.zombies, allSubCategories[allCategories.career].darkPact,
            "Contract Killer", "Complete 10 objectives while using 3 Covenants that boost your damge", "khfSt0X",
        ),
        new Challenge("XGrzn", challengeTypes.zombies, allSubCategories[allCategories.career].darkPact,
            "Transfusion", "Heal to full 100 times while statiating your Bloodlust", "qtrNdZa",
        ),
        new Challenge("9l5C6", challengeTypes.zombies, allSubCategories[allCategories.career].darkPact,
            "Got A Gremlin", "Complete 10 objectives after round 3 without manually triggering a reload of your weapon", "cPQflBY",
        ),
        new Challenge("9Fybp", challengeTypes.zombies, allSubCategories[allCategories.career].darkPact,
            "Only The Best", "Exfil successfully with 3 Legendary Covenants 10 times", "L34xbPj",
        ),

        new Challenge("wkPQR", challengeTypes.zombies, allSubCategories[allCategories.career].looter,
            "Running On Empty", "Drink from 5 different fountains in under 1 minute", "AQPvA85",
        ),
        new Challenge("3I_dS", challengeTypes.zombies, allSubCategories[allCategories.career].looter,
            "Crafty Crab", "Successfully exfil with fully upgraded armor 25 times", "TASyj2B",
        ),
        new Challenge("hPG47", challengeTypes.zombies, allSubCategories[allCategories.career].looter,
            "Crystal Farmer", "Harvest 50 Dark Aether Crystals", "zlb2MeR",
        ),
        new Challenge("_T5_e", challengeTypes.zombies, allSubCategories[allCategories.career].looter,
            "Blood Frenzy", "Get 250 Eliminations with a Tripple Pack-A-Punched weapon and Diabolical Damage", "NHBGdCx",
        ),
        new Challenge("x1Hp8", challengeTypes.zombies, allSubCategories[allCategories.career].looter,
            "Thirst Quenched", "Drink the maximum level of 5 Demonic fountains in a single game", "Gyaicwo",
        ),
        new Challenge("kTZN3", challengeTypes.zombies, allSubCategories[allCategories.career].looter,
            "Find And Forget", "Get 250 Eliminations with weapons found in chests", "JX0NK38",
        ),

        new Challenge("OBXf4", challengeTypes.zombies, allSubCategories[allCategories.career].killerOfTheDead,
            "The Forge", "Kill a zombie, Boom-Schreier and Sturmkrieger all with a Throwing Knife in the same Round", "AQR8WAO",
        ),
        new Challenge("zZwvo", challengeTypes.zombies, allSubCategories[allCategories.career].killerOfTheDead,
            "Friendly Fire", "Set 150 distracted, stunned or slowed zombies on fire", "79GiuOg",
        ),
        new Challenge("FA4Vg", challengeTypes.zombies, allSubCategories[allCategories.career].killerOfTheDead,
            "Deadly Dirks", "Get 1000 kills while using another enemy as your weapon (Brainrot, Splatterfest, Boom-Schreiers)", "xrjEAUr",
        ),
        new Challenge("Yk5oa", challengeTypes.zombies, allSubCategories[allCategories.career].killerOfTheDead,
            "Monkey Dance Party", "Kill 2 or more zombies with a piece of Equipment or Covenant explotion 250 times", "BuEuT7N",
        ),
        new Challenge("GsY9l", challengeTypes.zombies, allSubCategories[allCategories.career].killerOfTheDead,
            "All Fired Up", "Get 250 collateral damage kills by detonating Boom Schreiers", "49spdy1",
        ),
        new Challenge("Oj1wr", challengeTypes.zombies, allSubCategories[allCategories.career].killerOfTheDead,
            "Storm Watch", "Eliminate 150 Sturmkriegers", "WybW679",
        ),

        new Challenge("bKnQq", challengeTypes.zombies, allSubCategories[allCategories.career].missionCritical,
            "Head Held High", "Complete a Transmit Objective or a Blitz Objective in Round 3 or higher without killing a zombie", "F9XU3SV",
        ),
        new Challenge("i9c25", challengeTypes.zombies, allSubCategories[allCategories.career].missionCritical,
            "Happily Hexed", "Complete 25 Blitz Objectives", "xmE8wsy",
        ),
        new Challenge("DcTeF", challengeTypes.zombies, allSubCategories[allCategories.career].missionCritical,
            "Vacation Getawat", "Exfil at round 12 or higher", "yFyrUzZ",
        ),
        new Challenge("lY_Rh", challengeTypes.zombies, allSubCategories[allCategories.career].missionCritical,
            "Hunter And Hunted", "Complete 25 Harvest Objectives", "vwtLvus",
        ),
        new Challenge("WRuL1", challengeTypes.zombies, allSubCategories[allCategories.career].missionCritical,
            "Guiding Light", "Complete 25 Transmit Objectives", "gZwjSKm",
        ),
        new Challenge("Ja1id", challengeTypes.zombies, allSubCategories[allCategories.career].missionCritical,
            "Zombie Tourism", "Complete Each Type of Objective at least once in Tonga, Hotel Royal and Shi No Numa in a single match", "3t1dNQi",
        ),

        new Challenge("eUbGy", challengeTypes.zombies, allSubCategories[allCategories.career].grizzledVeteran,
            "Bear Fisted", "Get 1000 melee Kills", "akUwZxi",
        ),
        new Challenge("Ti2Kp", challengeTypes.zombies, allSubCategories[allCategories.career].grizzledVeteran,
            "Ursa Upgrade", "Get 5000 Eliminations using Pach-A-Punched weapons", "qHu5ML3",
        ),
        new Challenge("cAYs9", challengeTypes.zombies, allSubCategories[allCategories.career].grizzledVeteran,
            "Careful Collaboration", "Sacrifice 500 hearts for Covenants", "q82HohI",
        ),
        new Challenge("RtSNM", challengeTypes.zombies, allSubCategories[allCategories.career].grizzledVeteran,
            "Killer Panda", "Get 5000 Critical Kills", "CkCQ4tU",
        ),
        new Challenge("9tcaX", challengeTypes.zombies, allSubCategories[allCategories.career].grizzledVeteran,
            "Bear. Out.", "Successfully exfil 250 times", "s16KVvJ",
        ),
        new Challenge("MbCAC", challengeTypes.zombies, allSubCategories[allCategories.career].grizzledVeteran,
            "Grizzly Veterans", "Complete 250 Portal Objectives", "Gl5Sa3Z",
        ),

    ]

    static masterChallenges = [
        new Challenge("yoiyh", challengeTypes.multiplayer, allSubCategories[allCategories.career].counterMeasures,
            "Watery Grave", "Complete All Counter Measure Challenges", "2X24hts",
            ["hXyx0", "1R3nE", "R0kNm", "ygBSW", "zCK5B", "oRzeR",]),
        new Challenge("e8yzL", challengeTypes.multiplayer, allSubCategories[allCategories.career].bootCamp,
            "In Step", "Complete All Boot Camp Challenges", "0pxkIGb",
            ["OBpIQ", "tKM4B", "jZRwv", "a_qt9", "ZZqaw", "9JLbW",]),
        new Challenge("zgziG", challengeTypes.multiplayer, allSubCategories[allCategories.career].grizzledVeteran,
            "Good Vibrations", "Complete All Grizzled Veteran Challenges", "oSlIBam",
            ["dfIA_", "uvbnB", "G_tQB", "Bi4sA", "W11Wd", "37b3h",]),
        new Challenge("mEIHu", challengeTypes.multiplayer, allSubCategories[allCategories.career].fieldSpecialist,
            "Skull Shelling", "Complete All Field Specialist Challenges", "UaS7jLT",
            ["zVq0T", "LU5Rs", "5mYT2", "IwZ7V", "rMFpi", "mz0cj",]),
        new Challenge("FAJI_", challengeTypes.multiplayer, allSubCategories[allCategories.career].eliteOperator,
            "In The Breeze", "Complete All Elite Operator Challenges", "WZHKFnE",
            ["eoeTE", "8zYeT", "qkQ8C", "hR02X", "0220o", "Lhxgw",]),
        new Challenge("P26Z_", challengeTypes.multiplayer, allSubCategories[allCategories.career].operations,
            "Next Up", "Complete All Operations Challenges", "bL3itOJ",
            ["WgDVH", "VfjVv", "0inK1", "4gnA4", "rC02_", "xfL_r",]),
        new Challenge("s6bE5", challengeTypes.multiplayer, allSubCategories[allCategories.career].humiliation,
            "Sparring Season", "Complete All Humiliation Challenges", "7UG3OxQ",
            ["H5vYc", "lO25i", "bJDcB", "JPaB5", "ZKVy5", "u2neO",]),
        new Challenge("FKjky", challengeTypes.multiplayer, allSubCategories[allCategories.career].tactician,
            "Outmaneuver", "Complete All Tactician Challenges", "kiG5Cym",
            ["vRNHR", "zQNH8", "LXlxc", "ggtFU", "evGK7", "6aKcK",]),
        new Challenge("fu7jf", challengeTypes.multiplayer, allSubCategories[allCategories.career].killer,
            "Dog In The Fight", "Complete All Killer Challenges", "jwo13xf",
            ["LrFz8", "Se171", "QJ7tM", "meLOg", "UlLGW", "bcVal",]),
        new Challenge("lBFBk", challengeTypes.multiplayer, allSubCategories[allCategories.career].precision,
            "Between The Eyes", "Complete All Precision Challenges", "KzlDPjq",
            ["uHpW1", "AWnCW", "RmwkD", "L7Upn", "M01vd", "H9wT2",]),
        new Challenge("nKGMT", challengeTypes.zombies, allSubCategories[allCategories.career].bootCamp,
            "Life Stealer", "Complete All Bootcamp Challenges", "dqKhCbX",
            ["fyrq3", "7o5KT", "5zQ3A", "guF7G", "WIsod", "6qcx6",]),
        new Challenge("FoZue", challengeTypes.zombies, allSubCategories[allCategories.career].darkPact,
            "Dark Pact Master", "Complete All Dark Pact Challenges", "cgz3ScM",
            ["Q7xRw", "wOwmP", "K0o9Z", "XGrzn", "9l5C6", "9Fybp",]),
        new Challenge("3xMiD", challengeTypes.zombies, allSubCategories[allCategories.career].looter,
            "Looter Master", "Complete All Looter Challenges", "TK3LoHe",
            ["wkPQR", "3I_dS", "hPG47", "_T5_e", "x1Hp8", "kTZN3",]),
        new Challenge("vqnFh", challengeTypes.zombies, allSubCategories[allCategories.career].killerOfTheDead,
            "Zombie Hunter", "Complete All Killer of the Dead challenges", "kbW0vtr",
            ["OBXf4", "zZwvo", "FA4Vg", "Yk5oa", "GsY9l", "Oj1wr",]),
        new Challenge("iYQq1", challengeTypes.zombies, allSubCategories[allCategories.career].missionCritical,
            "I Eat You!", "Complete All Mission Critical Challenges", "J2ILq2N",
            ["bKnQq", "i9c25", "DcTeF", "lY_Rh", "WRuL1", "Ja1id",]),
        new Challenge("LJdJL", challengeTypes.zombies, allSubCategories[allCategories.career].grizzledVeteran,
            "The Dippers", "Complete All Grizzled Veteran Challenges", "yyqqnnA",
            ["eUbGy", "Ti2Kp", "cAYs9", "RtSNM", "9tcaX", "MbCAC",]),
    ]
    /* #region Helper Methods   */
    static getChallengeById(id, includeMastery = true) {
        const challenge = this.challengeStore.find(x => x.id == id);
        if (challenge) {
            return challenge;
        }
        if (includeMastery) {
            return this.getMasteryChallengeById(id);
        }

        return new Challenge();
    }

    static getMasteryChallengeById(id) {
        const challenge = this.masterChallenges.find(x => x.id == id);
        if (challenge) {
            return challenge;
        }

        return new Challenge();
    }

    static isChallengePinned(id) {
        const currentPrefs = getUserPrefs();
        const index = currentPrefs.pinnedChallenges.indexOf(id);
        if (index > -1) return true;
        return false;
    }

    static isChallengeCompleted(id) {
        const currentPrefs = getUserPrefs();
        const masteryIdArr = Challenges.masterChallenges.map(a => a.id);
        const isMastery = masteryIdArr.indexOf(id) > -1;
        if (isMastery) {
            const challenge = this.getMasteryChallengeById(id);
            return challenge.areAllChallengesCompleted();
        }
        // Checks if normal challenge is in the completed array
        const index = currentPrefs.completedChallenges.indexOf(id);
        if (index > -1) return true;
        return false;
    }
    /* #endregion */
}


