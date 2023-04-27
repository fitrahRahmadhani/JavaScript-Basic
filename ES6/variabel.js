/*
Terdapat 3 jenis variabel pada JavaScript yaitu:
1. var (sebaiknya ditinggalkan)
2. let
3. const (bersifat konstan)
*/ 

var nama = 'budi';
var nama = 'andi';

console.log(nama); //output andi, hal ini menimbulkan kerancuan

let bilangan = 3;
console.log(bilangan); //output 3
bilangan = 12;
console.log(bilangan); //output 12

// Penggunaan let cocok untuk variabel yang nilainya memang bisa berubah-ubah

const phi = 3.14;
console.log(phi); //output 3.14
phi = 3.1;
console.log(phi) //output error
// nilai pada variabel tipe const tidak boleh dilakukan perubahan atau nilai baru

/*
Kesalahpahaman umum adalah const membuat sebuah variabel dengan nilai konstan. Ini pada umumnya benar, namun ada pengecualian. Untuk variabel dengan tipe objek atau array, variabel tersebut tidak bisa diganti nilainya, tetapi properti atau element-nya bisa.
*/ 

const warna = ['merah', 'kuning', 'hijau'];
warna.push('nila', 'ungu');
console.log(warna);

