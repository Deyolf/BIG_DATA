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
//year
$yre_flt = $_GET["yre_flt"];
//citizenship
$ctt_flt = $_GET["ctt_flt"];
//gender
$gnr_flt = $_GET["gnr_flt"];
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
$json_file = __DIR__ . '/db/db.json';

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
$json_object = json_decode($json_content);

//echo json_encode($json_object);
//var_dump($json_content);


//generating output
$items_block = $json_object;

if ($yre_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->anno == $yre_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($ctt_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->cittadinanza == $ctt_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($gnr_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->genere == $gnr_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($qrt_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->quartiere == $qrt_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_0_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_0 == $_0_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_01_04_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_01_04 == $_01_04_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_05_09_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_05_09 == $_05_09_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_10_14_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_10_14 == $_10_14_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_15_19_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_15_19 == $_15_19_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_20_24_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_20_24 == $_20_24_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_25_29_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_25_29 == $_25_29_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_30_34_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_30_34 == $_30_34_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_35_39_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_35_39 == $_35_39_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_40_44_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_40_44 == $_40_44_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_45_49_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_45_49 == $_45_49_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_50_54_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_50_54 == $_50_54_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_55_59_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_55_59 == $_55_59_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_60_64_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_60_64 == $_60_64_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_65_69_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_65_69 == $_65_69_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_70_74_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_70_74 == $_70_74_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_75_79_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_75_79 == $_75_79_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_80_84_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_80_84 == $_80_84_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_85_89_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_85_89 == $_85_89_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_90_94_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_90_94 == $_90_94_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_95_99_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_95_99 == $_95_99_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($_100_flt != null) {
    $a = null;
    for ($i = 0; $i < count($items_block); $i++) {
        if ($items_block[$i]->_100_oltre == $_100_flt) {
            $a[] = $items_block[$i];
        }
    }
    $items_block = $a;

    $data_output = json_encode($items_block);

}
if ($nmr_pag != null) {
    if ($pag_dmn == null) {
        $pag_dmn = 50;
    }
    $offset = ($nmr_pag - 1) * $pag_dmn;

    if ($pag_dmn * $nmr_pag > $dataset_last) {
        $pag_dmn = $dataset_last - $pag_dmn * $nmr_pag;
    }

    $items_block = array_slice($items_block, $offset, $pag_dmn);

    $data_output = json_encode($items_block);

} else {
    $data_output = json_encode($items_block);
}

end_out($data_output);
?>