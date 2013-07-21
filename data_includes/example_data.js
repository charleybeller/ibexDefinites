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
                    
                    
                    

//var shuffleSequence = seq("intro", "nameInst", "setcounter", rshuffle("nFiller", "NR1","NR2","NR3","NR4","NR5","NR6","NG1","NG2","NG3","NG4","NG5","NG6"), "comments", "sr", "done")
var shuffleSequence = seq(rshuffle("nFillerGOOD", "nFillerMED", "nFillerBAD", "NR1","NR2","NR3","NR4","NR5","NR6","NG1","NG2","NG3","NG4","NG5","NG6"), "comments", "sr", "done")
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
    
    ["nameInst", "Form", {html: {include: "name_instructions.html"}} ],
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

    [["NR1", "CN"], "AcceptabilityJudgment", {s: "The actor that "+"Colin".bold()+" interviewed argued with "+"him".bold()+"."}],
    [["NR2", "CN"], "AcceptabilityJudgment", {s: "Colin".bold()+" argued with the actor that "+"he".bold()+" interviewed."}],
    [["NR3", "CN"], "AcceptabilityJudgment", {s: "The actor that "+"he".bold()+" interviewed argued with "+"Colin".bold()+"."}],
    [["NR4", "CN"], "AcceptabilityJudgment", {s: "He".bold()+" argued with the actor that "+"Colin".bold()+" interviewed."}],
    [["NR5", "CN"], "AcceptabilityJudgment", {s: "The actor that "+"Colin".bold()+" interviewed argued with "+"Colin".bold()+"."}],
    [["NR6", "CN"], "AcceptabilityJudgment", {s: "Colin".bold()+" argued with the actor that "+"Colin".bold()+" interviewed."}],

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

    [["NR1", "FN"], "AcceptabilityJudgment", {s: "The visitor that "+"Fred".bold()+" insulted stared at "+"him".bold()+"."}],
    [["NR2", "FN"], "AcceptabilityJudgment", {s: "Fred".bold()+" stared at the visitor that "+"he".bold()+" insulted."}],
    [["NR3", "FN"], "AcceptabilityJudgment", {s: "The visitor that "+"he".bold()+" insulted stared at "+"Fred".bold()+"."}],
    [["NR4", "FN"], "AcceptabilityJudgment", {s: "He".bold()+" stared at the visitor that "+"Fred".bold()+" insulted."}],
    [["NR5", "FN"], "AcceptabilityJudgment", {s: "The visitor that "+"Fred".bold()+" insulted stared at "+"Fred".bold()+"."}],
    [["NR6", "FN"], "AcceptabilityJudgment", {s: "Fred".bold()+" stared at the visitor that "+"Fred".bold()+" insulted."}],

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

    [["NR1", "IN"], "AcceptabilityJudgment", {s: "The waiter that "+"Isaac".bold()+" reprimanded avoided "+"him".bold()+"."}],
    [["NR2", "IN"], "AcceptabilityJudgment", {s: "Isaac".bold()+" avoided the waiter that "+"he".bold()+" reprimanded."}],
    [["NR3", "IN"], "AcceptabilityJudgment", {s: "The waiter that "+"he".bold()+" reprimanded avoided "+"Isaac".bold()+"."}],
    [["NR4", "IN"], "AcceptabilityJudgment", {s: "He".bold()+" avoided the waiter that "+"Isaac".bold()+" reprimanded."}],    
    [["NR5", "IN"], "AcceptabilityJudgment", {s: "The waiter that "+"Isaac".bold()+" reprimanded avoided "+"Isaac".bold()+"."}],
    [["NR6", "IN"], "AcceptabilityJudgment", {s: "Isaac".bold()+" avoided the waiter that "+"Isaac".bold()+" reprimanded."}],
    
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

    [["NR1", "NN"], "AcceptabilityJudgment", {s: "The colleague that "+"Nick".bold()+" rushed past glared at "+"him".bold()+"."}],
    [["NR2", "NN"], "AcceptabilityJudgment", {s: "Nick".bold()+" glared at the colleague that "+"he".bold()+" rushed past."}],
    [["NR3", "NN"], "AcceptabilityJudgment", {s: "The colleague that "+"he".bold()+" rushed past glared at "+"Nick".bold()+"."}],
    [["NR4", "NN"], "AcceptabilityJudgment", {s: "He".bold()+" glared at the colleague that "+"Nick".bold()+" rushed past."}],
    [["NR5", "NN"], "AcceptabilityJudgment", {s: "The colleague that "+"Nick".bold()+" rushed past glared at "+"Nick".bold()+"."}],
    [["NR6", "NN"], "AcceptabilityJudgment", {s: "Nick".bold()+" glared at the colleague that "+"Nick".bold()+" rushed past."}],

    [["NR1", "ON"], "AcceptabilityJudgment", {s: "The person that "+"Oren".bold()+" bumped into scowled at "+"him".bold()+"."}],
    [["NR2", "ON"], "AcceptabilityJudgment", {s: "Oren".bold()+" scowled at the person that "+"he".bold()+" bumped into."}],
    [["NR3", "ON"], "AcceptabilityJudgment", {s: "The person that "+"he".bold()+" bumped into scowled at "+"Oren".bold()+"."}],
    [["NR4", "ON"], "AcceptabilityJudgment", {s: "He".bold()+" scowled at the person that "+"Oren".bold()+" bumped into."}],
    [["NR5", "ON"], "AcceptabilityJudgment", {s: "The person that "+"Oren".bold()+" bumped into scowled at "+"Oren".bold()+"."}],
    [["NR6", "ON"], "AcceptabilityJudgment", {s: "Oren".bold()+" scowled at the person that "+"Oren".bold()+" bumped into."}],

    [["NG1", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>Paul's</span> daughter refused to see <span class=dp>him</span>."}],
    [["NG2", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>Paul</span> refused to see <span class=dp>his</span> daughter."}],
    [["NG3", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> daughter refused to see <span class=dp>Paul</span>."}],
    [["NG4", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> refused to see <span class=dp>Paul's</span> daughter."}],
    [["NG5", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>Paul's</span> daughter refused to see <span class=dp>Paul</span>."}],
    [["NG6", "PN"], "AcceptabilityJudgment", {s: "<span class=dp>Paul</span> refused to see <span class=dp>Paul's</span> daughter."}],

    [["NR1", "QN"], "AcceptabilityJudgment", {s: "The spy that "+"Quinton".bold()+" confronted hit "+"him".bold()+" in the ribs."}],
    [["NR2", "QN"], "AcceptabilityJudgment", {s: "Quinton".bold()+" hit the spy that "+"he".bold()+" confronted in the ribs."}],
    [["NR3", "QN"], "AcceptabilityJudgment", {s: "The spy that "+"he".bold()+" confronted hit "+"Quinton".bold()+" in the ribs."}],
    [["NR4", "QN"], "AcceptabilityJudgment", {s: "He".bold()+" hit the spy that "+"Quinton".bold()+" confronted in the ribs."}],
    [["NR5", "QN"], "AcceptabilityJudgment", {s: "The spy that "+"Quinton".bold()+" confronted hit "+"Quinton".bold()+" in the ribs."}],
    [["NR6", "QN"], "AcceptabilityJudgment", {s: "Quinton".bold()+" hit the spy that "+"Quinton".bold()+" confronted in the ribs."}],

    [["NR1", "RN"], "AcceptabilityJudgment", {s: "The friend that "+"Rachel".bold()+" bought cigarettes from went to the show with "+"her".bold()+"."}],
    [["NR2", "RN"], "AcceptabilityJudgment", {s: "Rachel".bold()+" went to the show with the friend that "+"she".bold()+" bought cigarettes from."}],
    [["NR3", "RN"], "AcceptabilityJudgment", {s: "The friend that "+"she".bold()+" bought cigarettes from went to the show with "+"Rachel".bold()+"."}],
    [["NR4", "RN"], "AcceptabilityJudgment", {s: "She".bold()+" went to the show with the friend that "+"Rachel".bold()+" bought cigarettes from."}],
    [["NR5", "RN"], "AcceptabilityJudgment", {s: "The friend that "+"Rachel".bold()+" bought cigarettes from went to the show with  "+"Rachel".bold()+"."}],
    [["NR6", "RN"], "AcceptabilityJudgment", {s: "Rachel".bold()+" went to the show with the friend that "+"Rachel".bold()+" bought cigarettes from."}],

    [["NR1", "SN"], "AcceptabilityJudgment", {s: "The person that "+"Susan".bold()+" invited sat with "+"her".bold()+" at the concert."}],
    [["NR2", "SN"], "AcceptabilityJudgment", {s: "Susan".bold()+" sat with the person that "+"she".bold()+" invited at the concert."}],
    [["NR3", "SN"], "AcceptabilityJudgment", {s: "The person that "+"she".bold()+" invited sat with "+"Susan".bold()+" at the concert."}],
    [["NR4", "SN"], "AcceptabilityJudgment", {s: "She".bold()+" sat with the person that "+"Susan".bold()+" invited at the concert."}],
    [["NR5", "SN"], "AcceptabilityJudgment", {s: "The person that "+"Susan".bold()+" invited sat with "+"Susan".bold()+" at the concert."}],
    [["NR6", "SN"], "AcceptabilityJudgment", {s: "Susan".bold()+" sat with the person that "+"Susan".bold()+" invited at the concert."}],

    [["NG1", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>Thomas's</span> son left <span class=dp>him</span> in the rain."}],
    [["NG2", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>Thomas</span> left <span class=dp>his</span> son in the rain."}],
    [["NG3", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> son left <span class=dp>Thomas</span> in the rain."}],
    [["NG4", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> left <span class=dp>Thomas's</span> son in the rain."}],
    [["NG5", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>Thomas's</span> son left <span class=dp>Thomas</span> in the rain."}],
    [["NG6", "TN"], "AcceptabilityJudgment", {s: "<span class=dp>Thomas</span> left <span class=dp>Thomas's</span> son in the rain."}],

    [["NR1", "VN"], "AcceptabilityJudgment", {s: "The cousin that "+"Victor".bold()+" wrote about talked with "+"him".bold()+" at the picnic."}],
    [["NR2", "VN"], "AcceptabilityJudgment", {s: "Victor".bold()+" talked with the cousin that "+"he".bold()+" wrote about at the picnic."}],
    [["NR3", "VN"], "AcceptabilityJudgment", {s: "The cousin that "+"he".bold()+" wrote about talked with "+"Victor".bold()+" at the picnic."}],
    [["NR4", "VN"], "AcceptabilityJudgment", {s: "He".bold()+" talked with the cousin that "+"Victor".bold()+" wrote about at the picnic."}],
    [["NR5", "VN"], "AcceptabilityJudgment", {s: "The cousin that "+"Victor".bold()+" wrote about talked with "+"Victor".bold()+" at the picnic."}],
    [["NR6", "VN"], "AcceptabilityJudgment", {s: "Victor".bold()+" talked with the cousin that "+"Victor".bold()+" wrote about at the picnic."}],

    [["NR1", "WN"], "AcceptabilityJudgment", {s: "The girl that "+"Walter".bold()+" liked avoided "+"him".bold()+" at the party."}],
    [["NR2", "WN"], "AcceptabilityJudgment", {s: "Walter".bold()+" avoided the girl that "+"he".bold()+" liked at the party."}],
    [["NR3", "WN"], "AcceptabilityJudgment", {s: "The girl that "+"he".bold()+" liked avoided "+"Walter".bold()+" at the party."}],
    [["NR4", "WN"], "AcceptabilityJudgment", {s: "He".bold()+" avoided the girl that "+"Walter".bold()+" liked at the party."}],
    [["NR5", "WN"], "AcceptabilityJudgment", {s: "The girl that "+"Walter".bold()+" liked avoided "+"Walter".bold()+" at the party."}],
    [["NR6", "WN"], "AcceptabilityJudgment", {s: "Walter".bold()+" avoided the girl that "+"Walter".bold()+" liked at the party."}],

    [["NR1", "XN"], "AcceptabilityJudgment", {s: "The driver that "+"Peter".bold()+" passed honked at "+"him".bold()+" on the highway."}],
    [["NR2", "XN"], "AcceptabilityJudgment", {s: "Peter".bold()+" honked at the driver that "+"he".bold()+" passed on the highway."}],
    [["NR3", "XN"], "AcceptabilityJudgment", {s: "The driver that "+"he".bold()+" passed honked at "+"Peter".bold()+" on the highway."}],
    [["NR4", "XN"], "AcceptabilityJudgment", {s: "He".bold()+" honked at the driver that "+"Peter".bold()+" passed on the highway."}],
    [["NR5", "XN"], "AcceptabilityJudgment", {s: "The driver that "+"Peter".bold()+" passed honked at "+"Xander".bold()+" on the highway."}],
    [["NR6", "XN"], "AcceptabilityJudgment", {s: "Peter".bold()+" honked at the driver that "+"Peter".bold()+" passed on the highway."}],
   
    [["NR1", "ZN"], "AcceptabilityJudgment", {s: "The person that "+"Zach".bold()+" ran into shouted at "+"him".bold()+"."}],
    [["NR2", "ZN"], "AcceptabilityJudgment", {s: "Zach".bold()+" shouted at the person that "+"he".bold()+" ran into."}],
    [["NR3", "ZN"], "AcceptabilityJudgment", {s: "The person that "+"he".bold()+" ran into shouted at "+"Zach".bold()+"."}],
    [["NR4", "ZN"], "AcceptabilityJudgment", {s: "He".bold()+" shouted at the person that "+"Zach".bold()+" ran into."}],
    [["NR5", "ZN"], "AcceptabilityJudgment", {s: "The person that "+"Zach".bold()+" ran into shouted at "+"Zach".bold()+"."}],
    [["NR6", "ZN"], "AcceptabilityJudgment", {s: "Zach".bold()+" shouted at the person that "+"Zach".bold()+" ran into."}]

];


