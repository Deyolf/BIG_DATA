let yre_flt = ''; // Variabile globale per memorizzare l'anno selezionato
let gnr_flt = ''; // Variabile per memorizzare il valore del filtro del genere
let ctt_flt = '';
let qrt_flt = '';
let _0 = true;
let _01_04 = true;
let _05_09 = true;
let _10_14 = true;
let _15_19 = true;
let _20_24 = true;
let _25_29 = true;
let _30_34 = true;
let _35_39 = true;
let _40_44 = true;
let _45_49 = true;
let _50_54 = true;
let _55_59 = true;
let _60_64 = true;
let _65_69 = true;
let _70_74 = true;
let _75_79 = true;
let _80_84 = true;
let _85_89 = true;
let _90_94 = true;
let _95_99 = true;
let _100 = true;


function resetFiltri() {
  yre_flt = ''; // Variabile globale per memorizzare l'anno selezionato
  gnr_flt = ''; // Variabile per memorizzare il valore del filtro del genere
  ctt_flt = '';
  qrt_flt = '';
  _0 = true;
  _01_04 = true;
  _05_09 = true;
  _10_14 = true;
  _15_19 = true;
  _20_24 = true;
  _25_29 = true;
  _30_34 = true;
  _35_39 = true;
  _40_44 = true;
  _45_49 = true;
  _50_54 = true;
  _55_59 = true;
  _60_64 = true;
  _65_69 = true;
  _70_74 = true;
  _75_79 = true;
  _80_84 = true;
  _85_89 = true;
  _90_94 = true;
  _95_99 = true;
  _100 = true;
  // Ricarica i dati senza il filtro
  load_data(num_pag);

  // Aggiorna il numero di pagina nella UI
  rendernumero.innerHTML = num_pag;
}
//-----------------------DEFAULT FETCH ----------------------- DEFAULT FETCH ----------------------- DEFAULT FETCH ----------------------- DEFAULT FETCH ----------------------- DEFAULT FETCH ---------------------------------------------- ----------------------
function load_data(a) {
  // Ottieni il contenitore della tabella
  const table = document.getElementById("table");
  // Crea l'intestazione della tabella
  table.innerHTML = `
    <div class="table-responsive">
      <table class="table table-bordered table-reduced">
        <thead class="text-center bg-primary text-white fw-bold">
          <tr >
            <th>Anno</th>
            <th>Cittadinanza</th>
            <th>Genere</th>
            <th>Quartiere</th>
            <th>0</th>
            <th>01-04</th>
            <th>05-09</th>
            <th>10-14</th>
            <th>15-19</th>
            <th>20-24</th>
            <th>25-29</th>
            <th>30-34</th>
            <th>35-39</th>
            <th>40-44</th>
            <th>45-49</th>
            <th>50-54</th>
            <th>55-59</th>
            <th>60-64</th>
            <th>65-69</th>
            <th>70-74</th>
            <th>75-79</th>
            <th>80-84</th>
            <th>85-89</th>
            <th>90-94</th>
            <th>95-99</th>
            <th>100+</th>
          </tr>
        </thead>
        <tbody>
  `;
  // Esegui una richiesta fetch per ottenere i dati
  fetch(`https://colombofabio4id.altervista.org/Big_Data/api.php?nmr_pag=${a}&pag_dmn=16${yre_flt}${ctt_flt}${gnr_flt}${qrt_flt}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Converti la risposta in JSON
    })
    .then(data => {
      console.log('Dati ricevuti:', data);

      // Funzione per sostituire i valori undefined con 0
      function safeValue(value) {
        return value === undefined || value === null ? 0 : value;
      }

      // Aggiungi le righe dinamicamente
      data.forEach(ele => {
        let row = `<tr class="text-center" style="background: transparent; border: none;">
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.anno)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.cittadinanza)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.genere)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.quartiere)}</td>`
        if (_0) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._0)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_01_04) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._01_04)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_05_09) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._05_09)}</td>`;
        } else { row += `<td style="bacFkground: transparent; border: none; color: white;">X</td>`; }
        if (_10_14) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._10_14)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_15_19) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._15_19)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_20_24) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._20_24)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_25_29) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._25_29)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_30_34) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._30_34)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_35_39) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._35_39)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_40_44) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._40_44)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_45_49) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._45_49)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_50_54) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._50_54)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_55_59) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._55_59)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_60_64) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._60_64)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_65_69) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._65_69)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_70_74) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._70_74)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_75_79) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._75_79)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_80_84) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._80_84)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_85_89) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._85_89)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_90_94) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._90_94)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_95_99) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._95_99)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        if (_100) {
          row += `<td style="background: transparent; border: none; color: white;">${safeValue(ele._100)}</td>`;
        } else { row += `<td style="background: transparent; border: none; color: white;">X</td>`; }
        row += `</tr>`;
        // Aggiungi la riga al corpo della tabella
        table.querySelector('tbody').insertAdjacentHTML('beforeend', row);
      });
    })
    .catch(error => {
      console.error('Errore nella richiesta:', error);
    });
}

