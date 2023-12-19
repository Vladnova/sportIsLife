import { markupText } from './markup-text';
import {markupList} from './markup-list';
import { listOfFavorites } from '../utils/firebase';
import { loader } from '../loader/loader';




export function addContent() {

  listOfFavorites()

  const favorites = JSON.parse(localStorage.getItem('favorites'));


  if (!favorites?.length) {
    markupText();
    return;
  }
  markupList(favorites);
  loader.close()
}


