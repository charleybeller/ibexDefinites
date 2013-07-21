define_ibex_controller({
    name: "Practice",
    jqueryWidget: {
        _init: function () {
            this.options.transfer = null;
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "Message", this.options,
                    "AcceptabilityJudgment", this.options ]
            });
        }
    },
    properties: {}
});
                    
                    
                    
// 
var shuffleSequence = seq("intro", "epInst", "setcounter", rshuffle("eFiller", "ER1","ER2","ER3","ER4","ER5","ER6","EG1","EG2","EG3","EG4","EG5","EG6"), "comments", "sr", "done" )
    //"nameInst", rshuffle("nFiller", "NR1","NR2","NR3","NR4","NR5","NR6","NG1","NG2","NG3","NG4","NG5","NG6"), "sr", "done")
    //seq("intro", "nameInst" rshuffle("nFiller", "NR1","NR2","NR3","NR4","NR5","NR6","NG1","NG2","NG3","NG4","NG5","NG6"), "epInst", rshuffle("eFiller", "ER1","ER2","ER3","ER4","ER5","ER6","EG1","EG2","EG3","EG4","EG5","EG6")) ;

var defaults = [
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true
    }
];



var items;

items = [
    ["intro", "Form", {html: { include: "example_intro.html" }} ],
    ["intro", "Form", {html: { include: "native.html" }} ],
    ["intro", "Form", {html: { include: "basic_info.html" }} ],
    
    ["setcounter", "__SetCounter__", { }],
    
    
    ["epInst", "Form", {html: {include: "gen_instructions.html"}} ],
    ["epInst", "Practice", {html: {include: "epithet_ex1.html"},
                              s: "After I talked to <span class=dp>Sam</span>, <span class=dp>the bastard</span> went and told the whole neighborhood.",
                              hideProgressBar: true,
                              transfer: null}],
    ["epInst", "Practice", {html: {include: "epithet_ex2.html"},
                              s: "<span class=dp>Bill</span> realizes that <span class=dp>the sissy</span> is going to lose.",
                              hideProgressBar: true,
                              transfer: null}],
    ["epInst", "Form", {html: {include: "epithet_instructions_cont.html"}} ],
    
    ["comments", "Form", {html: {include: "comments.html"}} ],
    ["sr", "__SendResults__", { }],
    ["done", "Exit", {html: {include: "done.html"}} ],
    

//good fillers
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "I wanted <span class=dp>him</span> to help me, but <span class=dp>the bastard</span> wouldn't do it."}}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "Although <span class=dp>the bum</span> tried to hit me, I can't really get too mad at <span class=dp>him</span>.}"}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "It was said of <span class=dp>her</span> that <span class=dp>the idiot</span> lost a thousand dollars on the slots."}}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "Angela recognized <span class=dp>him</span> as soon as <span class=dp>the jerk</span> began to speak."}}}],

//med fillers
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "That <span class=dp>she</span> won the race really surprised <span class=dp>the brat</span>.}"}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>His</span> unpopularity was finally realized by <span class=dp>the creep</span>.}"}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> was besieged by a hord of bills and <span class=dp>the poor guy</span> couldn't pay them."}}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "Speaking of <span class=dp>him</span>, <span class=dp>the moron</span> is married to a genius"}}}],

    //bad fillers
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> claims that <span class=dp>the bastard</span> was honest."}}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> was afraid that <span class=dp>the sissy</span> wouldn't get picked for a team."}}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> said that <span class=dp>the fool</span> didn't know when to come in out of the rain."}}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: {inclue: "Donna hopes <span class=dp>he</span> won't embarrass <span class=dp>the poor guy</span>.}"}}],



