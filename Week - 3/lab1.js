// soal pertama
let suhu = 101;

let air = suhu <= 0 && suhu >= -100 ? "Beku" 
        : suhu >= 1 && suhu <= 100 ? "Cair" 
        : suhu >= 101 && suhu <= 500 ? "Uap" 
        : "Tidak terdefinisi";
console.log(air)


// soal kedua
let kendaraan = "1400";

let BBM = kendaraan < 1500 ? "PERTAMAX" 
        : kendaraan >= 1500 ? "PERTAMAX TURBO" 
        : kendaraan == "plat kuning" || kendaraan == "motor" ? "BBM SUBSIDI" 
        : "Tidak terdefinisi";
console.log(BBM)