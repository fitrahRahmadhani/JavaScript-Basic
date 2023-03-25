console.log("Operator == (Loose Equalitiy)");
let bilangan = 10;
console.log(bilangan == 10);
console.log(bilangan == 8);
console.log(bilangan == "10");

console.log("Operator === (Strict Equality)");
console.log(bilangan === 10);
console.log(bilangan === "10");

console.log("Operator !=");
console.log(bilangan != 8);
console.log(bilangan != "8");
console.log(bilangan != 10);
console.log(bilangan != "10");

console.log("Operator !==");
console.log(bilangan !== 8);
console.log(bilangan !== "8");
console.log(bilangan !== 10);
console.log(bilangan !== "10");

console.log("Operator >");
console.log(bilangan > 10);
console.log(bilangan > 11);
console.log(bilangan > 8);

console.log("Operator <");
console.log(bilangan < 10);
console.log(bilangan < 8);
console.log(bilangan < 11);

console.log("Operator >=");
console.log(bilangan >= 10);
console.log(bilangan >= 8);
console.log(bilangan >= 11);


console.log("Operator <=");
console.log(bilangan <= 10);
console.log(bilangan <= 11);
console.log(bilangan <= 8);

console.log("Operator Ternary");
/*
Variabel = (kondisi true)? nilai1 : nilai2;
Artinya apabila kondisi true, maka variabel akan diberi nilai 1
Apabila kondisi false, maka variabel akan diberi nilai2
*/

let makanan = "daging";
let jenisHewan = makanan === "daging" ? "karnivora" : "herbivora";
console.log(jenisHewan);