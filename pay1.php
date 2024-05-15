<?php
$servername = "localhost";  $username = "root";	$password = "";	$dbname ="payment";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn)        die("Connection failed: " . mysqli_connect_error());
else
           echo " Connected sucessfully <br>" ;
		$sql = "INSERT INTO payment (cardholder , cardNumber,expirationDate, cvv)
		VALUES ('$_POST[cardholder]','$_POST[cardNumber]','$_POST[expirationDate]','$_POST[cvv]')";
		if (mysqli_query($conn, $sql)) {
			echo "New record created successfully";
		} else {	echo "Error: " . $sql . "<br>" . mysqli_error($conn);	}
	
mysqli_close($conn);
?>

