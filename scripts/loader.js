const loaderWrapper = document.createElement('div')
loaderWrapper.classList.add('container')
loaderWrapper.innerHTML = `
   <div class="circle circle-1"></div>
   <div class="circle circle-2"></div>
   <div class="circle circle-3"></div>
   <div class="circle circle-4"></div>
   <div class="circle circle-5"></div>
   `

export function addLoader(wrapper) {
   wrapper.before(loaderWrapper)
}

export function removeLoader() {
   loaderWrapper.remove()
}
