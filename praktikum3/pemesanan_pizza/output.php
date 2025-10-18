<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You</title>
    <link rel="stylesheet" href="assets/css/output.css">
</head>
<body>
    <h1>THANK YOU</h1>
    <p1>Thank you for ordering from Black Goose Bistro. We have received the following information about your order:</p1>

    <h3>Your Information</h3>
    <p>
        <strong>Name:</strong> <?php echo $_POST["nama"]; ?><br>
        <strong>Telephone Number:</strong> <?php echo $_POST["phone"]; ?><br>
        <strong>Email Address:</strong> <?php echo $_POST["email"]; ?>
    </p>

    <p><strong>Delivery Instructions:</strong> <?php echo $_POST["address"]; ?></p>

    <h3>Your Pizza</h3>
    <p>
        <strong>Crust:</strong> <?php echo $_POST["Crust"] ?? 'classic-white' ?><br>
        <strong>Toppings:</strong>
        <?php
        if (!empty($_POST["toppings"])) {echo implode(",", $_POST["toppings"]);} else {echo "No toppings selected";}
        ?><br>
        <strong>Number</strong> <?php echo $_POST["quantity"]; ?>
    </p>

    <p styl="font-size:small; color:gray;">
        This site is for educational purpsoses only. No pizzas will be delivered.
    </p>
</body>
</html>