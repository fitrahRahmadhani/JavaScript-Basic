console.log("========== ========== ==========");

console.log("Mendeklarasikan Fungsi");
penambahan = function() {
    console.log(1+2)
}
penambahan();

console.log("Deklarasi Fungsi dalam Variabel");
var penjumlahan = function() {
    console.log(1 + 2);
}
penjumlahan();


function fungsiTambah(parameter1, parameter2){
    return parameter1 + parameter2;
}
console.log(fungsiTambah(10,2));

// FUNGSI YANG BERDIRI SENDIRI
function namaFungsi(){
    // Kode yang akan dijalankan
}

// FUNGSI YANG DISIMPAN DI DALAM VARIABEL

let namaVariabelFungsi = function(){
    // Kode yang akan dijalankan
}

// Contoh fungsi yang berdiri sendiri
function sapa(){
    return "Selamat Pagi Fitrah:)"
};

console.log(sapa());

let berkenalan = function(){
    return "Hallo, nama saya Sarah";
};

console.log(berkenalan());

function operasiPerkalian(angka1, angka2){
    return angka1 * angka2;
}
console.log(operasiPerkalian(2,6));
