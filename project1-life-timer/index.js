let isDOBOpen = false;
let dateofBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl=document.getElementById("initialText");
const afterDOBBtnTxtEl=document.getElementById("afterDOBBtnTxt");
const dobButtonEl=document.getElementById("dobButton");
const dobInputEl=document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const makeTwoDigitNumber = (number) => {
  return number > 9 ? number :`0${number}`
}


    const toggleDateOfBirthSelector = () => {
    if(isDOBOpen){
        settingContentEl.classList.add("hide");
    } else {
        settingContentEl.classList.remove("hide");
    }
    isDOBOpen =! isDOBOpen;

    //console.log("Toggle", isDOBOpen);
};

const updateAge = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - dateofBirth;
  //console.log("aa",dateofBirth,currentDate,dateDiff);
  const year = Math.floor(dateDiff/(1000 *60*60*24*365));
  const month = Math.floor( year >=1 ? ((dateDiff/(1000 *60*60*24*365))%12) : (dateDiff/(1000 *60*60*24*30)) );
  const day = Math.floor(dateDiff/(1000 *60*60*24))%30;
  const hour = Math.floor(dateDiff/(1000 *60*60))%24;
  const minute = Math.floor(dateDiff/(1000 *60))%60;
  const second = Math.floor(dateDiff/1000)%60;

  yearEl.innerHTML= makeTwoDigitNumber(year);
  monthEl.innerHTML= makeTwoDigitNumber(month);
  dayEl.innerHTML=  makeTwoDigitNumber(day);
  hourEl.innerHTML=  makeTwoDigitNumber(hour);
  minuteEl.innerHTML= makeTwoDigitNumber(minute);
  secondEl.innerHTML=  makeTwoDigitNumber(second);
 };

 {/*const localStorage = () => {
  const year = localStorage.getItem("year");
    const month = localStorage.getItem("month");
    const date = localStorage.getItem("date");
  
    if(year && month && date) {
      dateofBirth = new Date(year, month, date);
      }
   
  updateAge();
  setDOBHandler();
 };*/}

 //console.log(localStorage())
const setDOBHandler=()=>{
  const dateString = dobInputEl.value;
    dateofBirth = dateString ? new Date(dateString) :null;
    

    //console.log({dateofBirth});
   
  if (dateofBirth) {
    initialTextEl.classList.add("hide");
    afterDOBBtnTxtEl.classList.remove("hide");
    setInterval(() =>updateAge(), 1000);
    //localStorage.setItem("year", dateofBirth.getFullYear());
    //localStorage.setItem("month", dateofBirth.getFullMonth());
    //localStorage.setItem("date", dateofBirth.getFullDate());
  } else {
    afterDOBBtnTxtEl.classList.add("hide");
    initialTextEl.classList.remove("hide");

  }
};

//localStorage();
 setDOBHandler();
 

settingCogEl.addEventListener("click", toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click", setDOBHandler);

