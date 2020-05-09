const api = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"; //link da API
const divCards = document.querySelector("#cards"); //pegando a div cards

//const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
//const cardsContainer = document.querySelector("#cards");
let data = [];

async function buscarCards() {
  let response =  await fetch(api)
  return await response.json()
}

function renderCards(cards) {
    divCards.innerHTML = "";
    cards.map(renderCard);
}

function renderCard(card) {
  const div = document.createElement("div");
  div.style.width = "20rem";
  div.style.margin = "1rem";
  div.className = "card";
  div.innerHTML = `
  <div>
  <img src="${card.photo}" class="card-img-top" alt="${card.name}" />
  </div>
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <div>
    <p class="card-text">
      Tipo: ${card.property_type}
    </p>
    </div>
    </div>
    <div class="item">
        <a href="">Ver mais</a>
        <div class="descricao">
        <div class="cadaitem">
        <p><i class="fas fa-toilet"></i> Banheiro Privado</p>
        <p><i class="fas fa-bed"></i>  Duas Camas</p>
        <p><i class="fas fa-wifi"></i>  Wifi</p>
        <p><i class="fas fa-parking"></i> Estacionamento Gratuito</p>
        </div>
        </div>
    </div>
  </div>
    <div class="preco">
    <p class="card-text">
    Preço: R$${card.price},00
  </p>
  
  </div>
`;
  divCards.appendChild(div);
}



async function main() {
  data = await buscarCards();
  if(data) {
    renderCards(data);
  }
}

main();