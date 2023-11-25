// Soal 1
const rumus = require('./Keliling&Luas');

const kelilingPersegi = rumus.kelilingPersegi(5);
const kelilingPersegiPanjang = rumus.kelilingPersegiPanjang(8,5);
const luasPersegi = rumus.luasPersegi(5);
const luasPersegiPanjang = rumus.luasPersegiPanjang(10,7);

console.log("Keliling Persegi =", kelilingPersegi);
console.log("Keliling Persegi Panjang =", kelilingPersegiPanjang);
console.log("Luas Persegi =", luasPersegi);
console.log("Luas Persegi Panjang =" ,luasPersegiPanjang);