// Soal 1
let phi = 3.14;
let r = 10;
const luasLingkaran = (phi, r) => {
    let luas = phi * r * r;
    return luas;
}


const kelilingLingkaran = (phi, r) => {
    r = 5;
    let keliling = 2 * phi * r;
    return keliling;
}

console.log(luasLingkaran(phi, r));
console.log(kelilingLingkaran(phi, r));

// Soal 2
let kalimat = "";
kalimat = (par1, par2, par3, par4, par5) => {
    const gabungKalimat = `${par1} ${par2} ${par3} ${par4} ${par5}`;
    return gabungKalimat;
}

console.log(kalimat("Saya", "adalah", "Seorang", "fronted", "developer"));

// Soal 3
class Book {
    constructor(name, totalPage, price) {
        this.name = name;
        this.totalPage = totalPage;
        this.price = price;
    }

    buku() {
        return `Judul buku adalah  ${this.name}. Total Halaman = ${this.totalPage}. Harga = ${this.price} `;
    }
}

class Komik extends Book {
    constructor(name, totalPage, price, isColorFul) {
        super(name, totalPage, price);
        this.isColorFul = isColorFul;
    }

    buku() {
        return `Judul buku adalah  ${this.name}. Total Halaman = ${this.totalPage}. Harga = ${this.price} Warna = ${this.isColorFul}`;
    }
}

sejarah = new Book("Sejarah Masuksnya Islam", 400, 15000);
patriotisme = new Book("Perjuangan islam dalam sejarah NKRI", 250, 120000)
aladin = new Komik("Aladin lampu ajaib", 200, 45000, true);
console.log(sejarah.buku());
console.log(patriotisme.buku());
console.log(aladin.buku());