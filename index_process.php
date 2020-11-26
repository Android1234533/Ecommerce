<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('173.212.236.58:3306 (MySQL)', 'wp_nr6us', 'Jaimatadi@123','wp_nr6us');
$check="SELECT * FROM UserDetails WHERE Email  = '$_POST[emailId]'";
$rs = mysqli_query($con,$check);
$data = mysqli_fetch_array($rs, MYSQLI_NUM);
if($data[0] > 1) {
    echo "Entered Data Is Already Exist !<br/>";
} 

else
{
    $newUser="INSERT INTO UserDetails(Name,LastName,Email,Contactinfo) values('$_POST[name]','$_POST[lastName]','$_POST[emailId]','$_POST[contactNum]')";
    if (mysqli_query($con,$newUser))
    {
        echo "Congratulations! Your Data has been Submitted Successfully.<br/>";
    }
    else
    {
        echo "Error adding user in database<br/>";
    }
}
?>

  
