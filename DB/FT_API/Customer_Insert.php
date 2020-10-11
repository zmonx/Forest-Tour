<?php
include 'config_file.php';
$message ='';

$conn =new mysqli($host_name,$host_user,$host_password,$database_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = ['name'];
$tel = ['tel'];
$sex = ['sex'];


$sql = "INSERT INTO customer(CID, CName, CTelephone, CSex) VALUES ('','$name','$tel','$sex')"; 
$result = $conn ->query($sql);

if ($result->num_rows>0) {
	while ($row[]=$result->fetch_assoc()) {
		$item = $row;
		$json = json_encode($item);
	}
	}else{
		echo "No result";
}
echo $json;
$conn->close();


