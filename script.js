//Задание 1
//Замыкания можно использовать везде, где мы использовали объект с одним методом.

//Задание 2
if (!("a" in window)) {
    var a = 1;
}
alert(a); // Выведет undefined. В window нет a

var b = function a(x) {
    x && a(--x);
};
alert(a); // Вывдет тело функции

function a(x) {
    return x * 2;
}
var a;
alert(a); // Вывдет тело функции

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}        //

b(1, 2, 3);
function a() {
    alert(this);
}
a.call(null); // Выдаст window - глобальную зону видимости