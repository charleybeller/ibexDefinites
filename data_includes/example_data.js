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
    ["nFiller", "AcceptabilityJudgment", {s: "I wanted <span class=dp>him</span> to help me, but <span class=dp>Charlie</span> wouldn't do it."}],
    ["nFiller", "AcceptabilityJudgment", {s: "Although <span class=dp>Harry</span> tried to hit me, I can't really get too mad at <span class=dp>him</span>."}],
    ["nFiller", "AcceptabilityJudgment", {s: "It was said of <span class=dp>her</span> that <span class=dp>Laura</span> lost a thousand dollars on the slots."}],
    ["nFiller", "AcceptabilityJudgment", {s: "Angela recognized <span class=dp>him</span> as soon as <span class=dp>Leo</span> began to speak."}],

//med fillers
    ["nFiller", "AcceptabilityJudgment", {s: "That <span class=dp>she</span> won the race really surprised <span class=dp>Sandra</span>."}],
    ["nFiller", "AcceptabilityJudgment", {s: "<span class=dp>His</span> unpopularity was finally realized by <span class=dp>Oscar</span>."}],
    ["nFiller", "AcceptabilityJudgment", {s: "<span class=dp>He</span> was besieged by a hord of bills and <span class=dp>Irving</span> couldn't pay them."}],
    ["nFiller", "AcceptabilityJudgment", {s: "Speaking of <span class=dp>him</span>, <span class=dp>Richard</span> is married to a genius"}],

    //bad fillers
    ["nFiller", "AcceptabilityJudgment", {s: "<span class=dp>He</span> claims that <span class=dp>Melvin</span> was honest."}],
    ["nFiller", "AcceptabilityJudgment", {s: "<span class=dp>He</span> was afraid that <span class=dp>Brad</span> wouldn't get picked for a team."}],
    ["nFiller", "AcceptabilityJudgment", {s: "<span class=dp>He</span> said that <span class=dp>Jake</span> didn't know when to come in out of the rain."}],
    ["nFiller", "AcceptabilityJudgment", {s: "Donna hopes <span class=dp>he</span> won't embarrass <span class=dp>Steve</span>."}],

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

    
    [["NG1", "AN"], "AcceptabilityJudgment", {s: "Andrew's".bold()+" father told "+"him".bold()+" the news."}],
    [["NG2", "AN"], "AcceptabilityJudgment", {s: "Andrew".bold()+" told "+"his".bold()+" father the news."}],
    [["NG3", "AN"], "AcceptabilityJudgment", {s: "His".bold()+" father told "+"Andrew".bold()+" the news."}],
    [["NG4", "AN"], "AcceptabilityJudgment", {s: "He".bold()+" told "+"Andrew's".bold()+" father the news."}],
    [["NG5", "AN"], "AcceptabilityJudgment", {s: "Andrew's".bold()+" father told "+"Andrew".bold()+" the news."}],
    [["NG6", "AN"], "AcceptabilityJudgment", {s: "Andrew".bold()+" told "+"Andrew's".bold()+" father the news."}],

    [["NG1", "BN"], "AcceptabilityJudgment", {s: "Beth's".bold()+" co-workers ignored "+"her".bold()+"."}],
    [["NG2", "BN"], "AcceptabilityJudgment", {s: "Beth".bold()+" ignored "+"her".bold()+" co-workers."}],
    [["NG3", "BN"], "AcceptabilityJudgment", {s: "Her".bold()+" co-workers ignored "+"Beth".bold()+"."}],
    [["NG4", "BN"], "AcceptabilityJudgment", {s: "She".bold()+" ignored "+"Beth's".bold()+" co-workers."}],
    [["NG5", "BN"], "AcceptabilityJudgment", {s: "Beth's".bold()+" co-workers ignored "+"Beth".bold()+"."}],
    [["NG6", "BN"], "AcceptabilityJudgment", {s: "Beth".bold()+" ignored "+"Beth's".bold()+" co-workers."}],

    [["NR1", "CN"], "AcceptabilityJudgment", {s: "The actor that "+"Colin".bold()+" interviewed argued with "+"him".bold()+"."}],
    [["NR2", "CN"], "AcceptabilityJudgment", {s: "Colin".bold()+" argued with the actor that "+"he".bold()+" interviewed."}],
    [["NR3", "CN"], "AcceptabilityJudgment", {s: "The actor that "+"he".bold()+" interviewed argued with "+"Colin".bold()+"."}],
    [["NR4", "CN"], "AcceptabilityJudgment", {s: "He".bold()+" argued with the actor that "+"Colin".bold()+" interviewed."}],
    [["NR5", "CN"], "AcceptabilityJudgment", {s: "The actor that "+"Colin".bold()+" interviewed argued with "+"Colin".bold()+"."}],
    [["NR6", "CN"], "AcceptabilityJudgment", {s: "Colin".bold()+" argued with the actor that "+"Colin".bold()+" interviewed."}],

    [["NG1", "DN"], "AcceptabilityJudgment", {s: "David's".bold()+" boss confronted "+"him".bold()+" at lunch."}],
    [["NG2", "DN"], "AcceptabilityJudgment", {s: "David".bold()+" confronted "+"his".bold()+" boss at lunch."}],
    [["NG3", "DN"], "AcceptabilityJudgment", {s: "His".bold()+" boss confronted "+"David".bold()+" at lunch."}],
    [["NG4", "DN"], "AcceptabilityJudgment", {s: "He".bold()+" confronted "+"David's".bold()+" boss at lunch."}],
    [["NG5", "DN"], "AcceptabilityJudgment", {s: "David's".bold()+" boss confronted "+"David".bold()+" at lunch."}],
    [["NG6", "DN"], "AcceptabilityJudgment", {s: "David".bold()+" confronted "+"David's".bold()+" boss at lunch."}],

    [["NG1", "EN"], "AcceptabilityJudgment", {s: "Evan's".bold()+" neighbor yelled at "+"him".bold()+" over the fence."}],
    [["NG2", "EN"], "AcceptabilityJudgment", {s: "Evan".bold()+" yelled at "+"his".bold()+" neighbor over the fence."}],
    [["NG3", "EN"], "AcceptabilityJudgment", {s: "His".bold()+" neighbor yelled at "+"Evan".bold()+" over the fence."}],
    [["NG4", "EN"], "AcceptabilityJudgment", {s: "He".bold()+" yelled at "+"Evan's".bold()+" neighbor over the fence."}],
    [["NG5", "EN"], "AcceptabilityJudgment", {s: "Evan's".bold()+" neighbor yelled at "+"Evan".bold()+" over the fence."}],
    [["NG6", "EN"], "AcceptabilityJudgment", {s: "Evan".bold()+" yelled at "+"Evan's".bold()+" neighbor over the fence."}],

    [["NR1", "FN"], "AcceptabilityJudgment", {s: "The visitor that "+"Fred".bold()+" insulted stared at "+"him".bold()+"."}],
    [["NR2", "FN"], "AcceptabilityJudgment", {s: "Fred".bold()+" stared at the visitor that "+"he".bold()+" insulted."}],
    [["NR3", "FN"], "AcceptabilityJudgment", {s: "The visitor that "+"he".bold()+" insulted stared at "+"Fred".bold()+"."}],
    [["NR4", "FN"], "AcceptabilityJudgment", {s: "He".bold()+" stared at the visitor that "+"Fred".bold()+" insulted."}],
    [["NR5", "FN"], "AcceptabilityJudgment", {s: "The visitor that "+"Fred".bold()+" insulted stared at "+"Fred".bold()+"."}],
    [["NR6", "FN"], "AcceptabilityJudgment", {s: "Fred".bold()+" stared at the visitor that "+"Fred".bold()+" insulted."}],

    [["NG1", "GN"], "AcceptabilityJudgment", {s: "Gayle's".bold()+" cousin called "+"her".bold()+" after dinner."}],
    [["NG2", "GN"], "AcceptabilityJudgment", {s: "Gayle".bold()+" called "+"her".bold()+" cousin after dinner."}],
    [["NG3", "GN"], "AcceptabilityJudgment", {s: "Her".bold()+" cousin called "+"Gayle".bold()+" after dinner."}],
    [["NG4", "GN"], "AcceptabilityJudgment", {s: "She".bold()+" called "+"Gayle's".bold()+" cousin after dinner."}],
    [["NG5", "GN"], "AcceptabilityJudgment", {s: "Gayle's".bold()+" cousin called "+"Gayle".bold()+" after dinner."}],
    [["NG6", "GN"], "AcceptabilityJudgment", {s: "Gayle".bold()+" called "+"Gayle's".bold()+" cousin after dinner."}],

    [["NG1", "HN"], "AcceptabilityJudgment", {s: "Hugo's".bold()+" partner reported "+"him".bold()+" to the authorities."}],
    [["NG2", "HN"], "AcceptabilityJudgment", {s: "Hugo".bold()+" reported "+"his".bold()+" partner to the authorities."}],
    [["NG3", "HN"], "AcceptabilityJudgment", {s: "His".bold()+" partner reported "+"Hugo".bold()+" to the authorities."}],
    [["NG4", "HN"], "AcceptabilityJudgment", {s: "He".bold()+" reported "+"Hugo's".bold()+" partner to the authorities."}],
    [["NG5", "HN"], "AcceptabilityJudgment", {s: "Hugo's".bold()+" partner reported "+"Hugo".bold()+" to the authorities."}],
    [["NG6", "HN"], "AcceptabilityJudgment", {s: "Hugo".bold()+" reported "+"Hugo's".bold()+" partner to the authorities."}],

    [["NR1", "IN"], "AcceptabilityJudgment", {s: "The waiter that "+"Isaac".bold()+" reprimanded avoided "+"him".bold()+"."}],
    [["NR2", "IN"], "AcceptabilityJudgment", {s: "Isaac".bold()+" avoided the waiter that "+"he".bold()+" reprimanded."}],
    [["NR3", "IN"], "AcceptabilityJudgment", {s: "The waiter that "+"he".bold()+" reprimanded avoided "+"Isaac".bold()+"."}],
    [["NR4", "IN"], "AcceptabilityJudgment", {s: "He".bold()+" avoided the waiter that "+"Isaac".bold()+" reprimanded."}],    
    [["NR5", "IN"], "AcceptabilityJudgment", {s: "The waiter that "+"Isaac".bold()+" reprimanded avoided "+"Isaac".bold()+"."}],
    [["NR6", "IN"], "AcceptabilityJudgment", {s: "Isaac".bold()+" avoided the waiter that "+"Isaac".bold()+" reprimanded."}],
    
    [["NG1", "JN"], "AcceptabilityJudgment", {s: "John's".bold()+" roommates met "+"him".bold()+" at the restaurant."}],
    [["NG2", "JN"], "AcceptabilityJudgment", {s: "John".bold()+" met "+"his".bold()+" roomates at the restaurant."}],
    [["NG3", "JN"], "AcceptabilityJudgment", {s: "His".bold()+" roommates met "+"John".bold()+" at the restaurant."}],
    [["NG4", "JN"], "AcceptabilityJudgment", {s: "He".bold()+" met "+"John's".bold()+" roomates at the restaurant."}],
    [["NG5", "JN"], "AcceptabilityJudgment", {s: "John's".bold()+" roommates met "+"John".bold()+" at the restaurant."}],
    [["NG6", "JN"], "AcceptabilityJudgment", {s: "John".bold()+" met "+"John's".bold()+" roomates at the restaurant."}],

    [["NG1", "KN"], "AcceptabilityJudgment", {s: "Kelly's".bold()+" sister lost track of "+"her".bold()+" in the parking lot."}],
    [["NG2", "KN"], "AcceptabilityJudgment", {s: "Kelly".bold()+" lost track of "+"her".bold()+" sister in the parking lot."}],
    [["NG3", "KN"], "AcceptabilityJudgment", {s: "Her".bold()+" sister lost track of "+"Kelly".bold()+" in the parking lot."}],
    [["NG4", "KN"], "AcceptabilityJudgment", {s: "She".bold()+" lost track of "+"Kelly's".bold()+" sister in the parking lot."}],
    [["NG5", "KN"], "AcceptabilityJudgment", {s: "Kelly's".bold()+" sister lost track of "+"Kelly".bold()+" in the parking lot."}],
    [["NG6", "KN"], "AcceptabilityJudgment", {s: "Kelly".bold()+" lost track of "+"Kelly's".bold()+" sister in the parking lot."}],

    [["NG1", "LN"], "AcceptabilityJudgment", {s: "Lisa's".bold()+" brother visited "+"her".bold()+" at college."}],
    [["NG2", "LN"], "AcceptabilityJudgment", {s: "Lisa".bold()+" visited "+"her".bold()+" brother at college."}],
    [["NG3", "LN"], "AcceptabilityJudgment", {s: "Her".bold()+" brother visited "+"Lisa".bold()+" at college."}],
    [["NG4", "LN"], "AcceptabilityJudgment", {s: "She".bold()+" visited "+"Lisa's".bold()+" brother at college."}],
    [["NG5", "LN"], "AcceptabilityJudgment", {s: "Lisa's".bold()+" brother visited "+"Lisa".bold()+" at college."}],
    [["NG6", "LN"], "AcceptabilityJudgment", {s: "Lisa".bold()+" visited "+"Lisa's".bold()+" brother at college."}],

    [["NG1", "MN"], "AcceptabilityJudgment", {s: "Mary's".bold()+" husband spilled coffee on "+"her".bold()+"."}],
    [["NG2", "MN"], "AcceptabilityJudgment", {s: "Mary".bold()+" spilled coffee on "+"her".bold()+" husband."}],
    [["NG3", "MN"], "AcceptabilityJudgment", {s: "Her".bold()+" husband spilled coffee on  "+"Mary".bold()+"."}],
    [["NG4", "MN"], "AcceptabilityJudgment", {s: "She".bold()+" spilled coffee on "+"Mary's".bold()+" husband."}],
    [["NG5", "MN"], "AcceptabilityJudgment", {s: "Mary's".bold()+" husband spilled coffee on  "+"Mary".bold()+"."}],
    [["NG6", "MN"], "AcceptabilityJudgment", {s: "Mary".bold()+" spilled coffee on "+"Mary's".bold()+" husband."}],

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

    [["NG1", "PN"], "AcceptabilityJudgment", {s: "Paul's".bold()+" daughter refused to see "+"him".bold()+"."}],
    [["NG2", "PN"], "AcceptabilityJudgment", {s: "Paul".bold()+" refused to see "+"his".bold()+" daughter."}],
    [["NG3", "PN"], "AcceptabilityJudgment", {s: "His".bold()+" daughter refused to see "+"Paul".bold()+"."}],
    [["NG4", "PN"], "AcceptabilityJudgment", {s: "He".bold()+" refused to see "+"Paul's".bold()+" daughter."}],
    [["NG5", "PN"], "AcceptabilityJudgment", {s: "Paul's".bold()+" daughter refused to see "+"Paul".bold()+"."}],
    [["NG6", "PN"], "AcceptabilityJudgment", {s: "Paul".bold()+" refused to see "+"Paul's".bold()+" daughter."}],

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

    [["NG1", "TN"], "AcceptabilityJudgment", {s: "Thomas's".bold()+" son left "+"him".bold()+" in the rain."}],
    [["NG2", "TN"], "AcceptabilityJudgment", {s: "Thomas".bold()+" left "+"his".bold()+" son in the rain."}],
    [["NG3", "TN"], "AcceptabilityJudgment", {s: "His".bold()+" son left "+"Thomas".bold()+" in the rain."}],
    [["NG4", "TN"], "AcceptabilityJudgment", {s: "He".bold()+" left "+"Thomas's".bold()+" son in the rain."}],
    [["NG5", "TN"], "AcceptabilityJudgment", {s: "Thomas's".bold()+" son left "+"Thomas".bold()+" in the rain."}],
    [["NG6", "TN"], "AcceptabilityJudgment", {s: "Thomas".bold()+" left "+"Thomas's".bold()+" son in the rain."}],

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


