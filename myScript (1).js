function tenToSmall(num, base) //convert a base-10 number to a smaller base
{
    //this function is expecting a number(num) in base 10
    //it will convert the number (num) to value of 'base'
    num = 9 //number to convert
    base = 2; //destination base
    smallNum =""; //store remainders here

    while (num > 0)//continue until num is 0
    {
        smallNum = num%base + smallNum;
        //setup num for the next iteration of the loop
        num = Math.floor(num/2);
        alert(smallNum);
        alert(num);

    }
    return smallNum;
}

function smallToTen(num, base)//convert a small base number to base 10
{
    num = 1101; //13
    base = 2; //base of the num
    tenNum = 0; //stores number ti be output at the end
    numLength = num.toString().length; //converts num to a string, then counts the number of characters in the string
                                        //in this case, ;length of'1101' is 4

    while(numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1)); //gets fraction denominator
        var currentDigit = Math.floor(num/denominator);//captures a 1 or a 0 to multiply by 2^numLengths
        tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);
        //currentDigit*2^3 .. currentDigit*2^2.... currentDigit*2^1.... etc
        num = num%denominator; //reduces num for the next iteration
        //1101-> 101 -> 01 -> 1
        numLength--; //decrease the numLength value by 1... otherwise will loop indefinitely
    }
    return tenNum;
}

function addNums(input1, input2)
{
    var sum = input1 + input2;
    return sum; //returns the sum to wherever addNUms was called
}

function subtractNums(input1, input2)
{
    var difference = input1 - input2;
    return difference;

}
    function combo(input1, input2)
    {
        var temp1 = addNums(input1, input2);
        var temp2 = subtractNums(input1, input2);
        var temp3 = addNums(temp1, temp2);
        
    }
