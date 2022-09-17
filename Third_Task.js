/* Task 3:
    You have random number in a range from 1000 to 9999.
    By using arithmetic operations find sum of numbers
    from which first number is made of.
*/

var rdnumber = Math.floor(Math.random() * 10000) + 1000;

console.log(rdnumber)

rdnumber = String(rdnumber)
var totalSum = Number(rdnumber[0]) + Number(rdnumber[1]) + Number(rdnumber[2]) + Number(rdnumber[3])

console.log(rdnumber, totalSum)