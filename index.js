const colorName = document.querySelector(".color__name");
const simple = document.querySelector(".simple");
const hex = document.querySelector(".hex")
const click = document.querySelector(".click");
const bgColorElement = document.querySelector("#main");

const simpleColors = ["red", "green", "blue", "brown", "purple"];
var previousColor;

var type = "hex";


function changeColor(){
    if(type === "simple"){
        var colorNumber = Math.floor(Math.random()*5);
        if (colorNumber === previousColor) {
            previousColor = colorNumber;
            changeColor();
        } else{
            const color = simpleColors[colorNumber];
            colorName.innerText = color;
            bgColorElement.style.backgroundColor = color;
            bgColorElement.style.textTransform = 'capitalize';
            previousColor = colorNumber;
        }
    } else{
        const codes = ["a", "b", "c", "d", "e", "f"];
        const hexCodes = [];
        for ( i = 0; i < 9; i++) {
            const newNumber = Math.floor(Math.random()*10);
            codes.push(newNumber.toString());
        }
        for (i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*codes.length);
            hexCodes.push(codes[index]);
        }
        const color = `#${hexCodes.join('')}`;
        colorName.innerText = color;
        bgColorElement.style.backgroundColor = color;
        bgColorElement.style.textTransform = 'lowercase';
    }
    
}
click.addEventListener("click", changeColor);
simple.addEventListener("click", ()=>{
    if (type === "simple") {
        return;
    } else{
        type= "simple";
        changeColor();
    }
});
hex.addEventListener("click", ()=>{
    if (type === "hex") {
        return;
    } else{
        type = "hex";
        changeColor();
    }
})