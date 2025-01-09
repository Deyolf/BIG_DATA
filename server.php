<?php
// Abilita CORS
header('Access-Control-Allow-Origin: *'); // Permette richieste da qualsiasi origine
header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); // Specifica i metodi consentiti
header('Access-Control-Allow-Headers: Content-Type'); // Permette gli header specificati
header('Content-Type: application/json');

$id = $_GET["id"];

$offset=($id-1)*50;
$last = $id * 50;

// Percorso del file JSON
$jsonFile = __DIR__ . '/DATA.json'; // Assicurati che "data.json" sia nella stessa cartella

// Controlla se il file esiste
if (file_exists($jsonFile)) {
    // Legge il contenuto del file JSON
    $jsonContent = file_get_contents($jsonFile);

    $jsonObject = json_decode($jsonContent);

    $first50Items = array_slice($jsonObject, $offset, $last);

    // Restituisce il contenuto del file
    echo json_encode($first50Items);
} else {
    // Restituisce un errore se il file non esiste
    http_response_code(404);
    echo json_encode(['error' => 'File JSON non trovato']);
}
?>
