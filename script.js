let screenCal = document.querySelector(".screen");
let numButton = document.querySelectorAll(".num-btn");
let funcButton = document.querySelectorAll(".func-btn");
let clearAll = document.querySelector(".clearAll");
let clear = document.querySelector(".clear");
let equalButton = document.querySelector(".eql-btn");


let containDot = false;
let lastClick = "";
let curNum = "";
let prvNum = -1.0;
numButton.forEach(num => {

    num.addEventListener("click" , ()=>{
        if(isCal){
            prvNum = -1.0;
            curNum = "";
            containDot = false;
            lastClick = "";
            isCal = false;
            screenCal.innerHTML = "";
        }
        let authorName = document.querySelector(".author");
        let dotErrorMassage = document.querySelector(".errorDot")
        if(num.innerText === '.' && !containDot){
            screenCal.innerHTML += `<div class="num">${num.innerText}</div>`;
            curNum += num.innerText;
            lastClick = num.innerText;
            containDot = true;
        } else if((num.innerText === '.' && containDot)){
            dotErrorMassage.style.display = "block";
            authorName.style.display = "none";
        } else {
            dotErrorMassage.style.display = "none";
            authorName.style.display = "block";
            screenCal.innerHTML += `<div class="num">${num.innerText}</div>`;
            curNum += num.innerText;
            lastClick = num.innerText;
        }
    })
})

clearAll.addEventListener("click" , ()=>{
    screenCal.innerHTML = "";
    curNum = "";
    containDot = false;
    lastClick = "";
    prvNum = 0;
    isCal = false;
})

clear.addEventListener("click" , ()=>{
    curNum = curNum.slice(0, -1);
    if (!curNum.includes('.')) {
        containDot = false;
    }
    screenCal.innerHTML = "";
    for (let char of curNum) {
        screenCal.innerHTML += `<div class="num">${char}</div>`;
    }
})

let operator = "";

funcButton.forEach(func => {
    func.addEventListener("click" , ()=>{
        screenCal.innerHTML = "";
        containDot = false;
        lastClick = "";
        operator = func.innerText;
        
        if (curNum !== "") {
            if (prvNum === -1.0) {
                prvNum = parseFloat(curNum);
            } else {
                if (operator === '+') prvNum += parseFloat(curNum);
                else if (operator === '-') prvNum -= parseFloat(curNum);
                else if (operator === 'x') prvNum *= parseFloat(curNum);
                else if (operator === '÷') {
                    if (parseFloat(curNum) !== 0) {
                        prvNum /= parseFloat(curNum);
                    } else {
                        alert("หารด้วยศูนย์ไม่ได้นะ!");
                    }
                }
            }
            curNum = "";
            screenCal.innerHTML = "";
        }
        
        
    })
})

let isCal = false;

equalButton.addEventListener("click" , ()=>{
    if (curNum !== "") {
            if (prvNum === -1.0) {
                prvNum = parseFloat(curNum);
            } else {
                if (operator === '+') prvNum += parseFloat(curNum);
                else if (operator === '-') prvNum -= parseFloat(curNum);
                else if (operator === 'x') prvNum *= parseFloat(curNum);
                else if (operator === '÷') {
                    if (parseFloat(curNum) !== 0) {
                        prvNum /= parseFloat(curNum);
                    } else {
                        alert("หารด้วยศูนย์ไม่ได้นะ!");
                    }
                }
            }
        } 
    screenCal.innerHTML = "";
    screenCal.innerHTML += `<div class="num">${prvNum.toFixed(2)}</div>`
    curNum = "";
    containDot = false;
    lastClick = "";
    isCal = true; 
})

