// Sebuah objek tidak hanya berisi atribut, tetapi juga dapat berisi fungsi

let kalkulator = {
    namaOperasi: 'penjumlahan',
    jumlah: function (angka1, angka2) {
        return angka1 + angka2;
    }
}
console.log(kalkulator.jumlah(10, 2));

const kucing = {
    // isi properti dan nilai objek kucing,
    suara: function () { return "Meong"; }
};

const anjing = {
    // isi properti dan nilai objek anjing
    suara: function () { return "Gukguk"; }
};

//panggil method suara dalam masing-masing objek
console.log(kucing.suara()); //Output: Meong
console.log(anjing.suara()); // Output: Gukguk