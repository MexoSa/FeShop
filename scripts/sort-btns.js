import { createCard } from "./create-card.js"

let flag = true;

export function createSortBtns(cardsWrapper, productList) {
   const sortBtnsWrapper = document.createElement('div')
   sortBtnsWrapper.classList.add('catalog__sort-btns-wrapper')
   sortBtnsWrapper.innerHTML = `
      <p>Сортировать по:</p>
      <button class='sort-btn' data-sortname='price'>Цена</button>
      <button class='sort-btn' data-sortname='rating'>Рейтинг</button>
   `
   cardsWrapper.before(sortBtnsWrapper)
   sortBtnsWrapper.addEventListener('click', (e) => {
      if (e.target.classList.contains('sort-btn')) {
         sortCards(e, productList, cardsWrapper)
      }
   })
}

function sortCards(e, productList, cardsWrapper) {
   let currentCards = getCurrentCards(productList)

   removeActiveClassSortBtns()
   e.target.classList.add('active')

   if (e.target.dataset.sortname === 'price') {
      currentCards = currentCards.sort((card1, card2) => {
         return card1.price - card2.price
      })
   } else if (e.target.dataset.sortname === 'rating') {
      currentCards = currentCards.sort((card1, card2) => {
         return card1.rating.rate - card2.rating.rate
      })
   }

   cardsWrapper.innerHTML = ''

   if (flag) {
      currentCards.forEach(card => {
         createCard(cardsWrapper, card)
         e.target.classList.add('arrow-up')
      })
   } else {
      currentCards.reverse().forEach(card => {
         createCard(cardsWrapper, card)
         e.target.classList.remove('arrow-up')
      })
   }

   flag = !flag
}

export function removeActiveClassSortBtns() {
   const sortBtns = Array.from(document.querySelectorAll('.sort-btn'))
   sortBtns.forEach(btn => btn.classList.remove('active'))
}

function getCurrentCards(productList) {
   return Array.from(document.querySelectorAll('.cards__item')).map(card => {
      return productList[card.dataset.id - 1]
   })
}
