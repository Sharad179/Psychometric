function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const TruthfulnessAndResponsibility = [

    {
        "Id": "Q1",
        "Ques": "You did a small mistake in your office work resulting in financial impact for the organization. You will",
        "Ans": [{ "value": "Bring this to your boss's notice", "score": 10 },
        { "value": "Try hard to rectify this yourself but will not report the incident", "score": 6 },
        { "value": "Try to manage this by hiding the information as long as possible", "score": 3 },
        { "value": "Try to find out loopholes in the process resulting in you committing the error", "score": 1 },
        { "value": "Ignore it as mistakes happen", "score": 0 },




        ]
    },
    {
        "Id": "Q2",
        "Ques": "The policeman takes hafta (ransom) from you for your roadside thela/shop. He suggests a better position for you with additional money. You will",
        "Ans": [
            { "value": "Keep the regular space and keep on giving regular hafta/ransom to the policeman as business is good here too ", "score": 10 },
            { "value": "Bargain on the amount and take the prime location", "score": 5 },


        ]
    },
    {
        "Id": "Q3",
        "Ques": "You are in a queue to visit a doctor for last two hours. The person infront of you has stepped aside and was attending a phone call. You are the next person to enter the cabin of the doctor. Will you",
        "Ans": [
            { "value": "Try to catch attention of the person and let him go first", "score": 10 },
            { "value": "You enter doctor's chamber and let the other person attend the call peacefully", "score": 0 },



        ]
    },
    {
        "Id": "Q25",
        "Ques": "If you happen to find Rs. 50000 while travelling, how would you spend the money?",
        "Ans": [{ "value": "Vacation", "score": 0 },
        { "value": "You will put it in fixed deposit", "score": 0 },
        { "value": "You will buy some shares", "score": 0 },
        { "value": "You will donate the money to some charitable trust", "score": 10 },
        { "value": "You will spend the money on recreation", "score": 0 },
        ]
    },
    {
        "Id": "Q59",
        "Ques": "Sometimes, you misrepresent the facts for your benefit",
        "Ans": [
            { "value": "Strongly Disagree", "score": 10 },
            { "value": "Disagree", "score": 7 },
            { "value": "Neither agree nor disagree", "score": 5 },
            { "value": "Agree", "score": 3 },
            { "value": "Strongly Agree", "score": 0 }
        ]
    }
]
const EthicalConduct = [
    {
        "Id": "Q4",
        "Ques": "You never break principles of your life",
        "Ans": [
            { "value": "Strongly Disagree", "score": 0 },
            { "value": "Disagree", "score": 3 },
            { "value": "Neither agree nor disagree", "score": 6 },
            { "value": "Agree", "score": 9 },
            { "value": "Strongly Agree", "score": 10 }
        ]
    },
    {
        "Id": "Q5",
        "Ques": "You went to a shop to buy something. After returning home, you observed that the shop owner gave you extra change",
        "Ans": [

            { "value": "You immediately go back and return the extra money", "score": 10 },
            { "value": "You return the extra money in your next visit", "score": 10 },
            { "value": "Keep the extra money as the shop keeper is known to be dishonest and over pricing his products", "score": 0 },
            { "value": "Keep the extra money as it's a small amount", "score": 2 }
        ]
    }, {
        "Id": "Q46",
        "Ques": "Sometime you intentionally block others path to move ahead in life",
        "Ans": [
            { "value": "Strongly Disagree", "score": 10 },
            { "value": "Disagree", "score": 7 },
            { "value": "Neither agree nor disagree", "score": 5 },
            { "value": "Agree", "score": 3 },
            { "value": "Strongly Agree", "score": 0 }
        ]
    }

]
const FinancialAcumen = [
    {
        "Id": "Q6",
        "Ques": "You always plan your savings and investments",
        "Ans": [
            { "value": "Strongly Disagree", "score": 0 },
            { "value": "Disagree", "score": 2 },
            { "value": "Neither agree nor disagree", "score": 3 },
            { "value": "Agree", "score": 5 },
            { "value": "Strongly Agree", "score": 10 }
        ]
    },
    {
        "Id": "Q7",
        "Ques": "How many times you broke your investements prematurely in the past? (ask only if the applicant ever invested)",
        "Ans": [
            { "value": "Never", "score": 10 },
            { "value": "less than 3 times", "score": 2 },
            { "value": "Often", "score": 0 },
        ]
    },
    {
        "Id": "Q8",
        "Ques": "When you go to buy grocery, you often end up doing the below",
        "Ans": [
            { "value": "buy as per your list/plan", "score": 10 },
            { "value": "Often end up buying more", "score": 5 },
            { "value": "never carry a list", "score": 5 },
            { "value": "Exceed budget mostly", "score": 2 }
        ]
    },
    {
        "Id": "Q11",
        "Ques": "Last month, you had lend Rs. 50,000 to one of your relatives. He/She gives you an option to take Rs. 50,000 now or Rs. 100,000 after two years. What will you do?",
        "Ans": [
            { "value": "Take Rs. 50,000 now", "score": 5 },
            { "value": "You will prefer to take Rs. 100,000 after two years", "score": 10 }


        ]
    },
    {
        "Id": "Q13",
        "Ques": "How many Credit cards do you have?",
        "Ans": [
            { "value": "Only one", "score": 15 },
            { "value": "Two", "score": 15 },
            { "value": "Three", "score": 5 },
            { "value": "More than three", "score": 0 }
        ]
    },
    {
        "Id": "Q22",
        "Ques": "If you lose your job then how long can you sustain yourself? (for Salaried only)",
        "Ans": [
            { "value": "less than 3 months", "score": 0 },
            { "value": "3-6 months", "score": 10 },
            { "value": "6-12 months", "score": 15 },
            { "value": ">12 months", "score": 20 }
        ]
    },
    {
        "Id": "Q22",
        "Ques": "If your business/shop had to be closed tomorrow then how long can you sustain yourself? (business/self employed)",
        "Ans": [
            { "value": "less than 3 months", "score": 0 },
            { "value": "3-6 months", "score": 10 },
            { "value": "6-12 months", "score": 15 },
            { "value": ">12 months", "score": 20 }
        ]
    },
    {
        "Id": "Q24",
        "Ques": "What describes you the best?",
        "Ans": [
            { "value": "I never buy things that I don't need now", "score": 10 },
            { "value": "Sometime I tend to buy stuffs that I feel was not needed", "score": 5 },
            { "value": "Always I feel that I buy things that are not useful", "score": 0 },
            { "value": "I buy whatever I like at that moment irrespective of need", "score": 0 }
        ]
    },
    {
        "Id": "Q60",
        "Ques": "You never fail to pay your utility bills on time",
        "Ans": [{ "value": "Strongly Disagree", "score": 0 },
        { "value": "Disagree", "score": 3 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 7 },
        { "value": "Strongly Agree", "score": 10 }
        ]
    }
]
const Assertiveness = [{
    "Id": "Q9",
    "Ques": "You expected your child to win in annual sports competition in school. But somehow he/she did not. You will",
    "Ans": [
        { "value": "Not get upset, it's just one competition and encourage your child to reach his potential next time", "score": 8 },
        { "value": "Get upset but don't scold the child", "score": 7 },
        { "value": "Yell at your child for not performing well", "score": 2 },
        { "value": "Put him into coaching/change his coach", "score": 10 }
    ]
}]


