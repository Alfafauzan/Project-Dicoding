/*Berikut adalah objektif pembelajaran yang akan dicapai pada modul ini.

Mendefinisikan istilah "Flow Controls" dan peran penting dalam pemrograman.
Mengidentifikasi jenis-jenis flow controls yang umum di pemrograman.
Menjelaskan kasus yang tepat untuk menggunakan switch alih-alih if.
Menjelaskan pentingnya penanganan error dan exception.
Menggunakan if, else if, dan switch untuk melakukan kondisional di JavaScript.
Menggunakan for dan while untuk melakukan perulangan di JavaScript.
Menggunakan try, catch, dan finally untuk menangani exception.

Secara umum, bahasa pemrograman (khususnya JavaScript) memiliki flow control yang terdiri dari: conditional, looping,
dan error handling. Kita akan bahas satu per satu mulai dari conditional hingga error handling secara tuntas di materi
selanjutnya. Staylearning, ya!
*/

/* ---Flow Control -> Flow control adalah aturan urutan eksekusi kode dalam program. Komputer akan membaca dan
menjalankan baris per baris dari atas ke bawah, kecuali jika ada kondisi tertentu yang mengubah alurnya.

Jenis Flow Control:
Sekuensial (berurutan) – Kode dijalankan dari atas ke bawah.

Conditional (percabangan) – Kode berjalan berdasarkan kondisi (contoh: if, else).

Looping (perulangan) – Kode dijalankan berulang kali (contoh: for, while).

Error Handling – Menangani kesalahan saat program berjalan (contoh: try...catch).

Contoh Nyata:
Saat kamu menggunakan aplikasi pesan makanan:

Jika belum punya akun, kamu pilih daftar → program jalankan kode untuk mendaftar.

Jika sudah punya akun, kamu pilih masuk → program jalankan kode login.

✅ Ini disebut conditional flow.

*/

/* ---Conditional Flow -> Conditional flow adalah alur program bercabang berdasarkan kondisi tertentu. Jadi, tidak semua
baris kode dijalankan, hanya kode yang memenuhi syarat/kondisi saja yang akan dieksekusi.

Analogi Sehari-hari:
Bayangkan kamu sedang lapar di mal. Kamu bisa:

Makan di restoran mahal

Makan di kaki lima

Pulang dan makan di rumah

Pilihanmu bergantung pada kondisi, misalnya: apakah kamu sudah gajian atau akhir bulan?

Sama seperti itu, program akan mengecek kondisi, lalu memilih jalur kode yang sesuai.
*/

// ---If Statement (Conditional Flow)
// if (expression)
// statement

const gajian = true;
console.log("Mau beli mall ahhh!!");
if (gajian) {
  //-> ini expression
  console.log("Nah bagus nih mall nya.."); //-> ini statement
}
console.log("Ahh ga jadi mall nya jelek");

// menggunakan else if dan else
const nilai = 75;
if (nilai >= 90) {
  console.log("Anda berbakat");
} else if (nilai >= 80) {
  console.log("Tingkatkan lagi bakat mu");
} else {
  console.log("Dasar Bocah");
}

// Ternary Opeerator
// Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
// Ekspresi yang dieksekusi jika kondisinya benar.
// Ekspresi yang dieksekusi jika kondisi salah.
// let result = condition ? value1 : value2;
const price = 100000; // Harga barang
const isMember = true; // Status apakah pengguna adalah member
const discount = isMember ? 0.1 : 0; // Jika member, diskon 10% (0.1), jika bukan member diskon 0
console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

// ---Switch Case
// switch (expression) {
// statement
// }

// ini switch
// Mengambil hari saat ini sebagai angka dari 0 (Minggu) hingga 6 (Sabtu)
const day = new Date().getDay();
// Misalnya hari ini adalah Selasa, maka nilai day = 2

// Menggunakan switch untuk mencocokkan angka hari dengan nama harinya
switch (day) {
  case 0: // Jika day = 0 (Minggu)
    console.log("Minggu"); // Cetak "Minggu"
    break; // Hentikan switch setelah mencetak
  case 1: // Jika day = 1 (Senin)
    console.log("Senin");
    break;
  case 2: // Jika day = 2 (Selasa)
    console.log("Selasa");
    break;
  case 3: // Jika day = 3 (Rabu)
    console.log("Rabu");
    break;
  case 4: // Jika day = 4 (Kamis)
    console.log("Kamis");
    break;
  case 5: // Jika day = 5 (Jumat)
    console.log("Jumat");
    break;
  case 6: // Jika day = 6 (Sabtu)
    console.log("Sabtu");
    break;
  default: // Jika nilai day bukan 0–6 (kasus tidak umum)
    console.log("Hari tidak valid");
}
// break berguna untuk berhentikan program

// ---Looping

// jika tidak menggunakan looping
const foods = ["Nasi Goreng", "Pasta", "Sate"];
console.log("\n");
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
console.log("\n");
// -- for loop (For)
// for (variabel awal; test kondisi; increment) {
// do something
// }

// Penjelasan bagian for:
// let i = 0       -> Inisialisasi: i dimulai dari 0
// i < 5           -> Kondisi: selama i kurang dari 5, blok di dalam for akan dijalankan
// i++             -> Increment: setelah 1 kali perulangan, i akan bertambah 1
for (let i = 0; i < 5; i++) {
  //->variable awal (let i = 0), test kondisi (i < 5), increment (i++)
  console.log(`Angka ke-${i} adalah ${i}`);
  //-> apapun yang ingin di lakukan pada body for
}

console.log("\n");

