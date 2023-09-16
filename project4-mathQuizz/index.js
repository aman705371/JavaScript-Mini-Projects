
 const questionEl = document.getElementById("question1");
 const questionFormEl = document.getElementById("questionForm");
 const scoreEl = document.getElementById("score");
 let storeAnswer;
 let score=0;
 //let score= localStorage.getItem("score");

const randomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min) 

};
 
const generateQuestion = () => {
    const randomnumber1 = randomnumber(1, 10);
    const randomnumber2=randomnumber(1,10);
    const randomQuestion = randomnumber(1,5);
    let firstNumber;
    let secondNumber;
    if (randomnumber1>randomnumber2 && randomQuestion>2) {
        firstNumber = randomnumber1;
    secondNumber =randomnumber2;
    } else {
        firstNumber = randomnumber2;
        secondNumber =randomnumber1;
    }
    //console.log({randomQuestion});
    if ({randomQuestion}==1){
        const question = `Q. What is ${firstNumber} multiply by ${secondNumber}`;
        const answer = Math.floor(firstNumber * secondNumber);
        return{question,answer};
    } else if (randomQuestion==2) {
        const question = `Q. What is ${firstNumber} add by ${secondNumber}`;
        const answer = Math.floor(firstNumber + secondNumber);
        return{question,answer};
    }
     else if (randomQuestion==3) {
        const question = `Q. What is ${firstNumber} subtract by ${secondNumber}`;
        const answer = Math.floor(firstNumber - secondNumber);
        return{question,answer};
    }
    else if (randomQuestion==4) {
        const question = `Q. What is ${firstNumber} divided by ${secondNumber}`;
        const answer = Math.floor(firstNumber / secondNumber);
        return{question,answer};
    }
    else {
        const R = "Hello Amman Singh";
       // return(R);

    }
};

const showQuestion = () => {

    const {question, answer} = generateQuestion();
    questionEl.innerText = question;
    scoreEl.innerText = score;
  localStorage.clear();
    storeAnswer = answer;
};
showQuestion();

const CheckAnswer = (event) => {
    event.preventDefault();
    const formData = new FormData(questionFormEl);
   const userAnswer = +formData.get("answer");

   if (userAnswer==storeAnswer){
    score += 1;
    Toastify({
        text: `You are right and Your score is ${score} `,
        className: "info",
        gravity: "top", 
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
   }
   else{
    score -=1;
    Toastify({
        text: `You are wrong and Your score is ${score} `,
        className: "info",
        gravity: "top", 
        position: "left",
        style: {
          background: "linear-gradient(to right,#fc0d05, #030000)",
        }
      }).showToast();
   }
 
   scoreEl.innerText = score;
   //localStorage.setItem("score", score);
   event.target.reset();
   showQuestion();
}