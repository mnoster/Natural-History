<?php
session_start();
include('mysql_connect.php');
//var_dump(mysqli_connect_error());
//var_dump($conn->connect_error);
if ($conn->connect_error) {

    die("Connection failed ");
}
$username = mysqli_real_escape_string($conn,$_POST['username']);
$password = mysqli_real_escape_string($conn,$_POST['password']);

$encrypted_pass = sha1($password);

$output = [];

$query = "SELECT * FROM `users` WHERE `username` = '$username' AND `password`='$encrypted_pass'";

mysqli_query($conn,$query);
$password=[];

$rows_affected = mysqli_affected_rows($conn);
$password = "";

if($rows_affected > 0){
    $_SESSION['username'] = $username;
    $output['message'] = 'success';
    $output['success'] = true;
    $output = json_encode($output);
    print($output);
}else{
    $output['message'] = 'INCORRECT USER INFO';
    $output['success'] = false;
    $output = json_encode($output);
    print($output);
}
?>
