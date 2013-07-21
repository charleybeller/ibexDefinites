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
                              s: "After I talked to Sam, the bastard went and told the whole neighborhood.",
                              hideProgressBar: true,
                              transfer: null}],
    ["epInst", "Practice", {html: {include: "epithet_ex2.html"},
                              s: "Bill realizes that the sissy is going to lose.",
                              hideProgressBar: true,
                              transfer: null}],
    ["epInst", "Form", {html: {include: "epithet_instructions_cont.html"}} ],
    
    ["comments", "Form", {html: {include: "comments.html"}} ],
    ["sr", "__SendResults__", { }],
    ["done", "Exit", {html: {include: "done.html"}} ],
    

//good fillers
    ["eFiller", "AcceptabilityJudgment", {s: {html: "I wanted him to help me, but the bastard wouldn't do it."}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: "Although the bum tried to hit me, I can't really get too mad at him."}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: "It was said of her that the idiot lost a thousand dollars on the slots."}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: "Angela recognized him as soon as the jerk began to speak."}}],

//med fillers
    ["eFiller", "AcceptabilityJudgment", {s: {html: "That she won the race really surprised the brat."}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: "His unpopularity was finally realized by the creep."}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: "He was besieged by a hord of bills and the poor guy couldn't pay them."}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: "Speaking of him, the moron is married to a genius"}}],

    //bad fillers
    ["eFiller", "AcceptabilityJudgment", {s: {html: "He claims that the bastard was honest."}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: "He was afraid that the sissy wouldn't get picked for a team."}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: "He said that the fool didn't know when to come in out of the rain."}}],
    ["eFiller", "AcceptabilityJudgment", {s: {html: "Donna hopes he won't embarrass the poor guy."}}]



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

   /* 

    [["EG1", "AE"], "AcceptabilityJudgment", {s: {html: "The bastard's father told him the news."}}],
    [["EG2", "AE"], "AcceptabilityJudgment", {s: {html: "The bastard told his father the news."}}],
    [["EG3", "AE"], "AcceptabilityJudgment", {s: {html: "His father told the bastard the news."}}],
    [["EG4", "AE"], "AcceptabilityJudgment", {s: {html: "He told the bastard's father the news."}}],
    [["EG5", "AE"], "AcceptabilityJudgment", {s: {html: "The bastard's father told the bastard the news."}}],
    [["EG6", "AE"], "AcceptabilityJudgment", {s: {html: "The bastard told the bastard's father the news."}}],

    [["EG6", "BE"], "AcceptabilityJudgment", {s: {html: "The idiot ignored the idiot's co-workers."}}],
    [["EG5", "BE"], "AcceptabilityJudgment", {s: {html: "The idiot's co-workers ignored the idiot."}}],
    [["EG4", "BE"], "AcceptabilityJudgment", {s: {html: "She ignored the idiot's co-workers."}}],
    [["EG3", "BE"], "AcceptabilityJudgment", {s: {html: "Her co-workers ignored the idiot."}}],
    [["EG2", "BE"], "AcceptabilityJudgment", {s: {html: "The idiot ignored her co-workers."}}],
    [["EG1", "BE"], "AcceptabilityJudgment", {s: {html: "The idiot's co-workers ignored her."}}],

    [["ER1", "CE"], "AcceptabilityJudgment", {s: {html: "The actor that the jackass interviewed argued with him."}}],
    [["ER2", "CE"], "AcceptabilityJudgment", {s: {html: "The jackass argued with the actor that he interviewed."}}],
    [["ER3", "CE"], "AcceptabilityJudgment", {s: {html: "The actor that he interviewed argued with the jackass."}}],
    [["ER4", "CE"], "AcceptabilityJudgment", {s: {html: "He argued with the actor that the jackass interviewed."}}],
    [["ER5", "CE"], "AcceptabilityJudgment", {s: {html: "The actor that the jackass interviewed argued with the jackass."}}],
    [["ER6", "CE"], "AcceptabilityJudgment", {s: {html: "The jackass argued with the actor that the jackass interviewed."}}],

    [["EG1", "DE"], "AcceptabilityJudgment", {s: {html: "The jerk's boss confronted him at lunch."}}],
    [["EG2", "DE"], "AcceptabilityJudgment", {s: {html: "The jerk confronted his boss at lunch."}}],
    [["EG3", "DE"], "AcceptabilityJudgment", {s: {html: "His boss confronted the jerk at lunch."}}],
    [["EG4", "DE"], "AcceptabilityJudgment", {s: {html: "He confronted the jerk's boss at lunch."}}],
    [["EG5", "DE"], "AcceptabilityJudgment", {s: {html: "The jerk's boss confronted the jerk at lunch."}}],
    [["EG6", "DE"], "AcceptabilityJudgment", {s: {html: "The jerk confronted the jerk's boss at lunch."}}],
   
    [["EG1", "EE"], "AcceptabilityJudgment", {s: {html: "The punk's neighbor yelled at him over the fence."}}],
    [["EG2", "EE"], "AcceptabilityJudgment", {s: {html: "The punk yelled at his neighbor over the fence."}}],
    [["EG3", "EE"], "AcceptabilityJudgment", {s: {html: "His neighbor yelled at the punk over the fence."}}],
    [["EG4", "EE"], "AcceptabilityJudgment", {s: {html: "He yelled at the punk's neighbor over the fence."}}],
    [["EG5", "EE"], "AcceptabilityJudgment", {s: {html: "The punk's neighbor yelled at the punk over the fence."}}],
    [["EG6", "EE"], "AcceptabilityJudgment", {s: {html: "The punk yelled at the punk's neighbor over the fence."}}],

    [["ER1", "FE"], "AcceptabilityJudgment", {s: {html: "The visitor that the S.O.B. insulted stared at him."}}],
    [["ER2", "FE"], "AcceptabilityJudgment", {s: {html: "The S.O.B. stared at the visitor that he insulted."}}],
    [["ER3", "FE"], "AcceptabilityJudgment", {s: {html: "The visitor that he insulted stared at the S.O.B.."}}],
    [["ER4", "FE"], "AcceptabilityJudgment", {s: {html: "He stared at the visitor that the S.O.B. insulted."}}],
    [["ER5", "FE"], "AcceptabilityJudgment", {s: {html: "The visitor that the SOB insulted stared at the S.O.B.."}}],
    [["ER6", "FE"], "AcceptabilityJudgment", {s: {html: "The S.O.B. stared at the visitor that the S.O.B. insulted."}}],

    [["EG1", "GE"], "AcceptabilityJudgment", {s: {html: "The moron's cousin called her after dinner."}}],
    [["EG2", "GE"], "AcceptabilityJudgment", {s: {html: "The moron called her cousin after dinner."}}],
    [["EG3", "GE"], "AcceptabilityJudgment", {s: {html: "Her cousin called the moron after dinner."}}],
    [["EG4", "GE"], "AcceptabilityJudgment", {s: {html: "She called the moron's cousin after dinner."}}],
    [["EG5", "GE"], "AcceptabilityJudgment", {s: {html: "The moron's cousin called the moron after dinner."}}],
    [["EG6", "GE"], "AcceptabilityJudgment", {s: {html: "The moron called the moron's cousin after dinner."}}],

    [["EG1", "HE"], "AcceptabilityJudgment", {s: {html: "The asshole's partner reported him to the authorities."}}],
    [["EG2", "HE"], "AcceptabilityJudgment", {s: {html: "The asshole reported his partner to the authorities."}}],
    [["EG3", "HE"], "AcceptabilityJudgment", {s: {html: "His partner reported the asshole to the authorities."}}],
    [["EG4", "HE"], "AcceptabilityJudgment", {s: {html: "He reported the asshole's partner to the authorities."}}],
    [["EG5", "HE"], "AcceptabilityJudgment", {s: {html: "The asshole's partner reported the asshole to the authorities."}}],
    [["EG6", "HE"], "AcceptabilityJudgment", {s: {html: "The asshole reported the asshole's partner to the authorities."}}],

    [["ER1", "IE"], "AcceptabilityJudgment", {s: {html: "The waiter that the bastard reprimanded avoided him."}}],
    [["ER2", "IE"], "AcceptabilityJudgment", {s: {html: "The bastard avoided the waiter that he reprimanded."}}],
    [["ER3", "IE"], "AcceptabilityJudgment", {s: {html: "The waiter that he reprimanded avoided the bastard."}}],
    [["ER4", "IE"], "AcceptabilityJudgment", {s: {html: "He avoided the waiter that the bastard reprimanded."}],  }  
    [["ER5", "IE"], "AcceptabilityJudgment", {s: {html: "The waiter that the bastard reprimanded avoided the bastard."}}],
    [["ER6", "IE"], "AcceptabilityJudgment", {s: {html: "The bastard avoided the waiter that the bastard reprimanded."}}],

    [["EG1", "JE"], "AcceptabilityJudgment", {s: {html: "The jerk's roommates met him at the restaurant."}}],
    [["EG2", "JE"], "AcceptabilityJudgment", {s: {html: "The jerk met his roomates at the restaurant."}}],
    [["EG3", "JE"], "AcceptabilityJudgment", {s: {html: "His roommates met the jerk at the restaurant."}}],
    [["EG4", "JE"], "AcceptabilityJudgment", {s: {html: "He met the jerk's roomates at the restaurant."}}],
    [["EG5", "JE"], "AcceptabilityJudgment", {s: {html: "The jerk's roommates met the jerk at the restaurant."}}],
    [["EG6", "JE"], "AcceptabilityJudgment", {s: {html: "The jerk met the jerk's roomates at the restaurant."}}],

    [["EG1", "KE"], "AcceptabilityJudgment", {s: {html: "The idiot's sister lost track of her in the parking lot."}}],
    [["EG2", "KE"], "AcceptabilityJudgment", {s: {html: "The idiot lost track of her sister in the parking lot."}}],
    [["EG3", "KE"], "AcceptabilityJudgment", {s: {html: "Her sister lost track of the idiot in the parking lot."}}],
    [["EG4", "KE"], "AcceptabilityJudgment", {s: {html: "She lost track of the idiot's sister in the parking lot."}}],
    [["EG5", "KE"], "AcceptabilityJudgment", {s: {html: "The idiot's sister lost track of the idiot in the parking lot."}}],
    [["EG6", "KE"], "AcceptabilityJudgment", {s: {html: "The idiot lost track of the idiot's sister in the parking lot."}}],

    [["EG1", "LE"], "AcceptabilityJudgment", {s: {html: "The brat's brother visited her at college."}}],
    [["EG2", "LE"], "AcceptabilityJudgment", {s: {html: "The brat visited her brother at college."}}],
    [["EG3", "LE"], "AcceptabilityJudgment", {s: {html: "Her brother visited the brat at college."}}],
    [["EG4", "LE"], "AcceptabilityJudgment", {s: {html: "She visited the brat's brother at college."}}],
    [["EG5", "LE"], "AcceptabilityJudgment", {s: {html: "The brat's brother visited the brat at college."}}],
    [["EG6", "LE"], "AcceptabilityJudgment", {s: {html: "The brat visited the brat's brother at college."}}],

    [["EG1", "ME"], "AcceptabilityJudgment", {s: {html: "The moron's husband spilled coffee on  her."}}],
    [["EG2", "ME"], "AcceptabilityJudgment", {s: {html: "The moron spilled coffee on her husband."}}],
    [["EG3", "ME"], "AcceptabilityJudgment", {s: {html: "Her husband spilled coffee on  the moron."}}],
    [["EG4", "ME"], "AcceptabilityJudgment", {s: {html: "She spilled coffee on the moron's husband."}}],
    [["EG5", "ME"], "AcceptabilityJudgment", {s: {html: "The moron's husband spilled coffee on  the moron."}}],
    [["EG6", "ME"], "AcceptabilityJudgment", {s: {html: "The moron spilled coffee on the moron's husband."}}],

    [["ER1", "NE"], "AcceptabilityJudgment", {s: {html: "The colleague that the S.O.B. rushed past glared at him."}}],
    [["ER2", "NE"], "AcceptabilityJudgment", {s: {html: "The S.O.B. glared at the colleague that he rushed past."}}],
    [["ER3", "NE"], "AcceptabilityJudgment", {s: {html: "The colleague that he rushed past glared at the S.O.B.."}}],
    [["ER4", "NE"], "AcceptabilityJudgment", {s: {html: "He glared at the colleague that the S.O.B. rushed past."}}],
    [["ER5", "NE"], "AcceptabilityJudgment", {s: {html: "The colleague that the S.O.B. rushed past glared at the SOB."}}],
    [["ER6", "NE"], "AcceptabilityJudgment", {s: {html: "The S.O.B. glared at the colleague that the S.O.B. rushed past."}}],

    [["ER1", "OE"], "AcceptabilityJudgment", {s: {html: "The person that the schmuck bumped into scowled at him."}}],
    [["ER2", "OE"], "AcceptabilityJudgment", {s: {html: "The schmuck scowled at the person that he bumped into."}}],
    [["ER3", "OE"], "AcceptabilityJudgment", {s: {html: "The person that he bumped into scowled at the schmuck."}}],
    [["ER4", "OE"], "AcceptabilityJudgment", {s: {html: "He scowled at the person that the schmuck bumped into."}],  }  
    [["ER5", "OE"], "AcceptabilityJudgment", {s: {html: "The person that the schmuck bumped into scowled at the schmuck."}}],
    [["ER6", "OE"], "AcceptabilityJudgment", {s: {html: "The schmuck scowled at the person that the schmuck bumped into."}}],
    
    [["EG1", "PE"], "AcceptabilityJudgment", {s: {html: "The creep's daughter refused to see him."}}],
    [["EG2", "PE"], "AcceptabilityJudgment", {s: {html: "The creep refused to see his daughter."}}],
    [["EG3", "PE"], "AcceptabilityJudgment", {s: {html: "His daughter refused to see the creep."}}],
    [["EG4", "PE"], "AcceptabilityJudgment", {s: {html: "He refused to see the creep's daughter."}}],
    [["EG5", "PE"], "AcceptabilityJudgment", {s: {html: "The creep's daughter refused to see the creep."}}],
    [["EG6", "PE"], "AcceptabilityJudgment", {s: {html: "The creep refused to see the creep's daughter."}}],

    [["ER1", "QE"], "AcceptabilityJudgment", {s: {html: "The spy that the fool confronted hit him in the ribs."}}],
    [["ER2", "QE"], "AcceptabilityJudgment", {s: {html: "The fool hit the spy that he confronted in the ribs."}}],
    [["ER3", "QE"], "AcceptabilityJudgment", {s: {html: "The spy that he confronted hit the fool in the ribs."}}],
    [["ER4", "QE"], "AcceptabilityJudgment", {s: {html: "He hit the spy that the fool confronted in the ribs."}}],
    [["ER5", "QE"], "AcceptabilityJudgment", {s: {html: "The spy that the fool confronted hit the fool in the ribs."}}],
    [["ER6", "QE"], "AcceptabilityJudgment", {s: {html: "The fool hit the spy that the fool confronted in the ribs."}}],

    [["ER1", "RE"], "AcceptabilityJudgment", {s: {html: "The friend that the punk bought cigarettes from went to the show with her."}}],
    [["ER2", "RE"], "AcceptabilityJudgment", {s: {html: "The punk went to the show with the friend that she bought cigarettes from."}}],
    [["ER3", "RE"], "AcceptabilityJudgment", {s: {html: "The friend that she bought cigarettes from went to the show with the punk."}}],
    [["ER4", "RE"], "AcceptabilityJudgment", {s: {html: "She went to the show with the friend that the punk bought cigarettes from."}}],
    [["ER5", "RE"], "AcceptabilityJudgment", {s: {html: "The friend that the punk bought cigarettes from went to the show with the punk."}}],
    [["ER6", "RE"], "AcceptabilityJudgment", {s: {html: "The punk went to the show with the friend that the punk bought cigarettes from."}}],

    [["ER1", "SE"], "AcceptabilityJudgment", {s: {html: "The person that the fool invited sat with her at the concert."}}],
    [["ER2", "SE"], "AcceptabilityJudgment", {s: {html: "The fool sat with the person that she invited at the concert."}}],
    [["ER3", "SE"], "AcceptabilityJudgment", {s: {html: "The person that she invited sat with the fool at the concert."}}],
    [["ER4", "SE"], "AcceptabilityJudgment", {s: {html: "She sat with the person that the fool invited at the concert."}}],
    [["ER5", "SE"], "AcceptabilityJudgment", {s: {html: "The person that the fool invited sat with the fool at the concert."}}],
    [["ER6", "SE"], "AcceptabilityJudgment", {s: {html: "The fool sat with the person that the fool invited at the concert."}}],

    [["EG1", "TE"], "AcceptabilityJudgment", {s: {html: "The schmuck's son left him in the rain."}}],
    [["EG2", "TE"], "AcceptabilityJudgment", {s: {html: "The schmuck left his son in the rain."}}],
    [["EG3", "TE"], "AcceptabilityJudgment", {s: {html: "His son left the schmuck in the rain."}}],
    [["EG4", "TE"], "AcceptabilityJudgment", {s: {html: "He left the schmuck's son in the rain."}}],
    [["EG5", "TE"], "AcceptabilityJudgment", {s: {html: "The schmuck's son left the schmuck in the rain."}}],
    [["EG6", "TE"], "AcceptabilityJudgment", {s: {html: "The schmuck left the schmuck's son in the rain."}}],

    [["ER1", "VE"], "AcceptabilityJudgment", {s: {html: "The cousin that the brat wrote about talked with him at the picnic."}}],
    [["ER2", "VE"], "AcceptabilityJudgment", {s: {html: "The brat talked with the cousin that he wrote about at the picnic."}}],
    [["ER3", "VE"], "AcceptabilityJudgment", {s: {html: "The cousin that he wrote about talked with the brat at the picnic."}}],
    [["ER4", "VE"], "AcceptabilityJudgment", {s: {html: "He talked with the cousin that the brat wrote about at the picnic."}}],
    [["ER5", "VE"], "AcceptabilityJudgment", {s: {html: "The cousin that the brat wrote about talked with the brat at the picnic."}}],
    [["ER6", "VE"], "AcceptabilityJudgment", {s: {html: "The brat talked with the cousin that the brat wrote about at the picnic."}}],

    [["ER1", "WE"], "AcceptabilityJudgment", {s: {html: "The girl that the creep liked avoided him at the party."}}],
    [["ER2", "WE"], "AcceptabilityJudgment", {s: {html: "The creep avoided the girl that he liked at the party."}}],
    [["ER3", "WE"], "AcceptabilityJudgment", {s: {html: "The girl that he liked avoided the creep at the party."}}],
    [["ER4", "WE"], "AcceptabilityJudgment", {s: {html: "He avoided the girl that the creep liked at the party."}}],
    [["ER5", "WE"], "AcceptabilityJudgment", {s: {html: "The girl that the creep liked avoided the creep at the party."}}],
    [["ER6", "WE"], "AcceptabilityJudgment", {s: {html: "The creep avoided the girl that the creep liked at the party."}}],

    [["ER1", "XE"], "AcceptabilityJudgment", {s: {html: "The driver that the jackass passed honked at him on the highway."}}],
    [["ER2", "XE"], "AcceptabilityJudgment", {s: {html: "The jackass honked at the driver that he passed on the highway."}}],
    [["ER3", "XE"], "AcceptabilityJudgment", {s: {html: "The driver that he passed honked at the jackass on the highway."}}],
    [["ER4", "XE"], "AcceptabilityJudgment", {s: {html: "He honked at the driver that the jackass passed on the highway."}}],
    [["ER5", "XE"], "AcceptabilityJudgment", {s: {html: "The driver that the jackass passed honked at the jackass on the highway."}}],
    [["ER6", "XE"], "AcceptabilityJudgment", {s: {html: "The jackass honked at the driver that the jackass passed on the highway."}}],

    [["ER1", "ZE"], "AcceptabilityJudgment", {s: {html: "The person that the asshole ran into shouted at him."}}],
    [["ER2", "ZE"], "AcceptabilityJudgment", {s: {html: "The asshole shouted at the person that he ran into."}}],
    [["ER3", "ZE"], "AcceptabilityJudgment", {s: {html: "The person that he ran into shouted at the asshole."}}],
    [["ER4", "ZE"], "AcceptabilityJudgment", {s: {html: "He shouted at the person that the asshole ran into."}}],
    [["ER5", "ZE"], "AcceptabilityJudgment", {s: {html: "The person that the asshole ran into shouted at the asshole."}}],
    [["ER6", "ZE"], "AcceptabilityJudgment", {s: {html: "The asshole shouted at the person that the asshole ran into."}}]
    */

];

