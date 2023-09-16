const ProfileBtnEl = document.getElementById("ProfileBtn");
const searchIntEl = document.getElementById("searchInt");
const searcherBtnEl = document.getElementById("searcherBtn");
const pro11El = document.getElementById("pro11");
const containerEl = document.getElementById("container");


const setHandler = () => {
const setString = searchIntEl.value;
 
    if (setString){
        pro11El.classList.remove("hide");
        containerEl.classList.add("hide");
    }

    else {
        pro11El.classList.add("hide");
        containerEl.classList.remove("hide");
    }
};

const ProfileClick = () => {
    const proStr =searchIntEl.value;
    //console.log(proStr);
  const ProfileString = window.open(proStr);
};

ProfileClick();

setHandler();

searcherBtnEl.addEventListener("click", setHandler);
ProfileBtnEl.addEventListener("click", ProfileClick);