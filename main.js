
"1-masala"
// Raqamni yagona argument sifatida qabul qiladigan va u noldan kichik yoki teng bo'lsa, rost, aks holda yolg'onni qaytaradigan funksiya yarating.
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true

// let lessThanOrEqualToZero = -1;

// function x (a){
// if (a > 0){
//   return false;
// }
// else if (a <= 0){
//   return true;
// }
// }
// console.log(x(lessThanOrEqualToZero))

// /////////////////////////////////////////////////////////////////////////


"2-masala"
// Uzunlik va kenglikni qabul qiluvchi va to‘rtburchak perimetrini topuvchi funksiya yarating.

// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22

// let linght = 6;
// let width = 7;

// function findPerimeter(a,b){
//   return (a * 2) + (b * 2);
// }

// console.log(findPerimeter(linght,width));

// /////////////////////////////////////////////////////////////////////////


"3-masala"
// JavaScript-da bo'linish operatsiyasining qolgan qismini ta'minlay oladigan bitta operator mavjud. Parametr sifatida ikkita raqam uzatiladi. Birinchi parametr ikkinchi parametrga bo'lingan holda qoldiq, ehtimol nolga teng bo'ladi. Bu qiymatni qaytaring.

// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0

// let x = -9;
// let y = 45;

// function remainder(x, y) {
// 	return x % y
// }

// console.log(remainder(x,y));

// /////////////////////////////////////////////////////////////////////////


"4-masala"
// Ikki raqam berilgan bo'lsa, ikkala raqamning yig'indisi 100 dan kichik bo'lsa, true qiymatini qaytaring. Aks holda, noto'g'ri qaytaring.\

// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

// let a = 22;
// let b = 15;

// function lessThan100(a, b) {
//   if(a + b < 100){
//     return true
//   }
//    else{
//      return false
//    }
//  }

//  console.log(lessThan100(a,b));

 // /////////////////////////////////////////////////////////////////////////


 "5-masala"
//  Bu qiyinchilikda bir fermer sizdan uning barcha hayvonlari orasida nechta oyog'ini sanash mumkinligini aytishingizni so'raydi. Fermer uchta turni ko'paytiradi: 
//  • tovuqlar = 2 oyoqli 
//  • sigirlar = 4 oyoqli
//  • cho'chqalar = 4 oyoqli
   
//   Fermer o'z hayvonlarini sanab chiqdi va u sizga har bir tur uchun oraliq summani beradi. Siz barcha hayvonlarning oyoqlarining umumiy sonini qaytaradigan funktsiyani amalga oshirishingiz kerak.

// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50

// let a = 2;
// let b = 3;
// let c = 5;

// let chickens;
// let cows;
// let pigs;

// function animals(chickens, cows, pigs) {
//   return (chickens * 2) + (cows * 4) + (pigs * 4);
//   }
//   console.log(animals(a, b, c));

 // /////////////////////////////////////////////////////////////////////////

 "6-masala"
//  Mubashir cheksiz halqa yaratdi! Ushbu sinovdan o'tish uchun kod yorlig'idagi kodni tuzatish orqali unga yordam bering. Funktsiya nima qilishi kerakligi haqida tasavvurga ega bo'lish uchun quyidagi misollarni ko'rib chiqing.

// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]

// let number = 6;

// function printArray(number) {
//   var newArray = [];

//   for(var i = 1; i <= number; i++) {
//     newArray.push(i);
//   }

//   return newArray;
// }

// console.log(printArray(number))

 // /////////////////////////////////////////////////////////////////////////

 "7-masala"
//  Uchburchakning uchinchi chetining maksimal diapazonini topadigan funksiya yarating, bunda yon uzunliklari butun sonlardan iborat.

// nextEdge(8, 10) ➞ 17

// nextEdge(5, 7) ➞ 11

// nextEdge(9, 2) ➞ 10

// let side1 = 8;
// let side2 = 10;

// function nextEdge(side1, side2) {
// 	return (side1 + side2) -1;
// }

// console.log(nextEdge(side1, side2))

 // /////////////////////////////////////////////////////////////////////////


 "8-masala"
//  n qirrali muntazam ko‘pburchak n berilgan bo‘lsa, ichki burchaklarning umumiy yig‘indisini (gradusda) qaytaring.

// sumPolygon(3) ➞ 180

// sumPolygon(4) ➞ 360

// sumPolygon(6) ➞ 720

// let n = 3;

// function sumPolygon(n) {
// 	return (n - 2) * 180 
// }

