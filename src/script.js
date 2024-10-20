let questions = [
  {
    ques: "Which of the following is correct?",
    ans: [
      { text: "Work = Force x Displacement", correct: "true" },
      { text: "Work = Force / Displacement", correct: "false" },
      { text: "Work = Displacement / Force", correct: "false" },
      { text: "None of the Above", correct: "false" },
    ],
  },
  {
    ques: "What is remainder when 152 x 698 id divided by 5?",
    ans: [
        { text: "2", correct: "false" },
        { text: "4", correct: "false" },
        { text: "1", correct: "true" },
      { text: "3", correct: "false" },
    ],
  },
  {
    ques: "How many parts of Indain Constitution?",
    ans: [
        { text: "22", correct: "true" },
      { text: "42", correct: "false" },
      { text: "32", correct: "false" },
      { text: "52", correct: "false" },
    ],
  },
  {
    ques: "Who was the first person to receive Jnanpith Award?",
    ans: [
        { text: "Rabindranath Tagore", correct: "false" },
      { text: "G. Shankar Kurup", correct: "true" },
      { text: "Munsi Premchand", correct: "false" },
      { text: "Ashapooran Devi", correct: "false" },
    ],
  },
  {
    ques: "Which of the following called complete food?",
    ans: [
      { text: "cereal", correct: "false" },
      { text: "chapati", correct: "false" },
      { text: "milk", correct: "false" },
      { text: "Vegetables", correct: "true" },
    ],
  },
];

let nextbtn = document.querySelector(".next-btn");
let question = document.querySelector(".question");
let answer = document.querySelector(".answer");
let current_ques = 0;
let score = 0;
let c =0 
// questions.length = questions.length-1
console.log(questions.length);

function main() {
  resetques();
  makequestion();
  selectans();
}

function playagain(){
    current_ques = 0
    score = 0
    nextbtn.textContent = "Next";
    main();
}

function makequestion() {
  question.textContent = `${current_ques + 1}. ` + questions[current_ques].ques;
  questions[current_ques].ans.forEach((a) => {
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = a.text;
    answer.appendChild(btn);
    if (a.correct) {
      btn.dataset.correct = a.correct;
    }
  });
  current_ques += 1
  console.log("wff",current_ques);
}

function resetques() {
  nextbtn.style.display = "none";
  while (answer.firstChild) {
    answer.removeChild(answer.firstChild);
  }
}

function selectans() {
  let ans_btns = document.querySelectorAll(".btn");

  ans_btns.forEach((b) => {
    b.addEventListener("click", () => {
      if (b.dataset.correct == "true") {
        // console.log("true", b);
        b.style.backgroundColor = "#45e760";
        score++
      } else {
        // console.log("false", b);
        b.style.backgroundColor = "#e77645";
      }
      Array.from(ans_btns).forEach((button) => {
        if (button.dataset.correct == "true") {
          button.style.backgroundColor = "#45e760";
        }
        button.disabled = true;
      });
      nextbtn.style.display = "block";
    });
  });
}

function handlebtn(){
    if(current_ques<questions.length){
        resetques();
        makequestion();
        selectans();
    }
    else{
        resetques();
        question.innerHTML =  `Your Score ${score} out of ${questions.length}.`
        nextbtn.style.display = "block";
        nextbtn.textContent = "Play Again...";
        current_ques++
    }
   
}

nextbtn.addEventListener("click", () => {
    if(current_ques<=questions.length){
        console.log("inner",current_ques);
        handlebtn();
    }
    else{
        playagain()
    }
    
});

main();
