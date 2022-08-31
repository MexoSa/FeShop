import { createCard } from "./create-card.js"
import { quickShowCard } from "./quick-show-card.js"
export const topRateProductsWrapper = document.querySelector('.top-rate-products__cards')

export async function createtopRateProductsCard(productList) {
   if (document.querySelector('.poster__top-rate-products')) {
      let sortProductList = await productList.slice().sort((a, b) => {
         return b.rating.rate - a.rating.rate
      })
      sortProductList.forEach((productItem, index) => {
         if (index > 5) return
         createCard(topRateProductsWrapper, productItem)
      })
      quickShowCard(topRateProductsWrapper, productList);
   }
}
