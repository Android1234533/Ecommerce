<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('173.212.236.58:3306 (MySQL)', 'wp_nr6us', 'Jaimatadi@123','wp_nr6us');

// get the post records
$name = $_POST['name'];
$lastName = $_POST['lastName'];
$emailId = $_POST['emailId'];
$contactNum = $_POST['contactNum'];

// database insert SQL code
$sql = "INSERT INTO `UserDetails` (`id`, `Name`, `LastName`, `Email`, `Contactinfo`) VALUES ('0', '$name', '$lastName', '$emailId', '$contactNum')";

// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Contact Records Inserted";
}
?>
 
 
