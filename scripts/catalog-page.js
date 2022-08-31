import { createCard } from "./create-card.js"
import { quickShowCard } from "./quick-show-card.js";
import { createCategory } from "./category-catalog.js";
import { createSortBtns } from "./sort-btns.js";

export const catalogCardsWrapper = document.querySelector('.catalog__cards')

export function createCatalog(productList) {
   if (document.querySelector('.catalog')) {
      createCategory(productList, catalogCardsWrapper)
      createSortBtns(catalogCardsWrapper, productList)

      // let page = 1;
      // drawCards(page, productList)
      //раскоментировать все, закоментировать три строки ниже
      productList.forEach((productObj) => {
         createCard(catalogCardsWrapper, productObj)
      })
      quickShowCard(catalogCardsWrapper, productList)
      // document.addEventListener('scroll', () => {
      //    let coords = getCoords(catalogCardsWrapper)
      //    if (window.pageYOffset + document.documentElement.clientHeight > coords.bottom * 0.9) {
      //       page++
      //       catalogCardsWrapper.innerHTML = ''
      //       drawCards(page, productList)
      //       console.log(1);
      //    }
      // })
   }
}

//!! Весь закоментированный код, это неудачная бесконечная пагинация по скролу !!

// function drawCards(page, productList) {
//    productList.forEach((productObj, index) => {
//       if (index < 9 * page) {
//          createCard(catalogCardsWrapper, productObj)
//       }
//    })
// }

// function getCoords(elem) {
//    let box = elem.getBoundingClientRect();

//    return {
//       top: box.top + window.pageYOffset,
//       right: box.right + window.pageXOffset,
//       bottom: box.bottom + window.pageYOffset,
//       left: box.left + window.pageXOffset
//    };
// }
