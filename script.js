//Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);         //префиксный оператор к переменной а прибавляется сначала 1, потом в переменную с записывается значение. с=2
d = b++; alert(d);         //постфиксный оператор в переменную d записывается значение b, и лишь затем к переменной b прибавляется 1. d=1
c = (2+ ++a); alert(c);    // прибавляется 2, к переменной а прибавляется сначала 1, получается 3 и записывается новое значение. c=5
d = (2+ b++); alert(d);    // сначала прибавляется 2 и потом к переменной b записывается ее старое значение +1. d=4
alert(a);                  // итог выполнения операций a=3
alert(b);             // итог выполнения операций b=3

//Задание 2
var a = 2;
var x = 1 + (a *= 2); // Выполняется решение сначала то, что в скобках. Переменная a равна 2 * 2 = 4. После этого к ней прибавляется 1 и записывается в переменную x. х = 5

//Задание 3
const a = 11;
const b = 2;
if (a >= 0 && b >= 0) {
    console.log (a - b);
} else if (a < 0 && b < 0){
    console.log (a * b);
} else{
    console.log (a + b); 
}

//Задание 4
let a = +prompt ('Введите число от 1 до 15');
		switch (a) {
		case 1:
			alert ('Ваше число 1');
			break;
		case 2:
			alert ('Ваше число 2');
			break;
		case 3:
			alert ('Ваше число 3');
			break;
		case 4:
			alert ('Ваше число 4');
			break;
		case 5:
			alert ('Ваше число 5');
			break;
		case 6:
			alert ('Ваше число 6');
			break;
		case 7:
			alert ('Ваше число 7');
			break;
		case 8:
			alert ('Ваше число 8');
			break;
		case 9:
			alert ('Ваше число 9');
			break;
		case 10:
			alert ('Ваше число 10');
			break;
		case 11:
			alert ('Ваше число 11');
			break;
		case 12:
			alert ('Ваше число 12');
			break;
		case 13:
			alert ('Ваше число 13');
			break;
		case 14:
			alert ('Ваше число 14');
			break;
		case 15:
			alert ('Ваше число 15');
			break;	
        }	
        
//Задание 5
        var a = 10;
		var b = 5;
		function plus(a, b) {
    		return a + b;
		}
		function minus(a, b) {
    		return a - b;
		}
		function division (a, b) {
    		return a / b;
		}
		function multiplication (a, b) {
    		return a * b;
        }
//Задание 6
    function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
         break;
        case 'деление':
            return arg1 / arg2;
         break;
        case 'умножение':
            return arg1 * arg2;
         break;
   }
}