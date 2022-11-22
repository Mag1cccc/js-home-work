// 1
function calculate(a,b){
    if(a === b){
        return a + ' Equal ' + b;
    } else {
        return a + ' Not equal ' + b;
    }
}

a = 5;
b = 5;
console.log(calculate(a,b)); // type and value equal 

a = 5;
b = '5';
console.log(calculate(a,b)); // type not equal, value equal

a = 5;
b = 6;
console.log(calculate(a,b)); // type equal, value not equal


//2
function fahrenheittoCelsius(fahrenheit){
    if(typeof fahrenheit == "number"){
        return (fahrenheit - 32)/1.8;
    } else {
        return false;
    }
}

console.log(fahrenheittoCelsius(50));
console.log(fahrenheittoCelsius("50")); // type not equal,value equal 
console.log(fahrenheittoCelsius("asd")); // not equal


//3
function calculate2(a,b,operand){

    if(typeof a == "number" && typeof b == "number"){
        if(operand == "+"){
            return a + b;
        }
    
        if(operand == "-"){
            return a - b;
        }
    
        if(operand == "*"){
            return a * b;
        }
    
        if(operand == "/"){
            return a / b;
        } 
    
        if(operand != "+","-","*","/"){
            return false;
        }
    } else {
        return false;
    }
    
}

console.log(calculate2(10,2,"+")); // a + b
console.log(calculate2(10,2,"-")); // a - b
console.log(calculate2(10,2,"*")); // a * b
console.log(calculate2(10,2,"/")); // a / b
console.log(calculate2(10,2,"%")); // operand != "%", return false
console.log(calculate2("10",2,"+")); // typeof a !== "number" type string, return false


















