// validation.js
const form = document.getElementById('bookingForm');
const errNama = document.getElementById('errNama');
const errEmail = document.getElementById('errEmail');
const errJam = document.getElementById('errJam');
const errTujuan = document.getElementById('errTujuan');
const errJumlah = document.getElementById('errJumlah');
const result = document.getElementById('result');

function clearErrors() {
  [errNama, errEmail, errJam, errTujuan, errJumlah].forEach(el => el.textContent = '');
  ['nama','email','jam','tujuan','jumlah'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('invalid');
  });
  result.style.display = 'none';
  result.innerHTML = '';
}

function validateEmail(email) {
  // regex sederhana untuk email
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateJam(jam) {
  // format HH.MM, jam 00-23, menit 00-59
  const m = /^([01]\d|2[0-3])\.[0-5]\d$/.exec(jam);
  return !!m;
}

document.getElementById('submitBtn').addEventListener('click', function(e){
  clearErrors();
  let valid = true;

  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const jam = document.getElementById('jam').value.trim();
  const tujuan = document.getElementById('tujuan').value.trim();
  const jumlahVal = document.getElementById('jumlah').value;

  // Nama
  if (!nama) {
    errNama.textContent = 'Nama wajib diisi';
    document.getElementById('nama').classList.add('invalid');
    valid = false;
  } else if (nama.length > 30) {
    errNama.textContent = 'Nama maksimal 30 karakter';
    document.getElementById('nama').classList.add('invalid');
    valid = false;
  }

  // Email
  if (!email) {
    errEmail.textContent = 'Email wajib diisi';
    document.getElementById('email').classList.add('invalid');
    valid = false;
  } else if (!validateEmail(email)) {
    errEmail.textContent = 'Format email tidak valid';
    document.getElementById('email').classList.add('invalid');
    valid = false;
  }

  // Jam
  if (!jam) {
    errJam.textContent = 'Jam keberangkatan wajib diisi';
    document.getElementById('jam').classList.add('invalid');
    valid = false;
  } else if (!validateJam(jam)) {
    errJam.textContent = 'Format jam harus HH.MM antara 00.00 - 23.59';
    document.getElementById('jam').classList.add('invalid');
    valid = false;
  }

  // Tujuan
  if (!tujuan) {
    errTujuan.textContent = 'Tujuan wajib diisi';
    document.getElementById('tujuan').classList.add('invalid');
    valid = false;
  }

  // Jumlah tiket
  const jumlah = parseInt(jumlahVal, 10);
  if (isNaN(jumlahVal) || jumlahVal === '') {
    errJumlah.textContent = 'Jumlah tiket wajib diisi';
    document.getElementById('jumlah').classList.add('invalid');
    valid = false;
  } else if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 10) {
    errJumlah.textContent = 'Jumlah tiket harus bilangan bulat antara 1 - 10';
    document.getElementById('jumlah').classList.add('invalid');
    valid = false;
  }

  if (!valid) {
    // fokus ke field pertama yg error
    const firstErr = document.querySelector('.invalid');
    if (firstErr) firstErr.focus();
    return;
  }

  // Jika valid, tampilkan ringkasan data
  result.style.display = 'block';
  result.innerHTML = `
    <h3>Data Pesanan</h3>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Jam Keberangkatan:</strong> ${jam}</p>
    <p><strong>Tujuan:</strong> ${tujuan}</p>
    <p><strong>Jumlah Tiket:</strong> ${jumlah}</p>
  `;
});