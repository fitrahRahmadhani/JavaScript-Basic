// Mengubah elemen array menjadi string dengan toString()
let array = [1, 2, 3, 'halo', false, true];
console.log(array.toString());

// Menggabungkan elemen array dengan join()
console.log(array.join()); 
console.log(array.join(' ')); 
console.log(array.join('#')); 
console.log(array.join('...')); 

// Mengeluarkan elemen terakhir sebuah array dengen pop()
console.log('Sebelum dilakukan pop()');
console.log(array);
array.pop();
console.log('Sesudah dilakukan pop');
console.log(array);

// Menambahkan elemen terakhir pada array dengan push()
console.log('Sebelum dilakukan push()');
console.log(array);
array.push('Selamat Pagi Brodi');
console.log('Sesudah dilakukan push');
console.log(array);

// Mengeluarkan elemen pertama sebuah array dengen pop()
console.log('Sebelum dilakukan shift()');
console.log(array);
array.shift();
console.log('Sesudah dilakukan shift');
console.log(array);

// Menambahkan elemen pertama pada array dengan unshift()
console.log('Sebelum dilakukan unshift()');
console.log(array);
array.unshift('Selamat Pagi');
console.log('Sesudah dilakukan unshif()');
console.log(array);

/*
Menambahkan, menghapus. dan mengganti element array dengan splice()

Syntax:
array.splice(index, jumlah, item1, ..., itemX);

indek -> required parameter, yaitu parameter yang menjelaskan posisi di mana elemen harus ditambahkan atau dihapus
jumlah -> optional parameter, yaitu parameter yang menentukan jumlah elemen yang mau di hapus di array (sunnah)
itemx -> optional parameter, elemen baru yang ingin ditambahkan ke dalam array
*/

let buah = ['Pisang', 'Jeruk', 'Apel', 'Mangga'];
buah.splice(2, 0, 'Lemon', 'Kiwi');
console.log(buah);

// Menggabungkan lebih dari saru array menggunakan concat()
let sayur = ['tomat', 'bayam', 'wortel'];
let biji = ['kedelai', 'kacang tanah', 'kacang polong'];

let makanan = buah.concat(sayur, biji);
console.log(makanan);


/*
Mengambil elemen array dengan slice()
Syntax:
array.slice(mulai, akhir)

mulai -> optional parameter, menentukan permulaan index yang akan diambil
akhir -> optional parameter, menentukan batas akhir index elemen yang akan diambil (tanpa diikutsertakan)
*/
let camilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let camilanGurih = camilan.slice(0,3);
let camilanManis = camilan.slice(3);

console.log(camilanGurih);
console.log(camilanManis);

// Mengurutkan array dengan sort()

buah.sort()
console.log(buah);

let bilangan = [30, 1, 2, 3.5, 10, 100];
bilangan.sort();
console.log(bilangan);
// Hasil dari operasi di atas tidak sesuai dengan harapan. JavaScript melakukan sorting berdasarkan nilai pada versi stringnya

let urutDariTerkecil = function(a, b){
    return a - b;
};

let urutDariTerbesar = function(a, b){
    return b - a;
};

console.log(bilangan.sort(urutDariTerkecil));
console.log(bilangan.sort(urutDariTerbesar));

// Memutar urutan array dengan reverse()
console.log('Array buah sebelum dilakukan reverse()');
console.log(buah);
buah.reverse();
console.log(buah);

