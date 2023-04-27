/*
Kelebihan menggunakan arroe function adalah lebih singkat penulisannya dan mudah dibaca.

contoh
const namaFungsi = (parameter1, parameter n) => {
    kdoe yang ingin dijalanlankan dalam fungsi
}
*/ 

const operasiPenjumlahan = (bilangan1, bilangan2) => {
    return console.log(bilangan1 + bilangan2);
}
operasiPenjumlahan(10,2);

// Jika tidak memiliki parameter
const namaJenisAnjing = () => {
    const anjing = ['Pug', 'Bulldog', 'Poodle'];
    return anjing[Math.floor(Math.random()*(anjing.length))];
}
console.log(namaJenisAnjing());

/* Implicit Return Value
Yang dimaksud implicit return value adalah suatu kondisi di mana sebuah fungsu langsung mengembalikan nilai tanpa ada deklarasi varibael atau operasi lainnya di dalamnya

Misal kita memiliki fungsi sebagai berikut:
*/
function greeting(nama){
    return `Hi ${nama}`;
}
console.log(greeting('Fitrah'));

// Kode di atad dapat disingkat dengan menggunakan arrow function sebagai berikut

const greeting2 = (nama) => `Hi ${nama}`;
console.log(greeting2('Rahmadhani'));

// Jika tidak memiliki parameter
// const namaFungsi = () => nilai return;