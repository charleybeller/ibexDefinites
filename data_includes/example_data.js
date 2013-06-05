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
    [["EG1", "AE"], "AcceptabilityJudgment", {s: {html: "<span class=dp>The bastard's</span> father told <span class=dp>him</span> the news."}}],
    [["EG2", "AE"], "AcceptabilityJudgment", {s: {html: "<span class=dp>The bastard</span> told <span class=dp>his</span> father the news."}}],
    [["EG3", "AE"], "AcceptabilityJudgment", {s: {html: "<span class=dp>His</span> father told <span class=dp>the bastard</span> the news."}}],
    [["EG4", "AE"], "AcceptabilityJudgment", {s: {html: "<span class=dp>He</span> told <span class=dp>the bastard's</span> father the news."}}],
    [["EG5", "AE"], "AcceptabilityJudgment", {s: {html: "<span class=dp>The bastard's</span> father told <span class=dp>the bastard</span> the news."}}],
    [["EG6", "AE"], "AcceptabilityJudgment", {s: {html: "<span class=dp>The bastard</span> told <span class=dp>the bastard's</span> father the news."}}]
    ];

