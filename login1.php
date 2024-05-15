<?php


$servername = "localhost"; $username = "root";
$password = "";
$dbname ="login";


// Create connection


$conn = mysqli_connect($servername, $username, $password, $dbname);


// Check connection


if (!$conn) die("Connection failed: " . mysqli_connect_error());


else


echo " Connected sucessfully <br>" ;


$sql = "INSERT INTO login (lemail,lpassword)


VALUES ('$_POST[lemail]','$_POST[lpassword]')";


if (mysqli_query($conn, $sql)) {


echo "New record created successfully";


} else {
echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


mysqli_close($conn);


?>
