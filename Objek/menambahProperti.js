// Cara mendmbahkan properti baru ke dalam suatu objek mirip dengan cara mendeklarasikannya

// Menggunakan metode DOT Notation
let orang = {
    nama: 'sarah',
    umur: 24,
    pekerjaan: 'programmer'
};

orang.kebangsaan = 'Warga Negara Indonesia';
console.log(orang);

// Menggunakan metode Brackert Notation
orang['hobi'] = 'memasak';
console.log(orang);