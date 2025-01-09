table = document.getElementById("table")
table.innerHTML=`<div class="row text-center bg-primary text-white fw-bold">
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

fetch('https://colombofabio4id.altervista.org/Big%20Data/api.php')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Converti la risposta in JSON
  })
  .then(data => {
    console.log('Dati ricevuti:', data);

    data.forEach(ele => {
        a=JSON.stringify(ele)
        table.innerHTML+=`
        <div class="row text-center">
      <div class="col">${a}</div>
      </div>
        `
    });

  })
  .catch(error => {
    console.error('Errore nella richiesta:', error);
  });

