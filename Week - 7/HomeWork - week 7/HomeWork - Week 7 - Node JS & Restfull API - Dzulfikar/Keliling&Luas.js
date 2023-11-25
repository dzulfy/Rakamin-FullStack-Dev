// Soal 1
exports.luasPersegi = function (sisi){
    return sisi * sisi;
};

exports.luasPersegiPanjang = function (panjang, lebar) {
    return panjang * lebar;
};

exports.kelilingPersegi = function(sisi) {
    return 4 * sisi;
};

exports.kelilingPersegiPanjang = function(panjang, lebar){
    return 2 * (panjang + lebar);
};