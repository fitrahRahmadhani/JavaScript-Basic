console.log("JavaScript Hoisting");
console.log('---------- ---------- ----------');

// Global Variabel
let manusia = {
    nama: "Sarah",
    pekerjaan: "Programmer"
}

function sapaSiManusia() {

    console.log(`Hai ${manusia.nama}, apakah benar anda seorang ${manusia.pekerjaan}?`)
}

// Local Variabel
function sapaHuman() {
    let human = {
        nama: "Budi",
        pekerjaan: "Pedagang"
    }
    console.log(`Hai ${human.nama}, apakah benar anda seorang ${human.pekerjaan}?`)
}
sapaSiManusia();
sapaHuman();



