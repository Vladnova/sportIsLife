import { markupText } from './markup-text';
import { markupList } from './markup-list';

export function addContent() {
  const favorites = JSON.parse(localStorage.getItem('favorites'));

  if (!favorites?.length) {
    markupText();
    return;
  }

  markupList(favorites);
}
