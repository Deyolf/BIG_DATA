<?php
//CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

//params
//page related
$nmr_pag = $_GET["nmr_pag"];
$pag_dmn = $_GET["pag_dmn"];
//data related
//gender
$gnr_flt = $_GET["gnr_flt"];
//year
$yre_flt = $_GET["yre_flt"];
//citizenship
$ctt_flt = $_GET["ctt_flt"];
//quartier
$qrt_flt = $_GET["qrt_flt"];
//age groups
$_0_flt = $_GET["_0_flt"];
$_01_04_flt = $_GET["_01_04_flt"];
$_05_09_flt = $_GET["_05_09_flt"];
$_10_14_flt = $_GET["_10_14_flt"];
$_15_19_flt = $_GET["_15_19_flt"];
$_20_24_flt = $_GET["_20_24_flt"];
$_25_29_flt = $_GET["_25_29_flt"];
$_30_34_flt = $_GET["_30_34_flt"];
$_35_39_flt = $_GET["_35_39_flt"];
$_40_44_flt = $_GET["_40_44_flt"];
$_45_49_flt = $_GET["_45_49_flt"];
$_50_54_flt = $_GET["_50_54_flt"];
$_55_59_flt = $_GET["_55_59_flt"];
$_60_64_flt = $_GET["_60_64_flt"];
$_65_69_flt = $_GET["_65_69_flt"];
$_70_74_flt = $_GET["_70_74_flt"];
$_75_79_flt = $_GET["_75_79_flt"];
$_80_84_flt = $_GET["_80_84_flt"];
$_85_89_flt = $_GET["_85_89_flt"];
$_90_94_flt = $_GET["_90_94_flt"];
$_95_99_flt = $_GET["_95_99_flt"];
$_100_flt = $_GET["_100_flt"];

//db filepath definition
$json_file = __DIR__ . '../db/db.json';

//filtrage start
if (!file_exists($json_file)) {
    http_response_code(404);
    die(json_encode(['error' => 'File JSON non trovato']));
}

//filtrage end

function end_out($data = "")
{
    exit($data);
}

//var definition
$data_output = "";
$dataset_last = 3693;
$json_content = file_get_contents($json_file);


//generating output
if ($nmr_pag && $pag_dmn) {

    $offset = ($nmr_pag - 1) * $pag_dmn;
    $last = $nmr_pag * $pag_dmn;

    if ($last > $dataset_last) {
        $last = $dataset_last;
    }

    $json_object = json_decode($json_content);
    $items_block = array_slice($json_object, $offset, $last);

    $data_output = json_encode($items_block);

} else {
    $data_output = $json_content;
}

end_out($data_output);
?>