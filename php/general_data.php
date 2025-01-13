<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$id = $_GET["id"];

$jsonFile = __DIR__ . '/DATA.json';

if (file_exists($jsonFile)) {

    $jsonContent = file_get_contents($jsonFile);

    if ($id != 0) {

        $offset = ($id - 1) * 50;
        $last = $id * 50;

        if ($last > 3693) { $last = 3693; }

        $jsonObject = json_decode($jsonContent);
        $first50Items = array_slice($jsonObject, $offset, $last);

        echo json_encode($first50Items);

    } else { echo $jsonContent; }

} else {
    http_response_code(404);
    echo json_encode(['error' => 'File JSON non trovato']);
}
?>