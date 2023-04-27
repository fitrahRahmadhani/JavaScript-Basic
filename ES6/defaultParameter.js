/* 
Fungsinya memberikan nilai awal pada sebuah parameter

Sytaxnya adalah sebagai berikut:
function namaFungsi(parameter1 = defaultParameter1){
    kode yang akan dijalankan di dalam fungsi
}

*/

const panggang = (bahan = 'makanannya', durasi = 'yang diperlukan', suhu = 'yang cocok') => `Panggang ${bahan} selama ${durasi} pada suhu ${suhu}`;

console.log(panggang('Risoles', '5 menit'));
