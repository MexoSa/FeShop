async function getProductList() {
   let res = await fetch(`https://fakestoreapi.com/products`)
   let productList = await res.json()
   return productList
}

export { getProductList }
