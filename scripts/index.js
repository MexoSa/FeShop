import './login.js'
import './burger-menu.js'
import './slider.js'
import { createtopRateProductsCard, topRateProductsWrapper } from './top-rate-products.js'
import './to-top-btn.js'
import { getProductList } from "./product-list.js"
import { createCatalog, catalogCardsWrapper } from './catalog-page.js'
import { addLoader, removeLoader } from './loader.js'

let url = window.location.pathname.slice(1, -5)
if (url === 'index') {
   addLoader(topRateProductsWrapper)
} else if (url === 'catalog') {
   addLoader(catalogCardsWrapper)
}

getProductList().then(productList => {
   createtopRateProductsCard(productList)
   return productList
}).then(productList => createCatalog(productList)).finally(() => { removeLoader() })
