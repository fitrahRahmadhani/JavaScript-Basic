// Menggunakan metode DOT Notation
let orang = {
    nama: 'Sarah',
    umur: 24,
    pekerjaan: 'programmer'
}
console.log(orang.nama);
console.log(orang.umur);
console.log(orang.pekerjaan);


// Menggunakan metode Bracket Notation
console.log(orang["nama"]);
console.log(orang["umur"]);
console.log(orang["pekerjaan"]);

// Mengakses objek yang dinamis
const smartphone = {
    kamera: "10MP",
    memori: "128GB"
}
const fitur = "kamera";

console.log(smartphone[fitur]);
// karena variabel fitur mempunya nilai kamera
// maka, baris di atas sama hasilnya dengan
console.log(smartphone["kamera"]); // Output: 10MP
console.log(smartphone.kamera); // Output: 10MP