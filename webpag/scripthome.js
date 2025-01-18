let FLT_ANNO=false;
let anno = null; // Variabile globale per memorizzare l'anno selezionato
let FLT_GENERE = false;  // Variabile per tracciare lo stato del filtro del genere
let genere_filtro = '';  // Variabile per memorizzare il valore del filtro del genere
let FLT_CTT = false;  
let genere_ctt = '';  
let FLT_QTR = false;  
let qtr_filtro = '';  

function AddFilters() {
  // Trova il menu dei filtri
  const filterMenu = document.getElementById("filterMenu");

  // Cambia la visibilità del menu (toggle tra visibile e nascosto)
  if (filterMenu.style.display === "none") {
    filterMenu.style.display = "block";
  } else {
    filterMenu.style.display = "none";
  }
}



function resetFiltri() {
  FLT_ANNO = false;    // Disabilita il filtro anno
  num_pag = 1; 
  FLT_GENERE = false;  // Disattiva il filtro del genere
  genere_filtro = '';   // Reset del filtro genere
  FLT_CTT = false;  
  ctt_filtro = ''; 
  FLT_QTR = false;  
  qtr_filtro = '';   
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
  fetch(`https://colombofabio4id.altervista.org/Big_Data/api.php?nmr_pag=${a}&pag_dmn=16`)
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
        const row = `
          <tr class="text-center" style="background: transparent; border: none;">
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.anno)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.cittadinanza)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.genere)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.quartiere)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._0)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._01_04)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._05_09)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._10_14)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._15_19)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._20_24)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._25_29)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._30_34)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._35_39)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._40_44)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._45_49)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._50_54)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._55_59)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._60_64)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._65_69)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._70_74)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._75_79)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._80_84)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._85_89)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._90_94)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._95_99)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._100_oltre)}</td>
          </tr>
        `;
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
  anno = selectedAnno;  // Imposta l'anno selezionato
  FLT_ANNO = true;       // Imposta il filtro per l'anno
  ricerca_anno(anno, num_pag); // Esegui la ricerca per l'anno selezionato e la pagina corrente
}

function ricerca_anno(anno, pag = num_pag) {
  FLT_ANNO= true;
  // Ottieni il contenitore della tabella
  const table = document.getElementById("table");

  // Crea l'intestazione della tabella
  table.innerHTML = `
    <div class="table-responsive">
      <table class="table table-bordered table-reduced">
        <thead class="text-center bg-primary text-white fw-bold">
          <tr>
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
  fetch(`https://colombofabio4id.altervista.org/Big_Data/api.php?nmr_pag=${pag}&pag_dmn=16&yre_flt=${anno}`)
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
        const row = `
          <tr class="text-center" style="background: transparent; border: none;">
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.anno)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.cittadinanza)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.genere)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.quartiere)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._0)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._01_04)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._05_09)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._10_14)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._15_19)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._20_24)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._25_29)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._30_34)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._35_39)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._40_44)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._45_49)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._50_54)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._55_59)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._60_64)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._65_69)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._70_74)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._75_79)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._80_84)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._85_89)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._90_94)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._95_99)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._100_oltre)}</td>
          </tr>
        `;
        // Aggiungi la riga al corpo della tabella
        table.querySelector('tbody').insertAdjacentHTML('beforeend', row);
      });
    })
    .catch(error => {
      console.error('Errore nella richiesta:', error);
    });
}

//----------------------- GENERE ----------------------- GENERE ----------------------- GENERE ----------------------- GENERE ----------------------- GENERE ---------------------------------------------- ---------------------

function setGenere(gnr) {
  FLT_GENERE = true;   // Attiva il filtro per il genere
  genere_filtro = gnr; // Imposta il valore del genere filtrato
  num_pag = 1;         // Resetta la pagina alla prima pagina per la ricerca filtrata
  ricerca_genere(genere_filtro, num_pag); // Ricarica i dati con il filtro
  rendernumero.innerHTML = num_pag;  // Mostra il numero di pagina aggiornato
}

function ricerca_genere(gnr, pag = num_pag) {
  // Ottieni il contenitore della tabella
  const table = document.getElementById("table");

  // Crea l'intestazione della tabella
  table.innerHTML = `
    <div class="table-responsive">
      <table class="table table-bordered table-reduced">
        <thead class="text-center bg-primary text-white fw-bold">
          <tr>
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

  // Esegui la richiesta fetch con il filtro del genere
  fetch(`https://colombofabio4id.altervista.org/Big_Data/api.php?nmr_pag=${pag}&pag_dmn=16&gnr_flt=${gnr}`)
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

      // Aggiungi le righe dinamicamente alla tabella
      data.forEach(ele => {
        const row = `
          <tr class="text-center" style="background: transparent; border: none;">
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.anno)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.cittadinanza)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.genere)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.quartiere)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._0)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._01_04)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._05_09)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._10_14)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._15_19)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._20_24)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._25_29)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._30_34)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._35_39)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._40_44)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._45_49)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._50_54)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._55_59)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._60_64)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._65_69)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._70_74)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._75_79)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._80_84)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._85_89)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._90_94)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._95_99)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._100_oltre)}</td>
          </tr>
        `;
        table.querySelector('tbody').insertAdjacentHTML('beforeend', row);
      });
    })
    .catch(error => {
      console.error('Errore nella richiesta:', error);
    });
}