/*

    codes: {N/E G/R  1/2/3/4/5/6}
    N/E: N-name E-epithet
    G/R: G-genitive R-relative clause
    1: N/E-pronoun no c-command
    2: N/E-pronoun with c-command
    3: pronoun-N/E no c-command
    4: pronoun-N/E with c-command
    5: N/E-N/E no c-command
    6: N/E-N/E with c-command
    
*/

    

    [["EG1", "AE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The bastard's</span> father told <span class=dp>him</span> the news."}}}],
    [["EG2", "AE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The bastard</span> told <span class=dp>his</span> father the news."}}}],
    [["EG3", "AE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>His</span> father told <span class=dp>the bastard</span> the news."}}}],
    [["EG4", "AE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> told <span class=dp>the bastard's</span> father the news."}}}],
    [["EG5", "AE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The bastard's</span> father told <span class=dp>the bastard</span> the news."}}}],
    [["EG6", "AE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The bastard</span> told <span class=dp>the bastard's</span> father the news."}}}],

    [["EG6", "BE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The idiot</span> ignored <span class=dp>the idiot's</span> co-workers."}}}],
    [["EG5", "BE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The idiot's</span> co-workers ignored <span class=dp>the idiot</span>.}"}}],
    [["EG4", "BE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>She</span> ignored <span class=dp>the idiot's</span> co-workers."}}}],
    [["EG3", "BE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>Her</span> co-workers ignored <span class=dp>the idiot</span>.}"}}],
    [["EG2", "BE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The idiot</span> ignored <span class=dp>her</span> co-workers."}}}],
    [["EG1", "BE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The idiot's</span> co-workers ignored <span class=dp>her</span>.}"}}],

    [["ER1", "CE"], "AcceptabilityJudgment", {s: {html: {inclue: "The actor that <span class=dp>the jackass</span> interviewed argued with <span class=dp>him</span>.}"}}],
    [["ER2", "CE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jackass</span> argued with the actor that <span class=dp>he</span> interviewed."}}}],
    [["ER3", "CE"], "AcceptabilityJudgment", {s: {html: {inclue: "The actor that <span class=dp>he</span> interviewed argued with <span class=dp>the jackass</span>.}"}}],
    [["ER4", "CE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> argued with the actor that <span class=dp>the jackass</span> interviewed."}}}],
    [["ER5", "CE"], "AcceptabilityJudgment", {s: {html: {inclue: "The actor that <span class=dp>the jackass</span> interviewed argued with <span class=dp>the jackass</span>.}"}}],
    [["ER6", "CE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jackass</span> argued with the actor that <span class=dp>the jackass</span> interviewed."}}}],

    [["EG1", "DE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jerk's</span> boss confronted <span class=dp>him</span> at lunch."}}}],
    [["EG2", "DE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jerk</span> confronted <span class=dp>his</span> boss at lunch."}}}],
    [["EG3", "DE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>His</span> boss confronted <span class=dp>the jerk</span> at lunch."}}}],
    [["EG4", "DE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> confronted <span class=dp>the jerk's</span> boss at lunch."}}}],
    [["EG5", "DE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jerk's</span> boss confronted <span class=dp>the jerk</span> at lunch."}}}],
    [["EG6", "DE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jerk</span> confronted <span class=dp>the jerk's</span> boss at lunch."}}}],
   
    [["EG1", "EE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The punk's</span> neighbor yelled at <span class=dp>him</span> over the fence."}}}],
    [["EG2", "EE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The punk</span> yelled at <span class=dp>his</span> neighbor over the fence."}}}],
    [["EG3", "EE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>His</span> neighbor yelled at <span class=dp>the punk</span> over the fence."}}}],
    [["EG4", "EE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> yelled at <span class=dp>the punk's</span> neighbor over the fence."}}}],
    [["EG5", "EE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The punk's</span> neighbor yelled at <span class=dp>the punk</span> over the fence."}}}],
    [["EG6", "EE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The punk</span> yelled at <span class=dp>the punk's</span> neighbor over the fence."}}}],

    [["ER1", "FE"], "AcceptabilityJudgment", {s: {html: {inclue: "The visitor that <span class=dp>the S.O.B.</span> insulted stared at <span class=dp>him</span>.}"}}],
    [["ER2", "FE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The S.O.B.</span> stared at the visitor that <span class=dp>he</span> insulted."}}}],
    [["ER3", "FE"], "AcceptabilityJudgment", {s: {html: {inclue: "The visitor that <span class=dp>he</span> insulted stared at <span class=dp>the S.O.B.</span>.}"}}],
    [["ER4", "FE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> stared at the visitor that <span class=dp>the S.O.B.</span> insulted."}}}],
    [["ER5", "FE"], "AcceptabilityJudgment", {s: {html: {inclue: "The visitor that <span class=dp>the SOB</span> insulted stared at <span class=dp>the S.O.B.</span>.}"}}],
    [["ER6", "FE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The S.O.B.</span> stared at the visitor that <span class=dp>the S.O.B.</span> insulted."}}}],

    [["EG1", "GE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The moron's</span> cousin called <span class=dp>her</span> after dinner."}}}],
    [["EG2", "GE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The moron</span> called <span class=dp>her</span> cousin after dinner."}}}],
    [["EG3", "GE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>Her</span> cousin called <span class=dp>the moron</span> after dinner."}}}],
    [["EG4", "GE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>She</span> called <span class=dp>the moron's</span> cousin after dinner."}}}],
    [["EG5", "GE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The moron's</span> cousin called <span class=dp>the moron</span> after dinner."}}}],
    [["EG6", "GE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The moron</span> called <span class=dp>the moron's</span> cousin after dinner."}}}],

    [["EG1", "HE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The asshole's</span> partner reported <span class=dp>him</span> to the authorities."}}}],
    [["EG2", "HE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The asshole</span> reported <span class=dp>his</span> partner to the authorities."}}}],
    [["EG3", "HE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>His</span> partner reported <span class=dp>the asshole</span> to the authorities."}}}],
    [["EG4", "HE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> reported <span class=dp>the asshole's</span> partner to the authorities."}}}],
    [["EG5", "HE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The asshole's</span> partner reported <span class=dp>the asshole</span> to the authorities."}}}],
    [["EG6", "HE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The asshole</span> reported <span class=dp>the asshole's</span> partner to the authorities."}}}],

    [["ER1", "IE"], "AcceptabilityJudgment", {s: {html: {inclue: "The waiter that <span class=dp>the bastard</span> reprimanded avoided <span class=dp>him</span>.}"}}],
    [["ER2", "IE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The bastard</span> avoided the waiter that <span class=dp>he</span> reprimanded."}}}],
    [["ER3", "IE"], "AcceptabilityJudgment", {s: {html: {inclue: "The waiter that <span class=dp>he</span> reprimanded avoided <span class=dp>the bastard</span>.}"}}],
    [["ER4", "IE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> avoided the waiter that <span class=dp>the bastard</span> reprimanded."}],  } } 
    [["ER5", "IE"], "AcceptabilityJudgment", {s: {html: {inclue: "The waiter that <span class=dp>the bastard</span> reprimanded avoided <span class=dp>the bastard</span>.}"}}],
    [["ER6", "IE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The bastard</span> avoided the waiter that <span class=dp>the bastard</span> reprimanded."}}}],

    [["EG1", "JE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jerk's</span> roommates met <span class=dp>him</span> at the restaurant."}}}],
    [["EG2", "JE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jerk</span> met <span class=dp>his</span> roomates at the restaurant."}}}],
    [["EG3", "JE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>His</span> roommates met <span class=dp>the jerk</span> at the restaurant."}}}],
    [["EG4", "JE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> met <span class=dp>the jerk's</span> roomates at the restaurant."}}}],
    [["EG5", "JE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jerk's</span> roommates met <span class=dp>the jerk</span> at the restaurant."}}}],
    [["EG6", "JE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jerk</span> met <span class=dp>the jerk's</span> roomates at the restaurant."}}}],

    [["EG1", "KE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The idiot's</span> sister lost track of <span class=dp>her</span> in the parking lot."}}}],
    [["EG2", "KE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The idiot</span> lost track of <span class=dp>her</span> sister in the parking lot."}}}],
    [["EG3", "KE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>Her</span> sister lost track of <span class=dp>the idiot</span> in the parking lot."}}}],
    [["EG4", "KE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>She</span> lost track of <span class=dp>the idiot's</span> sister in the parking lot."}}}],
    [["EG5", "KE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The idiot's</span> sister lost track of <span class=dp>the idiot</span> in the parking lot."}}}],
    [["EG6", "KE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The idiot</span> lost track of <span class=dp>the idiot's</span> sister in the parking lot."}}}],

    [["EG1", "LE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The brat's</span> brother visited <span class=dp>her</span> at college."}}}],
    [["EG2", "LE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The brat</span> visited <span class=dp>her</span> brother at college."}}}],
    [["EG3", "LE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>Her</span> brother visited <span class=dp>the brat</span> at college."}}}],
    [["EG4", "LE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>She</span> visited <span class=dp>the brat's</span> brother at college."}}}],
    [["EG5", "LE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The brat's</span> brother visited <span class=dp>the brat</span> at college."}}}],
    [["EG6", "LE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The brat</span> visited <span class=dp>the brat's</span> brother at college."}}}],

    [["EG1", "ME"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The moron's</span> husband spilled coffee on  <span class=dp>her</span>.}"}}],
    [["EG2", "ME"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The moron</span> spilled coffee on <span class=dp>her</span> husband."}}}],
    [["EG3", "ME"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>Her</span> husband spilled coffee on  <span class=dp>the moron</span>.}"}}],
    [["EG4", "ME"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>She</span> spilled coffee on <span class=dp>the moron's</span> husband."}}}],
    [["EG5", "ME"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The moron's</span> husband spilled coffee on  <span class=dp>the moron</span>.}"}}],
    [["EG6", "ME"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The moron</span> spilled coffee on <span class=dp>the moron's</span> husband."}}}],

    [["ER1", "NE"], "AcceptabilityJudgment", {s: {html: {inclue: "The colleague that <span class=dp>the S.O.B.</span> rushed past glared at <span class=dp>him</span>.}"}}],
    [["ER2", "NE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The S.O.B.</span> glared at the colleague that <span class=dp>he</span> rushed past."}}}],
    [["ER3", "NE"], "AcceptabilityJudgment", {s: {html: {inclue: "The colleague that <span class=dp>he</span> rushed past glared at <span class=dp>the S.O.B.</span>.}"}}],
    [["ER4", "NE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> glared at the colleague that <span class=dp>the S.O.B.</span> rushed past."}}}],
    [["ER5", "NE"], "AcceptabilityJudgment", {s: {html: {inclue: "The colleague that <span class=dp>the S.O.B.</span> rushed past glared at <span class=dp>the SOB</span>.}"}}],
    [["ER6", "NE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The S.O.B.</span> glared at the colleague that <span class=dp>the S.O.B.</span> rushed past."}}}],

    [["ER1", "OE"], "AcceptabilityJudgment", {s: {html: {inclue: "The person that <span class=dp>the schmuck</span> bumped into scowled at <span class=dp>him</span>.}"}}],
    [["ER2", "OE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The schmuck</span> scowled at the person that <span class=dp>he</span> bumped into."}}}],
    [["ER3", "OE"], "AcceptabilityJudgment", {s: {html: {inclue: "The person that <span class=dp>he</span> bumped into scowled at <span class=dp>the schmuck</span>.}"}}],
    [["ER4", "OE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> scowled at the person that <span class=dp>the schmuck</span> bumped into."}],  } } 
    [["ER5", "OE"], "AcceptabilityJudgment", {s: {html: {inclue: "The person that <span class=dp>the schmuck</span> bumped into scowled at <span class=dp>the schmuck</span>.}"}}],
    [["ER6", "OE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The schmuck</span> scowled at the person that <span class=dp>the schmuck</span> bumped into."}}}],
    
    [["EG1", "PE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The creep's</span> daughter refused to see <span class=dp>him</span>.}"}}],
    [["EG2", "PE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The creep</span> refused to see <span class=dp>his</span> daughter."}}}],
    [["EG3", "PE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>His</span> daughter refused to see <span class=dp>the creep</span>.}"}}],
    [["EG4", "PE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> refused to see <span class=dp>the creep's</span> daughter."}}}],
    [["EG5", "PE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The creep's</span> daughter refused to see <span class=dp>the creep</span>.}"}}],
    [["EG6", "PE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The creep</span> refused to see <span class=dp>the creep's</span> daughter."}}}],

    [["ER1", "QE"], "AcceptabilityJudgment", {s: {html: {inclue: "The spy that <span class=dp>the fool</span> confronted hit <span class=dp>him</span> in the ribs."}}}],
    [["ER2", "QE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The fool</span> hit the spy that <span class=dp>he</span> confronted in the ribs."}}}],
    [["ER3", "QE"], "AcceptabilityJudgment", {s: {html: {inclue: "The spy that <span class=dp>he</span> confronted hit <span class=dp>the fool</span> in the ribs."}}}],
    [["ER4", "QE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> hit the spy that <span class=dp>the fool</span> confronted in the ribs."}}}],
    [["ER5", "QE"], "AcceptabilityJudgment", {s: {html: {inclue: "The spy that <span class=dp>the fool</span> confronted hit <span class=dp>the fool</span> in the ribs."}}}],
    [["ER6", "QE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The fool</span> hit the spy that <span class=dp>the fool</span> confronted in the ribs."}}}],

    [["ER1", "RE"], "AcceptabilityJudgment", {s: {html: {inclue: "The friend that <span class=dp>the punk</span> bought cigarettes from went to the show with <span class=dp>her</span>.}"}}],
    [["ER2", "RE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The punk</span> went to the show with the friend that <span class=dp>she</span> bought cigarettes from."}}}],
    [["ER3", "RE"], "AcceptabilityJudgment", {s: {html: {inclue: "The friend that <span class=dp>she</span> bought cigarettes from went to the show with <span class=dp>the punk</span>.}"}}],
    [["ER4", "RE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>She</span> went to the show with the friend that <span class=dp>the punk</span> bought cigarettes from."}}}],
    [["ER5", "RE"], "AcceptabilityJudgment", {s: {html: {inclue: "The friend that <span class=dp>the punk</span> bought cigarettes from went to the show with <span class=dp>the punk</span>.}"}}],
    [["ER6", "RE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The punk</span> went to the show with the friend that <span class=dp>the punk</span> bought cigarettes from."}}}],

    [["ER1", "SE"], "AcceptabilityJudgment", {s: {html: {inclue: "The person that <span class=dp>the fool</span> invited sat with <span class=dp>her</span> at the concert."}}}],
    [["ER2", "SE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The fool</span> sat with the person that <span class=dp>she</span> invited at the concert."}}}],
    [["ER3", "SE"], "AcceptabilityJudgment", {s: {html: {inclue: "The person that <span class=dp>she</span> invited sat with <span class=dp>the fool</span> at the concert."}}}],
    [["ER4", "SE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>She</span> sat with the person that <span class=dp>the fool</span> invited at the concert."}}}],
    [["ER5", "SE"], "AcceptabilityJudgment", {s: {html: {inclue: "The person that <span class=dp>the fool</span> invited sat with <span class=dp>the fool</span> at the concert."}}}],
    [["ER6", "SE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The fool</span> sat with the person that <span class=dp>the fool</span> invited at the concert."}}}],

    [["EG1", "TE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The schmuck's</span> son left <span class=dp>him</span> in the rain."}}}],
    [["EG2", "TE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The schmuck</span> left <span class=dp>his</span> son in the rain."}}}],
    [["EG3", "TE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>His</span> son left <span class=dp>the schmuck</span> in the rain."}}}],
    [["EG4", "TE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> left <span class=dp>the schmuck's</span> son in the rain."}}}],
    [["EG5", "TE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The schmuck's</span> son left <span class=dp>the schmuck</span> in the rain."}}}],
    [["EG6", "TE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The schmuck</span> left <span class=dp>the schmuck's</span> son in the rain."}}}],

    [["ER1", "VE"], "AcceptabilityJudgment", {s: {html: {inclue: "The cousin that <span class=dp>the brat</span> wrote about talked with <span class=dp>him</span> at the picnic."}}}],
    [["ER2", "VE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The brat</span> talked with the cousin that <span class=dp>he</span> wrote about at the picnic."}}}],
    [["ER3", "VE"], "AcceptabilityJudgment", {s: {html: {inclue: "The cousin that <span class=dp>he</span> wrote about talked with <span class=dp>the brat</span> at the picnic."}}}],
    [["ER4", "VE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> talked with the cousin that <span class=dp>the brat</span> wrote about at the picnic."}}}],
    [["ER5", "VE"], "AcceptabilityJudgment", {s: {html: {inclue: "The cousin that <span class=dp>the brat</span> wrote about talked with <span class=dp>the brat</span> at the picnic."}}}],
    [["ER6", "VE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The brat</span> talked with the cousin that <span class=dp>the brat</span> wrote about at the picnic."}}}],

    [["ER1", "WE"], "AcceptabilityJudgment", {s: {html: {inclue: "The girl that <span class=dp>the creep</span> liked avoided <span class=dp>him</span> at the party."}}}],
    [["ER2", "WE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The creep</span> avoided the girl that <span class=dp>he</span> liked at the party."}}}],
    [["ER3", "WE"], "AcceptabilityJudgment", {s: {html: {inclue: "The girl that <span class=dp>he</span> liked avoided <span class=dp>the creep</span> at the party."}}}],
    [["ER4", "WE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> avoided the girl that <span class=dp>the creep</span> liked at the party."}}}],
    [["ER5", "WE"], "AcceptabilityJudgment", {s: {html: {inclue: "The girl that <span class=dp>the creep</span> liked avoided <span class=dp>the creep</span> at the party."}}}],
    [["ER6", "WE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The creep</span> avoided the girl that <span class=dp>the creep</span> liked at the party."}}}],

    [["ER1", "XE"], "AcceptabilityJudgment", {s: {html: {inclue: "The driver that <span class=dp>the jackass</span> passed honked at <span class=dp>him</span> on the highway."}}}],
    [["ER2", "XE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jackass</span> honked at the driver that <span class=dp>he</span> passed on the highway."}}}],
    [["ER3", "XE"], "AcceptabilityJudgment", {s: {html: {inclue: "The driver that <span class=dp>he</span> passed honked at <span class=dp>the jackass</span> on the highway."}}}],
    [["ER4", "XE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> honked at the driver that <span class=dp>the jackass</span> passed on the highway."}}}],
    [["ER5", "XE"], "AcceptabilityJudgment", {s: {html: {inclue: "The driver that <span class=dp>the jackass</span> passed honked at <span class=dp>the jackass</span> on the highway."}}}],
    [["ER6", "XE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The jackass</span> honked at the driver that <span class=dp>the jackass</span> passed on the highway."}}}],

    [["ER1", "ZE"], "AcceptabilityJudgment", {s: {html: {inclue: "The person that <span class=dp>the asshole</span> ran into shouted at <span class=dp>him</span>.}"}}],
    [["ER2", "ZE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The asshole</span> shouted at the person that <span class=dp>he</span> ran into."}}}],
    [["ER3", "ZE"], "AcceptabilityJudgment", {s: {html: {inclue: "The person that <span class=dp>he</span> ran into shouted at <span class=dp>the asshole</span>.}"}}],
    [["ER4", "ZE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>He</span> shouted at the person that <span class=dp>the asshole</span> ran into."}}}],
    [["ER5", "ZE"], "AcceptabilityJudgment", {s: {html: {inclue: "The person that <span class=dp>the asshole</span> ran into shouted at <span class=dp>the asshole</span>.}"}}],
    [["ER6", "ZE"], "AcceptabilityJudgment", {s: {html: {inclue: "<span class=dp>The asshole</span> shouted at the person that <span class=dp>the asshole</span> ran into."}}}]

];

