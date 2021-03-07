var questionElement = document.getElementById("question")
var questionNumber = document.getElementsByClassName("question-number")
var answersElements = document.getElementsByClassName("choice-text")

var questionTracker = [];
var questionAmount = 1;

let questionCounter = 0;
let currentQuestion;
let availableOptions = 0;
let attemp = 0;

let quiz = [
    {
        question: "What is the most popular programming language ?",
        answers: [
            { text: "Javascript", correct: false },
            { text: "Python", correct: true },
            { text: "PHP", correct: false},
            { text: "C#", correct: false}
        ] 
    },
    {
        question: "What is AI ?",
        answers: [
            {text: "A supercomputer", correct: false},
            {text: "A technology for storing and transmitting information without a control body", correct: false },
            {text: "A machine capable of carrying out a complex series of actions automatically", correct: false },
            {text: "A simulation of human intelligence in machines", correct: true }
        ]
    },
    {
        question: "Who is the inventor of bitcoin ?",
        answers: [
            {text: "Elon musk", correct: false },
            {text: "Satoshi Nakamoto", correct: true},
            {text: "Marc Andreessen", correct: false},
            {text: "Yu Pan", correct: false}
        ]
    },
    {
        question: "What is the medium wage in tunisia ?",
        answers: [
            {text: "2000DT", correct: false },
            {text: "350DT", correct: false},
            {text: "640DT", correct: true},
            {text: "1200DT", correct: false}
        ]
    },
    {
        question: "When was pascal developed ?",
        answers: [
            {text: "1963", correct: false},
            {text: "1959", correct: false},
            {text: "1970", correct: true },
            {text: "2001", correct: false}
        ]
    },
    {
        question: "Who is the first person to walk on the moon ?",
        answers: [
            {text: "Arnold Schwarzenegger", correct: false },
            {text: "Neil deGrasse Tyson", correct: false},
            {text: "Neil Armstrong", correct: true},
            {text: "Yusaku Maezawa", correct: false}
        ]
    },
    {
        question: "How many planets are there in the solar system ?",
        answers: [
            {text: "10", correct: false},
            {text: "8", correct: true},
            {text: "12", correct: false}, 
            {text: "6", correct: false}
        ]
    },
    {
        question: "How many cells are there in a human body ?",
        answers: [
            {text: "37 trillion", correct: true},
            {text: "200 trillion", correct: false},
            {text: "75 billion", correct: false},
            {text: "12 million", correct: false}
        ]
    },
    {
        question: "What does IT stand for ?",
        answers: [
            {text: "Intensive technology", correct: false},
            {text: "Intelligence", correct: false},
            {text: "Internet", correct: false},
            {text: "Information technology", correct: true}
        ]
    },
    {
        question: "What is the best ranked university for computer science in the world ?",
        answers: [
            {text: "Stanford University", correct: false },
            {text: "University of Oxford", correct: false},
            {text: "Massachusetts Institute of Technology", correct: true },
            {text: "Harvard University", correct: false}
        ]
    }
]

//var randomIndex = Math.floor(Math.random() * quiz.length);

function setAvailableQuestions() {
    const totalQuestions = quiz.length;
    for(let i=0; i<totalQuestions; i++)
    qui.push(quiz[i])
}

function showQuestion() {
    const questionIndex = quiz[Math.floor(Math.random() *quiz.length)]
    currentQuestion = questionIndex;


    questionElement.innerHTML = currentQuestion.q;
    quiz.splice(index1,1)

    const optionLen = currentQuestion.answers.length

    for (let i = 0; i < optionLen; i++) {
        quiz.push(i)
    }

    answersElements.innerHTML = '';

    let animationDelay = 0.2:

    for (let i = 0; i < answersElements.length; i++) {
        answersElements[i].innerHTML = quiz[randomIndex].answers[i];
    }
}

function codeAddress() {
    showQuestion();
}
/*
quiz.forEach(questionElement, questionNumber) => {
    
});
*/

/*
const next_btn = document.querySelector("#next-btn");

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

// when  Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}


// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
*/
