import { listOfFavorites } from "./utils/firebase"

const Home = document.getElementById("home")
const Favorites = document.getElementById("favorites")
const TextHome = document.getElementById("home-text")
const TextFavorite = document.getElementById("favorites-text")
const Nav = document.getElementById("navigation")
const currentUrl = window.location.href.toString();
const signInBtn = document.getElementById("sign-in-js")

let part = currentUrl.slice(-14)

export const onClickPage = () => {
   listOfFavorites();
  
   if (part === "favorites.html") {
   signInBtn.classList.add("visually-hidden");
    Home.classList.remove("active");
    TextHome.classList.remove("black");
    Favorites.classList.add("active");
    TextFavorite.classList.add("black");
   } else {
      Home.classList.add("active");
      TextHome.classList.add("black");
      Favorites.classList.remove("active");
      TextFavorite.classList.remove("black");
 }

   
}
onClickPage(part)
