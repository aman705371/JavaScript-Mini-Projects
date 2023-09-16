const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");

const calculateMarks = (event)=>{
    const maxMarks =400;
 event.preventDefault();
 const formData = new FormData(calculateFormEl);
 const data = {};

 formData.forEach((value, key) => {
 data[key] = +value;
 });

 const totalMarks = data.maths+data.physics+data.hindi+data.english;
 const percentageMarks =Math.floor((totalMarks/maxMarks)*100);

resultEl.innerHTML = `you have got ${totalMarks} out of ${maxMarks} and got marks in Percentage is ${percentageMarks}%`;
};