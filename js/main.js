// let j = 1; // initilizer
// for (; j <= 10; j += 1) {
//   console.log(j);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let j = 1; ; j += 1) {
//   console.log(j);
//   if (j > 10) {
//     console.log(j);
//     break;
//   } // condition
// }

// for (let j = 1; j < 10;) {
//   console.log(j);
//   j += 1; // iterator
//   console.log(j);
// }

// let q = 1; // initilizer
// for (; ;) {
//   if (q > 10) {
//     break;
//   } // condition
//   console.log(q);
//   q += 1; // iterator
//   console.log(q);
// }









// //test 1

// let a = 3;
// let b = 8;
// let count = 0;

// for (let i = a; i <= b; i++) {
//   console.log(i);
//   count++;
// }

// console.log(count);

// //test 2
// let counts = 0;

// for (let i = a + 1; i < b; i++) {
//   console.log(b - counts - 1);
//   counts++;
// }

// console.log(counts);

// //test 3
// let narx = 50
// let konfetlar_soni = 10;

// for (let i = 1; i <= konfetlar_soni; i++) {
//   let konfet_narxi = (narx / i).toFixed(2);
//   console.log(konfet_narxi);
// }

// //test 4
// let price = 15000;

// for (let i = 1.2; i <= 2; i += 0.2) {
//   console.log(`${(i).toFixed(1)} kg konfet narxi: ${Math.round(price * i)} so'm`);
// }

// //test 5
// let total = 0;

// for (let i = a; i <= b; i++) {
//   total += i;
// }

// console.log(total);

// //test 6
// let totals = 1;

// for (let i = a; i <= b; i++) {
//   totals *= i;
// }

// console.log(totals);

// //test 7
// let product = 1

// for (let i = a; i <= b; i++) {
//   product += i * i;
// }

// console.log(product);

// //test 8
// let N = 5;
// let result = 0;

// for (let i = 1; i <= N; i++) {
//   result += 1 / i;
// }
// console.log((result).toFixed(2));

// //test 9
// let products = 1.1;

// for (let i = 2; i <= n; i++) {
//   products *= (1 + i / 10);
// }

// console.log(products);

// //test 10
// let square = 0;

// for (let i = 1; i <= 2 * n - 1; i += 2) {
//   square += i;
//   console.log(`${(i + 1) / 2} ning kvadrati: ${square}`);
// }

// //test 11
// let son = 9;
// let p = 2;
// let d = 1;

// for (let index = 1; index < son; index++) {
//   d = p ** index
//   console.log(d);
// }

// //test 12
// let resulted = 1;

// for (let i = 1; i <= n; i++) {
//   resulted *= a;
//   console.log(`${a} ning ${i}-darajasi: ${resulted}`);
// }

// //test 13
// let sonlarSoni = 5;
// let daraja = 2;
// let darajaQiymati = 1;
// let yigindi = 1;

// for (let i = 1; i <= sonlarSoni; i++) {
//   darajaQiymati *= daraja;
//   yigindi += darajaQiymati;
// }

// console.log(`S = ${yigindi}`);

// //test 15
// let M = 5;
// let K = 3;
// let totales = 0;

// for (let i = 1; i <= M; i++) {
//   totales += Math.pow(i, K);
// }

// console.log(`S = ${totales}`);

// //text 16
// let answer = 0;

// for (let i = 1; i <= M; i++) {
//   answer += Math.pow(i, i);
// }

// console.log(`S = ${answer}`);

// //test 20

// for (let i = 1; i <= M; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row += j + ' ';
//   }
//   console.log(row);
// }

//test 21, test 22
// let a = 23;
// let b = 5;

// let count = 0;
// while (a >= b) {
//   a -= b;
//   count++;
// }

// console.log(a)

// //test 23
// let n = 27;

// let isPowerOfThree = false;
// let num = n;

// while (num > 0 && !isPowerOfThree) {
//   if (num === 1) {
//     isPowerOfThree = true;
//   }
//   num /= 3;
// }

// if (isPowerOfThree) {
//   console.log('3 - ning darajasi');
// } else {
//   console.log('3 - ning darajasi emas');
// }

//test 25
// let n = 123456;

// let reversed = 0;
// let num = n;

// while (num > 0) {
//   reversed = reversed * 10 + num % 10;
//   num = Math.floor(num / 10);
// }

// console.log(reversed);

//test 26
// let n = 12345;

// let reversed = 0;
// let sum = 0;
// let count = 0;
// let num = n;

// while (num > 0) {
//   reversed = reversed * 10 + num % 10;
//   sum += num % 10;
//   num = Math.floor(num / 10);
//   count++;
// }

// console.log(sum);
// console.log(count);

//test 27
// let n = 1234567;

// let isTwoExist = false;
// let num = n;

// while (num > 0) {
//   let digit = num % 10;
//   if (digit === 2) {
//     isTwoExist = true;
//     break;
//   }
//   num = Math.floor(num / 10);
// }

// if (isTwoExist) {
//   console.log("Berilgan sonning ichida 2 raqami bor.");
// } else {
//   console.log("Berilgan sonning ichida 2 raqami yo'q.");
// }

//test 28
// let n = 1234568;

// let isOddExist = false;
// let num = n;

// while (num > 0) {
//   let digit = num % 10;
//   if (digit % 2 === 1) {
//     isOddExist = true;
//     break;
//   }
//   num = Math.floor(num / 10);
// }

// if (isOddExist) {
//   console.log("Berilgan sonning ichida toq raqamlar bor.");
// } else {
//   console.log("Berilgan sonning ichida toq raqamlar yo'q.");
// }

// test 30
// let n = 23;

// let isPrime = true;
// let i = 2;

// while (i <= Math.floor(n / 2)) {
//   if (n % i === 0) {
//     isPrime = false;
//     break;
//   }
//   i++;
// }

// if (isPrime) {
//   console.log(`${n} tub son.`);
// } else {
//   console.log(`${n} tub son emas.`);
// }