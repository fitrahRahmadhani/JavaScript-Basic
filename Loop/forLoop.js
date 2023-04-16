/*
syntax yang digunakan ketika menggunakan for loop adalah sebagai berikut

for(pernyataan1; pernyataan2; pernyataan3){
    kode yang akan dijalankan ketika pernyataan2 benar
}

pernyataan1 -> digunakan untuk menentukan nilai awal berjalannya loop
pernyataan2 -> digunakan unutk mendefinisikan kondisi berjalannya sebiah loop. Apabila nilai kondisinya false, maka loop berakhir
pernyataan3 -> digunakan untuk menambah atau mengurangi nilai awal pada pernyataan1 setiap kali loop dijalankan

*/

for(let i = 0; i <= 10; i++){
    console.log(i);
}

let angka = [1, 46, 75, 12, 89, 54, 101];
let genap = [];

// Tulis kode kalian di bawah ini
for(let i = 0; i < angka.length; i++){
    let temp = 0;
    if(angka[i] %2 == 0){
        temp = angka[i];
        genap.push(temp);
    }
}

for(let i = 0; i < angka.length; i++){
    console.log(angka[i]);
}
for(let j = 0; j < genap.length; j++){
    console.log(genap[j]);
}