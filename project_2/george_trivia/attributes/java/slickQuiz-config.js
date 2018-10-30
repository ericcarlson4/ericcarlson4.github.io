// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!",
        "main":    "<p>What do you know about George Washington? Take this quiz to find out!</p>",
        "results": "<p>How did you do? If you want to learn more about George, just click on the 'Learn More' button!</p>",
        "level1":  "George Expert",
        "level2":  "George Fan",
        "level3":  "Not Bad",
        "level4":  "Getting there",
        "level5":  "Give it another shot!" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Legend has it, George Washington chopped down a/an...",
            "a": [
                {"option": "apple tree",      "correct": false},
                {"option": "old woman's house",     "correct": false},
                {"option": "cherry tree",      "correct": true},
                {"option": "telephone pole",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Many believed that he chopped down his father's cherry tree, but later confessed to doing so.</p>",
            "incorrect": "<p><span>Uhh no.</span> He didn't chop down that.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "George Washington fought in this war as a young man.",
            "a": [
                {"option": "the French and Indian War",               "correct": true},
                {"option": "WWII",   "correct": false},
                {"option": "The Revolutionary War",               "correct": false},
                {"option": "the War of 1812", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> George was a commander in the French and Indian War, even at the young age of 23!</p>",
            "incorrect": "<p><span>Hmmm.</span> You might being thinking of a different time period from when George was a young man.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "George Washington is often called by this title.",
            "a": [
                {"option": "'The Greatest President'",           "correct": false},
                {"option": "'The Father of our Country'",                  "correct": true},
                {"option": "'The Coolest President'",  "correct": false},
                {"option": "'The Brother of our Country'",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Excellent!</span>He was so important to American History, he is often called the Father of our Country.</p>",
            "incorrect": "<p><span>Not Quite.</span>That isn't one of his official titles.</p>" // no comma here
        },
        { // Question 4
            "q": "George Washington was...",
            "a": [
                {"option": "The third president",    "correct": false},
                {"option": "the second president",     "correct": false},
                {"option": "the ninth president",      "correct": false},
                {"option": "the first president",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice one!</span> You got it, he was the first president of the United States.</p>",
            "incorrect": "<p><span>Whoops!</span> Not quite. He wasnt' that president.</p>" // no comma here
        },
        { // Question 5
    "q": "George Washinton lived on this plot of land.",
            "a": [
                {"option": "Monticello",    "correct": false},
                {"option": "Washington Farms",     "correct": false},
                {"option": "Mount Vernon",      "correct": true},
                {"option": "Ohio",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Great!</span> Mount Vernon was the name of Washington's estate.</p>",
            "incorrect": "<p><span> Not quite!</span> His home had a different name.</p>" // no comma here
        } // no comma here
    ]
};
