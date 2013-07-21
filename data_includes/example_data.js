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
                    
                    
                    

var shuffleSequence = seq("intro", "nameInst", "setcounter", rshuffle("nFiller", "NR1","NR2","NR3","NR4","NR5","NR6","NG1","NG2","NG3","NG4","NG5","NG6"), "comments", "sr", "done")
         //,"epInst", rshuffle("eFiller", "ER1","ER2","ER3","ER4","ER5","ER6","EG1","EG2","EG3","EG4","EG5","EG6"), "sr", "done" )
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
    
    ["nameInst", "Form", {html: {include: "gen_instructions.html"}} ],
    ["nameInst", "Practice", {html: {include: "name_ex1.html"},
                              s: "<span class=dp>Mary</span> saw <span class=dp>herself</span> in the mirror.",
                              hideProgressBar: true,
                              transfer: null}],
    ["nameInst", "Practice", {html: {include: "name_ex2.html"},
                              s: "<span class=dp>Mary</span> saw <span class=dp>her</span> in the mirror.",
                              hideProgressBar: true}],
    ["nameInst", "Form", {html: {include: "name_instructions_cont.html"}} ],    
    ["comments", "Form", {html: {include: "comments.html"}} ],
    ["sr", "__SendResults__", { }],
    ["done", "Exit", {html: {include: "done.html"}} ],
    

//good fillers
    ["nFillerGOOD", "AcceptabilityJudgment", {s: "I wanted <span class=dp>him</span> to help me, but <span class=dp>Charlie</span> wouldn't do it."}],
    ["nFillerGOOD", "AcceptabilityJudgment", {s: "Although <span class=dp>Harry</span> tried to hit me, I can't really get too mad at <span class=dp>him</span>."}],
    ["nFillerGOOD", "AcceptabilityJudgment", {s: "It was said of <span class=dp>her</span> that <span class=dp>Laura</span> lost a thousand dollars on the slots."}],
    ["nFillerGOOD", "AcceptabilityJudgment", {s: "Angela recognized <span class=dp>him</span> as soon as <span class=dp>Leo</span> began to speak."}],

