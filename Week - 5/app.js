class Pendaftar {
    constructor(nama, umur, uangSangu) {
        this.nama = nama;
        this.umur = umur;
        this.uangSangu = uangSangu;
    }
}

class Registrasi {
    constructor() {
        this.pendaftarList = [];
    }

    tambahPendaftar(nama, umur, uangSangu) {
        const pendaftar = new Pendaftar(nama, umur, uangSangu);
        this.pendaftarList.push(pendaftar);
    }

    hitungRataRata() {
        let totalUmur = 0;
        let totalUangSangu = 0;

        this.pendaftarList.forEach(pendaftar => {
            totalUmur += pendaftar.umur;
            totalUangSangu += pendaftar.uangSangu;
        });

        const rataRataUmur = totalUmur / this.pendaftarList.length;
        const rataRataUangSangu = totalUangSangu / this.pendaftarList.length;

        return { rataRataUmur, rataRataUangSangu };
    }
}

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

const registrasiForm = document.getElementById('registrationForm');
const pendaftarTable = document.getElementById('pendaftarTable');
const registrasi = new Registrasi();

registrasiForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSangu = parseInt(document.getElementById('uangSangu').value);

    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert('Data tidak valid. Pastikan nama minimal 10 karakter, umur minimal 25 tahun, dan uang sangu antara 100 ribu hingga 1 juta.');
        return;
    }

    registrasi.tambahPendaftar(nama, umur, uangSangu);
    updatePendaftarTable();
    registrasiForm.reset();
});

function updatePendaftarTable() {
    while (pendaftarTable.rows.length > 0) {
        pendaftarTable.deleteRow(0);
    }

    const header = pendaftarTable.createTHead();
    const row = header.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = '<b>Nama</b>';
    cell2.innerHTML = '<b>Umur</b>';
    cell3.innerHTML = '<b>Uang Sangu</b>';

    registrasi.pendaftarList.forEach((pendaftar, index) => {
        const row = pendaftarTable.insertRow(index + 1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.innerHTML = pendaftar.nama;
        cell2.innerHTML = pendaftar.umur;
        cell3.innerHTML = pendaftar.uangSangu;
    });

    const rataRata = registrasi.hitungRataRata();
    const infoRow = pendaftarTable.insertRow(pendaftarTable.rows.length);
    const infoCell = infoRow.insertCell(0);
    infoCell.colSpan = 3;
    infoCell.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRata.rataRataUangSangu.toFixed(2)} dengan rata-rata umur ${rataRata.rataRataUmur.toFixed(2)}`;
}

document.getElementById('Registrasi').style.display = 'block';