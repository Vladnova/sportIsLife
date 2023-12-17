import { addContent } from '../js/favorite/favorite'

const Home = document.getElementById("home")
const Favorites = document.getElementById("favorites")
const TextHome = document.getElementById("home-text")
const TextFavorite = document.getElementById("favorites-text")
const Nav = document.getElementById("navigation")
const currentUrl = window.location.href.toString();

let part = currentUrl.slice(-14)

export const onClickPage = () => {
  
   if (part === "favorites.html") {
      Home.classList.remove("active");
      TextHome.classList.remove("black");
      Favorites.classList.add("active");
      TextFavorite.classList.add("black");
      addContent()
   } else {
      Home.classList.add("active");
      TextHome.classList.add("black");
      Favorites.classList.remove("active");
      TextFavorite.classList.remove("black");
 }

   
}
onClickPage(part)
