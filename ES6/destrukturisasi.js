// Destrukturisasi array
let buah = ["Mangga", "Jambu", "Pisang", "Anggur"];
let [buah1, buah2, , buah4] = buah; //buah index 3 tidak diambil datanya
console.log(buah1);
console.log(buah2);
console.log(buah4);

// menukar nilai dari dua variabel dengan cepat
let a = 10;
let b = 11;

[a,b] = [b,a];
console.log(a);
console.log(b);

// Destrukturisasi Objek
let orang = {
    nama: "Joko",
    umur: "22",
    sudahMenikah: false
};

let {nama, umur, statusMenikah} = orang;
console.log(nama);
console.log(umur);
console.log(statusMenikah);
// Jika ingin mengubah nama variabel bisa melakukan hal di bawah ini
let {nama: name, umur: age} = orang;
console.log(name);
console.log(age);

// Destrukturisasi Objek Bertingkat
let data = {
    kelas: "12A",
    murid: ["Ani", "Yahya"],
    prestasi: {
        olahraga: "juara 1",
        akademik: "juara 2"
    }

}
let {murid: [,murid2], prestasi: {olahraga}} = data;
console.log(murid2);
console.log(olahraga);
