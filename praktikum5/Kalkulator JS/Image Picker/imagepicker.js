const sel = document.getElementById('imageSelect');
const preview = document.getElementById('previewArea');

sel.addEventListener('change', function() {
  const val = sel.value;
  preview.innerHTML = '';
  if (!val) {
    preview.textContent = 'Tidak ada gambar dipilih.';
    return;
  }
  const img = document.createElement('img');
  img.src = val;
  img.alt = val;
  img.onerror = () => {
    preview.textContent = 'Gagal memuat gambar. Pastikan file ada: ' + val;
  };
  preview.appendChild(img);
  alert('Ini gambar ' + val);
});