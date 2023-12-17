import { markupText } from './markup-text';
import {markupList} from './markup-list';

function addContent() {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const favotitesCurentUser= JSON.parse(localStorage.getItem('favotitesCurentUser'));
  const list = favotitesCurentUser ? favotitesCurentUser:favorites;


if (!favorites?.length & !favotitesCurentUser?.length) {
  markupText();
  return;
}
markupList(list);

}

addContent();