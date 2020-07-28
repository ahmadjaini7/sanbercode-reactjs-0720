// Soal 1
var objectDaftarPeserta = {
    nama: "Asep",
    "jenis kelamin": "Laki-laki",
    hoby: "Baca Buku",
    "tahun lahir": 1992
}

console.log(objectDaftarPeserta.nama);
console.log(objectDaftarPeserta["jenis kelamin"]);
console.log(objectDaftarPeserta.hoby);
console.log(objectDaftarPeserta["tahun lahir"]);

// Soal 2
var buah = [{
        nama: "Strawberry",
        warna: "Merah",
        "ada bijinya": "tidak",
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        "ada bijinya": "ada",
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        "ada bijinya": "ada",
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        "ada bijinya": "tidak",
        harga: 5000
    }
]

console.log(buah[0]);

// Soal 3
var dataFilm = [];

function tambahData(Annabele) {
    return dataFilm.push(Annabele);
}

var Annabele = {
    nama: "Annabele",
    durasi: "120 Menit",
    genre: "Horror",
    tahun: "2019"
}

var filmHorror = tambahData(Annabele)
console.log(dataFilm);

// Soal 4
class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}

var sheep = new Animal("Shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// Release 1
class Ape extends Animal {
    constructor(name, legs, yell) {
        super(name);
        this.legs = 2;
        this._yell = yell;
    }

    get yell() {
        return this._yell;
    }

    set yell(x) {
        this._yell = x;
    }
}

class Frog extends Animal {
    constructor(name, jump) {
        super(name);
        this._jump = jump;
    }

    get jump() {
        return this._jump;
    }

    set jump(x) {
        this._jump = x;
    }
}

var sungokong = new Ape("Kera sakti");
sungokong.yell = "Auooo";
console.log(sungokong);

var kodok = new Frog("buduk")
kodok.jump = "hop hop";
console.log(kodok);
// Soal 5
class Clock {
    constructor({
        template
    }) {
        var timer;

        function render() {
            var date = new Date();

            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        this.stop = function () {
            clearInterval(timer);
        };

        this.start = function () {
            render();
            timer = setInterval(render, 1000);
        };

    }
}

var clock = new Clock({
    template: 'h:m:s'
});
clock.start();