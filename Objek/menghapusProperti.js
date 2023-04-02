let orang = {
    nama: 'sarah',
    umur: 24,
    pekerjaan: 'programmer'
};

// proses penghapusan dengan menggunakan sintaks delete
delete orang.umur;
delete orang['pekerjaan'];

console.log(orang);