// -- for in (For)
// Membuat objek dengan tiga properti
const person = {
  name: "Fulan", // properti (key) 'name' dengan nilai (value) 'Fulan'
  origin: "Bandung", // properti (key) 'origin' dengan nilai (value) 'Bandung'
  birthYear: 2024, // properti (key) 'birthYear' dengan nilai (value) 2024
};

// Melakukan perulangan pada setiap properti di dalam objek person
for (const property in person) {
  // Menampilkan nama properti dan nilainya
  // property -> nama kunci (seperti 'name', 'origin', dll)
  // person[property] -> nilainya (seperti 'Fulan', 'Bandung', dll)
  console.log(`${property} bernilai ${person[property]}`);
}

// -- for of (For)
console.log("\n");
// Membuat array berisi nama-nama makanan
const names = ["Bebek", "Ayam", "Telor", "Tempe"];

// Melakukan perulangan pada setiap elemen dalam array names
for (const item of names) {
  // item akan berisi satu per satu nilai dari array: 'Bebek', lalu 'Ayam', lalu 'Telor', lalu 'Tempe'
  console.log(item); // Menampilkan item ke console
}

// -- While(For)
// while (condition) statement;
console.log("\n");

// Inisialisasi variabel i dengan nilai awal 0
let i = 0;
// Perulangan while akan terus berjalan selama kondisi (i < 5) bernilai true
while (i < 5) {
  // Menampilkan teks ke console dengan nilai i saat ini
  console.log(`Angka ke-${i} adalah ${i}.`);
  // Increment nilai i sebanyak 1 setiap perulangan
  i++;
}

// -- While(For)
// do {
//   Do something
// } while (condition);
console.log("\n");
let a = 0;
do {
  // Blok ini akan dijalankan terlebih dahulu **minimal 1 kali**
  console.log(`Angka ke-${a} adalah ${a}.`);
  a++; // Naikkan nilai i setiap kali loop dijalankan
} while (a < 5); // Ulangi selama i kurang dari 5

// ---Control Statement
// --Break
for (let i = 0; i < 10; i++) {
  // Inisialisasi variabel i = 0
  // Selama i < 10, perulangan akan terus berjalan
  // Setelah setiap iterasi, i akan ditambah 1 (i++)
  if (i === 5) {
    // Jika nilai i sama dengan 5,
    // maka perintah break akan dijalankan
    break; // Keluar dari perulangan secara paksa
  }
  console.log(i); // Menampilkan nilai i ke konsol
}
console.log("\n");

// --Continue
for (let i = 0; i < 10; i++) {
  // Inisialisasi i = 0, loop berjalan selama i < 10, i akan bertambah 1 setiap iterasi

  if (i === 5) {
    // Jika i bernilai 5, maka:
    continue; // Lewatkan iterasi ini (tidak menjalankan console.log), lanjut ke iterasi berikutnya
  }

  console.log(i); // Menampilkan nilai i ke konsol, kecuali jika i === 5
}

// ---Error Handling
// --Throwing Error - throw <objek error>
// const error = new Error("Terjadi error");
// console.error(error);

// const pric = 100;
// const paid = 80;

// if (paid < pric) {
//   throw new Error("Pembayaran kurang");
// }

// --Catching Error
// -Try-Catch - try {code} catch(err) {Error handling}
// tidak ada error
try {
  console.log("Memulai program");
  throw new Error("Anda di hentikan"); //->di beri error
  console.log("Mengakhiri program");
} catch (err) {
  console.log("Karena tidak ada error, blok ini akan diabaikan");
}

// -finally
try {
  // Blok ini mencoba menjalankan kode
  console.log("Ini try block"); // ✅ Ini akan dijalankan karena tidak ada error
} catch (err) {
  // Blok ini hanya akan dijalankan jika terjadi error di dalam try
  console.log("Ini catch block");
} finally {
  // Blok ini akan SELALU dijalankan, entah ada error atau tidak
  console.log("Ini finally block");
}

try {
  // Blok ini akan mencoba menjalankan kode di dalamnya
  console.log("Ini try block");
  // Simulasi error dilempar secara manual
  throw new Error("Error: Program berhenti");
  // Baris di bawah ini tidak akan dijalankan karena error sudah dilempar
} catch (err) {
  // Blok ini menangkap error dari try
  console.log("Ini catch block");
  // Di sinilah kamu bisa menangani error atau menampilkan pesan error
} finally {
  // Blok ini akan selalu dijalankan, apapun yang terjadi (error atau tidak)
  console.log("Ini finally block");
}

// ------Hasil akhir
function checkGrades(grades) {
  // grade.length jika grade = [8,9,10,11] jumlah ada 4, maka i < 4
  for (let i = 0; i < grades.length; i++) {
    // dari atas jika length nya 2 maka nilai yang di ambil 10
    // maka hasil grades[i] adalah 10, lalu di cek apakah dia angka, jika bukan maka jalankan error
    if (typeof grades[i] !== "number") {
      throw new Error("Invalid input. Please provide an array of numbers.");
    }

    const grade = grades[i];
    let predicate;

    if (grade >= 90) {
      predicate = "A";
    } else if (grade >= 80) {
      predicate = "B";
    } else if (grade >= 70) {
      predicate = "C";
    } else if (grade >= 60) {
      predicate = "D";
    } else {
      predicate = "E";
    }

    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
  }
}

try {
  const studentGrades = [95, 85, 65, 80, "A"]; //-> error akan berjalan karena niai terakhir adalah huruf
  checkGrades(studentGrades);
} catch (e) {
  console.error(e);
}
