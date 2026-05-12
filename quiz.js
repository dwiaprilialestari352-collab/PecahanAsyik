function cek() {
    let pilihan = document.getElementsByName("jawaban1");
    let hasil1 = "";

    for (let i = 0; i < pilihan.length; i++) {
        if (pilihan[i].checked) {
            hasil1 = pilihan[i].value;
        }
    }

    if (hasil1 == "B") {
        document.getElementById("hasil1").innerHTML = "Yeyy, jawaban kamu benar";
    } else {
        document.getElementById("hasil1").innerHTML = "Yah, kurang tepat nih.. yang pertama kamu samakan penyebut dulu, kita ambil kpk yaitu 4, jadi 1/4 + 2/4 = 3/4";
    }
}
function cek1() {
    let pilihan = document.getElementsByName("jawaban2");
    let hasil2 = "";

    for (let i = 0; i < pilihan.length; i++) {
        if (pilihan[i].checked) {
            hasil2 = pilihan[i].value;
        }
    }

    if (hasil2 == "A") {
        document.getElementById("hasil2").innerHTML = "Yeyy, jawaban kamu benar";
    } else {
        document.getElementById("hasil2").innerHTML = "Yah, kurang tepat nih.. yang pertama kamu samakan penyebut dulu, kita ambil kpk yaitu 6, jadi 5/6 - 2/6 = 3/6, selanjutnya kita sedderhanakan dengan bagi 3, jadi hasil akhirnya 1/2";
    }
}
function cek2() {
    let pilihan = document.getElementsByName("jawaban3");
    let hasil3 = "";

    for (let i = 0; i < pilihan.length; i++) {
        if (pilihan[i].checked) {
            hasil3 = pilihan[i].value;
        }
    }
    if (hasil3 == "B") {
        document.getElementById("hasil3").innerHTML = "Yeyy, jawaban kamu benar";
    } else {
        document.getElementById("hasil3").innerHTML = "Yah, kurang tepat nih.. yang pertama kamu samakan penyebut dulu, kita ambil kpk yaitu 6, jadi 4/6 + 1/6 = 5/6";
    }
}
function cek3() {
    let pilihan = document.getElementsByName("jawaban4");
    let hasil4 = "";

    for (let i = 0; i < pilihan.length; i++) {
        if (pilihan[i].checked) {
            hasil4 = pilihan[i].value;
        }
    }
    if (hasil4 == "A") {
        document.getElementById("hasil4").innerHTML = "Yeyy, jawaban kamu benar";
    } else {
        document.getElementById("hasil4").innerHTML = "Yah, kurang tepat nih.. yang pertama kamu ubah pembagian jadi perkalian kebalikan, yang awalnya 2/3 jadi 3/2. tinggal di kalikan pembilang dengan pembilang begitu juga sama penyebutnya. sehingga hasil akhirnya 12/10.";
    }
}
function cek4() {
    let pilihan = document.getElementsByName("jawaban5");
    let hasil5 = "";

    for (let i = 0; i < pilihan.length; i++) {
        if (pilihan[i].checked) {
            hasil5 = pilihan[i].value;
        }
    }
    if (hasil5 == "C") {
        document.getElementById("hasil5").innerHTML = "Yeyy, jawaban kamu benar";
    } else {
        document.getElementById("hasil5").innerHTML = "Yah, kurang tepat nih.. kamu bisa kalikan pembilang dengan pembilang begitujuga dengan penyebut, jadi hasil akhirnya 6/20 jika di sederhanakan jadi 2/10.";
    }
}
function cek5() {
    let pilihan = document.getElementsByName("jawaban6");
    let hasil5 = "";

    for (let i = 0; i < pilihan.length; i++) {
        if (pilihan[i].checked) {
            hasil6 = pilihan[i].value;
        }
    }
    if (hasil6 == "A") {
        document.getElementById("hasil6").innerHTML = "Yeyy, jawaban kamu benar";
    } else {
        document.getElementById("hasil6").innerHTML = "Yah, kurang tepat nih.. karena sirup dibagi ke 3 gelas, maka operasi yang digunakan adalah pembagian. 3/4 ÷ 3/1 lalu pecahan dibagi dengan cara mengalikan pecahan pertama dengan kebalikan pecahan kedua: 3/4 × 1/3 = 3/12 Selanjutnya sederhanakan dengan dibagi 3, jadi hasil akhirnya adalah: 1/4";
    }
}