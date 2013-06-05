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
                              s: "After I talked to "+"Sam".bold()+", "+"the bastard".bold()+" went and told the whole neighborhood.",
                              hideProgressBar: true,
                              transfer: null}],
    ["epInst", "Practice", {html: {include: "epithet_ex2.html"},
                              s: "Bill".bold()+" realizes that "+"the sissy".bold()+" is going to lose.",
                              hideProgressBar: true,
                              transfer: null}],
    ["epInst", "Form", {html: {include: "epithet_instructions_cont.html"}} ],
    
    ["comments", "Form", {html: {include: "comments.html"}} ],
    ["sr", "__SendResults__", { }],
    ["done", "Exit", {html: {include: "done.html"}} ],
    

//good fillers
    ["eFiller", "AcceptabilityJudgment", {s: "I wanted "+"him".bold()+" to help me, but " + "the bastard".bold() +" wouldn't do it."}],
    ["eFiller", "AcceptabilityJudgment", {s: "Although "+"the bum".bold()+" tried to hit me, I can't really get too mad at "+"him".bold()+"."}],
    ["eFiller", "AcceptabilityJudgment", {s: "It was said of "+"her".bold()+" that "+"the idiot".bold()+" lost a thousand dollars on the slots."}],
    ["eFiller", "AcceptabilityJudgment", {s: "Angela recognized "+"him".bold()+" as soon as "+"the jerk".bold()+" began to speak."}],

