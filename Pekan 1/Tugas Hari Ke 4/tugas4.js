// Soal 1
console.log("LOOPING PERTAMA");

var angka = 2;
while (angka <= 20) {
    console.log(angka + " - I Love Coding");
    angka += 2;
}

console.log("LOOPING KEDUA");

var angka = 20;
while (angka >= 2) {
    console.log(angka + " - I Will become a developer");
    angka -= 2;
}

// Soal 2
for (var angka = 1; angka <= 20; angka++) {
    if (angka % 2 == 1) {
        if (angka % 3 == 0) {
            console.log(angka + " - I Love Coding");
        } else {
            console.log(angka + " - Santai");
        }
    } else {
        console.log(angka + " - Berkualitas");
    }
}

// Soal 3
var x = "";
for (let a = 1; a <= 7; a++) {
    for (let b = 1; b <= a; b++) {
        x += "#";
    }
    x += "\n";
}
console.log(x);

// Soal 4
var kalimat = "saya sangat senang belajar javascript";

var array = kalimat.split(" ");
console.log(array);

// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

daftarBuah.sort();
for (let index = 0; index < daftarBuah.length; index++) {
    console.log(daftarBuah[index]);

}