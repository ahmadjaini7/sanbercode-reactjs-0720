// Soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kataKeduaBesar = kataKedua.charAt(0).toUpperCase() +
    kataKedua.slice(1)
console.log(kataPertama + " " + kataKeduaBesar + " " + kataKetiga + " " + kataKeempat.toUpperCase());

// Soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat));

//  Soal 3

var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

// Soal 4

var nilai = 75;
if (nilai >= 80) {
    console.log("Indeksnya A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("Indeksnya B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("Indeksnya C");
} else if (nilai >= 50 && nilai < 60) {
    console.log("Indeksnya D");
} else {
    console.log("Indeksnya E")
}

// Soal 5

var tanggal = 18;
var bulan = 7;
var tahun = 1997;

var tgl = tanggal.toString();
var thn = tahun.toString();

switch (bulan) {
    case 1:
        console.log(tgl + " Januari " + thn);
        break;
    case 2:
        console.log(tgl + " Februari " + thn);
        break;
    case 3:
        console.log(tgl + " Maret " + thn);
        break;
    case 4:
        console.log(tgl + " April " + thn);
        break;
    case 5:
        console.log(tgl + " Mei " + thn);
        break;
    case 6:
        console.log(tgl + " Juni " + thn);
        break;
    case 7:
        console.log(tgl + " Juli " + thn);
        break;
    case 8:
        console.log(tgl + " Agustus " + thn);
        break;
    case 9:
        console.log(tgl + " September " + thn);
        break;
    case 10:
        console.log(tgl + " Oktober " + thn);
        break;
    case 11:
        console.log(tgl + " November " + thn);
        break;
    case 12:
        console.log(tgl + " Desember " + thn);
        break;
    default:
        console.log("Tidak ditemukan");
        break;
}