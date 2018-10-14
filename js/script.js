/* Задание 1

1) Дан код:


var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2

d = b++; alert(d); // 1

c = (2+ ++a); alert(c); // 5

d = (2+ b++); alert(d); // 4

alert(a); // 3

alert(b); // 3

Почему код даёт именно такие результаты?

сначала увеличить a на единицу. заетм присвоить c значение a, а = 2, с = 2
сначала  присвоить d значение b, затем b увеличивается на единицу, b = 2, d = 1
a = 2, увеличить  a на единицу, затем прибавить 2, (2 + 3) = 5, a = 3
прибавить к b два, затем увеличить b на единицу (2 + 2) = 4, b = 3 */

//Задание 2

/*

Чему будет равен x в примере ниже?

//var a = 2;
//var x = 1 + (a *= 2);

// x = 1 + (2*2) = 5

/* var a = 2;
var x = 1 + (a *= 2);
console.log(x);

*/

//Задание 3

/*

let a = prompt("Введите a ");

let b = prompt("Введите b ");

console.log(a);

console.log(b);

if (a > 0 && b > 0){
    console.log(a - b);
}
else if (a < 0 && b < 0){
    console.log(a * b);
}
else if ((a < 0 && b > 0) || (a > 0 && b < 0)){
    console.log(a + b);
} */

//Задание 4 Смысл задания не понял, в такой формулировке ответ вижу, как написано ниже

/*
let a = prompt("Введите a ");

a = parseInt(a);

switch (a) {
    case "0": while(a <= 15) {
        console.log(a);
        a++;
    }
    break;

    case 1: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 2: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 3: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 4: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 5: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 6: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 7: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 8: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 9: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 10: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 11: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 12: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 13: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 14: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    case 15: while(a <= 15) {
        console.log(a);
        a++;
    }
        break;
    default: console.log("Значение должно быть от 0 до 15");

}
*/

//Задание 5

/*

let x = prompt("Введите x ");

let y = prompt("Введите y ");

x = parseInt(x); //перевод в целое число

y = parseInt(y); //перевод в целое число

function sum (a, b) { //сумма
    return a + b;
}

function sutract (c, d) { //разность
    return c - d;
}

function multiple (e, f) { //произведение
    return e * f;
}

function division (g, h) { //деление
    return g / h;
}

console.log(sum(x, y));
console.log(sutract(x, y));
console.log(multiple(x, y));
console.log(division(x, y));

*/

//Задание 6

/*

let x = prompt("Введите x");

let y = prompt("Введите y");

x = parseInt(x); //перевод в целое число

y = parseInt(y); //перевод в целое число

function sum (a, b) { //сумма
    return a + b;
}

function sutract (c, d) { //разность
    return c - d;
}

function multiple (e, f) { //произведение
    return e * f;
}

function division (g, h) { //деление
    return g / h;
}

function action (arg1, arg2, operation){

return operation(arg1, arg2);

}

let calc = prompt("Введите операцию: сложение, вычитание, умножение, деление") //спрашивает какую операцию провести

switch (calc) { //Выводит результат в зависимости от запрашиваемой операции
    case "сложение" :
        console.log(action(x, y, sum));
        break;
    case "вычитание" :
        console.log(action(x, y, sutract));
        break;
    case "умножение" :
        console.log(action(x, y, multiple));
        break;
    case "деление" :
        console.log(action(x, y, division));
        break;
    default :
        console.log("Введите значение из списка")
}

*/