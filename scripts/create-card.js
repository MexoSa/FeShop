export function createCard(parentWrapper, { id, image, price, title }) {
   let card = document.createElement('div');
   card.classList.add('cards__item', 'item');
   card.dataset.id = id
   card.innerHTML = `
      <img src="${image}" alt="${title}">
      <p class="item__name">${title}</p>
      <p class="item__price">${price} BYN</p>
      <button class='quick-view'data-id='${id}'>Быстрый просмотр</button>
      `
   parentWrapper.appendChild(card)
}
