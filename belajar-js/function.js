// fuction

// Tanpa fuction
const temperatureInCelsius = 90;
const temperatureInFahrenheit = (9 / 5) * temperatureInCelsius + 32;

console.log("Hasil konversi:", temperatureInFahrenheit);

// ----------akan melakukan konsep ini berulang dan banyak query
let Celsius;
let Fahrenheit;

Celsius = 50;
Fahrenheit = (9 / 5) * Celsius + 32;
console.log("Hasil konversi:", Fahrenheit);

Celsius = 70;
Fahrenheit = (9 / 5) * Celsius + 32;
console.log("Hasil konversi:", Fahrenheit);

Celsius = 100;
Fahrenheit = (9 / 5) * Celsius + 32;
console.log("Hasil konversi:", Fahrenheit);

// ----------funtion = keyword, greetWord() = Identifer, {} = Body
function greetword() {
  console.log("Hello");
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------gunakan fuction agar tidak melakukan konsep berulang, function memungkinkankita mneggunakan nya terus menerus dengan query yang sedikit
// Membuat fungsi untuk mengubah suhu dari Celsius ke Fahrenheit
// temperature bisa di jadikan default, langsung isi di kurung nya temperature = 100
function convertCelsiusToFahrenheit(temperature = 200) {
  // Ini adalah rumus konversi suhu dari Celsius ke Fahrenheit
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  // Menampilkan hasil konversi di console
  console.log("Hasil konversi suhu dari Celsius :", temperatureInFahrenheit);
}
convertCelsiusToFahrenheit();
// Menentukan suhu dalam Celsius yang ingin dikonversi
const selsi = 50;
// Memanggil fungsi dan memberikan nilai suhu Celsius sebagai input
// jadi untuk temperature kita bisa langsung isi dan menggunakan variable untuk mengisi nilainya
convertCelsiusToFahrenheit(selsi);
convertCelsiusToFahrenheit(100);

//--------- temperature bisa bernilai Nan jika pemanggilan fuction di tidak bernilai, dan bisa kita cek menggunakan undifined;
// function convertCelsiusToFahrenheit(temperature) {
// if (temperature !== undefined);
// const temperatureInFahrenheit = (9 / 5) * temperature + 32;

// // Menampilkan hasil konversi di console
// console.log(
// "Hasil konversi suhu dari Celsius ke Fahrenheit:",
// temperatureInFahrenheit
// );
// }

// convertCelsiusToFahrenheit();

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------Return
// return = keyword, result = nilai return (expression)

// Membuat fungsi bernama sumNumbers yang menerima 2 parameter: a dan b
function sumNumbers(a, b) {
  // Menjumlahkan nilai a dan b, lalu disimpan ke variabel result
  const result = a + b;

  // Mengembalikan hasil penjumlahan (nilai result) ke pemanggil fungsi
  return result;
}
// ada dua cara bisa gunakan variable lagi untuk memberi nilai pada a dan b
// atau langsung pada console.log
console.log("a + b :", sumNumbers(5, 6));

// Memanggil fungsi sumNumbers dengan nilai 2 dan 4
// Hasilnya (2 + 4 = 6) akan disimpan di variabel 'result'
const result = sumNumbers(2, 4);
// Menampilkan hasil ke console
console.log("2 + 4:", result); // Output: 2 + 4: 6

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//---------- function Expression
// Membuat sebuah fungsi (anonymous function) dan menyimpannya ke dalam variabel bernama 'convertCelsiusToFahrenheit'
// Fungsi ini menerima satu parameter: 'temperature'
const CelsiusToFahrenheit = function (temperature) {
  // Menghitung suhu dalam Fahrenheit dengan rumus: (9/5 * suhu Celsius) + 32
  const result = (9 / 5) * temperature + 32;

  // Mengembalikan hasil konversi ke pemanggil fungsi
  return result;
};

// Memanggil fungsi dengan nilai 90°C dan menyimpan hasilnya ke variabel 'temperatureInFahrenheit'
const suhu = CelsiusToFahrenheit(90);

// Menampilkan hasil konversi ke dalam console
console.log("Hasil konversi:", suhu);

/*Keduanya sah digunakan di JavaScript, hanya berbeda cara penulisannya. Function expression biasanya dipakai kalau kamu
ingin menyimpan fungsi ke dalam variabel atau melewatkannya ke fungsi lain.
*/

//-------------- 1.Menjadi First-Class Citizen
// Fungsi 'multiply' menerima dua angka, lalu mengembalikan hasil perkalian keduanya
function multiply(a, b) {
  return a * b;
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

// Fungsi 'calculate' menerima:
// - 'operation' → sebuah fungsi (misalnya multiply, add, dll)
// - 'numA' dan 'numB' → angka yang akan diproses
function calculate(operation, numA, numB) {
  // Menjalankan fungsi 'operation' dengan parameter 'numA' dan 'numB'
  // const proses = operation(numA, numB);
  // return proses;
  return operation(numA, numB);
}

// Di sini kita memanggil 'calculate', dan kita masukkan:
// - 'multiply' sebagai fungsi operasi
// - 2 dan 4 sebagai angka yang ingin dihitung
const hasil = calculate(multiply, 2, 4);
const tambah = calculate(add, 2, 4);
const kurang = calculate(subtract, 2, 4);

console.log(hasil);
console.log(tambah);
console.log(kurang);

// ------------------Fungsi induk bernama 'multiplier' menerima 1 parameter, yaitu 'x'
function multiplier(x) {
  // Di dalamnya, fungsi ini mengembalikan fungsi lain (anonymous function)
  // Fungsi yang dikembalikan ini menerima satu parameter lagi: 'num'
  return function (num) {
    // Fungsi ini akan mengalikan nilai 'x' (dari fungsi luar) dengan 'num' (input baru)
    return x * num;
  };
}

// Di sini kita membuat fungsi baru bernama 'double'.
// Kita isi 'x' dengan 2, artinya fungsi ini akan mengalikan input-nya dengan 2.
const double = multiplier(2);

// Kita juga buat fungsi baru bernama 'triple', di mana 'x' diisi 3.
// Artinya fungsi ini akan mengalikan input-nya dengan 3.
const triple = multiplier(3);

// Sekarang kita coba jalankan fungsi 'double' dengan input 10
// Karena x = 2 dan num = 10 → hasilnya: 2 * 10 = 20
console.log(double(10)); // Output: 20

// Jalankan fungsi 'triple' dengan input 11
// Karena x = 3 dan num = 11 → hasilnya: 3 * 11 = 33
console.log(triple(11)); // Output: 33

/*Dapat disimpan sebagai nilai dalam variabel.
Dapat dikembalikan dari suatu function.
Dapat dikirimkan sebagai parameter bagi function lain.
Dapat disimpan dalam elemen array dan object literal.
Dapat memiliki method dan properties sendiri.*/

// -----------------------------------------------------------------------------------
// Deklarasi = menghilangkan kewajiban menulis function, langsung parameter dan =>
const celsi = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

const suh = celsi(90);

console.log("hasil", suh);

// Refactor = lebih simpel lagi, tidak memerlukan body fuction dan return, serta variable
const cels = (temperature) => (9 / 5) * temperature + 32;

const su = cels(90);
console.log("hasil", su);

function myFunc(name) {
  console.log("name:", name);
}

myFunc("Rafy", "Fikri", "Dimas");
