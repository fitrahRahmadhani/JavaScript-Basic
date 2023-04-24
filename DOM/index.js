let umur = document.getElementById("umur").value;
console.log(umur);

let semuaTagH1 = document.getElementsByTagName("h1");

console.log(semuaTagH1);
console.log(semuaTagH1[0]);
console.log(semuaTagH1[1]);

let semuaClass = document.getElementsByClassName("title");
console.log(semuaClass);
console.log(semuaClass[0]);
console.log(semuaClass[1]);

let h1ClassHeader = document.querySelectorAll('h1.header');
console.log(h1ClassHeader);
console.log(h1ClassHeader[0]);

let idHeader2 = document.querySelectorAll('#header2');
console.log(idHeader2);
console.log(idHeader2[0]);

let demo = document.getElementById('demo');
demo.onclick = showMessage;

function showMessage(){
    alert('Hello,World');
}

function ambilH1DanTampilkanDiParagraf(){
    let tangkap = document.getElementById('bahan').innerText;
    document.getElementsByTagName('p')[2].innerText = tangkap;
}

let ubah = document.getElementById('ubahKonten');
ubah.innerHTML = "Halo, Brodi";
console.log(ubah.innerHTML);