const DriveToSucceed = [{
    "Id": "Q12",
    "Ques": "How many mobile SIMS do you have?",
    "Ans": [
        { "value": "Only one", "score": 5 },
        { "value": "Two SIMS", "score": 5 },
        { "value": "Three SIMS", "score": 2 },
        { "value": "More than 3 SIMS", "score": 0 }
    ]

}, {
    "Id": "Q18",
    "Ques": "Choose one of the below statements that describes you the best:",
    "Ans": [
        { "value": "You always make sure to finish your work on time and make it happen", "score": 10 },
        { "value": "You try to finish your work on time but sometime you falter", "score": 8 },
        { "value": "You would rather have a work life balance than stretching yourself", "score": 5 },
        { "value": "Work is worship for you and you never mix family and professional affairs", "score": 8 }
    ]

}, {
    "Id": "Q21",
    "Ques": "How would you describe your working hours compared to others?",
    "Ans": [
        { "value": "You normally work much less but smartly", "score": 10 },
        { "value": "You work slightly lesser number of hours", "score": 8 },
        { "value": "you work more or less the same like others do", "score": 5 },
        { "value": "you work slightly more than your peers", "score": 8 },
        { "value": "you work much longer than others", "score": 8 }
    ]

}, {
    "Id": "Q50",
    "Ques": "In a teamwork, when things are not going the way you want, you take charge",
    "Ans": [
        { "value": "Strongly Disagree", "score": 0 },
        { "value": "Disagree", "score": 3 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 7 },
        { "value": "Strongly Agree", "score": 10 }
    ]

}]
const Flexibility = [
    {
        "Id": "Q19",
        "Ques": "Which of of the below statements describes you the best?",
        "Ans": [
            { "value": "When someone experienced advises you, you always accept", "score": 0 },
            { "value": "You accept the suggestion based on the merit", "score": 15 },
            { "value": "You are your own boss", "score": 10 }
        ]
    }, {
        "Id": "Q53",
        "Ques": "You can adapt easily to new places, new people and new food",
        "Ans": [
            { "value": "Strongly Disagree", "score": 0 },
            { "value": "Disagree", "score": 3 },
            { "value": "Neither agree nor disagree", "score": 5 },
            { "value": "Agree", "score": 7 },
            { "value": "Strongly Agree", "score": 10 }
        ]

    }, {
        "Id": "Q55",
        "Ques": "Normally leave your belongings around",
        "Ans": [
            { "value": "Strongly Disagree", "score": 10 },
            { "value": "Disagree", "score": 7 },
            { "value": "Neither agree nor disagree", "score": 5 },
            { "value": "Agree", "score": 3 },
            { "value": "Strongly Agree", "score": 0 }



        ]

    }]
