function cek() {
    let hasil = document.getElementById("jawaban").value;

    if (hasil == "4/10") {
        document.getElementById("hasil").innerHTML = "Yeyy, jawaban kamu benar";
    } else {
        document.getElementById("hasil").innerHTML = "Yah, Kurang tepat nih";
    }
}