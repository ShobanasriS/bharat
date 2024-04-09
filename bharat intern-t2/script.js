const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      {text: "Paris", correct: true},
      {text: "Berlin", correct: false},
      {text: "London", correct: false},
      {text: "Rome", correct: false},
        
    ],
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    answers: [
      {text: "William Shakespeare", correct: true},
      {text: "Jane Austen", correct: false},
      {text: "Charles Dickens", correct: false},
      {text: "Leo Tolstoy", correct: false},
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      {text: "Wo", correct:false},
      {text: "Wa", correct: false},
      {text: "Hy", correct: false},
      {text: "H2O", correct: true},
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      {text: "Jupiter", correct: false},
      {text: "Mars", correct: true},
      {text: "Venus", correct: false},
      {text: "Saturn", correct: false},
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
     
    answers: [
      {text: "Pablo Picasso", correct:false},
      {text: "Vincent van Gogh", correct: false},
      {text: " Michelangelo", correct: false},
      {text: "Leonardo da Vinci", correct: true},
    ],
  },

];

const questionElement = document.getElementById("question");
const answerbutton= document.getElementById("answer-buttons");
const nexButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nexButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
       const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       answerbutton.appendChild(button);
       if(answer.correct){
        button.dataset.correct = answer.correct;
       }
       button.addEventListener("click",selectAnswer);
  });
}

function resetState(){
   nexButton.style.display = "none";
   while(answerbutton.firstChild){
    answerbutton.removeChild(answerbutton.firstChild);
   
}
}

function selectAnswer(e){
    const selectedBtn =  e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else{
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nexButton.style.display = "block";
    nexButton.addEventListener("click", goToNextQuestion);
  }

  function goToNextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion();
    }else{
      alert("Quiz finished! Your score: " + score);
    }
  }




startQuiz();