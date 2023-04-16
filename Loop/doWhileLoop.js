/*
do {
    kode yang akan dijalankan ketika kondisi benar (true)
} while (kondisi);
*/ 

let i = 0;
do{
    console.log(++i);
}while(i < 10);

let angka = [];
let y = 5;

// Ubah kode loop di bawah ini

do{
    angka.push(y);
    y++;
}while (y < 11);

for(let z of angka){
    console.log(z);
}