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
    [["EG1", "BE"], "AcceptabilityJudgment", {s: "<span class=dp>The idiot's</span> co-workers ignored <span class=dp>her</span>."}]];
