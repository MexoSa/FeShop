export function quickShowCard(parentWrapper, productList) {
   parentWrapper.addEventListener('click', (e) => {
      let target = e.target
      if (target.classList.contains('quick-view')) {
         e.stopImmediatePropagation()
         showCard(productList[target.dataset.id - 1])
      }
   })
}

function showCard({ category, description, image, price, rating, title }) {
   let quickCard = document.createElement('div')
   quickCard.classList.add('quick-card')
   quickCard.innerHTML = `
      <h3 class='quick-card__title'>${title}<button class='quick-card__close-card'>&#10006;</button></h3>
      <div class='quick-card__subtitle'>Категория: ${category} &#9734;${rating.rate} ${rating.count} отзывов</div>
      <div class='quick-card__body'>
         <img src="${image}">
         <div class='quick-card__description'>
            <div>${price} BYN</div>
            <div><b>Описание:</b> ${description}</div>
         </div>
      </div>
   `;

   quickCard.style.top = `${window.pageYOffset + 100}px`;
   document.body.append(quickCard)

   const bodyOverlay = document.createElement('div')
   bodyOverlay.classList.add('overlay')
   document.body.append(bodyOverlay)

   window.addEventListener('click', (e) => {
      if (e.target.closest('.overlay') || e.target.closest('.quick-card__close-card')) {
         quickCard.remove()
         bodyOverlay.remove()
      }
   })
}
