// addNumbers function to add the two numbers
function addNumbers() {
    let num1 = parseInt(document.getElementById("firstNum").value);
    let num2 = parseInt(document.getElementById("secondNum").value);

    let result = num1 + num2;
    document.getElementById("showResult").value = result;

}

function subNumbers() {
    let num1 = parseInt(document.getElementById("firstNum").value);
    let num2 = parseInt(document.getElementById("secondNum").value);

    let result = num1 - num2;
    document.getElementById("showResult").value = result;

}
function mulNumbers() {
    let num1 = parseInt(document.getElementById("firstNum").value);
    let num2 = parseInt(document.getElementById("secondNum").value);

    let result = num1 * num2;
    document.getElementById("showResult").value = result;

}
function divNumbers() {
    let num1 = parseInt(document.getElementById("firstNum").value);
    let num2 = parseInt(document.getElementById("secondNum").value);

    let result = num1 / num2;
    document.getElementById("showResult").value = result;

}

//reset button function to reset all the values 
function clearAllFields() {
    document.querySelector("#firstNum").value = '';
    document.querySelector("#secondNum").value = '';
    document.querySelector("#showResult").value = '';
}


//changeBackground function to change the body and box background
let clicked = false;
function changeBackground() {
    
    if (clicked) {
        document.body.style.backgroundColor = "";
        const getBox = document.querySelector(".box");
        getBox.style.backgroundColor = "";
        getBox.style.color = "";
        
        clicked = false;
    }else{
        document.body.style.backgroundColor = "black";
        const getBox = document.querySelector(".box");
        getBox.style.backgroundColor = "white";
        getBox.style.color = "black";
        
        clicked = true;
    }
}
