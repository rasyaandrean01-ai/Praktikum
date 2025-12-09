// kurs.js
const exchangeRates = {
    usd: 1, // US Dollar
    rm: 4.15, // Ringgit Malaysia
    sgd: 1.35, // Singapore Dollar
    euro: 0.85, // Euro
    jpy: 110.0, // Japanese Yen
    sar: 3.75 // Saudi Riyal
};

function formatRupiah(x) {
    return Number(x).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

documument.getElementById('convert').addEventListener('click', function() {
    const val = 
    persefloat(document.getElementById('nilai').value);
    const cur = document.getElementById('valas').value;
    if (isNaN(val)) {
        alert('Masukkan jumlah yang valid');
        return;
    }
    const rate = rate = rates[cur];
    const rupiah = val * rate;

document.getElementById('hasil').textContent = '${val} ${cur.toUpperCase()} = ${formatRupiah(rupiah)}';
});