const CreditHistory = [{
    "Id": "Q14",
    "Ques": "How long ago you got your first Credit Card? ( to be asked if he/she has a Credit Card)",
    "Ans": [
        { "value": "within 6 months", "score": 0 },
        { "value": "6-12 months", "score": 2 },
        { "value": "12-24 months", "score": 5 },
        { "value": "24-36 months", "score": 7 },
        { "value": ">36 months", "score": 10 }
    ]

}, {
    "Id": "Q15",
    "Ques": "How long ago you availed your first loan? ( to be asked if he/she has ever availed a loan)",
    "Ans": [
        { "value": "within 6 months", "score": 0 },
        { "value": "6-12 months", "score": 2 },
        { "value": "12-24 months", "score": 5 },
        { "value": "24-36 months", "score": 7 },
        { "value": ">36 months", "score": 10 }
    ]

}, {
    "Id": "Q16",
    "Ques": "How many loans have you applied in last 2years?",
    "Ans": [
        { "value": "0", "score": 0 },
        { "value": "1", "score": 2 },
        { "value": "2", "score": 5 },
        { "value": "3", "score": 7 },
        { "value": ">3", "score": 10 }
    ]
}, {
    "Id": "Q17",
    "Ques": "When did you last miss your credit card/loan payment?",
    "Ans": [
        { "value": "Never", "score": 0 },
        { "value": "within 6 months", "score": 2 },
        { "value": "6-12 months", "score": 5 },
        { "value": "12-24 months", "score": 7 },
        { "value": "24-36 months", "score": 7 },
        { "value": ">36 months", "score": 7 }
    ]
}]

