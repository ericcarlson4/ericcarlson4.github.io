// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!",
        "main":    "<p>How much do you think you know about Abe Lincoln? Take this quiz to find out!</p>",
        "results": "<p>How did you do? If you want to learn more about Abe, just click on the 'Learn More' button!</p>",
        "level1":  "Abe Expert",
        "level2":  "Abe Fan",
        "level3":  "Not bad",
        "level4":  "Getting there",
        "level5":  "Give it another shot!" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What kind of building was Abe Lincoln born in?",
            "a": [
                {"option": "A hospital",      "correct": false},
                {"option": "A mansion",     "correct": false},
                {"option": "A house in the suburbs",      "correct": false},
                {"option": "A log cabin",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Abe was born in a log cabin in Kentucky</p>",
            "incorrect": "<p><span> Not quite.</span> He was born in a different kid of building.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "As a young man, what sport did Abe Lincoln take part in?",
            "a": [
                {"option": "baseball",               "correct": false},
                {"option": "boxing","correct": true},
                {"option": "cross-country",               "correct": false},
                {"option": "football", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Abe was a boxing champion!</p>",
            "incorrect": "<p><span>Hmmm.</span> Nope, that's not the right sport.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Abe lincoln debated this man about slavery, even before the civil war.",
            "a": [
                {"option": "Fredrick Douglass",           "correct": false},
                {"option": "Jim Crow'",                  "correct": false},
                {"option": "Stephen Douglas",  "correct": true},
                {"option": "Paul McCartney",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Nailed it!</span>Abe's debate with Stephen Douglas was incredibly famous! Abe argued against slavery. </p>",
            "incorrect": "<p><span>Not Quite.</span> Next time, I guess.</p>" // no comma here
        },
        { // Question 4
            "q": "Abe wrote this important document, attempting to free slaves in the South.",
            "a": [
                {"option": "The Emancipation Proclamation",    "correct": true},
                {"option": "The Emancipation Free-Slaves Declaration",     "correct": false},
                {"option": "The 13th Ammendment",      "correct": false},
                {"option": "The Lord of the Rings",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> While the Emancipation Proclamation did not actually free the slaves in the South, it inspired many slaves to escape.</p>",
            "incorrect": "<p><span>Oops.</span> Wrong one.</p>" // no comma here
        },
        { // Question 5
            "q": "Abraham Lincoln was assassinated by John Wilkes Booth in...",
            "a": [
                {"option": "a car",    "correct": false},
                {"option": "a theatre",     "correct": true},
                {"option": "the White House",      "correct": false},
                {"option": "a Civil War battle.",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct.</span> Tragically, John Wilkes Booth was an actor of the theatre and shot Lincoln.</p>",
            "incorrect": "<p><span>Not Quite.</span> Different place.</p>" // no comma here
        } // no comma here
    ]
};
