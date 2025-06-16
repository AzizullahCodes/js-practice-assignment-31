// js-problem-solving-practice-assignment-31
// ___________________________________________________________
// ques no 1
// call of function inside another function
function add(a,b){let result = a + b;
    return result;
}
 function subtract(a,b,c){add(a,b);
    let subtract = add(a,b) - c;
    return subtract;
 }
 function multiply(a,b,c,d){subtract(a,b,c);
    let multip = subtract(a,b,c) * d;
    return multip;
 }
 function divide(a,b,c,d,e){multiply(a,b,c,d);
    let division = multiply(a,b,c,d) / e;
    return division;
 }
 let finalResult = divide(100,200,100,2,100);
 console.log(finalResult)