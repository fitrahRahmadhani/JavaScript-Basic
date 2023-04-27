/*
Template literal adalah cara untuk menanamkan ekspresi JavaScript ke dalam sebuah string. Template literal dibungkung dengan sepasang tanda ' (backtick), dan ekspresi JavaScriptnya dibungkus dengan tanda ${}
*/ 
let nama = 'sarah';
let umur = 24;

let kalimat = `Namanya ${nama}, umurnya ${umur} tahun`;
console.log(kalimat);

// Bisa juga dengan kombinasi operasi matematika
kalimat = `Umur ${nama} tahun depan adalah ${umur +1}`;
console.log(kalimat);

let kalimat2 = `Tahun depan ${nama} ${umur + 1 >= 17 ? 'bisa' : 'tidak bisa'} mendapatkan sim karena sudah berumur ${umur +1} tahun`;
console.log(kalimat2);

// Bisa juga dengan menggunakan fungsi
function namaSaya(){
    return 'Fitrah';
}
let kalimatPerkenalan = `Nama saya adalah ${namaSaya()}`;
console.log(kalimatPerkenalan);