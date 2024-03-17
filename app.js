// 1  if1. Butun son berilgan. Agar berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let num = +prompt("please write a number")
// if ( num > 0){
//     num = num + 1
// } else {
    
// }
// console.log(num)


// // 2  if2. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring. Agar 0 ga teng bo`lsa, 10 ni o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let num = +prompt("please write a number")
// if ( num > 0){
//     num = num + 1
// }  else if (num == 0){
//     num = num + 10
// } else {
//     num = num - 2
    
// }
// console.log(num)

// 3 
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// let numC = +prompt("please write the third number")
// let count = 0
// if (numA > 0 && numB > 0 && numC > 0){
//     count = count + 3
// } else if (numA < 0 && numB > 0 && numC > 0){
//     count = count + 2
// } else if (numA > 0 && numB < 0 && numC > 0){
//     count = count + 2
// } else if (numA > 0 && numB > 0 && numC < 0){
//     count = count + 2
// } else  if (numA > 0 && numB < 0 && numC < 0){
//     count = count + 1
// } else if (numA < 0 && numB > 0 && numC < 0){
//     count = count + 1
// } else if (numA < 0 && numB < 0 && numC > 0){
//     count = count + 1
// }
// console.log(count +" ta musbat son");


// 4 
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// if (numA > numB){
//     console.log(numA + " soni kattaroq");
// }else {
//     console.log(numB + " soni kattaroq");

// }

// 5
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// if (numA > numB){
//     console.log("kichiksoning tartib raqami 2");
// }else {
//     console.log(" kichiksoning tartib raqami 1");

// }

// 6
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// if (numA > numB){
//     console.log(numB + " soni kichikroq");
//     console.log(numA + " soni kattaroq");
// }else {
//     console.log(numA + " soni kichikroq");
//     console.log(numB + " soni kattaroq");
// }

// 7
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// let empty = numA
// if (numA > numB){
//     numA = numB
//     numB = empty 
// }else {
    
// }
// console.log(numA + " The number A always smaller then number B");
// console.log(numB + " The number B always bigger then number A");

// // 8
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// let emptyNum
// if (numA !== numB){
//     emptyNum = numA + numB
//     numA = emptyNum
//     numB = emptyNum
// }else {
//     numA = 0
//     numB = 0
// }
// console.log(numA);
// console.log(numB);

// // 9
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// if (numA !== numB && numA > numB){
//     numB = numA
// }else if (numA !== numB && numA < numB){
//     numA = numB
// } else if (numA == numB){
//     numA = 0
//     numB = 0
// }
// console.log(numA);
// console.log(numB);


// 10
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// let numC = +prompt("please write the third number")
// let count = 0
// if (numA > numB && numA < numC){
//     console.log(numB + " 2-son kichigi");
// } else if (numA < numB && numA > numC){
//     console.log(numC + " 3-son kichigi");
// }  else if (numA < numB && numA < numC){
//     console.log(numA + " 1-son kichigi");
// }



// 11
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// let numC = +prompt("please write the third number")
// if (numA < numB && numA < numC){
//     alert(numB + " 2-son urtanchasi");
// } else if ( numA > numC && numA < numB){
//     console.log(numA + " 1-son urtanchasi");
// }  else if (  numC < numB && numA > numC ){
//     console.log(numC + " 3-son urtanchasi");
// }


// 12
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// let numC = +prompt("please write the third number")
// let sum = 0
// if (numA > numB && numB > numC){
//     sum = numA + numB
//     console.log(numA +  " the bigest two numbers");
//     console.log(numB + " the bigest two numbers");
// } else if ( numA < numB && numC < numB || numB < numC){
//     sum = numB + numC
//     console.log(numB +  " the bigest two numbers");
//     console.log(numC + " the bigest two numbers");
// } else if (numA > numB && numC > numB){
//     sum = numA + numC
//     console.log(numA +  " the bigest two numbers");
//     console.log(numC + " the bigest two numbers");
// }
// console.log(sum + " summa")


// 13
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// let numC = +prompt("please write the third number")
// if ( numC > numB && numB > numA){
//     numA = numA * 2
//     numB = numB * 2
//     numC = numC * 2
// } else {
//     numA = 0 - numA 
//     numB = 0 - numB
//     numC = 0 - numC
// }
// console.log(numA);
// console.log(numB);
// console.log(numC);

// 14
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// let numC = +prompt("please write the third number")
// if ( numC > numB && numB > numA ){
//     numA = numA * 2
//     numB = numB * 2
//     numC = numC * 2
// } else if ( numA > numB && numB > numC ){
//     numA = numA * 2
//     numB = numB * 2
//     numC = numC * 2
// } else {
//     numA = 0 - numA 
//     numB = 0 - numB
//     numC = 0 - numC
// }
// console.log(numA);
// console.log(numB);
// console.log(numC);

// 15
// let numA = +prompt("please write the first number")
// let numB = +prompt("please write the second number")
// let numC = +prompt("please write the third number")
// let numD = +prompt("please write the fourth number")
// if (numA == numB &&  numB==numC ) {
//     console.log("ordinal number 4");
// } else if (numB == numA && numA == numD ) {
//     console.log("ordinal number 3");
// } else if (numA == numC && numC == numD ) {
//     console.log("ordinal number 2");
// } else if (numB == numC && numC == numD ) {
//     console.log("ordinal number 1");
// }

// 16
        // let numX = +prompt("please write the first number")

        // if (numX < 0){
        //     console.log(numX);
        // } else if (numX === 0){
        //     numX = numX * -1 + -1
        // } else if ( 0 < numX && numX < 2 ) {
        //     numX = numX ** 2
        // } else if ( numX >= 2) {
        //     numX = 4
        // }
        // console.log(numX);

// 17
// let year = parseInt(prompt("Yilni kiriting: "));
// let numDay = 365; 

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             numDay = 366; 
//         }
//     } else {
//         numDay = 366; 
//     }
// }

// console.log(`${year} yilida ${numDay} kun bor.`);


// 18
//  let numX = +prompt("please write the first number")
//  if (numX < 1000 && numX > 0) {
//     if ( numX > 9 && numX < 100 && numX % 2 == 0 ){
//         console.log(numX + " ikki xonali juft son");
//     } else if (numX < 10 && numX % 2 == 0){
//         console.log(numX + " bir xonali juft son");
//     } else if ( numX > 99 && numX < 1000 && numX % 2 == 0){
//         console.log( numX + " uch xonali juft son");
//     } else if ( numX > 9 && numX < 100 && numX % 2 == 1){
//         console.log(numX + " ikki xonali toq son");
//     } else if (numX < 10 && numX % 2 == 1){
//         console.log(numX + " bir xonali toq son");
//     } else if ( numX > 99 && numX < 1000 && numX % 2 == 1){
//         console.log( numX + " uch xonali toq son");
//     }
//  } else {
//     console.log("berilgan oraqliqda kiritilmagan");
//  }


let numK = prompt("numK")
let result = ""
if ( numK > 0 && numK < 6){
    
}
switch (m) {
    case 0:
        result = "Yakshanba"
        break
    case 1:
        result = "Dushanba";
        break
    case 2:
        result = "Seshanba";
        break
    case 3:
        result = "horshamba";
        break
    case 4:
        result = "payshanba";
        break
    case 5:
        result = "juma";
        break
    case 6:
        result = "shanba";
        break

}

console.log(result)
























