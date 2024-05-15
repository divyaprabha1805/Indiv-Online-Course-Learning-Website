<?php


$servername = "localhost"; $username = "root";
$password = "";
$dbname ="contact";


// Create connection


$conn = mysqli_connect($servername, $username, $password, $dbname);


// Check connection


if (!$conn) die("Connection failed: " . mysqli_connect_error());


else


echo " Connected sucessfully <br>" ;
if(isset($_POST['cname'])&&isset($_POST['cemail']) &&isset($_POST['cfeed'])){


$sql = "INSERT INTO contact (cname,cemail,cfeed) VALUES ('$_POST[cname]','$_POST[cemail]','$_POST[cfeed]')";
echo "1";


if (mysqli_query($conn, $sql)) {


echo "New record created successfully";
}


} else {
echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


mysqli_close($conn);


?>
