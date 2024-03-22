//element
let btnAboutElement = document.querySelector('.btn-about')
let btnShopElement = document.querySelector('.btn-shop')
let aboutElement = document.querySelector('.about')
let shopElement = document.querySelector('.shop')

//Click vào giới thiệu
btnAboutElement.addEventListener("click", () => {
    btnAboutElement.classList.add("btn-active")
    btnShopElement.classList.remove("btn-active")

    aboutElement.style.display = "block"
    shopElement.style.display = "none"
})

//Click vào cửa hàng
btnShopElement.addEventListener("click", () => {
    btnAboutElement.classList.remove("btn-active")
    btnShopElement.classList.add("btn-active")

    aboutElement.style.display = "none"
    shopElement.style.display = "block"
})