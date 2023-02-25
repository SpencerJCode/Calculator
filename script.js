var display = document.querySelector("#display");
var firstNumber="";
var firstTF=true;
var secondNumber="";
var secondTF=false;
var operator = "";
var total = 0;
var totalString ="";
var repeatCalculate = false;
var opRepeat=false;

function clr(element) {
    display.innerText="0";
    secondTF=false;
    firstTF=true;
    firstNumber="";
    secondNumber="";
    total=0;
    totalString="";
}

function press(digit){
    if (repeatCalculate == true && opRepeat ==false){repeatCalculate = false; firstNumber = ""; secondNumber = ""; secondTF=false; firstTF=true;}
    if (firstTF==true && firstNumber.length <= 6) {firstNumber+=digit; display.innerText=firstNumber}
    else if (secondTF==true && secondNumber.length <= 6) {secondNumber+=digit; display.innerText=secondNumber}
}

function setOP(OP) {
    if (secondTF==true) {
        repeatCalculate = false;
        calculate(); 
        console.log(total);
        firstNumber=total; 
        secondNumber=""; 
        // display.innerText=total; 
        operator = OP;
        opRepeat=true;
    }
    else if (firstTF==true){
        firstTF=false;
        secondTF=true; 
        operator = OP
    }
}

function calculate() {
    if (firstNumber != "" && secondNumber != "" && repeatCalculate == false){
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    if (operator == "*") {total = (firstNumber * secondNumber)}
    if (operator == "/") {total = (firstNumber / secondNumber)}
    if (operator == "+") {total = (firstNumber + secondNumber)}
    if (operator == "-") {total = (firstNumber - secondNumber)}
    repeatCalculate = true;
    totalString+=total;
    if (totalString.length<8) {display.innerText=total}
    else {
        display.innerText="SCOPE"; 
        secondTF=false;
        firstTF=true;
        firstNumber="";
        secondNumber="";
        total=0;
        totalString="";
    }
        totalString="";
        opRepeat = false;
    }
    else if (repeatCalculate==true){firstNumber = total; repeatCalculate=false; calculate()}
}