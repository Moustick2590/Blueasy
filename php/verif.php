<?php
$nom = $_POST['fullname'];
$email = $_POST['email'];
$texte = $_POST['texte'];

$data = array();
if(empty($nom)) {
    $data[] = '"nom"';
}
if(empty($email)) {
    $data[] = '"email"';
}
if(empty($texte)) {
    $data[] = '"texte"';
}
echo $data;
?>