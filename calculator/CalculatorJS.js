var AC = document.getElementById('ac');
var sign = document.getElementById('sign');
var undo = document.getElementById('undo');
var divide = document.getElementById('divide');
var mul = document.getElementById('mul');
var sub = document.getElementById('sub');
var add = document.getElementById('add');
var equal = document.getElementById('equal');
var dot = document.getElementById('dot');
var zeroes2 = document.getElementById('zeroes2');
var num = document.querySelectorAll('.num');
var display = document.getElementById('display');


var chooseOperator = document.querySelectorAll('.chooseOperator');



var num1,num2,operator;

num.forEach(i => {
    i.addEventListener('click',(number) => {
        display.textContent += number.target.textContent;
    })
});


chooseOperator.forEach(i => {
    i.addEventListener('click',(number) => {
        num1 = parseFloat(display.textContent);
        display.textContent += number.target.textContent;
        operator = number.target.textContent;
    })
});
equal.addEventListener('click',(number) => {
    let temp = display.textContent.trim();
    let index = temp.indexOf(operator) + 1;
    num2 = parseFloat(temp.substring(index));
    compute(num1 ,num2 ,operator);
});
 compute = (num1 ,num2,operator) =>{
        switch(operator){
            case '%':{
                display.textContent = num1 % num2;
                break;
            }
            case '/':{
                display.textContent = num1 / num2;
                break;
            }
            case '*':{
                display.textContent = num1 * num2;
                break;
            }
            case '-':{
                display.textContent = num1 - num2;
                break;
            }
            case '+':{
                display.textContent = num1 + num2;
                break;
            }
        }        
}
AC.addEventListener('click', () => display.textContent='');

sign.addEventListener('click',() => display.textContent = -1*display.textContent);

undo.addEventListener('click' ,() =>{
    display.textContent = display.textContent.substring(0,display.textContent.length-1);
})