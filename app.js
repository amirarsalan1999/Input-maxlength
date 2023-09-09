let $ = document;
let inputBox = $.getElementById("input-box");
let inputElem = $.querySelector("input");
let numberElem = $.getElementById("number");
function focusEfect () {
    inputBox.style.border = "2px solid rgb(0, 145, 255)";
    inputBox.style.boxShadow = "1px 1px 2px rgb(0, 145, 255), -1px -1px 2px rgb(0, 145, 255)";
}
function blurEfect () {
    inputBox.style.border = "2px solid rgb(51, 165, 91)";
    inputBox.style.boxShadow = "none";
}

function typeEfect (event) {
    if(inputElem.value.length > 0 && inputElem.value.length <= 19 && event.keyCode != 32){
        numberElem.innerHTML = 19 - (inputElem.value.length);
        $.getElementById("at-icon").style.color = "rgb(0, 145, 255)";
        $.getElementById("break").style.borderColor = "blue";
        numberElem.style.color = "rgb(0, 145, 255)";
    }else{

        numberElem.innerHTML = 19;
        $.getElementById("at-icon").style.color = "black";
        $.getElementById("break").style.borderColor = "black";
        numberElem.style.color = "black";
    }
}   
