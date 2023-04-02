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

// LINGKUP GLOBAL VS LINGKUP LOKAL
const olahraga = 'basketball';
function namaAtlet(){
    let atlet = 'Leonel Messi';
    const noMessi = 10;
    console.log(olahraga); //output basketball
    if(olahraga === 'basketball'){
        atlet = 'Kobe Bryant';
        const noKobe = 24;
        console.log(olahraga);
    }
    return atlet;
}
console.log(namaAtlet()); // Output: Kobe Bryant
console.log(olahraga); // Output:basketball 
