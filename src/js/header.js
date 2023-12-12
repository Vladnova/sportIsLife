
    const Home = document.getElementById("home")
    const Favorites = document.getElementById("favorites")
    const TextHome = document.getElementById("home-text")
    const TextFavorite = document.getElementById("favorites-text")

export const chengeOnActive =async()=>{
    Home.classList.remove("active");
    TextHome.remove("black")
    Favorites.classList.add("active")
    TextFavorite.classList.add("black")
}

Home.addEventListener("click", chengeOnActive)
Favorites.addEventListener("click", chengeOnActive)


