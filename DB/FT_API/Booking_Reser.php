<?php
include 'config_file.php';
$message ='';

$conn =new mysqli($host_name,$host_user,$host_password,$database_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$GTour = $obj['name'];
$TTour = $obj['name'];
$Lunch = $obj['name'];
$Dinner = $obj['name'];
$Date = $obj['name'];



$sql = "INSERT INTO booking(CID, GTour, TTour, Lunch, Dinner, Date) VALUES ('','$GTour','$TTour','$Lunch','$Dinner','$Date'])"; 

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


