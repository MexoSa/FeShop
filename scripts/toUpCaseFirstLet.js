export function toUpCaseFirstLet(array) {
   return array = array.map(item => {
      return item = `${item[0].toUpperCase()}${item.slice(1)}`
   })
}
