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
var shuffleSequence = seq("intro", "epInst", "setcounter", rshuffle("eFillerGOOD", "eFillerMED", "eFillerBAD", "ER1","ER2","ER3","ER4","ER5","ER6","EG1","EG2","EG3","EG4","EG5","EG6"), "comments", "sr", "done" )
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
    ["eFillerGOOD", "AcceptabilityJudgment", {s: "I wanted <span class=dp>him</span> to help me, but <span class=dp>the bastard</span> wouldn't do it."}],
    ["eFillerGOOD", "AcceptabilityJudgment", {s: "Although <span class=dp>the bum</span> tried to hit me, I can't really get too mad at <span class=dp>him</span>."}],
    ["eFillerGOOD", "AcceptabilityJudgment", {s: "It was said of <span class=dp>her</span> that <span class=dp>the idiot</span> lost a thousand dollars on the slots."}],
    ["eFillerGOOD", "AcceptabilityJudgment", {s: "Angela recognized <span class=dp>him</span> as soon as <span class=dp>the jerk</span> began to speak."}],

//med fillers
    ["eFillerMED", "AcceptabilityJudgment", {s: "That <span class=dp>she</span> won the race really surprised <span class=dp>the brat</span>."}],
    ["eFillerMED", "AcceptabilityJudgment", {s: "<span class=dp>His</span> unpopularity was finally realized by <span class=dp>the creep</span>."}],
    ["eFillerMED", "AcceptabilityJudgment", {s: "<span class=dp>He</span> was besieged by a hord of bills and <span class=dp>the poor guy</span> couldn't pay them."}],
    ["eFillerMED", "AcceptabilityJudgment", {s: "Speaking of <span class=dp>him</span>, <span class=dp>the moron</span> is married to a genius"}],

    //bad fillers
    ["eFillerBAD", "AcceptabilityJudgment", {s: "<span class=dp>He</span> claims that <span class=dp>the bastard</span> was honest."}],
    ["eFillerBAD", "AcceptabilityJudgment", {s: "<span class=dp>He</span> was afraid that <span class=dp>the sissy</span> wouldn't get picked for a team."}],
    ["eFillerBAD", "AcceptabilityJudgment", {s: "<span class=dp>He</span> said that <span class=dp>the fool</span> didn't know when to come in out of the rain."}],
    ["eFillerBAD", "AcceptabilityJudgment", {s: "Donna hopes <span class=dp>he</span> won't embarrass <span class=dp>the poor guy</span>."}],



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

    

    [["EG1", "AE"], "AcceptabilityJudgment", {s: "<span class=dp>The bastard's</span> father told <span class=dp>him</span> the news."}],
    [["EG2", "AE"], "AcceptabilityJudgment", {s: "<span class=dp>The bastard</span> told <span class=dp>his</span> father the news."}],
    [["EG3", "AE"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> father told <span class=dp>the bastard</span> the news."}],
    [["EG4", "AE"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> told <span class=dp>the bastard's</span> father the news."}],
    [["EG5", "AE"], "AcceptabilityJudgment", {s: "<span class=dp>The bastard's</span> father told <span class=dp>the bastard</span> the news."}],
    [["EG6", "AE"], "AcceptabilityJudgment", {s: "<span class=dp>The bastard</span> told <span class=dp>the bastard's</span> father the news."}],

    [["EG6", "BE"], "AcceptabilityJudgment", {s: "<span class=dp>The idiot</span> ignored <span class=dp>the idiot's</span> co-workers."}],
    [["EG5", "BE"], "AcceptabilityJudgment", {s: "<span class=dp>The idiot's</span> co-workers ignored <span class=dp>the idiot</span>."}],
    [["EG4", "BE"], "AcceptabilityJudgment", {s: "<span class=dp>She</span> ignored <span class=dp>the idiot's</span> co-workers."}],
    [["EG3", "BE"], "AcceptabilityJudgment", {s: "<span class=dp>Her</span> co-workers ignored <span class=dp>the idiot</span>."}],
    [["EG2", "BE"], "AcceptabilityJudgment", {s: "<span class=dp>The idiot</span> ignored <span class=dp>her</span> co-workers."}],
    [["EG1", "BE"], "AcceptabilityJudgment", {s: "<span class=dp>The idiot's</span> co-workers ignored <span class=dp>her</span>."}],

    [["ER1", "CE"], "AcceptabilityJudgment", {s: "The actor that <span class=dp>the jackass</span> interviewed argued with <span class=dp>him</span>."}],
    [["ER2", "CE"], "AcceptabilityJudgment", {s: "<span class=dp>The jackass</span> argued with the actor that <span class=dp>he</span> interviewed."}],
    [["ER3", "CE"], "AcceptabilityJudgment", {s: "The actor that <span class=dp>he</span> interviewed argued with <span class=dp>the jackass</span>."}],
    [["ER4", "CE"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> argued with the actor that <span class=dp>the jackass</span> interviewed."}],
    [["ER5", "CE"], "AcceptabilityJudgment", {s: "The actor that <span class=dp>the jackass</span> interviewed argued with <span class=dp>the jackass</span>."}],
    [["ER6", "CE"], "AcceptabilityJudgment", {s: "<span class=dp>The jackass</span> argued with the actor that <span class=dp>the jackass</span> interviewed."}],

    [["EG1", "DE"], "AcceptabilityJudgment", {s: "<span class=dp>The jerk's</span> boss confronted <span class=dp>him</span> at lunch."}],
    [["EG2", "DE"], "AcceptabilityJudgment", {s: "<span class=dp>The jerk</span> confronted <span class=dp>his</span> boss at lunch."}],
    [["EG3", "DE"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> boss confronted <span class=dp>the jerk</span> at lunch."}],
    [["EG4", "DE"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> confronted <span class=dp>the jerk's</span> boss at lunch."}],
    [["EG5", "DE"], "AcceptabilityJudgment", {s: "<span class=dp>The jerk's</span> boss confronted <span class=dp>the jerk</span> at lunch."}],
    [["EG6", "DE"], "AcceptabilityJudgment", {s: "<span class=dp>The jerk</span> confronted <span class=dp>the jerk's</span> boss at lunch."}],
   
    [["EG1", "EE"], "AcceptabilityJudgment", {s: "<span class=dp>The punk's</span> neighbor yelled at <span class=dp>him</span> over the fence."}],
    [["EG2", "EE"], "AcceptabilityJudgment", {s: "<span class=dp>The punk</span> yelled at <span class=dp>his</span> neighbor over the fence."}],
    [["EG3", "EE"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> neighbor yelled at <span class=dp>the punk</span> over the fence."}],
    [["EG4", "EE"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> yelled at <span class=dp>the punk's</span> neighbor over the fence."}],
    [["EG5", "EE"], "AcceptabilityJudgment", {s: "<span class=dp>The punk's</span> neighbor yelled at <span class=dp>the punk</span> over the fence."}],
    [["EG6", "EE"], "AcceptabilityJudgment", {s: "<span class=dp>The punk</span> yelled at <span class=dp>the punk's</span> neighbor over the fence."}],

    [["ER1", "FE"], "AcceptabilityJudgment", {s: "The visitor that <span class=dp>the S.O.B.</span> insulted stared at <span class=dp>him</span>."}],
    [["ER2", "FE"], "AcceptabilityJudgment", {s: "<span class=dp>The S.O.B.</span> stared at the visitor that <span class=dp>he</span> insulted."}],
    [["ER3", "FE"], "AcceptabilityJudgment", {s: "The visitor that <span class=dp>he</span> insulted stared at <span class=dp>the S.O.B.</span>."}],
    [["ER4", "FE"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> stared at the visitor that <span class=dp>the S.O.B.</span> insulted."}],
    [["ER5", "FE"], "AcceptabilityJudgment", {s: "The visitor that <span class=dp>the SOB</span> insulted stared at <span class=dp>the S.O.B.</span>."}],
    [["ER6", "FE"], "AcceptabilityJudgment", {s: "<span class=dp>The S.O.B.</span> stared at the visitor that <span class=dp>the S.O.B.</span> insulted."}],

    [["EG1", "GE"], "AcceptabilityJudgment", {s: "<span class=dp>The moron's</span> cousin called <span class=dp>her</span> after dinner."}],
    [["EG2", "GE"], "AcceptabilityJudgment", {s: "<span class=dp>The moron</span> called <span class=dp>her</span> cousin after dinner."}],
    [["EG3", "GE"], "AcceptabilityJudgment", {s: "<span class=dp>Her</span> cousin called <span class=dp>the moron</span> after dinner."}],
    [["EG4", "GE"], "AcceptabilityJudgment", {s: "<span class=dp>She</span> called <span class=dp>the moron's</span> cousin after dinner."}],
    [["EG5", "GE"], "AcceptabilityJudgment", {s: "<span class=dp>The moron's</span> cousin called <span class=dp>the moron</span> after dinner."}],
    [["EG6", "GE"], "AcceptabilityJudgment", {s: "<span class=dp>The moron</span> called <span class=dp>the moron's</span> cousin after dinner."}],

    [["EG1", "HE"], "AcceptabilityJudgment", {s: "<span class=dp>The asshole's</span> partner reported <span class=dp>him</span> to the authorities."}],
    [["EG2", "HE"], "AcceptabilityJudgment", {s: "<span class=dp>The asshole</span> reported <span class=dp>his</span> partner to the authorities."}],
    [["EG3", "HE"], "AcceptabilityJudgment", {s: "<span class=dp>His</span> partner reported <span class=dp>the asshole</span> to the authorities."}],
    [["EG4", "HE"], "AcceptabilityJudgment", {s: "<span class=dp>He</span> reported <span class=dp>the asshole's</span> partner to the authorities."}],
    [["EG5", "HE"], "AcceptabilityJudgment", {s: "<span class=dp>The asshole's</span> partner reported <span class=dp>the asshole</span> to the authorities."}],
    [["EG6", "HE"], "AcceptabilityJudgment", {s: "<span class=dp>The asshole</span> reported <span class=dp>the asshole's</span> partner to the authorities."}]];
