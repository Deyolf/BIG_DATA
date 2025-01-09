function load_data(a) {
  table = document.getElementById("table")
  table.innerHTML = `<div class="row text-center bg-primary text-white fw-bold">
      <div class="col">Anno</div>
      <div class="col">Cittadinanza</div>
      <div class="col">Genere</div>
      <div class="col">Quartiere</div>
      <div class="col">0</div>
      <div class="col">01-04</div>
      <div class="col">05-09</div>
      <div class="col">10-14</div>
      <div class="col">15-19</div>
      <div class="col">20-24</div>
      <div class="col">25-29</div>
      <div class="col">30-34</div>
      <div class="col">35-39</div>
      <div class="col">40-44</div>
      <div class="col">45-49</div>
      <div class="col">50-54</div>
      <div class="col">55-59</div>
      <div class="col">60-64</div>
      <div class="col">65-69</div>
      <div class="col">70-74</div>
      <div class="col">75-79</div>
      <div class="col">80-84</div>
      <div class="col">85-89</div>
      <div class="col">90-94</div>
      <div class="col">95-99</div>
      <div class="col">100 e oltre</div>
    </div>`

  fetch(`https://colombofabio4id.altervista.org/Big%20Data/api.php?id=${a}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Converti la risposta in JSON
    })
    .then(data => {
      console.log('Dati ricevuti:', data);

      data.forEach(ele => {
        table.innerHTML += `
        <div class="row text-center">
      <div class="col">${ele.anno}</div>
      <div class="col">${ele.cittadinanza}</div>
      <div class="col">${ele.genere}</div>
      <div class="col">${ele.quartiere}</div>
      <div class="col">${ele._0}</div>
      <div class="col">${ele._01_04}</div>
      <div class="col">${ele._05_09}</div>
      <div class="col">${ele._10_14}</div>
      <div class="col">${ele._15_19}</div>
      <div class="col">${ele._20_24}</div>
      <div class="col">${ele._25_29}</div>
      <div class="col">${ele._30_34}</div>
      <div class="col">${ele._35_39}</div>
      <div class="col">${ele._40_44}</div>
      <div class="col">${ele._45_49}</div>
      <div class="col">${ele._50_54}</div>
      <div class="col">${ele._55_59}</div>
      <div class="col">${ele._60_64}</div>
      <div class="col">${ele._65_69}</div>
      <div class="col">${ele._70_74}</div>
      <div class="col">${ele._75_79}</div>
      <div class="col">${ele._80_84}</div>
      <div class="col">${ele._85_89}</div>
      <div class="col">${ele._90_94}</div>
      <div class="col">${ele._95_99}</div>
      <div class="col">${ele._100_oltre}</div>
      </div>
        `
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
  load_data(num_pag);
  rendernumero.innerHTML = num_pag
}

load_data(num_pag);

