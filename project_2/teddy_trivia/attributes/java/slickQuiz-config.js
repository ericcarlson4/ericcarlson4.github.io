// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>How much do you think you know about Teddy Roosevelt? Take this quiz to find out!</p>",
        "results": "<h5>Learn More</h5><p>How did you do? If you want to learn more about Teddy, just click on the 'Learn More' button!</p>",
        "level1":  "Teddy Expert",
        "level2":  "Teddy Fan",
        "level3":  "Not bad",
        "level4":  "Getting there",
        "level5":  "Give it another shot!" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What was the nickname of the political party Teddy made?",
            "a": [
                {"option": "Bulldog Party",      "correct": false},
                {"option": "Cow Horse Party",     "correct": false},
                {"option": "Bull Moose Party",      "correct": true},
                {"option": "Moose Bull Party",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> His party was called the Bull Moose Party!</p>",
            "incorrect": "<p><span> Not quite.</span> There's always next time</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Teddy once gave a speech even though...",
            "a": [
                {"option": "He had a terrible toothache",               "correct": false},
                {"option": "Someone had shot him right before his speech","correct": true},
                {"option": "He had overslept and showed up 20 minutes late",               "correct": false},
                {"option": "No one in the crowd spoke English", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> He sure was a cool guy, huh?</p>",
            "incorrect": "<p><span>Hmmm.</span> The real answer is even more surprising!</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Teddy is best known for creating the...",
            "a": [
                {"option": "Teddy Bear",           "correct": false},
                {"option": "nickname 'Teddy'",                  "correct": false},
                {"option": "National Parks System",  "correct": true},
                {"option": "National Bank",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Nailed it!</span>Teddy loved the great out doors and wanted to preserve the most beautiful parts of the country. </p>",
            "incorrect": "<p><span>Not Quite.</span> Next time, I guess.</p>" // no comma here
        },
        { // Question 4
            "q": "Teddy was born in this State",
            "a": [
                {"option": "Montana",    "correct": false},
                {"option": "Ohio",     "correct": false},
                {"option": "Virginia",      "correct": false},
                {"option": "New York",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> You sure are smart!</p>",
            "incorrect": "<p><span>Oops.</span> Wrong State.</p>" // no comma here
        },
        { // Question 5
            "q": "What did Teddy do every day as President?",
            "a": [
                {"option": "Read an entire book",    "correct": true},
                {"option": "Go to the Capitol building",     "correct": false},
                {"option": "Eat dinner with Vice President Taft",      "correct": false},
                {"option": "Make a new law",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> He was a really smart man, and a speed reader.</p>",
            "incorrect": "<p><span>Whoops!</span> not quite!</p>" // no comma here
        } // no comma here
    ]
};
