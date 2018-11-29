/*
Gameplan

HTML:
(*) Calc window for operations to be shown along with result
() Number buttons for calculator
() Operator buttons (+, =, etc)
() Reset or clear button
()optional: backspace button???


Java:
()function that captures what typed in the calcWindow
() separate functions that add numbers, subtract numbers, etc
 */

function calculate(expression) //ex. expression like 2+2=4
{
    //'Expression' is a string of everything in CalcWindow
    //Need to extract the first number from 'expression'
    var num = expression;
    var numLength = num.length;

    for (var i = 0; i <= numLength; i++)
    {
     

{
    var firstNum = Number(expression.substr(0, 1));

    var operator = expression.substr(1, 1);

    var secondNum = Number(expression.substr(2, 1));
}





    }

    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
       return subtractNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
    }
    else if (operator ==='/')
    {
        return divideNums(firstNum, secondNum);
    }
    if(operator === '^')
    {
        alert(pnum(firstNum, secondNum));
        document.calculator.calcWindow.value = pnum(firstNum, secondNum);
    }
else if (operator ==='√')
    {
        return sqrtNum (firstNum)
    }
}

function addNums(p1, p2)
{
    return p1 + p2;
}
function subtractNums(p1, p2)
{
    return p1 - p2;
}
function multiplyNums(p1, p2)
{
    return p1 * p2
}
function divideNums(p1, p2)
{
    return p1 / p2
}
function back()
{
    return document.calculator.calcWindow.value.slice(0,-1);
}
function pnum(p1, p2)
{
    return Math.pow(p1, p2);
}
function sqrtNum(p1)
{
    return Math.sqrt(p1)
}