//----------------------- CITTADINANZA ----------------------- CITTADINANZA ----------------------- CITTADINANZA ----------------------- CITTADINANZA ----------------------- CITTADINANZA ---------------------------------------------- ---------------------
function setCtt(ctt) {
  FLT_CTT = true;   // Attiva il filtro per il genere
  ctt_filtro = ctt; // Imposta il valore del genere filtrato
  num_pag = 1;         // Resetta la pagina alla prima pagina per la ricerca filtrata
  ricerca_ctt(ctt_filtro, num_pag); // Ricarica i dati con il filtro
  rendernumero.innerHTML = num_pag;  // Mostra il numero di pagina aggiornato
}

function ricerca_ctt(ctt, pag = num_pag) {
  // Ottieni il contenitore della tabella
  const table = document.getElementById("table");

  // Crea l'intestazione della tabella
  table.innerHTML = `
    <div class="table-responsive">
      <table class="table table-bordered table-reduced">
        <thead class="text-center bg-primary text-white fw-bold">
          <tr>
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

  // Esegui la richiesta fetch con il filtro del genere
  fetch(`https://colombofabio4id.altervista.org/Big_Data/api.php?nmr_pag=${pag}&pag_dmn=16&ctt_flt=${ctt}`)
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

      // Aggiungi le righe dinamicamente alla tabella
      data.forEach(ele => {
        const row = `
          <tr class="text-center" style="background: transparent; border: none;">
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.anno)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.cittadinanza)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.genere)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.quartiere)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._0)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._01_04)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._05_09)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._10_14)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._15_19)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._20_24)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._25_29)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._30_34)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._35_39)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._40_44)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._45_49)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._50_54)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._55_59)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._60_64)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._65_69)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._70_74)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._75_79)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._80_84)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._85_89)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._90_94)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._95_99)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._100_oltre)}</td>
          </tr>
        `;
        table.querySelector('tbody').insertAdjacentHTML('beforeend', row);
      });
    })
    .catch(error => {
      console.error('Errore nella richiesta:', error);
    });
}

//----------------------- QUARTIERE ----------------------- QUARTIERE ----------------------- QUARTIERE ----------------------- QUARTIERE ----------------------- QUARTIERE ---------------------------------------------- ---------------------

function setQuartiere(qtr) {
  FLT_QTR = true;   // Attiva il filtro per il genere
  qtr_filtro = qtr; // Imposta il valore del genere filtrato
  num_pag = 1;         // Resetta la pagina alla prima pagina per la ricerca filtrata
  ricerca_qtr(qtr_filtro, num_pag); // Ricarica i dati con il filtro
  rendernumero.innerHTML = num_pag;  // Mostra il numero di pagina aggiornato
}

function ricerca_qtr(qtr, pag = num_pag) {
  // Ottieni il contenitore della tabella
  const table = document.getElementById("table");

  // Crea l'intestazione della tabella
  table.innerHTML = `
    <div class="table-responsive">
      <table class="table table-bordered table-reduced">
        <thead class="text-center bg-primary text-white fw-bold">
          <tr>
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

  // Esegui la richiesta fetch con il filtro del genere
  fetch(`https://colombofabio4id.altervista.org/Big_Data/api.php?nmr_pag=${pag}&pag_dmn=16&qrt_flt=${qtr}`)
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

      // Aggiungi le righe dinamicamente alla tabella
      data.forEach(ele => {
        const row = `
          <tr class="text-center" style="background: transparent; border: none;">
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.anno)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.cittadinanza)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.genere)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele.quartiere)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._0)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._01_04)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._05_09)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._10_14)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._15_19)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._20_24)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._25_29)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._30_34)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._35_39)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._40_44)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._45_49)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._50_54)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._55_59)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._60_64)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._65_69)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._70_74)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._75_79)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._80_84)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._85_89)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._90_94)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._95_99)}</td>
            <td style="background: transparent; border: none; color: white;">${safeValue(ele._100_oltre)}</td>
          </tr>
        `;
        table.querySelector('tbody').insertAdjacentHTML('beforeend', row);
      });
    })
    .catch(error => {
      console.error('Errore nella richiesta:', error);
    });
}

//----------------------- CAMBIO PAGINA ----------------------- CAMBIO PAGINA ----------------------- CAMBIO PAGINA ----------------------- CAMBIO PAGINA ----------------------- CAMBIO PAGINA ---------------------------------------------- ----------------------
let rendernumero = document.getElementById("numpag")

let num_pag=1

rendernumero.innerHTML = num_pag

function next_page(){
  num_pag++;
    
  if(FLT_ANNO==true){
    ricerca_anno(anno, num_pag);
  }
  else if(FLT_GENERE==true){
    ricerca_genere(genere_filtro, num_pag);
  }else if(FLT_CTT==true){
    ricerca_ctt(ctt_filtro, num_pag);
  }else if(FLT_QTR==true){
    ricerca_qtr(qtr_filtro, num_pag);
  } else{
    load_data(num_pag);
  }
  rendernumero.innerHTML = num_pag
}

function previous_page() {
  num_pag--;  // Decrementa il numero di pagina

  if (num_pag == 0) {
    num_pag = 1;  // Imposta il numero di pagina a 1 se è 0
  }

  if (FLT_ANNO == true) {
    // Se il filtro anno è attivo, esegui la ricerca per l'anno
    ricerca_anno(anno, num_pag);
  } else if (FLT_GENERE == true) {
    // Se il filtro genere è attivo, esegui la ricerca per il genere
    ricerca_genere(genere_filtro, num_pag);
  }else if(FLT_CTT==true){
    ricerca_ctt(ctt_filtro, num_pag);
  }else if(FLT_QTR==true){
    ricerca_qtr(qtr_filtro, num_pag);
  } else {
    // Altrimenti carica i dati senza filtro
    load_data(num_pag);
  }

  // Aggiorna il numero di pagina visualizzato
  rendernumero.innerHTML = num_pag;
}


load_data(num_pag);

