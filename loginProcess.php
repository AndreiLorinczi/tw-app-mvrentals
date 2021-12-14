<?php
include_once 'database.php';
if(isset($_POST['save']))
{	 
	 $email = $_POST['email'];
	 $password = $_POST['password'];
$ssql=mysqli_query($conn,"SELECT * FROM users where email ='$email' and password ='$password'");
if(mysqli_num_rows($ssql)>0)
{
    header("location: home.html");
	exit;
}
else {
    echo " nu ai cont ... placeholder";
}
}
?>