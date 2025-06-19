//---Objek
// user = object, {} = apapun yang di dalamnya adalah properti, name, age, "last name" = key dapat berupa sting dan "Dicoding" atau seterusnya bisa berisi apapun
const user = {
  name: "Dicoding",
  "last name": "Indonesia",
  age: 9,
};

//--mengubah nilai dalam properti
user.age = 15;
user.name = "Alfa";
const { name, age } = user;
console.log(name, age);

//--menghapus properti di object
delete user["last name"];
console.log(user);

//--akses menggunakan dot (.)
console.log(user.name);
// akses menggunakan suare
console.log(user["last name"]);
// akses menggunakan object destructuring
// const { name, age } = user;
// console.log(name, age);

//----------------------------------------------------------------------------------------------------------------------------------
//---Array
// ada macam" pembuatan array
//--object constructor
const users = new Array("baju", "sepeda");
console.log(users);
//--array form - ini ibarat mendefinisikan apa yang di dalam kurung nya menjadi array
const foo = Array.from("Fauzan");
console.log(foo);
//--array literal - ga usah pake newArray
const buah = ["apple", "nanas"];
console.log(buah);

//--akses array berdasarkan index 0 dan seterus nya, misal kita memiliki 5 data, maka cara hitungnya 0,1,2,3,4
let mobil;
mobil = ["avanza", "fortuner", "agya", "pajero", "alphard"];
console.log(mobil[2]);

mobil = ["avanza", "fortuner", "agya", "pajero", "alphard"];
mobil[2] = "linux";
console.log(mobil);

// kita juga bisa nambahin array menggunakan push

mobil = ["avanza", "fortuner", "agya", "pajero", "alphard"];
mobil.push("Lexus");
// kita juga bisa hapus, namun ketika di hapus akan menampilkan <1 empety item>
delete mobil[2];
// untuk menghapus <1 empety item> kita gunakan splice, 2 adalah index tujuan untuk di hapus, dan 1 adalah jumlah yang ingin di hapus dan setelahnya
mobil.splice(2, 1);
console.log(mobil);

// cara hapus dengan shift dan pop, yang hanya menghapus awal dan akhir
mobil.shift(); //di awal
mobil.pop(); //di akhir
console.log(mobil);

// -- destructuring
// array dengan nama intro berisi hello(0), Arsy(1), dan di masukan kedalam greeting (hello), dan nama (arsy)
const introduction = ["Hello", "Arsy"];
const [greeting, nama] = introduction;
console.log(greeting, nama);

// --Array methode
// reserve berguna untuk menampilkan array secara terbalik
const myArray = ["Android", "Data Science", "Web"];
myArray.reverse();
console.log(myArray);
// sort untunk mengurutkan array
mobil = ["avanza", "fortuner", "agya", "pajero", "alphard"];
mobil.sort();
console.log(mobil);

// --------------------------------------------------------------
// ---Menstrukturkan Data dengan Map
// --Membuat Map
const productMap = new Map([
  ["Hollow", 500000],
  ["Beton", 35000],
  ["Siku", 50000],
]);

console.log(productMap);

// --Menyimpan nilai di map
// Buat Map baru
const map = new Map();
// Tambah data ke dalam Map, key 'name' bernilai 'aras'
map.set("name", "aras"); //yang di bolehkan, string, number dll
// Cetak isi Map ke console
console.log(map.has("name")); // Map(1) { 'name' => 'aras' }
// --Ambil value berdasarkan key/cara akses map nya
console.log(map.get("name")); // 'aras'
// Cek jumlah item dalam Map
console.log(map.size); // 1

// --Menghapus nilai di map
const peta = new Map();
peta.set("name", "aras");
peta.set("last name", "opraza");
peta.delete("last name");
console.log(peta);
console.log(peta.get("name"), peta.get("last name")); // Map(1) { 'name' => 'aras' }

// --------------------------------------------------------------
// ---Menstrukturkan Data dengan Set
// --Membuat Set
const mySet = new Set([1, 2, 3]);
console.log(mySet);
// --Menyimpan nilai set
const set = new Set();
set.add(1);
set.add("Apple");
set.add(2);
set.add("Melon");

console.log(set);
// --Mengakses Bilai di Set
const setan = new Set();
setan.add(1);
setan.add(2);

for (const number of setan) {
  console.log(number); // Output: 1, 2
}

const seti = new Set();
seti.add(1);
seti.add(2);
// --hapus nilai set
seti.delete(1);
seti.forEach((number) => console.log(number)); // Output: 1, 2

// --------------------------------------------------------------
// ---Spread Operator
// --Object

// Objek pertama
const obj1 = { name: "Alfa" };
// Objek kedua
const obj2 = { lastName: "Indonesia", address: "Jl. Batik Kumeli No 50" };
// Gabungkan obj1 dan obj2 ke dalam objek baru menggunakan spread operator
const newObj = { ...obj1, ...obj2 };
// Cetak hasil objek gabungan
console.log(newObj);

// --Array
let array1, array2, newarray;

array1 = ["Tangerang"];
array2 = ["Indonesia", "JL. Halim Perdana Kusuma"];
newarray = [...array1, ...array2];
console.log(newarray);

// --------------------------------------------------------------
// ---Rest Operator
/* devinisi = Rest operator memungkinkan function untuk menerima argument dalam bentuk array. Rest operator yang digunakan pada parameter fungsi sering disebut sebagai Rest Parameter.
 Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...) sebelum parameter terakhir.  */
function myFunc(number, ...name) {
  console.log("number:", number);
  console.log(name.length);
  console.log("name:", name);
}

myFunc("one", "Rafy", "Fikri", "Dimas");

array1 = ["Nasi Goreng", "Mie Goreng", "Ayam Bakar", "Tahu", "Tempe"];
const [first, second, ...rest] = array1;
console.log(first);
console.log(second);
console.log(rest);
