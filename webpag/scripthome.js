function load_data(a) {
  // Ottieni il contenitore della tabella
  const table = document.getElementById("table");

  // Crea l'intestazione della tabella
  table.innerHTML = `
    <div class="table-responsive">
      <table class="table table-bordered">
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
            <th>100 e oltre</th>
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

      // Aggiungi le righe dinamicamente
      data.forEach(ele => {
        const row = `
          <tr class="text-center">
            <td>${ele.anno}</td>
            <td>${ele.cittadinanza}</td>
            <td>${ele.genere}</td>
            <td>${ele.quartiere}</td>
            <td>${ele._0}</td>
            <td>${ele._01_04}</td>
            <td>${ele._05_09}</td>
            <td>${ele._10_14}</td>
            <td>${ele._15_19}</td>
            <td>${ele._20_24}</td>
            <td>${ele._25_29}</td>
            <td>${ele._30_34}</td>
            <td>${ele._35_39}</td>
            <td>${ele._40_44}</td>
            <td>${ele._45_49}</td>
            <td>${ele._50_54}</td>
            <td>${ele._55_59}</td>
            <td>${ele._60_64}</td>
            <td>${ele._65_69}</td>
            <td>${ele._70_74}</td>
            <td>${ele._75_79}</td>
            <td>${ele._80_84}</td>
            <td>${ele._85_89}</td>
            <td>${ele._90_94}</td>
            <td>${ele._95_99}</td>
            <td>${ele._100_oltre}</td>
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


let rendernumero = document.getElementById("numpag")

let num_pag=1

rendernumero.innerHTML = num_pag

function next_page(){
  num_pag++;
  load_data(num_pag);
  rendernumero.innerHTML = num_pag
}
function previous_page(){
  num_pag--;
  if(num_pag==0){
    num_pag=1
  }
  load_data(num_pag);
  rendernumero.innerHTML = num_pag
}

load_data(num_pag);