//med fillers
    ["nFillerMED", "AcceptabilityJudgment", {s: "That <span class=dp>she</span> won the race really surprised <span class=dp>Sandra</span>."}],
    ["nFillerMED", "AcceptabilityJudgment", {s: "<span class=dp>His</span> unpopularity was finally realized by <span class=dp>Oscar</span>."}],
    ["nFillerMED", "AcceptabilityJudgment", {s: "<span class=dp>He</span> was besieged by a hord of bills and <span class=dp>Irving</span> couldn't pay them."}],
    ["nFillerMED", "AcceptabilityJudgment", {s: "Speaking of <span class=dp>him</span>, <span class=dp>Richard</span> is married to a genius"}],

    //bad fillers
    ["nFillerBAD", "AcceptabilityJudgment", {s: "<span class=dp>He</span> claims that <span class=dp>Melvin</span> was honest."}],
    ["nFillerBAD", "AcceptabilityJudgment", {s: "<span class=dp>He</span> was afraid that <span class=dp>Brad</span> wouldn't get picked for a team."}],
    ["nFillerBAD", "AcceptabilityJudgment", {s: "<span class=dp>He</span> said that <span class=dp>Jake</span> didn't know when to come in out of the rain."}],
    ["nFillerBAD", "AcceptabilityJudgment", {s: "Donna hopes <span class=dp>he</span> won't embarrass <span class=dp>Steve</span>."}],

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

    
    [["NG1", "AN"], "AcceptabilityJudgment", {s: "<span class=dp>Andrew's</span> father told <span class=dp>him</span> the news."}],
    [["NG2", "AN"], "AcceptabilityJudgment", {s: "<span class=dp>Andrew</span> told <span class=dp>his</span> father the news."}],
    [["NG3", "AN"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> father told <span class=dp>Andrew</span> the news."}],
    [["NG4", "AN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> told <span class=dp>Andrew's</span> father the news."}],
    [["NG5", "AN"], "AcceptabilityJudgment", {s: "<span class=dp>Andrew's</span> father told <span class=dp>Andrew</span> the news."}],
    [["NG6", "AN"], "AcceptabilityJudgment", {s: "<span class=dp>Andrew</span> told <span class=dp>Andrew's</span> father the news."}],

    [["NG1", "BN"], "AcceptabilityJudgment", {s: "<span class=dp>Beth's</span> co-workers ignored <span class=dp>her</span>."}],
    [["NG2", "BN"], "AcceptabilityJudgment", {s: "<span class=dp>Beth</span> ignored <span class=dp>her</span> co-workers."}],
    [["NG3", "BN"], "AcceptabilityJudgment", {s: "<span class=dp>Her</span> co-workers ignored <span class=dp>Beth</span>."}],
    [["NG4", "BN"], "AcceptabilityJudgment", {s: "<span class=dp>She</span> ignored <span class=dp>Beth's</span> co-workers."}],
    [["NG5", "BN"], "AcceptabilityJudgment", {s: "<span class=dp>Beth's</span> co-workers ignored <span class=dp>Beth</span>."}],
    [["NG6", "BN"], "AcceptabilityJudgment", {s: "<span class=dp>Beth</span> ignored <span class=dp>Beth's</span> co-workers."}],

    [["NR1", "CN"], "AcceptabilityJudgment", {s: "The actor that <span class=dp>Colin</span> interviewed argued with <span class=dp>him</span>."}],
    [["NR2", "CN"], "AcceptabilityJudgment", {s: "<span class=dp>Colin</span> argued with the actor that <span class=dp>he</span> interviewed."}],
    [["NR3", "CN"], "AcceptabilityJudgment", {s: "The actor that <span class=dp>he</span> interviewed argued with <span class=dp>Colin</span>."}],
    [["NR4", "CN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> argued with the actor that <span class=dp>Colin</span> interviewed."}],
    [["NR5", "CN"], "AcceptabilityJudgment", {s: "The actor that <span class=dp>Colin</span> interviewed argued with <span class=dp>Colin</span>."}],
    [["NR6", "CN"], "AcceptabilityJudgment", {s: "<span class=dp>Colin</span> argued with the actor that <span class=dp>Colin</span> interviewed."}],

    [["NG1", "DN"], "AcceptabilityJudgment", {s: "<span class=dp>David's</span> boss confronted <span class=dp>him</span> at lunch."}],
    [["NG2", "DN"], "AcceptabilityJudgment", {s: "<span class=dp>David</span> confronted <span class=dp>his</span> boss at lunch."}],
    [["NG3", "DN"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> boss confronted <span class=dp>David</span> at lunch."}],
    [["NG4", "DN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> confronted <span class=dp>David's</span> boss at lunch."}],
    [["NG5", "DN"], "AcceptabilityJudgment", {s: "<span class=dp>David's</span> boss confronted <span class=dp>David</span> at lunch."}],
    [["NG6", "DN"], "AcceptabilityJudgment", {s: "<span class=dp>David</span> confronted <span class=dp>David's</span> boss at lunch."}],

    [["NG1", "EN"], "AcceptabilityJudgment", {s: "<span class=dp>Evan's</span> neighbor yelled at <span class=dp>him</span> over the fence."}],
    [["NG2", "EN"], "AcceptabilityJudgment", {s: "<span class=dp>Evan</span> yelled at <span class=dp>his</span> neighbor over the fence."}],
    [["NG3", "EN"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> neighbor yelled at <span class=dp>Evan</span> over the fence."}],
    [["NG4", "EN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> yelled at <span class=dp>Evan's</span> neighbor over the fence."}],
    [["NG5", "EN"], "AcceptabilityJudgment", {s: "<span class=dp>Evan's</span> neighbor yelled at <span class=dp>Evan</span> over the fence."}],
    [["NG6", "EN"], "AcceptabilityJudgment", {s: "<span class=dp>Evan</span> yelled at <span class=dp>Evan's</span> neighbor over the fence."}],

    [["NR1", "FN"], "AcceptabilityJudgment", {s: "The visitor that <span class=dp>Fred</span> insulted stared at <span class=dp>him</span>."}],
    [["NR2", "FN"], "AcceptabilityJudgment", {s: "<span class=dp>Fred</span> stared at the visitor that <span class=dp>he</span> insulted."}],
    [["NR3", "FN"], "AcceptabilityJudgment", {s: "The visitor that <span class=dp>he</span> insulted stared at <span class=dp>Fred</span>."}],
    [["NR4", "FN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> stared at the visitor that <span class=dp>Fred</span> insulted."}],
    [["NR5", "FN"], "AcceptabilityJudgment", {s: "The visitor that <span class=dp>Fred</span> insulted stared at <span class=dp>Fred</span>."}],
    [["NR6", "FN"], "AcceptabilityJudgment", {s: "<span class=dp>Fred</span> stared at the visitor that <span class=dp>Fred</span> insulted."}],

    [["NG1", "GN"], "AcceptabilityJudgment", {s: "<span class=dp>Gayle's</span> cousin called <span class=dp>her</span> after dinner."}],
    [["NG2", "GN"], "AcceptabilityJudgment", {s: "<span class=dp>Gayle</span> called <span class=dp>her</span> cousin after dinner."}],
    [["NG3", "GN"], "AcceptabilityJudgment", {s: "<span class=dp>Her</span> cousin called <span class=dp>Gayle</span> after dinner."}],
    [["NG4", "GN"], "AcceptabilityJudgment", {s: "<span class=dp>She</span> called <span class=dp>Gayle's</span> cousin after dinner."}],
    [["NG5", "GN"], "AcceptabilityJudgment", {s: "<span class=dp>Gayle's</span> cousin called <span class=dp>Gayle</span> after dinner."}],
    [["NG6", "GN"], "AcceptabilityJudgment", {s: "<span class=dp>Gayle</span> called <span class=dp>Gayle's</span> cousin after dinner."}],

    [["NG1", "HN"], "AcceptabilityJudgment", {s: "<span class=dp>Hugo's</span> partner reported <span class=dp>him</span> to the authorities."}],
    [["NG2", "HN"], "AcceptabilityJudgment", {s: "<span class=dp>Hugo</span> reported <span class=dp>his</span> partner to the authorities."}],
    [["NG3", "HN"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> partner reported <span class=dp>Hugo</span> to the authorities."}],
    [["NG4", "HN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> reported <span class=dp>Hugo's</span> partner to the authorities."}],
    [["NG5", "HN"], "AcceptabilityJudgment", {s: "<span class=dp>Hugo's</span> partner reported <span class=dp>Hugo</span> to the authorities."}],
    [["NG6", "HN"], "AcceptabilityJudgment", {s: "<span class=dp>Hugo</span> reported <span class=dp>Hugo's</span> partner to the authorities."}],

    [["NR1", "IN"], "AcceptabilityJudgment", {s: "The waiter that <span class=dp>Isaac</span> reprimanded avoided <span class=dp>him</span>."}],
    [["NR2", "IN"], "AcceptabilityJudgment", {s: "<span class=dp>Isaac</span> avoided the waiter that <span class=dp>he</span> reprimanded."}],
    [["NR3", "IN"], "AcceptabilityJudgment", {s: "The waiter that <span class=dp>he</span> reprimanded avoided <span class=dp>Isaac</span>."}],
    [["NR4", "IN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> avoided the waiter that <span class=dp>Isaac</span> reprimanded."}],    
    [["NR5", "IN"], "AcceptabilityJudgment", {s: "The waiter that <span class=dp>Isaac</span> reprimanded avoided <span class=dp>Isaac</span>."}],
    [["NR6", "IN"], "AcceptabilityJudgment", {s: "<span class=dp>Isaac</span> avoided the waiter that <span class=dp>Isaac</span> reprimanded."}],
    
    [["NG1", "JN"], "AcceptabilityJudgment", {s: "<span class=dp>John's</span> roommates met <span class=dp>him</span> at the restaurant."}],
    [["NG2", "JN"], "AcceptabilityJudgment", {s: "<span class=dp>John</span> met <span class=dp>his</span> roomates at the restaurant."}],
    [["NG3", "JN"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> roommates met <span class=dp>John</span> at the restaurant."}],
    [["NG4", "JN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> met <span class=dp>John's</span> roomates at the restaurant."}],
    [["NG5", "JN"], "AcceptabilityJudgment", {s: "<span class=dp>John's</span> roommates met <span class=dp>John</span> at the restaurant."}],
    [["NG6", "JN"], "AcceptabilityJudgment", {s: "<span class=dp>John</span> met <span class=dp>John's</span> roomates at the restaurant."}],

    [["NG1", "KN"], "AcceptabilityJudgment", {s: "<span class=dp>Kelly's</span> sister lost track of <span class=dp>her</span> in the parking lot."}],
    [["NG2", "KN"], "AcceptabilityJudgment", {s: "<span class=dp>Kelly</span> lost track of <span class=dp>her</span> sister in the parking lot."}],
    [["NG3", "KN"], "AcceptabilityJudgment", {s: "<span class=dp>Her</span> sister lost track of <span class=dp>Kelly</span> in the parking lot."}],
    [["NG4", "KN"], "AcceptabilityJudgment", {s: "<span class=dp>She</span> lost track of <span class=dp>Kelly's</span> sister in the parking lot."}],
    [["NG5", "KN"], "AcceptabilityJudgment", {s: "<span class=dp>Kelly's</span> sister lost track of <span class=dp>Kelly</span> in the parking lot."}],
    [["NG6", "KN"], "AcceptabilityJudgment", {s: "<span class=dp>Kelly</span> lost track of <span class=dp>Kelly's</span> sister in the parking lot."}],

    [["NG1", "LN"], "AcceptabilityJudgment", {s: "<span class=dp>Lisa's</span> brother visited <span class=dp>her</span> at college."}],
    [["NG2", "LN"], "AcceptabilityJudgment", {s: "<span class=dp>Lisa</span> visited <span class=dp>her</span> brother at college."}],
    [["NG3", "LN"], "AcceptabilityJudgment", {s: "<span class=dp>Her</span> brother visited <span class=dp>Lisa</span> at college."}],
    [["NG4", "LN"], "AcceptabilityJudgment", {s: "<span class=dp>She</span> visited <span class=dp>Lisa's</span> brother at college."}],
    [["NG5", "LN"], "AcceptabilityJudgment", {s: "<span class=dp>Lisa's</span> brother visited <span class=dp>Lisa</span> at college."}],
    [["NG6", "LN"], "AcceptabilityJudgment", {s: "<span class=dp>Lisa</span> visited <span class=dp>Lisa's</span> brother at college."}],

    [["NG1", "MN"], "AcceptabilityJudgment", {s: "<span class=dp>Mary's</span> husband spilled coffee on <span class=dp>her</span>."}],
    [["NG2", "MN"], "AcceptabilityJudgment", {s: "<span class=dp>Mary</span> spilled coffee on <span class=dp>her</span> husband."}],
    [["NG3", "MN"], "AcceptabilityJudgment", {s: "<span class=dp>Her</span> husband spilled coffee on  <span class=dp>Mary</span>."}],
    [["NG4", "MN"], "AcceptabilityJudgment", {s: "<span class=dp>She</span> spilled coffee on <span class=dp>Mary's</span> husband."}],
    [["NG5", "MN"], "AcceptabilityJudgment", {s: "<span class=dp>Mary's</span> husband spilled coffee on  <span class=dp>Mary</span>."}],
    [["NG6", "MN"], "AcceptabilityJudgment", {s: "<span class=dp>Mary</span> spilled coffee on <span class=dp>Mary's</span> husband."}],

    [["NR1", "NN"], "AcceptabilityJudgment", {s: "The colleague that <span class=dp>Nick</span> rushed past glared at <span class=dp>him</span>."}],
    [["NR2", "NN"], "AcceptabilityJudgment", {s: "<span class=dp>Nick</span> glared at the colleague that <span class=dp>he</span> rushed past."}],
    [["NR3", "NN"], "AcceptabilityJudgment", {s: "The colleague that <span class=dp>he</span> rushed past glared at <span class=dp>Nick</span>."}],
    [["NR4", "NN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> glared at the colleague that <span class=dp>Nick</span> rushed past."}],
    [["NR5", "NN"], "AcceptabilityJudgment", {s: "The colleague that <span class=dp>Nick</span> rushed past glared at <span class=dp>Nick</span>."}],
    [["NR6", "NN"], "AcceptabilityJudgment", {s: "<span class=dp>Nick</span> glared at the colleague that <span class=dp>Nick</span> rushed past."}],

    [["NR1", "ON"], "AcceptabilityJudgment", {s: "The person that <span class=dp>Oren</span> bumped into scowled at <span class=dp>him</span>."}],
    [["NR2", "ON"], "AcceptabilityJudgment", {s: "<span class=dp>Oren</span> scowled at the person that <span class=dp>he</span> bumped into."}],
    [["NR3", "ON"], "AcceptabilityJudgment", {s: "The person that <span class=dp>he</span> bumped into scowled at <span class=dp>Oren</span>."}],
    [["NR4", "ON"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> scowled at the person that <span class=dp>Oren</span> bumped into."}],
    [["NR5", "ON"], "AcceptabilityJudgment", {s: "The person that <span class=dp>Oren</span> bumped into scowled at <span class=dp>Oren</span>."}],
    [["NR6", "ON"], "AcceptabilityJudgment", {s: "<span class=dp>Oren</span> scowled at the person that <span class=dp>Oren</span> bumped into."}],

    [["NG1", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>Paul's</span> daughter refused to see <span class=dp>him</span>."}],
    [["NG2", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>Paul</span> refused to see <span class=dp>his</span> daughter."}],
    [["NG3", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> daughter refused to see <span class=dp>Paul</span>."}],
    [["NG4", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> refused to see <span class=dp>Paul's</span> daughter."}],
    [["NG5", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>Paul's</span> daughter refused to see <span class=dp>Paul</span>."}],
    [["NG6", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>Paul</span> refused to see <span class=dp>Paul's</span> daughter."}],

    [["NR1", "QN"], "AcceptabilityJudgment", {s: "The spy that <span class=dp>Quinton</span> confronted hit <span class=dp>him</span> in the ribs."}],
    [["NR2", "QN"], "AcceptabilityJudgment", {s: "<span class=dp>Quinton</span> hit the spy that <span class=dp>he</span> confronted in the ribs."}],
    [["NR3", "QN"], "AcceptabilityJudgment", {s: "The spy that <span class=dp>he</span> confronted hit <span class=dp>Quinton</span> in the ribs."}],
    [["NR4", "QN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> hit the spy that <span class=dp>Quinton</span> confronted in the ribs."}],
    [["NR5", "QN"], "AcceptabilityJudgment", {s: "The spy that <span class=dp>Quinton</span> confronted hit <span class=dp>Quinton</span> in the ribs."}],
    [["NR6", "QN"], "AcceptabilityJudgment", {s: "<span class=dp>Quinton</span> hit the spy that <span class=dp>Quinton</span> confronted in the ribs."}],

    [["NR1", "RN"], "AcceptabilityJudgment", {s: "The friend that <span class=dp>Rachel</span> bought cigarettes from went to the show with <span class=dp>her</span>."}],
    [["NR2", "RN"], "AcceptabilityJudgment", {s: "<span class=dp>Rachel</span> went to the show with the friend that <span class=dp>she</span> bought cigarettes from."}],
    [["NR3", "RN"], "AcceptabilityJudgment", {s: "The friend that <span class=dp>she</span> bought cigarettes from went to the show with <span class=dp>Rachel</span>."}],
    [["NR4", "RN"], "AcceptabilityJudgment", {s: "<span class=dp>She</span> went to the show with the friend that <span class=dp>Rachel</span> bought cigarettes from."}],
    [["NR5", "RN"], "AcceptabilityJudgment", {s: "The friend that <span class=dp>Rachel</span> bought cigarettes from went to the show with  <span class=dp>Rachel</span>."}],
    [["NR6", "RN"], "AcceptabilityJudgment", {s: "<span class=dp>Rachel</span> went to the show with the friend that <span class=dp>Rachel</span> bought cigarettes from."}],

    [["NR1", "SN"], "AcceptabilityJudgment", {s: "The person that <span class=dp>Susan</span> invited sat with <span class=dp>her</span> at the concert."}],
    [["NR2", "SN"], "AcceptabilityJudgment", {s: "<span class=dp>Susan</span> sat with the person that <span class=dp>she</span> invited at the concert."}],
    [["NR3", "SN"], "AcceptabilityJudgment", {s: "The person that <span class=dp>she</span> invited sat with <span class=dp>Susan</span> at the concert."}],
    [["NR4", "SN"], "AcceptabilityJudgment", {s: "<span class=dp>She</span> sat with the person that <span class=dp>Susan</span> invited at the concert."}],
    [["NR5", "SN"], "AcceptabilityJudgment", {s: "The person that <span class=dp>Susan</span> invited sat with <span class=dp>Susan</span> at the concert."}],
    [["NR6", "SN"], "AcceptabilityJudgment", {s: "<span class=dp>Susan</span> sat with the person that <span class=dp>Susan</span> invited at the concert."}],

    [["NG1", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>Thomas's</span> son left <span class=dp>him</span> in the rain."}],
    [["NG2", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>Thomas</span> left <span class=dp>his</span> son in the rain."}],
    [["NG3", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> son left <span class=dp>Thomas</span> in the rain."}],
    [["NG4", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> left <span class=dp>Thomas's</span> son in the rain."}],
    [["NG5", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>Thomas's</span> son left <span class=dp>Thomas</span> in the rain."}],
    [["NG6", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>Thomas</span> left <span class=dp>Thomas's</span> son in the rain."}],

    [["NR1", "VN"], "AcceptabilityJudgment", {s: "The cousin that <span class=dp>Victor</span> wrote about talked with <span class=dp>him</span> at the picnic."}],
    [["NR2", "VN"], "AcceptabilityJudgment", {s: "<span class=dp>Victor</span> talked with the cousin that <span class=dp>he</span> wrote about at the picnic."}],
    [["NR3", "VN"], "AcceptabilityJudgment", {s: "The cousin that <span class=dp>he</span> wrote about talked with <span class=dp>Victor</span> at the picnic."}],
    [["NR4", "VN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> talked with the cousin that <span class=dp>Victor</span> wrote about at the picnic."}],
    [["NR5", "VN"], "AcceptabilityJudgment", {s: "The cousin that <span class=dp>Victor</span> wrote about talked with <span class=dp>Victor</span> at the picnic."}],
    [["NR6", "VN"], "AcceptabilityJudgment", {s: "<span class=dp>Victor</span> talked with the cousin that <span class=dp>Victor</span> wrote about at the picnic."}],

    [["NR1", "WN"], "AcceptabilityJudgment", {s: "The girl that <span class=dp>Walter</span> liked avoided <span class=dp>him</span> at the party."}],
    [["NR2", "WN"], "AcceptabilityJudgment", {s: "<span class=dp>Walter</span> avoided the girl that <span class=dp>he</span> liked at the party."}],
    [["NR3", "WN"], "AcceptabilityJudgment", {s: "The girl that <span class=dp>he</span> liked avoided <span class=dp>Walter</span> at the party."}],
    [["NR4", "WN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> avoided the girl that <span class=dp>Walter</span> liked at the party."}],
    [["NR5", "WN"], "AcceptabilityJudgment", {s: "The girl that <span class=dp>Walter</span> liked avoided <span class=dp>Walter</span> at the party."}],
    [["NR6", "WN"], "AcceptabilityJudgment", {s: "<span class=dp>Walter</span> avoided the girl that <span class=dp>Walter</span> liked at the party."}],

    [["NR1", "XN"], "AcceptabilityJudgment", {s: "The driver that <span class=dp>Peter</span> passed honked at <span class=dp>him</span> on the highway."}],
    [["NR2", "XN"], "AcceptabilityJudgment", {s: "<span class=dp>Peter</span> honked at the driver that <span class=dp>he</span> passed on the highway."}],
    [["NR3", "XN"], "AcceptabilityJudgment", {s: "The driver that <span class=dp>he</span> passed honked at <span class=dp>Peter</span> on the highway."}],
    [["NR4", "XN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> honked at the driver that <span class=dp>Peter</span> passed on the highway."}],
    [["NR5", "XN"], "AcceptabilityJudgment", {s: "The driver that <span class=dp>Peter</span> passed honked at <span class=dp>Xander</span> on the highway."}],
    [["NR6", "XN"], "AcceptabilityJudgment", {s: "<span class=dp>Peter</span> honked at the driver that <span class=dp>Peter</span> passed on the highway."}],
   
    [["NR1", "ZN"], "AcceptabilityJudgment", {s: "The person that <span class=dp>Zach</span> ran into shouted at <span class=dp>him</span>."}],
    [["NR2", "ZN"], "AcceptabilityJudgment", {s: "<span class=dp>Zach</span> shouted at the person that <span class=dp>he</span> ran into."}],
    [["NR3", "ZN"], "AcceptabilityJudgment", {s: "The person that <span class=dp>he</span> ran into shouted at <span class=dp>Zach</span>."}],
    [["NR4", "ZN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> shouted at the person that <span class=dp>Zach</span> ran into."}],
    [["NR5", "ZN"], "AcceptabilityJudgment", {s: "The person that <span class=dp>Zach</span> ran into shouted at <span class=dp>Zach</span>."}],
    [["NR6", "ZN"], "AcceptabilityJudgment", {s: "<span class=dp>Zach</span> shouted at the person that <span class=dp>Zach</span> ran into."}]

];


