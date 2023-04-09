//function return random color in HEX format
function getRandomColorHEX() {
    const color = function(){
      return Number(Math.floor((Math.random() * 16))).toString(16).toUpperCase();
    };
    return `#${color()}${color()}${color()}`;
}
  
//function return random color in RGB format
function getRandomColorRGB() {
    const color = function(){
      return Math.floor(Math.random() * 256);
    };
    return `rgb(${color()}, ${color()}, ${color()})`;
}

//factorial function through recursion
function factorial(number) {
    return (!Number.isInteger(number)) ? 'Error!' : (number <= 1) ? 1 : number * factorial(number - 1);
}

//function the function returns a list of integer values ​​located between two integers
function intNumbers(a, b){
    return (!Number.isInteger(a) || !Number.isInteger(b)) ? 'Error!' : (b - a == 1) ? '' : (a + 1) + ' ' + intNumbers(a + 1, b);
}

//Fibonacci numbers through recusrion
function FibonacciNumbers(number) {
    return (!Number.isInteger(number)) ? 'Error!' : (number <= 1) ? number : (FibonacciNumbers(number - 1) + FibonacciNumbers(number - 2));
}