//med fillers
    ["eFiller", "AcceptabilityJudgment", {s: "That "+"she".bold()+" won the race really surprised "+"the brat".bold()+"."}],
    ["eFiller", "AcceptabilityJudgment", {s: "His".bold()+" unpopularity was finally realized by "+"the creep".bold()+"."}],
    ["eFiller", "AcceptabilityJudgment", {s: "He".bold()+" was besieged by a hord of bills and "+"the poor guy".bold()+" couldn't pay them."}],
    ["eFiller", "AcceptabilityJudgment", {s: "Speaking of "+"him".bold()+", "+"the moron".bold()+" is married to a genius"}],

    //bad fillers
    ["eFiller", "AcceptabilityJudgment", {s: "He".bold()+" claims that " + "the bastard".bold() +" was honest."}],
    ["eFiller", "AcceptabilityJudgment", {s: "He".bold()+" was afraid that " + "the sissy".bold() +" wouldn't get picked for a team."}],
    ["eFiller", "AcceptabilityJudgment", {s: "He".bold()+" said that "+"the fool".bold()+" didn't know when to come in out of the rain."}],
    ["eFiller", "AcceptabilityJudgment", {s: "Donna hopes "+"he".bold()+" won't embarrass "+"the poor guy".bold()+"."}],



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

    

    [["EG1", "AE"], "AcceptabilityJudgment", {s: "The bastard's".bold()+" father told "+"him".bold()+" the news."}],
    [["EG2", "AE"], "AcceptabilityJudgment", {s: "The bastard".bold()+" told "+"his".bold()+" father the news."}],
    [["EG3", "AE"], "AcceptabilityJudgment", {s: "His".bold()+" father told "+"the bastard".bold()+" the news."}],
    [["EG4", "AE"], "AcceptabilityJudgment", {s: "He".bold()+" told "+"the bastard's".bold()+" father the news."}],
    [["EG5", "AE"], "AcceptabilityJudgment", {s: "The bastard's".bold()+" father told "+"the bastard".bold()+" the news."}],
    [["EG6", "AE"], "AcceptabilityJudgment", {s: "The bastard".bold()+" told "+"the bastard's".bold()+" father the news."}],

    [["EG6", "BE"], "AcceptabilityJudgment", {s: "The idiot".bold()+" ignored "+"the idiot's".bold()+" co-workers."}],
    [["EG5", "BE"], "AcceptabilityJudgment", {s: "The idiot's".bold()+" co-workers ignored "+"the idiot".bold()+"."}],
    [["EG4", "BE"], "AcceptabilityJudgment", {s: "She".bold()+" ignored "+"the idiot's".bold()+" co-workers."}],
    [["EG3", "BE"], "AcceptabilityJudgment", {s: "Her".bold()+" co-workers ignored "+"the idiot".bold()+"."}],
    [["EG2", "BE"], "AcceptabilityJudgment", {s: "The idiot".bold()+" ignored "+"her".bold()+" co-workers."}],
    [["EG1", "BE"], "AcceptabilityJudgment", {s: "The idiot's".bold()+" co-workers ignored "+"her".bold()+"."}],

    [["ER1", "CE"], "AcceptabilityJudgment", {s: "The actor that "+"the jackass".bold()+" interviewed argued with "+"him".bold()+"."}],
    [["ER2", "CE"], "AcceptabilityJudgment", {s: "The jackass".bold()+" argued with the actor that "+"he".bold()+" interviewed."}],
    [["ER3", "CE"], "AcceptabilityJudgment", {s: "The actor that "+"he".bold()+" interviewed argued with "+"the jackass".bold()+"."}],
    [["ER4", "CE"], "AcceptabilityJudgment", {s: "He".bold()+" argued with the actor that "+"the jackass".bold()+" interviewed."}],
    [["ER5", "CE"], "AcceptabilityJudgment", {s: "The actor that "+"the jackass".bold()+" interviewed argued with "+"the jackass".bold()+"."}],
    [["ER6", "CE"], "AcceptabilityJudgment", {s: "The jackass".bold()+" argued with the actor that "+"the jackass".bold()+" interviewed."}],

    [["EG1", "DE"], "AcceptabilityJudgment", {s: "The jerk's".bold()+" boss confronted "+"him".bold()+" at lunch."}],
    [["EG2", "DE"], "AcceptabilityJudgment", {s: "The jerk".bold()+" confronted "+"his".bold()+" boss at lunch."}],
    [["EG3", "DE"], "AcceptabilityJudgment", {s: "His".bold()+" boss confronted "+"the jerk".bold()+" at lunch."}],
    [["EG4", "DE"], "AcceptabilityJudgment", {s: "He".bold()+" confronted "+"the jerk's".bold()+" boss at lunch."}],
    [["EG5", "DE"], "AcceptabilityJudgment", {s: "The jerk's".bold()+" boss confronted "+"the jerk".bold()+" at lunch."}],
    [["EG6", "DE"], "AcceptabilityJudgment", {s: "The jerk".bold()+" confronted "+"the jerk's".bold()+" boss at lunch."}],
   
    [["EG1", "EE"], "AcceptabilityJudgment", {s: "The punk's".bold()+" neighbor yelled at "+"him".bold()+" over the fence."}],
    [["EG2", "EE"], "AcceptabilityJudgment", {s: "The punk".bold()+" yelled at "+"his".bold()+" neighbor over the fence."}],
    [["EG3", "EE"], "AcceptabilityJudgment", {s: "His".bold()+" neighbor yelled at "+"the punk".bold()+" over the fence."}],
    [["EG4", "EE"], "AcceptabilityJudgment", {s: "He".bold()+" yelled at "+"the punk's".bold()+" neighbor over the fence."}],
    [["EG5", "EE"], "AcceptabilityJudgment", {s: "The punk's".bold()+" neighbor yelled at "+"the punk".bold()+" over the fence."}],
    [["EG6", "EE"], "AcceptabilityJudgment", {s: "The punk".bold()+" yelled at "+"the punk's".bold()+" neighbor over the fence."}],

    [["ER1", "FE"], "AcceptabilityJudgment", {s: "The visitor that "+"the S.O.B.".bold()+" insulted stared at "+"him".bold()+"."}],
    [["ER2", "FE"], "AcceptabilityJudgment", {s: "The S.O.B.".bold()+" stared at the visitor that "+"he".bold()+" insulted."}],
    [["ER3", "FE"], "AcceptabilityJudgment", {s: "The visitor that "+"he".bold()+" insulted stared at "+"the S.O.B.".bold()+"."}],
    [["ER4", "FE"], "AcceptabilityJudgment", {s: "He".bold()+" stared at the visitor that "+"the S.O.B.".bold()+" insulted."}],
    [["ER5", "FE"], "AcceptabilityJudgment", {s: "The visitor that "+"the SOB".bold()+" insulted stared at "+"the S.O.B.".bold()+"."}],
    [["ER6", "FE"], "AcceptabilityJudgment", {s: "The S.O.B.".bold()+" stared at the visitor that "+"the S.O.B.".bold()+" insulted."}],

    [["EG1", "GE"], "AcceptabilityJudgment", {s: "The moron's".bold()+" cousin called "+"her".bold()+" after dinner."}],
    [["EG2", "GE"], "AcceptabilityJudgment", {s: "The moron".bold()+" called "+"her".bold()+" cousin after dinner."}],
    [["EG3", "GE"], "AcceptabilityJudgment", {s: "Her".bold()+" cousin called "+"the moron".bold()+" after dinner."}],
    [["EG4", "GE"], "AcceptabilityJudgment", {s: "She".bold()+" called "+"the moron's".bold()+" cousin after dinner."}],
    [["EG5", "GE"], "AcceptabilityJudgment", {s: "The moron's".bold()+" cousin called "+"the moron".bold()+" after dinner."}],
    [["EG6", "GE"], "AcceptabilityJudgment", {s: "The moron".bold()+" called "+"the moron's".bold()+" cousin after dinner."}],

    [["EG1", "HE"], "AcceptabilityJudgment", {s: "The asshole's".bold()+" partner reported "+"him".bold()+" to the authorities."}],
    [["EG2", "HE"], "AcceptabilityJudgment", {s: "The asshole".bold()+" reported "+"his".bold()+" partner to the authorities."}],
    [["EG3", "HE"], "AcceptabilityJudgment", {s: "His".bold()+" partner reported "+"the asshole".bold()+" to the authorities."}],
    [["EG4", "HE"], "AcceptabilityJudgment", {s: "He".bold()+" reported "+"the asshole's".bold()+" partner to the authorities."}],
    [["EG5", "HE"], "AcceptabilityJudgment", {s: "The asshole's".bold()+" partner reported "+"the asshole".bold()+" to the authorities."}],
    [["EG6", "HE"], "AcceptabilityJudgment", {s: "The asshole".bold()+" reported "+"the asshole's".bold()+" partner to the authorities."}],

    [["ER1", "IE"], "AcceptabilityJudgment", {s: "The waiter that "+"the bastard".bold()+" reprimanded avoided "+"him".bold()+"."}],
    [["ER2", "IE"], "AcceptabilityJudgment", {s: "The bastard".bold()+" avoided the waiter that "+"he".bold()+" reprimanded."}],
    [["ER3", "IE"], "AcceptabilityJudgment", {s: "The waiter that "+"he".bold()+" reprimanded avoided "+"the bastard".bold()+"."}],
    [["ER4", "IE"], "AcceptabilityJudgment", {s: "He".bold()+" avoided the waiter that "+"the bastard".bold()+" reprimanded."}],    
    [["ER5", "IE"], "AcceptabilityJudgment", {s: "The waiter that "+"the bastard".bold()+" reprimanded avoided "+"the bastard".bold()+"."}],
    [["ER6", "IE"], "AcceptabilityJudgment", {s: "The bastard".bold()+" avoided the waiter that "+"the bastard".bold()+" reprimanded."}],

    [["EG1", "JE"], "AcceptabilityJudgment", {s: "The jerk's".bold()+" roommates met "+"him".bold()+" at the restaurant."}],
    [["EG2", "JE"], "AcceptabilityJudgment", {s: "The jerk".bold()+" met "+"his".bold()+" roomates at the restaurant."}],
    [["EG3", "JE"], "AcceptabilityJudgment", {s: "His".bold()+" roommates met "+"the jerk".bold()+" at the restaurant."}],
    [["EG4", "JE"], "AcceptabilityJudgment", {s: "He".bold()+" met "+"the jerk's".bold()+" roomates at the restaurant."}],
    [["EG5", "JE"], "AcceptabilityJudgment", {s: "The jerk's".bold()+" roommates met "+"the jerk".bold()+" at the restaurant."}],
    [["EG6", "JE"], "AcceptabilityJudgment", {s: "The jerk".bold()+" met "+"the jerk's".bold()+" roomates at the restaurant."}],

    [["EG1", "KE"], "AcceptabilityJudgment", {s: "The idiot's".bold()+" sister lost track of "+"her".bold()+" in the parking lot."}],
    [["EG2", "KE"], "AcceptabilityJudgment", {s: "The idiot".bold()+" lost track of "+"her".bold()+" sister in the parking lot."}],
    [["EG3", "KE"], "AcceptabilityJudgment", {s: "Her".bold()+" sister lost track of "+"the idiot".bold()+" in the parking lot."}],
    [["EG4", "KE"], "AcceptabilityJudgment", {s: "She".bold()+" lost track of "+"the idiot's".bold()+" sister in the parking lot."}],
    [["EG5", "KE"], "AcceptabilityJudgment", {s: "The idiot's".bold()+" sister lost track of "+"the idiot".bold()+" in the parking lot."}],
    [["EG6", "KE"], "AcceptabilityJudgment", {s: "The idiot".bold()+" lost track of "+"the idiot's".bold()+" sister in the parking lot."}],

    [["EG1", "LE"], "AcceptabilityJudgment", {s: "The brat's".bold()+" brother visited "+"her".bold()+" at college."}],
    [["EG2", "LE"], "AcceptabilityJudgment", {s: "The brat".bold()+" visited "+"her".bold()+" brother at college."}],
    [["EG3", "LE"], "AcceptabilityJudgment", {s: "Her".bold()+" brother visited "+"the brat".bold()+" at college."}],
    [["EG4", "LE"], "AcceptabilityJudgment", {s: "She".bold()+" visited "+"the brat's".bold()+" brother at college."}],
    [["EG5", "LE"], "AcceptabilityJudgment", {s: "The brat's".bold()+" brother visited "+"the brat".bold()+" at college."}],
    [["EG6", "LE"], "AcceptabilityJudgment", {s: "The brat".bold()+" visited "+"the brat's".bold()+" brother at college."}],

    [["EG1", "ME"], "AcceptabilityJudgment", {s: "The moron's".bold()+" husband spilled coffee on  "+"her".bold()+"."}],
    [["EG2", "ME"], "AcceptabilityJudgment", {s: "The moron".bold()+" spilled coffee on "+"her".bold()+" husband."}],
    [["EG3", "ME"], "AcceptabilityJudgment", {s: "Her".bold()+" husband spilled coffee on  "+"the moron".bold()+"."}],
    [["EG4", "ME"], "AcceptabilityJudgment", {s: "She".bold()+" spilled coffee on "+"the moron's".bold()+" husband."}],
    [["EG5", "ME"], "AcceptabilityJudgment", {s: "The moron's".bold()+" husband spilled coffee on  "+"the moron".bold()+"."}],
    [["EG6", "ME"], "AcceptabilityJudgment", {s: "The moron".bold()+" spilled coffee on "+"the moron's".bold()+" husband."}],

    [["ER1", "NE"], "AcceptabilityJudgment", {s: "The colleague that "+"the S.O.B.".bold()+" rushed past glared at "+"him".bold()+"."}],
    [["ER2", "NE"], "AcceptabilityJudgment", {s: "The S.O.B.".bold()+" glared at the colleague that "+"he".bold()+" rushed past."}],
    [["ER3", "NE"], "AcceptabilityJudgment", {s: "The colleague that "+"he".bold()+" rushed past glared at "+"the S.O.B.".bold()+"."}],
    [["ER4", "NE"], "AcceptabilityJudgment", {s: "He".bold()+" glared at the colleague that "+"the S.O.B.".bold()+" rushed past."}],
    [["ER5", "NE"], "AcceptabilityJudgment", {s: "The colleague that "+"the S.O.B.".bold()+" rushed past glared at "+"the SOB".bold()+"."}],
    [["ER6", "NE"], "AcceptabilityJudgment", {s: "The S.O.B.".bold()+" glared at the colleague that "+"the S.O.B.".bold()+" rushed past."}],

    [["ER1", "OE"], "AcceptabilityJudgment", {s: "The person that "+"the schmuck".bold()+" bumped into scowled at "+"him".bold()+"."}],
    [["ER2", "OE"], "AcceptabilityJudgment", {s: "The schmuck".bold()+" scowled at the person that "+"he".bold()+" bumped into."}],
    [["ER3", "OE"], "AcceptabilityJudgment", {s: "The person that "+"he".bold()+" bumped into scowled at "+"the schmuck".bold()+"."}],
    [["ER4", "OE"], "AcceptabilityJudgment", {s: "He".bold()+" scowled at the person that "+"the schmuck".bold()+" bumped into."}],    
    [["ER5", "OE"], "AcceptabilityJudgment", {s: "The person that "+"the schmuck".bold()+" bumped into scowled at "+"the schmuck".bold()+"."}],
    [["ER6", "OE"], "AcceptabilityJudgment", {s: "The schmuck".bold()+" scowled at the person that "+"the schmuck".bold()+" bumped into."}],
    
    [["EG1", "PE"], "AcceptabilityJudgment", {s: "The creep's".bold()+" daughter refused to see "+"him".bold()+"."}],
    [["EG2", "PE"], "AcceptabilityJudgment", {s: "The creep".bold()+" refused to see "+"his".bold()+" daughter."}],
    [["EG3", "PE"], "AcceptabilityJudgment", {s: "His".bold()+" daughter refused to see "+"the creep".bold()+"."}],
    [["EG4", "PE"], "AcceptabilityJudgment", {s: "He".bold()+" refused to see "+"the creep's".bold()+" daughter."}],
    [["EG5", "PE"], "AcceptabilityJudgment", {s: "The creep's".bold()+" daughter refused to see "+"the creep".bold()+"."}],
    [["EG6", "PE"], "AcceptabilityJudgment", {s: "The creep".bold()+" refused to see "+"the creep's".bold()+" daughter."}],

    [["ER1", "QE"], "AcceptabilityJudgment", {s: "The spy that "+"the fool".bold()+" confronted hit "+"him".bold()+" in the ribs."}],
    [["ER2", "QE"], "AcceptabilityJudgment", {s: "The fool".bold()+" hit the spy that "+"he".bold()+" confronted in the ribs."}],
    [["ER3", "QE"], "AcceptabilityJudgment", {s: "The spy that "+"he".bold()+" confronted hit "+"the fool".bold()+" in the ribs."}],
    [["ER4", "QE"], "AcceptabilityJudgment", {s: "He".bold()+" hit the spy that "+"the fool".bold()+" confronted in the ribs."}],
    [["ER5", "QE"], "AcceptabilityJudgment", {s: "The spy that "+"the fool".bold()+" confronted hit "+"the fool".bold()+" in the ribs."}],
    [["ER6", "QE"], "AcceptabilityJudgment", {s: "The fool".bold()+" hit the spy that "+"the fool".bold()+" confronted in the ribs."}],

    [["ER1", "RE"], "AcceptabilityJudgment", {s: "The friend that "+"the punk".bold()+" bought cigarettes from went to the show with "+"her".bold()+"."}],
    [["ER2", "RE"], "AcceptabilityJudgment", {s: "The punk".bold()+" went to the show with the friend that "+"she".bold()+" bought cigarettes from."}],
    [["ER3", "RE"], "AcceptabilityJudgment", {s: "The friend that "+"she".bold()+" bought cigarettes from went to the show with "+"the punk".bold()+"."}],
    [["ER4", "RE"], "AcceptabilityJudgment", {s: "She".bold()+" went to the show with the friend that "+"the punk".bold()+" bought cigarettes from."}],
    [["ER5", "RE"], "AcceptabilityJudgment", {s: "The friend that "+"the punk".bold()+" bought cigarettes from went to the show with "+"the punk".bold()+"."}],
    [["ER6", "RE"], "AcceptabilityJudgment", {s: "The punk".bold()+" went to the show with the friend that "+"the punk".bold()+" bought cigarettes from."}],

    [["ER1", "SE"], "AcceptabilityJudgment", {s: "The person that "+"the fool".bold()+" invited sat with "+"her".bold()+" at the concert."}],
    [["ER2", "SE"], "AcceptabilityJudgment", {s: "The fool".bold()+" sat with the person that "+"she".bold()+" invited at the concert."}],
    [["ER3", "SE"], "AcceptabilityJudgment", {s: "The person that "+"she".bold()+" invited sat with "+"the fool".bold()+" at the concert."}],
    [["ER4", "SE"], "AcceptabilityJudgment", {s: "She".bold()+" sat with the person that "+"the fool".bold()+" invited at the concert."}],
    [["ER5", "SE"], "AcceptabilityJudgment", {s: "The person that "+"the fool".bold()+" invited sat with "+"the fool".bold()+" at the concert."}],
    [["ER6", "SE"], "AcceptabilityJudgment", {s: "The fool".bold()+" sat with the person that "+"the fool".bold()+" invited at the concert."}],

    [["EG1", "TE"], "AcceptabilityJudgment", {s: "The schmuck's".bold()+" son left "+"him".bold()+" in the rain."}],
    [["EG2", "TE"], "AcceptabilityJudgment", {s: "The schmuck".bold()+" left "+"his".bold()+" son in the rain."}],
    [["EG3", "TE"], "AcceptabilityJudgment", {s: "His".bold()+" son left "+"the schmuck".bold()+" in the rain."}],
    [["EG4", "TE"], "AcceptabilityJudgment", {s: "He".bold()+" left "+"the schmuck's".bold()+" son in the rain."}],
    [["EG5", "TE"], "AcceptabilityJudgment", {s: "The schmuck's".bold()+" son left "+"the schmuck".bold()+" in the rain."}],
    [["EG6", "TE"], "AcceptabilityJudgment", {s: "The schmuck".bold()+" left "+"the schmuck's".bold()+" son in the rain."}],

    [["ER1", "VE"], "AcceptabilityJudgment", {s: "The cousin that "+"the brat".bold()+" wrote about talked with "+"him".bold()+" at the picnic."}],
    [["ER2", "VE"], "AcceptabilityJudgment", {s: "The brat".bold()+" talked with the cousin that "+"he".bold()+" wrote about at the picnic."}],
    [["ER3", "VE"], "AcceptabilityJudgment", {s: "The cousin that "+"he".bold()+" wrote about talked with "+"the brat".bold()+" at the picnic."}],
    [["ER4", "VE"], "AcceptabilityJudgment", {s: "He".bold()+" talked with the cousin that "+"the brat".bold()+" wrote about at the picnic."}],
    [["ER5", "VE"], "AcceptabilityJudgment", {s: "The cousin that "+"the brat".bold()+" wrote about talked with "+"the brat".bold()+" at the picnic."}],
    [["ER6", "VE"], "AcceptabilityJudgment", {s: "The brat".bold()+" talked with the cousin that "+"the brat".bold()+" wrote about at the picnic."}],

    [["ER1", "WE"], "AcceptabilityJudgment", {s: "The girl that "+"the creep".bold()+" liked avoided "+"him".bold()+" at the party."}],
    [["ER2", "WE"], "AcceptabilityJudgment", {s: "The creep".bold()+" avoided the girl that "+"he".bold()+" liked at the party."}],
    [["ER3", "WE"], "AcceptabilityJudgment", {s: "The girl that "+"he".bold()+" liked avoided "+"the creep".bold()+" at the party."}],
    [["ER4", "WE"], "AcceptabilityJudgment", {s: "He".bold()+" avoided the girl that "+"the creep".bold()+" liked at the party."}],
    [["ER5", "WE"], "AcceptabilityJudgment", {s: "The girl that "+"the creep".bold()+" liked avoided "+"the creep".bold()+" at the party."}],
    [["ER6", "WE"], "AcceptabilityJudgment", {s: "The creep".bold()+" avoided the girl that "+"the creep".bold()+" liked at the party."}],

    [["ER1", "XE"], "AcceptabilityJudgment", {s: "The driver that "+"the jackass".bold()+" passed honked at "+"him".bold()+" on the highway."}],
    [["ER2", "XE"], "AcceptabilityJudgment", {s: "The jackass".bold()+" honked at the driver that "+"he".bold()+" passed on the highway."}],
    [["ER3", "XE"], "AcceptabilityJudgment", {s: "The driver that "+"he".bold()+" passed honked at "+"the jackass".bold()+" on the highway."}],
    [["ER4", "XE"], "AcceptabilityJudgment", {s: "He".bold()+" honked at the driver that "+"the jackass".bold()+" passed on the highway."}],
    [["ER5", "XE"], "AcceptabilityJudgment", {s: "The driver that "+"the jackass".bold()+" passed honked at "+"the jackass".bold()+" on the highway."}],
    [["ER6", "XE"], "AcceptabilityJudgment", {s: "The jackass".bold()+" honked at the driver that "+"the jackass".bold()+" passed on the highway."}],

    [["ER1", "ZE"], "AcceptabilityJudgment", {s: "The person that "+"the asshole".bold()+" ran into shouted at "+"him".bold()+"."}],
    [["ER2", "ZE"], "AcceptabilityJudgment", {s: "The asshole".bold()+" shouted at the person that "+"he".bold()+" ran into."}],
    [["ER3", "ZE"], "AcceptabilityJudgment", {s: "The person that "+"he".bold()+" ran into shouted at "+"the asshole".bold()+"."}],
    [["ER4", "ZE"], "AcceptabilityJudgment", {s: "He".bold()+" shouted at the person that "+"the asshole".bold()+" ran into."}],
    [["ER5", "ZE"], "AcceptabilityJudgment", {s: "The person that "+"the asshole".bold()+" ran into shouted at "+"the asshole".bold()+"."}],
    [["ER6", "ZE"], "AcceptabilityJudgment", {s: "The asshole".bold()+" shouted at the person that "+"the asshole".bold()+" ran into."}]

];