const BusinessAcumen = [{
    "Id": "Q20",
    "Ques": "In the last one year, how often you revisited your product pricing based on competitors (nearby shops) ?",
    "Ans": [
        { "value": "Sometimes", "score": 5 },
        { "value": "Always", "score": 10 },
        { "value": "never", "score": 0 },
        { "value": "prices are driven by MRP", "score": 10 },
    ]
}]
const PlanningAndExecution = [
    {
        "Id": "Q23",
        "Ques": "How the statement relate to you? I never miss my commitment.",
        "Ans": [
            { "value": "Strongly Disagree", "score": 0 },
            { "value": "Disagree", "score": 3 },
            { "value": "Neither agree nor disagree", "score": 6 },
            { "value": "Agree", "score": 9 },
            { "value": "Strongly Agree", "score": 10 }
        ]
    },
    {
        "Id": "Q27",
        "Ques": "You have a dream to tour to Kashmir. You will",
        "Ans": [
            { "value": "Save for it and plan well in advance", "score": 10 },
            { "value": "Save for it but don't know when you can go", "score": 7 },
            { "value": "Go whenever you have enough money", "score": 5 },
            { "value": "Start the tour once your leave gets approved", "score": 8 },
            { "value": "Don't know when you will be able to go", "score": 0 }
        ]
    },
    {
        "Id": "Q28",
        "Ques": "As a student, during study leaves before examinations, You always",
        "Ans": [
            { "value": "Had a written routine and followed it", "score": 10 },
            { "value": "Had a written routine and but never followed it", "score": 5 },
            { "value": "Never had a written routine, but had an estimated plan for studies", "score": 8 },
            { "value": "Why to have a routine, you know you will finish it in time", "score": 6 },
            { "value": "You will manage once the examination day comes", "score": 0 }
        ]
    },
    {
        "Id": "Q29",
        "Ques": "You have an important meeting to attend and you can not miss it. You will",
        "Ans": [
            { "value": "Plan well in advance and reach before 10 min", "score": 10 },
            { "value": "Plan before but fail to reach in time", "score": 5 },
            { "value": "It's regular affair, you need not to worry", "score": 8 },
            { "value": "It is okay even if you reach in the meeting 10 min late", "score": 6 }
        ]
    },
    {
        "Id": "Q31",
        "Ques": "You have kept your important documents safely. You need one of them urgently. You will",
        "Ans": [
            { "value": "Find them immediately as you remember where you kept them", "score": 10 },
            { "value": "Need to search for some time before you find them", "score": 5 },
            { "value": "Remember where you kept but unable to find from there", "score": 8 },
            { "value": "Serach all the places to find them and still not able to get them", "score": 6 },
            { "value": "Be forgotten where you had kept them", "score": 6 }
        ]
    },
    {
        "Id": "Q34",
        "Ques": "Do things according to a plan",
        "Ans": [
            { "value": "Strongly Disagree", "score": 0 },
            { "value": "Disagree", "score": 3 },
            { "value": "Neither agree nor disagree", "score": 5 },
            { "value": "Agree", "score": 7 },
            { "value": "Strongly Agree", "score": 10 }
        ]
    },
    {
        "Id": "Q39",
        "Ques": "You never leave any tasks incomplete",
        "Ans": [
            { "value": "Strongly Disagree", "score": 0 },
            { "value": "Disagree", "score": 3 },
            { "value": "Neither agree nor disagree", "score": 5 },
            { "value": "Agree", "score": 7 },
            { "value": "Strongly Agree", "score": 10 }
        ]
    },
    {
        "Id": "Q44",
        "Ques": "Sometimes you feel that your life has no goals",
        "Ans": [
            { "value": "Strongly Disagree", "score": 10 },
            { "value": "Disagree", "score": 7 },
            { "value": "Neither agree nor disagree", "score": 5 },
            { "value": "Agree", "score": 3 },
            { "value": "Strongly Agree", "score": 0 }
        ]
    }
]

const PositiveAttitude = [{
    "Id": "Q26",
    "Ques": "When things are not clear, You usually:",
    "Ans": [
        { "value": "Mostly expect the best", "score": 10 },
        { "value": "You are neutral", "score": 7 },
        { "value": "Usually fear the worst", "score": 0 },



    ]
}]

const Proactiveness = [{
    "Id": "Q10",
    "Ques": "You are part of a bigger team having sub teams. One of the sub teams are struggling to solve a problem which you know how to solve. You will:",
    "Ans": [
        { "value": "Voluntarily offer the solution", "score": 10 },
        { "value": "You will wait till they reach out to you", "score": 7 },
        { "value": "You will not bother as it's not your responsibility", "score": 3 },
        { "value": "You will not solve the problem as it is not in your KRA and will not add to your annual appraisal", "score": 3 },




    ]
}]

const ResultDriven = [{
    "Id": "Q52",
    "Ques": "You like to tidy up",
    "Ans": [
        { "value": "Strongly Disagree", "score": 0 },
        { "value": "Disagree", "score": 3 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 7 },
        { "value": "Strongly Agree", "score": 10 }
    ]
}]