// console.log(sumPolygon(n));

 // /////////////////////////////////////////////////////////////////////////


"9-masala"
//  Barmen kimgadir ichimlik berish kerakligini aniqlash uchun oddiy dastur yozmoqda. U faqat 18 va undan katta yoshdagi odamlarga va tanaffusda bo'lmaganda ichimliklar beradi. Odamning yoshini va tanaffus vaqti sessiyada yoki yo'qligini hisobga olgan holda, unga ichimlik berish kerakmi yoki yo'qligini qaytaradigan funksiya yarating.

// shouldServeDrinks(17, true) ➞ false

// shouldServeDrinks(19, false) ➞ true

// shouldServeDrinks(30, true) ➞ false


// let age = 17;
// let onBreak = true;

// function shouldServeDrinks(age, onBreak) {
// 	return (age >= 18 && !onBreak)
// }

// console.log(shouldServeDrinks(age, onBreak))

 // /////////////////////////////////////////////////////////////////////////


 "10-masala"
//  Agar yil sakrash bo'lsa, rost qaytaradigan funktsiyani yozing, aks holda "false" ni qaytaring. Yil odatdagi yilda 365 emas, 366 kun davom etsa, "kabisa yili" hisoblanadi. Ushbu qo'shimcha kun eng qisqa oyning oxiriga qo'shiladi va 29 fevralni yaratadi. Kabisa yili har to'rt yilda sodir bo'ladi va agar yil to'rtga karrali bo'lsa, o'tadi. Bundan istisno - asr boshidagi yil (masalan, 1900 yoki 2000), bu erda yil kabisa yili bo'lishi uchun 400 ga bo'linishi kerak. Misollarni ko'rib chiqing va agar sizga yordam kerak bo'lsa, resurslar paneliga qarang.

// leapYear(1990) ➞ false

// leapYear(1924) ➞ true

// leapYear(2021) ➞ false

// let year = 2022;

// function leapYear(year) {
//   return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
//   }

//   console.log(leapYear(year));

"11-masala"
// Men sotib olgan 6 ta kofe stakanining har biri uchun 7-chashka bepul olaman. Hammasi bo'lib, men 7 stakan olaman. Xarid qilingan stakanlarni oladigan funksiya yarating nva men oladigan stakanlarning umumiy sonini butun son sifatida qaytaring.

// totalCups(6) ➞ 7

// totalCups(12) ➞ 14

// totalCups(213) ➞ 248

// let n = 6;

// function totalCups(n) {
// 	return Math.floor(n / 6) + n
// }

// console.log(totalCups(n));

 // /////////////////////////////////////////////////////////////////////////

"12-masala"
// Avtotransport vositasi bosib o'tgan masofadan 10 baravar ko'p yoqilg'iga muhtoj. Biroq, yo'lga chiqishdan oldin har doim kamida 100 ta yoqilg'i olib yurishi kerak. Masofani hisobga olgan holda kerakli yoqilg'i miqdorini hisoblaydigan funktsiya yarating.

// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100

// let n = 15;

// function calculateFuel(n) {
// 	return n > 10 ? n * 10 : 100;
// }

// console.log(calculateFuel(n));

 // /////////////////////////////////////////////////////////////////////////


 "13-masala"
//  Ikkita argument oladigan funksiya yarating. Ikkala argument ham a va b butun sonlardir. Agar ulardan biri 10 bo'lsa yoki yig'indisi 10 bo'lsa, true qiymatini qaytaring.

// makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true

// let a = 9;
// let b = 10;


// function makesTen(a, b){
//   return a == 10 || b == 10 || a + b == 10 ? true : false;
// }

// console.log(makesTen(a, b));


"14-masala"
// Mantiqiy o'zgaruvchi bayrog'ini oladigan va uni satr sifatida qaytaradigan funksiya yarating.

// boolToString(true) ➞ "true"

// boolToString(false) ➞ "false"

// let a = -10; 
// let flag = a <= 0 ? true : false;

// function boolToString(flag) {
// 	return flag + ""
// }

// console.log(boolToString(flag));

"15-masala"
// Agar kirish qiymati 1 bo'lsa, 0 ni, agar kirish 0 bo'lsa, 1 ni qaytaradigan funktsiyani yozing.

// flip(1) ➞ 0

// flip(0) ➞ 1

// let y = 1;


// function flip(y) {
// 	if (y > 0){
// 		return 0;
// 	}
// 	else if (y == 0){
// 		return 1;
// 	}
// }

// console.log(flip(y));


"16-masala"