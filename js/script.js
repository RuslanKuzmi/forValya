
// Цикл WHILE
/*
// Синтаксис
while (Условие) {
	// Тело цикла
	// Тут будет выполняться код
}
*/
//------
// ruslan:for(num=0; num<7; ++num){
// 	for(i=0; i<7; ++i){
// 		console.log(i);
// 		if(i==3){
// 			break ruslan;
// 		} 
// 	}
// 	console.log(ruslan);
// }

const windowWidth = window.innerWidth;
console.log(windowWidth);
const windowHeight = window.innerHeight;
console.log(windowHeight);

console.log(navigator.userAgent);
console.log(navigator.platform)

alert(`Валя хочу в попку`)
// let test;
// test=function(name, secondName){
// 	info=name+secondName;
// 	console.log(`${name}, ${secondName}`)
// }

// setInterval(test,3000,`ruslan`,`kuzmin`)
// function calcSumm(numOne, numTwo) {
// 	if (numTwo === 1) {
// 		return numOne;
// 	} else {
// 		return numOne * calcSumm(numOne, numTwo - 1);
// 	}
// }
// console.log(calcSumm(3, 3));

// function getSum(a,b){
// 	const c=a+b;
// 	console.log(c);
// }
// getSum(10,20);

// function suma(a=0,b=0){
// return a+b;
// }
// let ruslan=suma(4,5);
// console.log(ruslan);



/*
// Пример
let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}
//------

*/

/*
// Пример
let num = 5;
while (num) {
	console.log(num);
	num--;
}
*/
//------

/*
// Пример без {}
let num = 5;
while (num) console.log(num--);
//------
*/

/*
// Конструкция DO...WHILE
let num = 0;
do {
	console.log(num);
	num++;
} while (num < 0);

//=====================
*/

/*
// Цикл FOR
// Синтаксис
for (Начало; Условие; Шаг) {
	// Тело цикла
	// Тут будет выполняться код
}
//------
*/

/*
// Пример
for (let num = 0; num < 5; num++) {
	console.log(num);
}
*/
/*
Работа цикла for:
1) Выполняется начало - let num = 0
2) Выполняется условие - num < 5
3) Если условие true выполняется
	тело цикла - console.log(num)
4) Выполняется шаг - num++
Повтор начиная с пункта №2
*/
//------

/*
// «встроенное» объявление переменной
for (let num = 0; num < 5; num++) {
	console.log(num);
}
console.log(num);
//------
*/

/*
// Существующая переменная
let num;
for (num = 0; num < 5; num++) {
	console.log(num);
}
console.log(`Вывод вне цикла: ${num}`);

*/


/*

// Можно убрать любую часть цикла
let num = 0;
for (; num < 5; num++) {
	console.log(num);
}
//---
*/
/*
let num = 0;
for (; num < 5;) {
	num++;
	console.log(num);
}
*/
//---
/*
// Бесконечный цикл
let num = 0;
for (;;) {
	num++;
	console.log(num);
}
*/
//---

/*
// Директива break
let num = 0;
for (; num < 5; num++) {
	console.log(num);
	if (num == 2) break;
}
console.log(`Работа окончена, num = ${num}`);
//---
*/

/*
let num = 0;
for (; num < 5; num++) {
	if (num == 2) continue;
	console.log(num);
}
//---
*/

// Директива break/continue и "?"
/*
let num = 0;
for (; num < 5; num++) {
	(num != 2) ? console.log(num) : continue;
}
//---
*/

/*
firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 2) {
			continue firstFor;
		}
		console.log(size);
	}
}
*/


// Итоги и домашка
/*
1.	while – Проверяет условие перед каждой итерацией.
2.	do..while – Проверяет условие после каждой итерации.
3.	for (;;) – Проверяет условие перед каждой итерацией,
	есть возможность задать дополнительные настройки.

Чтобы организовать бесконечный цикл, используют
конструкцию while (true).
При этом он, как и любой другой цикл, может быть
прерван директивой break.

Если на данной итерации цикла делать больше
ничего не надо, но полностью прекращать цикл не
следует – используют директиву continue.

Обе этих директивы поддерживают метки, которые ставятся
перед циклом. Метки – единственный способ для break/continue
выйти за пределы текущего цикла, повлиять на выполнение внешнего.
Помним, что метки не позволяют прыгнуть в произвольное место кода,
в JavaScript нет такой возможности.

Конечно же в JavaScript существуют и другие методы перебора.
Например, перебор объектов или массивов. О них мы поговорим
в отдельных уроках, а пока домашка.
*/

//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
//Задача №1
//Вывести в консоль числа от 1 до 5

//Задача №2
let num = 8;
while (num) {
	//Последний результат 0, верно?
	console.log(num);
	num--;
}
//Задача №3. Переписать на while
for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}
//Задача №4. Прекратить работу цикла №1 когда size равна 1
//Цикл №1
for (let num = 0; num < 2; num++) {
	//Цикл №2
	for (let size = 0; size < 3; size++) {
		console.log(size);
	}
}*/
//========================================================================================================================================================
//========================================================================================================================================================