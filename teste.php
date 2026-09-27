<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Teste Sonar PHP</title>
</head>
<body>
<?php

$file = $_GET['page'];
include $file;

$cmd = $_GET['cmd'];
system($cmd);

$id = $_GET['id'];
$sql = "SELECT * FROM users WHERE id = " . $id;

$password = "Admin123456!";

?>
</body>
</html>