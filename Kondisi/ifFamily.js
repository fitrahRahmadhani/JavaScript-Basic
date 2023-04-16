/*
if digunakan apabila hanya ada satu kondisi dan 1 keputusan yang dijalankan

if(kondisi){
    masukkan kode yang akan dijalankan bila syarat terpenuhi
}
*/
let kondisi = 'hujan';
if(kondisi === 'hujan'){
    console.log('Hujan masbro, bawa payung ya');
}

/*
if else digunakan apabila ada 1 kondidi dan 2 keputusan yang dijalankan

if(kondisi){
    mesukkan kode yang akan dijalankan bila syarat terpenuhi
}else{
    masukkan kode yang akan dijalankan bila syarat TIDAK terpenuhi
}
*/
kondisi = 'mendung tanpo udan';
if(kondisi === 'hujan'){
    console.log('Hujan masbro, bawa payung ya');
}else{
    console.log('santai dulu ga sih')
}

/*
if...else if...else digunakan apabila ada beberapa kondisi dan beberapa keputusan yang dijalankan
if (kondisi1) {
    masukkan kode yang akan dijalankan di sini apabila kondisi1 tercapai
} else if (kondisi2) {
    masukkan kode yang akan dijalankan di sini apabila kondisi1 tidak tercapai dan kondisi2 tercapai
} else if (kondisi3) {
    masukkan kode yang akan dijalankan di sini apabila kondisi1 dan kondisi2 tidak tercapai, dan kondisi3 tercapai
} ... {
} else {
    masukkan kode yang akan dijalankan di sini apabila semua kondisi di atas TIDAK tercapai
}

*/

let nilaiAndi = 95;
if(nilaiAndi > 80){
    console.log('Mama pasti bangga');
}else if(nilaiAndi >= 60 && nilaiAndi < 80){
    console.log('Mama minta lebih giat belajar');
}else{
    console.log('Mama memegang sapu ditanggannya, mencari keberadaan Andi')
}
