const operations =prompt('enter the operator +, -, *, %,/');
const number1 = parseFloat(prompt('enter the first number'));
const number2 = parseFloat(prompt('enter the second number'));
let result;
switch(operations){
  case "+":
 result= number1 + number2;
    break;
    case "-":
      result= number1 - number2;
         break;
         case "*":
          result= number1 * number2;
             break;
             case "%":
              result= number1 % number2;
                 break;
                 case "**":
                  result= number1 ** number2;
                     break;
                     case "/":
                      result= number1 / number2;
                         break;
                         case "":
                          
                      
                                default:console.log('you have enterd the wrong digits')
}
console.log(`${number1} ${number2} ${operations} = ${result}`);
console.log('your calculator is working properly')
