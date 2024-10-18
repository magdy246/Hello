//& Question 1 :
// var x = Number(window.prompt("type the first number: ", ""))
// var y = Number(window.prompt("type the second number: ", ""))
// var z = x + y
// console.log(z)

//****************************************************************/

//& Question 2 :
// var x = Number(window.prompt("type the number which you will Check: ", ""))
// if (x <= 1) {
// console.log("this Number is't Prime number");
// }
// else if (x == 2) {
// console.log("this Number is Prime number");
// }
// else {
// var number = true
// for (var i = 2; i < x; i++) {
// if (x % i === 0) {
// number = false
// break;
// }
// }
// if (number === true) {
// console.log("this Number is Prime number");
// }
// else {
// console.log("this Number is't Prime number");
// }
// }

//****************************************************************/

//& Question 3 :
// var x = window.prompt("type any statement : ", "")
// var statement = x.split('').reverse().join('');
// console.log(statement);

//****************************************************************/

//& Question 4 :
// function findLargest() {
// var x = [1, 3, 7, 2, 4]
// var largestNumber = Math.max(...x)
// console.log(largestNumber);
// }
// findLargest()

//****************************************************************/

//& Question 5 :
// function check() {
// var numbers = [1, 3, 7, 2, 4];
// const evenNumbers = numbers.filter(x => x % 2 === 0);
// console.log(evenNumbers);
// }
// check();

//****************************************************************/

//& Question 6 :
// var x = window.prompt("type any statement : ", "")
// var statement = x.split('').toReversed().join('');
// console.log(statement);

//****************************************************************/

//& Question 7 :
// function avrage() {
// var numbers = [1, 2, 3, 4, 5];
// var sum = numbers.reduce((a, b) => a + b);
// var average = sum / numbers.length;
// console.log(average);
// }
// avrage();

//****************************************************************/

//& Question 8 :
// var day = +window.prompt("number of the day of week : ", "")
//
// if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6) {
// console.log("Weekday")
// }
// else if (day == 7) {
// console.log("Weekend")
// } else {
// console.log("Week only 7 Days")
// }

//****************************************************************/

//& Question 9 :
// function divideNum() {
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const evenNumbers = numbers.filter((x) => {
// return x % 2 === 0 || x % 3 === 0;
// });
// console.log(evenNumbers);
// }
// divideNum();

//****************************************************************/

//& Question 10 :
// var element = +window.prompt("write your element: ", "");
// var num = [1, 2, 3, 4, 5];
//
// if (num.filter(x => x === element)) {
// console.log(num.indexOf(element));
// } else {
// console.log(-1);
// }

//****************************************************************/

//& Question 11 :
// function factorial() {
// var num = +window.prompt("Enter a number: ", "");
// var result = 1;
// for (var i = 1; i <= num; i++) {
// result *= i;
// }
// console.log(result);
// }
// factorial();

//****************************************************************/

//& Question 12 :
// function getKeys() {
// var obj = { name: "magdy", age: 21 };
// var keys = Object.keys(obj);
// console.log(keys);
// }
// getKeys();

//****************************************************************/

//& Question 13 :
// function uniqueNumbers() {
// var nums = [1, 2, 2, 3, 4, 4, 5];
// var uniqueNums = nums.filter((value) => {
// return nums.indexOf(value) === nums.lastIndexOf(value);
// });
// console.log(uniqueNums);
// }
// uniqueNumbers();

//****************************************************************/

//& Question 14 :
// var str = window.prompt("Enter a string: ", "");
// function countLetters() {
// var charCount = {};
// for (var i = 0; i < str.length; i++) {
// var char = str[i];
// if (charCount[char]) {
// charCount[char]++;
// } else {
// charCount[char] = 1;
// }
// }
// console.log(charCount);
// }
// countLetters();

//****************************************************************/

//& Question 15 :
// function sorting(){
// var nums = [5, 3, 8, 1, 2];
// var sortedNums = nums.sort();
// console.log(sortedNums);
// }
// sorting();

//****************************************************************/

//& Question 16 :
// function checkAnagram() {
// var str1 = window.prompt("Enter a string: ", "");
// var str1 = str1.toLowerCase();
// var str2 = window.prompt("Enter another string: ", "");
// var str2 = str2.toLowerCase();
// var sortedStr1 = str1.split('').sort().join('');
// var sortedStr2 = str2.split('').sort().join('');
// if (sortedStr1 === sortedStr2) {
// console.log("The strings are anagrams");
// } else {
// console.log("The strings are not anagrams");
// }
// }
// checkAnagram();

//****************************************************************/

//& Question 17 :

// var values = [0, false, "Hello", "", null, undefined, NaN, 42, "magdy"];
// var filteredValues = values.filter(function (value) {
// return value !== 0 && value !== false && value !== "" && value !== null &&
// value !== undefined && !Number.isNaN(value); //!NaN != NaN
// });
// console.log(filteredValues);

//****************************************************************/

//& Question 18 :
// var Year = window.prompt("Enter a year: ", "");
// var Model = window.prompt("Enter a modal: ", "");
// var Car = {
// Year: Year,
// Model: Model,
// };
// console.log(Car);

//****************************************************************/

//& Question 19 :
// var key = window.prompt("write your key: ", "");
// var items1 = { name: "Alice", age: 25 };
// if (key === "name" || key === "age") {
// console.log(true);
// } else {
// console.log(false);
// }

//****************************************************************/

//& Question 20 :
// var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// var words = window.prompt("write your words: ", "");
// var wordsLetters = words.split("");
// var count = 0;
// for (var i = 0; i < wordsLetters.length; i++) {
// if (vowels.indexOf(wordsLetters[i]) !== -1) {
// count++;
// }
// }
// console.log(count);

//****************************************************************/

//& Question 21 :
// var statement = window.prompt("write your statement: ", "");
// var words = statement.split(' ')
// var count = 0;
// for (var i = 0; i < words.length; i++) {
// if (words[i].length > 0) {
// count++;
// }
// }
// console.log(count);

//****************************************************************/

//& Question 22 :
// var num1 = window.prompt("write your first num: ", "");
// var num2 = window.prompt("write your second num: ", "");
// var operation = window.prompt("write your operation: ", "");
// if (operation === "+") {
// console.log(parseInt(num1) + parseInt(num2));
// } else if (operation === "-") {
// console.log(parseInt(num1) - parseInt(num2));
// } else if (operation === "%") {
// console.log("invalid operator");
// } else if (operation === "*") {
// console.log(parseInt(num1) * parseInt(num2));
// } else if (operation === "/") {
// if (num2 !== "0") {
// console.log(parseInt(num1) / parseInt(num2));
// } else {
// console.log("invalid value");
// }
// }