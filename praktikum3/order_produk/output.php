<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="ass">
  <title>Thank You</title>
  <link rel="stylesheet" href="assets/css/output.css">
</head>
<body>
  <h1>TERIMA KASIH!</h1>
  <p>Terima kasih telah memesan barang. Berikut informasi pemesanan Anda:</p>

  <h3>Detail Pemesanan</h3>
  <p>
    <strong>Nama Barang:</strong> <?php echo $_POST["title"]; ?><br>
    <strong>Description:</strong> <?php echo $_POST["description"]; ?><br>
    <strong>Tahun:</strong> <?php echo $_POST["year"]; ?><br>
    <strong>Model:</strong> <?php echo $_POST["model"]; ?><br>
    <strong>Condition:</strong> <?php echo $_POST["condition"]; ?><br>
    <strong>Account Holder:</strong> <?php echo $_POST["account"]; ?><br>
    <strong>Bank:</strong> <?php echo $_POST["bank"]; ?><br>
    <strong>Send to Mobile Phone:</strong> <?php echo $_POST["mobile"]; ?><br>
    <strong>Send to Email:</strong> <?php echo $_POST["email"]; ?><br>
  </p>

  <p style="font-size: small; color: gray;">
    Halaman ini hanya simulasi untuk pembelajaran. Tidak ada transaksi yang terjadi.
  </p>
</body>
</html>