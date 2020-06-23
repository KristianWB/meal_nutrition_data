<?php

$host = 'paxanon.dk';
$port = '27001';
$user = 'pax';
$password = 'xap';

$ssh = ssh2_connect($host, $port);
if (false === $ssh) {
    die('connection failed');
}

$auth = @ssh2_auth_password($ssh, $user, $password);
if (false === $auth) {
    die('authentication failed');
}


$dbname = 'phptest';
$dbuser = 'kb';
$dbpass = 'Abcd1234';
$dbhost = 'localhost';
$connect = mysql_connect($dbhost, $dbuser, $dbpass) or die("Unable to connect to '$dbhost'");
mysql_select_db($dbname) or die("Could not open the database '$dbname'");
$result = mysql_query("SELECT id, name FROM employees");
while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
    printf("ID: %s  Name: %s <br>", $row[0], $row[1]);
}
?>
