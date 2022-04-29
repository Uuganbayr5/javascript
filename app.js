// for(var i = 1; i<= 100; i++){
//     if(i%3 === 0 && i%7 === 0)console.log(i)
// }
// for(var i= 1; i<=100; i+=2){
//     console.log(i)

// }
// var sum = 0;
// for(var i = 1; i<=10; i++){
//     sum = sum + i;
// }
// console.log(sum)
// var urj = 1;
// for(i = 1; i<=10; i+=2){
//     urj *= i 
// } console.log(urj)

var numbers = [10, 42, 5, 87, 61, 34, 99],
    i = numbers.length,
    e = 0;

while (i--) {
    e += numbers[i]; 
}

console.log(e);