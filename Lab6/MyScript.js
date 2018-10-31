console.log("Hello World! (JavaScript)");

let x = 123;
console.log("Value of x:", x);

let y = 321;
console.log("Value of y:", y);

console.log("Value of z: ", z = y + x);

if (z > 10)
{
    console.log("Big");
}else{
    console.log("Small");
}

console.log("Type of z:", typeof (z));

var arr = [];
var arrSize = arr.length;
console.log("Length of arr:", arrSize);

arr.push(68,89,96,77,86);
arrSize = arr.length;
console.log("New Length of arr:", arrSize);

console.log("arr[3] = ", arr[3]);
console.log("arr[5] = ", arr[5]);

console.log("For Loop:");
for (var i=0; i<3; i++)
{
    console.log(i);
}
console.log("-----------------");


console.log("While Loop:");
var i = 0;
while(i<3)
{
    console.log(i);
    i++;
}
console.log("-----------------");


console.log("Do While Loop:");
var i = 0;
do {
    console.log(i);
    i++;
}while (i<3);
console.log("-----------------");

var arrSum = 0;
for (var i=0; i < arr.length; i++)
{
    arrSum += arr[i];
}
console.log("arr average: ", arrSum/arr.length);
console.log("-----------------");

console.log("Sorted arr array:");
arr.sort();
for (var i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}
console.log("-----------------");

console.log("Reversed sort:");
names = ["Alpha","Charlie","Bravo"];
names.sort();
names.reverse();
for (var i = 0; i<names.length; i++)
{
    console.log(names[i]);
}
console.log("-----------------");
console.log("Triangle 7x7");

let number = 7;
for (let line = "*"; line.length<=number; line+="*") {
    console.log(line);
}
console.log("-----------------");
console.log("FizzBuzz Game");

for (var i = 1; i<=100; i++)
{
    if (i % 3 === 0 && i % 5 ===0) {
        console.log("FizzBuzz");
    }else if(i % 5===0) {
        console.log("Buzz");
    }else if (i % 3===0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
console.log("-----------------");
console.log("Chessboard Game");

const SIZE = 8;
var width = SIZE/2;
var height = SIZE;
var print = " ";
var print2 = " ";

for (let i=1; i<=width; i++)
{
    print+="# ";
}
for (let i=1;i<=width;i++)
{
    print2+=" #";
}
for (let i = 1;i<=height;i++)
{
    if (i%2===0)
    {
        console.log(print);
    }
    else
    {
        console.log(print2);
    }
}
console.log("-----------------");
console.log("Chessboard Game");
