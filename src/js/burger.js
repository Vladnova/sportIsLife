
const BurgerButton = document.getElementById("burger-button");
const Burger = document.getElementById("burger");
const BurgerCloseButton = document.getElementById("burger-button-close")



export const openMenu = async() =>{
    Burger.classList.remove("visually-hidden");
    console.log("1")
}

export const closeMenu = async() =>{
    Burger.classList.add("visually-hidden");
}

BurgerButton.addEventListener("click", openMenu)
BurgerCloseButton.addEventListener("click", closeMenu)

