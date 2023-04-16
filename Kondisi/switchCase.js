/*
switch (pernyataan) {
    case kondisi1:
    // keputusan yang dijalankan ketika kondisi1 tercapai
    break;
    case kondisi2:
    // keputusan yang dijalankan ketika kondisi2 tercapai
    break;
    case kondisi3:
    // keputusan yang dijalankan ketika kondisi3 tercapai
    break;
    ...
    default:
    // keputusan yang dijalankan ketika semua kondisi tidak tercapai
}
*/ 

let hariIni = 'Sabtu';

switch (hariIni) {
    case 'Senin':
    case 'Selasa':
        console.log('Biru Putih');
        break;
    case 'Rabu':
        console.log('Krem');
        break;
    case 'Kamis':
        console.log('Batik');
        break;
    case 'Jumat':
        console.log('Pramuka');
    default:
        console.log('Libur maseee')
        break;
}