//const updateAge = () => {
function test(){  
const currentDate = new Date();
let dateofBirth = new Date("2023-06-17")
  const dateDiff = currentDate - dateofBirth;
  //console.log("aa",dateDiff);
  const year = Math.floor(dateDiff/(1000 *60*60*24*365));
  const month = Math.floor(dateDiff/(1000 *60*60*24*30));
  const day = Math.floor(dateDiff/(1000 *60*60*24))%30;
  const hour = Math.floor(dateDiff/(1000 *60*60))%24;
  const minute = Math.floor(dateDiff/(1000 *60))%60;
  const second = Math.floor(dateDiff/1000)%60;
  console.log(month)
return true;
  // yearEl.innerHTML= makeTwoDigitNumber(year);
  // monthEl.innerHTML= makeTwoDigitNumber(month);
  // dayEl.innerHTML=  makeTwoDigitNumber(day);
  // hourEl.innerHTML=  makeTwoDigitNumber(hour);
  // minuteEl.innerHTML= makeTwoDigitNumber(minute);
  // secondEl.innerHTML=  makeTwoDigitNumber(second);
 };

 test();