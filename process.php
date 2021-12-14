<?php
include_once 'database.php';
if(isset($_POST['save']))
{	 
	 $email = $_POST['email'];
	 $username = $_POST['username'];
	 $password = $_POST['password'];
	 $cpassword = $_POST['cpassword'];

$ssql=mysqli_query($conn,"SELECT * FROM users where email='$email'");
if(mysqli_num_rows($ssql)>0)
{
    echo "Email Id Already Exists"; 
	exit;
}
else{
	if($password==$cpassword){
	 $sql = "INSERT INTO users (username,email,password)
	 VALUES ('$username','$email','$password')";
	 if (mysqli_query($conn, $sql)) {
		echo "New record created successfully !";
	 } else {
		echo "Error: " . $sql . "
" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
else{echo "Passwords not matching placeholder"; 
	exit;}
}
}
?>