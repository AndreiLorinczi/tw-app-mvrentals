<?php
$servername='localhost';
$username='pma';
$password='';
$dbname = "tw";
$conn=mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
   die('Could not Connect My Sql:' .mysql_error());
}
?>