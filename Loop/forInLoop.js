/*
for...in digunakan untuk mengulangi setiap properti dari sebuah objek

for(propertiObjek in namaObjek){
    kode yang akan dijalankan
}
*/ 

const buku = {
    judul: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997
};

for(x in buku){
    console.log(x, ':', buku[x]);
}