const SelfConfidence = [{
    "Id": "Q36",
    "Ques": "Often feel uncomfortable with others",
    "Ans": [
        { "value": "Strongly Disagree", "score": 10 },
        { "value": "Disagree", "score": 7 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 3 },
        { "value": "Strongly Agree", "score": 0 }
    ]
},
{
    "Id": "Q56",
    "Ques": "You always felt superior to your peers/colleagues",
    "Ans": [
        { "value": "Strongly Disagree", "score": 0 },
        { "value": "Disagree", "score": 3 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 7 },
        { "value": "Strongly Agree", "score": 10 }
    ]
},
{
    "Id": "Q40",
    "Ques": "You tend to converse with as many people as possible in a party",
    "Ans": [
        { "value": "Strongly Disagree", "score": 0 },
        { "value": "Disagree", "score": 3 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 7 },
        { "value": "Strongly Agree", "score": 10 }
    ]
}]

const SelfControl = [{
    "Id": "Q32",
    "Ques": "You had just changed your wadbrobe last month. You go to a mall and see a dress which you wanted to buy for long. You will",
    "Ans": [
        { "value": "Immediately buy the dress", "score": 10 },
        { "value": "Think whether you have enough money to spend on the dress now", "score": 7 },
        { "value": "Not buy the dress as you no more want it", "score": 5 },
        { "value": "Not buy the dress as you have just changed the wardrobe and don't need it now", "score": 3 },
    ]
}]

const StrategicAbility = [{
    "Id": "Q38",
    "Ques": "Giving solutions to any problem is your forte",
    "Ans": [
        { "value": "Strongly Disagree", "score": 0 },
        { "value": "Disagree", "score": 3 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 7 },
        { "value": "Strongly Agree", "score": 10 }
    ]
}]

const TimeAndPriorityManagement = [{
    "Id": "Q30",
    "Ques": "You are going on a vacation.You need to reach in railway station to catch a long distance train.",
    "Ans": [
        { "value": "You reach well in advance and catch the train easily", "score": 10 },
        { "value": "You reach just before the train leveaing the station and catch the train in heist", "score": 7 },
        { "value": "You reach after the train has left", "score": 5 },
        { "value": "You started early but unusual traffic made you late", "score": 3 },
    ]
}]

const Cognitive = [{
    "Id": "Q48",
    "Ques": "You love to have your 'me time' alone",
    "Ans": [
        { "value": "Strongly Disagree", "score": 0 },
        { "value": "Disagree", "score": 5 },
        { "value": "Neither agree nor disagree", "score": 7 },
        { "value": "Agree", "score": 7 },
        { "value": "Strongly Agree", "score": 10 }
    ]
},
{
    "Id": "Q61",
    "Ques": "In the following set of words, which one is different?",
    "Ans": [
        { "value": "Indian", "score": 0 },
        { "value": "Pakistani", "score": 0 },
        { "value": "Bangladeshi", "score": 0 },
        { "value": "Hindu", "score": 10 },
        { "value": "Turkish", "score": 0 },
    ]
},
{   "Id": "Q62",
    "Ques": "Which is the next number in the series?   64, 68, 72, 76,  ------",
    "Ans": [
        { "value": "58", "score": 0 },
        { "value": "92", "score": 0 },
        { "value": "86", "score": 0 },
        { "value": "80", "score": 10 },
        { "value": "82", "score": 0 },






    ]
}, {
    "Id": "Q63",
    "Ques": "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets (a small gadget or mechanical device)?",
    "Ans": [
        { "value": "100", "score": 0 },
        { "value": "2", "score": 10 },
        { "value": "3", "score": 0 },
        { "value": "78", "score": 0 },




    ]
}]

