import { createCard } from "./create-card.js";
import { toUpCaseFirstLet } from './toUpCaseFirstLet.js'
import { removeActiveClassSortBtns } from "./sort-btns.js";

const categoryWrapper = document.querySelector('.catalog__categorys')

export function createCategory(productList, cardsWrapper) {
   let categoryList = createCategoryList(productList)

   categoryList.forEach(category => {
      const categoryItem = document.createElement('button')
      categoryItem.classList.add('categorys__item')
      categoryItem.dataset.name = `${category.toLowerCase()}`
      categoryItem.innerHTML = `${category}`
      if (category === 'All categories') {
         categoryItem.classList.add('active')
      }
      categoryWrapper.appendChild(categoryItem)
   })

   categoryWrapper.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.closest('button')) return
      removeActiveClassSortBtns()
      cardsWrapper.innerHTML = ''
      addActiveClass(target)

      productList.filter(item => {
         if (`${target.dataset.name}` === 'all categories') return item
         return item.category === `${target.dataset.name}`
      }).forEach(item => {
         createCard(cardsWrapper, item)
      })
   })
}

function addActiveClass(target) {
   const categoryBtns = Array.from(document.querySelectorAll('.categorys__item'));
   categoryBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.name === target.dataset.name) {
         btn.classList.add('active')
      }
   })
}

function createCategoryList(productList) {
   const allCategory = productList.map(item => {
      return item = item.category
   })
   let categoryList = ['All categories']
   categoryList = categoryList.concat(Array.from(new Set(allCategory)))

   return categoryList = toUpCaseFirstLet(categoryList)
}
