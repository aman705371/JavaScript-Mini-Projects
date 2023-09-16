const generateBtnEl =document.getElementById("generateBtn");


const singleHexColorGenerator = () => {
    const hex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A","B","C","D","E","F"]

    let hexColor = "#";
    for(let i=0; i<6; i++) {
    let random =Math.floor(Math.random()*hex.length);
     
    hexColor += hex[random];
}
  return hexColor;
};

const colorpaletegenerator = () => {
    const colorgenerator = [];
        for (i =0; i<4; i++){
            colorgenerator.push(singleHexColorGenerator());  
        }
    
    return colorgenerator;
}

const regenerateBtn = () =>{
const colorContainer = document.querySelector(".color_container");
colorContainer.innerHTML="";

const colorPalette= colorpaletegenerator();
    colorPalette.forEach((color, i) => {

        const colorDiv = document.createElement("div");
        colorDiv.id = `color${i +  1}`
        colorDiv.style.background = color;
        colorDiv.className = "colorBox";

        const colorTag = document.createElement("p");
        colorTag.id=`color${i + 1}Tag`;
        colorTag.className = "colorTag";
        colorTag.innerHTML = color;
        colorDiv.appendChild(colorTag);
        colorContainer.appendChild(colorDiv);
    });

    const copytoClipBoard = (id) => {
      const el = document.getElementById(id);
      console.log("Amma", el);
    };

const colorTags = document.querySelectorAll(".colorTag");
colorTags.forEach((colorTag, i) =>{
    colorTag.addEventListener("click", ()=>
        copytoClipBoard(`color${i + 1})Tag`)
    );
});


};
generateBtnEl.addEventListener("click", regenerateBtn);