const EmotionalMaturity = [{
    "Id": "Q37",
    "Ques": "Rarely complain",
    "Ans": [
        { "value": "Strongly Disagree", "score": 10 },
        { "value": "Disagree", "score": 7 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 3 },
        { "value": "Strongly Agree", "score": 0 }
    ]
},
{
    "Id": "Q41",
    "Ques": "You trust others very easily",
    "Ans": [
        { "value": "Strongly Disagree", "score": 10 },
        { "value": "Disagree", "score": 7 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 3 },
        { "value": "Strongly Agree", "score": 0 }
    ]
},
{
    "Id": "Q42",
    "Ques": "Sometimes you yourself feel guilty for your mood swings",
    "Ans": [
        { "value": "Strongly Disagree", "score": 0 },
        { "value": "Disagree", "score": 3 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 7 },
        { "value": "Strongly Agree", "score": 10 }
    ]
},
{
    "Id": "Q45",
    "Ques": "You keep on thinking events that did not go in your favour in the past",
    "Ans": [
        { "value": "Strongly Disagree", "score": 10 },
        { "value": "Disagree", "score": 7 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 3 },
        { "value": "Strongly Agree", "score": 0 }
    ]
},
{
    "Id": "Q47",
    "Ques": "Sometimes you love to look back and ponder about events that has happened to you",
    "Ans": [
        { "value": "Strongly Disagree", "score": 0 },
        { "value": "Disagree", "score": 3 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 10 },
        { "value": "Strongly Agree", "score": 7 }
    ]
},
{
    "Id": "Q58",
    "Ques": "You like to get lost in thoughts and dreams",
    "Ans": [
        { "value": "Strongly Disagree", "score": 10 },
        { "value": "Disagree", "score": 7 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 3 },
        { "value": "Strongly Agree", "score": 0 }
    ]
},
{  "Id": "Q49",
    "Ques": "You feel immensely irritated if things does not go as planned",
    "Ans": [
        { "value": "Strongly Disagree", "score": 10 },
        { "value": "Disagree", "score": 7 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 3 },
        { "value": "Strongly Agree", "score": 0 }
    ]
},
{
    "Id": "Q64",
    "Ques": "Does the weather Changes your mood?",
    "Ans": [
        { "value": "Yes", "score": 5 },
        { "value": "No", "score": 5 },
        { "value": "Sometimes", "score": 10 }
    ]
},
{   "Id": "Q65",
    "Ques": "Experince very few highs and low",
    "Ans": [
        { "value": "Yes", "score": 5 },
        { "value": "No", "score": 5 },
        { "value": "Sometimes", "score": 10 },
    ]
},
{   "Id": "Q54",
    "Ques": "You get angry easily",
    "Ans": [
        { "value": "Strongly Disagree", "score": 10 },
        { "value": "Disagree", "score": 7 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 3 },
        { "value": "Strongly Agree", "score": 0 }
    ]
},
]
const GeneralBehaviour = [{
    "Id": "Q51",
    "Ques": "You prefer others to guide you",
    "Ans": [
        { "value": "Strongly Disagree", "score": 0 },
        { "value": "Disagree", "score": 3 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 7 },
        { "value": "Strongly Agree", "score": 10 }
    ]
},
{
    "Id": "Q43",
    "Ques": "You always find some good qualities in others",
    "Ans": [
        { "value": "Strongly Disagree", "score": 10 },
        { "value": "Disagree", "score": 7 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 3 },
        { "value": "Strongly Agree", "score": 0 }
    ]
},
{
    "Id": "Q33",
    "Ques": "You normally put people under pressure.",
    "Ans": [
        { "value": "Strongly Disagree", "score": 10 },
        { "value": "Disagree", "score": 7 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 3 },
        { "value": "Strongly Agree", "score": 0 }
    ]
}, {
    "Id": "Q35",
    "Ques": "Indulge in your fantasies",
    "Ans": [
        { "value": "Strongly Disagree", "score": 10 },
        { "value": "Disagree", "score": 7 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 3 },
        { "value": "Strongly Agree", "score": 0 }
    ]
}, {
    "Id": "Q57",
    "Ques": "You normally don't trust people easily",
    "Ans": [
        { "value": "Strongly Disagree", "score": 10 },
        { "value": "Disagree", "score": 7 },
        { "value": "Neither agree nor disagree", "score": 5 },
        { "value": "Agree", "score": 3 },
        { "value": "Strongly Agree", "score": 0 }
    ]
}]

// export let questionsList = [];
export let questionsList = getRandom(TruthfulnessAndResponsibility, 2).concat(getRandom(EthicalConduct, 2), getRandom(FinancialAcumen, 3), Assertiveness, getRandom(DriveToSucceed, 2), getRandom(Flexibility, 2), getRandom(CreditHistory, 2), BusinessAcumen, getRandom(PlanningAndExecution, 3), PositiveAttitude, Proactiveness, ResultDriven, getRandom(SelfConfidence, 1), SelfControl, StrategicAbility, TimeAndPriorityManagement, getRandom(Cognitive, 2), getRandom(EmotionalMaturity, 3), getRandom(GeneralBehaviour, 2));