//function returns random color in HEX format
function getRandomColorHEX() {
    const color = function(){
      return Number(Math.floor((Math.random() * 15))).toString(16).toUpperCase();
    };
    return `#${color()}${color()}${color()}`;
}
  
//function returns random color in RGB format
function getRandomColorRGB() {
    const color = function(){
      return Math.floor(Math.random() * 255);
    };
    return `rgb(${color()}, ${color()}, ${color()})`;
}

//function returns factorial og number
function factorial(number) {
    return (!Number.isInteger(number)) ? 'Error!' : (number <= 1) ? 1 : number * factorial(number - 1);
}

//function returns a list of integer values ​​located between two integers
function intNumbers(a, b){
    return (!Number.isInteger(a) || !Number.isInteger(b)) ? 'Error!' : (b - a == 1) ? '' : (a + 1) + ' ' + intNumbers(a + 1, b);
}

//function rerurns Fibonacci numbers
function FibonacciNumber(number) {
    return (!Number.isInteger(number) || number < 0) ? 'Error!' : (number <= 1) ? number : (FibonacciNumber(number - 1) + FibonacciNumber(number - 2));
}

console.log(FibonacciNumber(-6));

//function rerurns Fibonacci numbers
function FibonacciNumber(number) {
    return (!Number.isInteger(number) || number < 0) ? 'Error!' : (number <= 1) ? number : (FibonacciNumber(number - 1) + FibonacciNumber(number - 2));
}

console.log(FibonacciNumber(-6));

//function returns the value of a base raised to a power
function pow(x, n) {
    return (!Number.isInteger(x) || !Number.isInteger(n)) ? 'Error!' : (n === 1) ? x : x * pow(x, n - 1);
}

//рекурсия НОД
function NOD(a, b) {
    return ( ! b) ? a : NOD(b, a % b);
}
