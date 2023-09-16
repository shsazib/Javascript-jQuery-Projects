const questions = [
    {
      question: "Whish is the largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
      ],
    },
    {
      question: "Whish is the Smallest Continent in the world?",
      answers: [
        { text: "Asia", correct: false },
        { text: "Australia", correct: true },
        { text: "Arctic", correct: false },
        { text: "Africa", correct: false },
      ],
    },
  ];
  
  const questionElement = document.querySelector("#question");
  const answerButton = document.querySelector("#answer_btn");
  const nextButton = document.querySelector("#next_btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  };
  
  const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButton.appendChild(button);
      button.addEventListener('click', selectAnswer)
    });
  };
  
  const resetState = () => {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
      answerButton.removeChild(answerButton.firstChild);
    }
  };
  
  startQuiz();
  