//-----------------------SELEZIONE ANNO ----------------------- SELEZIONE ANNO ----------------------- SELEZIONE ANNO ----------------------- SELEZIONE ANNO ----------------------- SELEZIONE ANNO ---------------------------------------------- -----------------------
function setAnno(selectedAnno) {
  yre_flt = `&yre_flt=${selectedAnno}`;  // Imposta l'anno selezionato
  num_pag = 1;
  load_data(num_pag);
}

//----------------------- GENERE ----------------------- GENERE ----------------------- GENERE ----------------------- GENERE ----------------------- GENERE ---------------------------------------------- ---------------------

function setGenere(gnr) {
  yre_flt = `&gnr_flt=${gnr}`;
  num_pag = 1;
  load_data(num_pag);
}

//----------------------- CITTADINANZA ----------------------- CITTADINANZA ----------------------- CITTADINANZA ----------------------- CITTADINANZA ----------------------- CITTADINANZA ---------------------------------------------- ---------------------
function setCtt(ctt) {
  ctt_flt = `&ctt_flt=${ctt}`;
  num_pag = 1;
  load_data(num_pag);
}

//----------------------- QUARTIERE ----------------------- QUARTIERE ----------------------- QUARTIERE ----------------------- QUARTIERE ----------------------- QUARTIERE ---------------------------------------------- ---------------------

function setQuartiere(qtr) {
  qrt_flt = `&qrt_flt=${qtr}`;
  num_pag = 1;
  load_data(num_pag);
}

//----------------------- RANGE ETA ----------------------- RANGE ETA ----------------------- RANGE ETA ----------------------- RANGE ETA ----------------------- RANGE ETA ---------------------------------------------- ---------------------

function set0() {
  _0 = !_0;
  load_data(num_pag);
}
function set01_04() {
  _01_04 = !_01_04;
  load_data(num_pag);
}
function set05_09() {
  _05_09 = !_05_09;
  load_data(num_pag);
}
function set10_14() {
  _10_14 = !_10_14;
  load_data(num_pag);
}
function set15_19() {
  _15_19 = !_15_19;
  load_data(num_pag);
}
function set20_24() {
  _20_24 = !_20_24;
  load_data(num_pag);
}
function set25_29() {
  _25_29 = !_25_29;
  load_data(num_pag);
}
function set30_34() {
  _30_34 = !_30_34;
  load_data(num_pag);
}
function set35_39() {
  _35_39 = !_35_39;
  load_data(num_pag);
}
function set40_44() {
  _40_44 = !_40_44;
  load_data(num_pag);
}
function set45_49() {
  _45_49 = !_45_49;
  load_data(num_pag);
}
function set50_54() {
  _50_54 = !_50_54;
  load_data(num_pag);
}
function set55_59() {
  _55_59 = !_55_59;
  load_data(num_pag);
}
function set60_64() {
  _60_64 = !_60_64;
  load_data(num_pag);
}
function set65_69() {
  _65_69 = !_65_69;
  load_data(num_pag);
}
function set70_74() {
  _70_74 = !_70_74;
  load_data(num_pag);
}
function set75_79() {
  _75_79 = !_75_79;
  load_data(num_pag);
}
function set80_84() {
  _80_84 = !_80_84;
  load_data(num_pag);
}
function set85_89() {
  _85_89 = !_85_89;
  load_data(num_pag);
}
function set90_94() {
  _90_94 = !_90_94;
  load_data(num_pag);
}
function set95_99() {
  _95_99 = !_95_99;
  load_data(num_pag);
}
function set100() {
  _100 = !_100;
  load_data(num_pag);
}

//----------------------- CAMBIO PAGINA ----------------------- CAMBIO PAGINA ----------------------- CAMBIO PAGINA ----------------------- CAMBIO PAGINA ----------------------- CAMBIO PAGINA ---------------------------------------------- ----------------------
let rendernumero = document.getElementById("numpag")

let num_pag = 1

rendernumero.innerHTML = num_pag

function next_page() {
  num_pag++;
  load_data(num_pag);
  rendernumero.innerHTML = num_pag
}

function previous_page() {
  num_pag--;  // Decrementa il numero di pagina

  if (num_pag == 0) {
    num_pag = 1;  // Imposta il numero di pagina a 1 se è 0
  }
  // Altrimenti carica i dati senza filtro
  load_data(num_pag);
  // Aggiorna il numero di pagina visualizzato
  rendernumero.innerHTML = num_pag;
}

load_data(num_pag);