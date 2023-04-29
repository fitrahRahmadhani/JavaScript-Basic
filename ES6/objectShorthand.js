// Objek shorthand => menyimpan nilai varibabel di properti objek

// Objek shorthand di variabel
let suaraKucing = "Meongg";
let suaraAnjing = "Gukguk";
let suaraBuaya = "Ada yang marah ngga?";

let suaraHewan = {suaraKucing, suaraAnjing, suaraBuaya};
console.log(suaraHewan);
console.log(suaraHewan.suaraKucing);
console.log(suaraHewan.suaraAnjing);
console.log(suaraHewan.suaraBuaya);

/*
Aturan utama ketika menggunakan cara object shorthand adalah nama variabel dan nama properti di objek yang bersangkutan harus sama.
*/ 

// Objek shorthand di parameter fungsi
let membuatBiodata = (nama, umur, jenisKelamin) => {
    return {nama, umur, jenisKelamin};
};
console.log(membuatBiodata("Alex",20,"pria"));

// Objek shorthand untuk mendeklarasikan method
let operasiMatematika = {
    nama: "Penjumlahan",
    operasi(angka1, angka2){
        let hasil = angka1 + angka2;
        return `${this.nama} dari ${angka1} dengan ${angka2} adalah ${hasil}`;
    }
}
console.log(operasiMatematika.operasi(3,5));

/*
Blok kode di atas jika ditulis tanpa shorthand adalah sebagai berikut 
let operasiMatematika = {
    nama: "Penjumlahan",
    operasi: function(angka1, angka2) {
        let hasil = angka1 + angka2;
        return `${this.nama} dari ${angka1} dan ${angka2} adalah ${hasil}`;
    }
};

console.log(operasiMatematika.operasi(3, 5)); // Output: Penjumlahan dari 3 dan 5 adalah 8
*/ 

