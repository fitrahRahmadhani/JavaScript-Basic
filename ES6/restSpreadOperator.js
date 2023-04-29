/*
REST PARAMETER adalah parameter yang mewakili nilai dari semua (atau sisa) argument yang diberikan kepada suatu fungsi.*/

// Hanya boleh ada 1 Rest Paramater
const foo = (...params) => {
    console.log(params);
};
foo('A','B','C');

// Rest Parameter sebagai parameter terakhir (wajib)
const benda = (benda1, benda2, ...bendaJamak) => {
    console.log("Argument pertama ", benda1);
    console.log("Argument kedua ", benda2);
    console.log("Argument ketiga ", bendaJamak);
}
benda("Pisau", "Blender", "Semangka", "Nanas", "Alpukat");

/*
SPREAD OPERATOR bersifat memisahkan sebuah array menjadi element-elementnya
*/ 

// Spread Operator dengan Array
let arrayBilangan = [1,2,3,4,5];
console.log("Jika tanpa spread operator");
console.log(arrayBilangan);
console.log("Jika dengan spread operator");
console.log(...arrayBilangan);

// Spread operator untuk menduplikasi sebuah array
let arrayDuplikat = [...arrayBilangan];
console.log(arrayDuplikat);

// Spread operator untuk menggabungkan array
arrayBilangan = [...arrayBilangan, ...arrayDuplikat];
console.log(arrayBilangan);

// Spread Operator Objek
// menambahkan beberapa properti sekaligus
let orang = {
    nama: "Fitrah",
    umur: 20
};
orang = {...orang, pekerjaan: "Mahasiswa", pendidikanTerakhir: "SMA"};
console.log(orang);

// Menggabungkan objek
const objek1 = {a: 1, b: 2};
const objek2 = {c: 3, d: 4};
const gabungkanObjek = {...objek1, ...objek2};
console.log(gabungkanObjek);
