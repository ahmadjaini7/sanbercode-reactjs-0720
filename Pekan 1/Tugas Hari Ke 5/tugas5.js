// Soal 1
function halo() {
    return "Halo Sanbers!";
}

console.log(halo());

// Soal 2
function kalikan(num1, num2) {
    return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// Soal 3
function introduce(name, age, address, hoby) {
    return `Nama saya ${name}, Umur saya ${age} tahun, alamat saya di jalan ${address}, dan saya punya hobby yaitu ${hobby}`;
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);