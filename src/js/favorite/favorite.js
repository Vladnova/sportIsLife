import { markupText } from './markup-text';
import {markupList} from './markup-list';
import { listOfFavorites } from '../utils/firebase';
const currentUrl = window.location.href.toString();
let page = currentUrl.slice(-14)
console.log(page)
export function addContent(page) {
  listOfFavorites()
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const favotitesCurentUser= JSON.parse(localStorage.getItem('favotitesCurentUser'));
  const list = favotitesCurentUser ? favotitesCurentUser:favorites;
  if(page !=="favorites.html"){
    return
  } if (!favorites?.length & !favotitesCurentUser?.length) {
    markupText();
    return;
  }


markupList(list);

}

addContent(page);