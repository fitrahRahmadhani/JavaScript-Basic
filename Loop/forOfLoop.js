/*
for...of digunakan untuk mengulangi setiap element dari objek yang bisa diulangi, contohnya adalah array dan string.

for(let x in namaVariabel){
    kode yang akan dijalankan
}
*/ 

const buku = ["Game of Trones: A Song of Ice and Fire", "Harry Potter and The Philosopher's Stone", "Lord of The Rings: The Fellowship of The Ring"];

for(let x of buku){
    console.log(x);
}

let angka = [1, 46, 75, 12, 89, 54, 101];
let ganjil = [];

// Tulis kode kalian di bawah ini
for(let y of angka){
    console.log(y);
    let temp = 0;
    if(y %2 != 0){
        temp = y;
        ganjil.push(temp);
    }
}
for(let i = 0; i < angka.length; i++){
    console.log(angka[i]);
}
for(let j = 0; j < ganjil.length; j++){
    console.log(ganjil[j]);
}