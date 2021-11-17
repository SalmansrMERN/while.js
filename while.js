// ======== print from 1 to 10 =======
var i = 1;
while (i <= 10) {
    console.log(i);
    i++

}
// ======== sum of 1 to 5 =======

var sum = 0;
var i = 1;
while (i <= 5) {
    sum = sum + i;
    i++;

}
console.log("Total = " + sum)

// ===== write a program that will print the sum of all the even numbers from 1-100 using a while loop ======



var sum = 0;

var i = 2;
while (i <= 100) {
    sum = sum + i;
    i = i + 2;
}
console.log("Total = " + i);

// ===== write a program that will print the sum of all the numbers that are divisible by 3 and 5 from 1-100 =====

var sum = 0;

var i = 1;
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum = sum + i;
    }
    i++;
}
console.log("Sum = " + sum)

