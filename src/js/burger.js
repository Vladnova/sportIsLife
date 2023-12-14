
const BurgerButton = document.getElementById("burger-button");
const Burger = document.getElementById("burger");
const BurgerCloseButton = document.getElementById("burger-button-close")



export const openMenu = async() =>{
    Burger.classList.remove("visually-hidden");
    document.body.classList.add("disable-scroll");
 
}

export const closeMenu = async(e) =>{
    Burger.classList.add("visually-hidden");
    document.body.classList.remove("disable-scroll");
    console.log("1")
}
export const closeEscape=(e)=>{
    if (e.key === 'Escape') {
Burger.classList.add("visually-hidden");
}
console.log("here")
document.body.classList.remove("disable-scroll");
}

BurgerButton.addEventListener("click", openMenu)
BurgerCloseButton.addEventListener("click", closeMenu)
document.addEventListener("keydown", closeEscape)

