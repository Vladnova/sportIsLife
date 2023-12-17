let favoriteCards = [];
const localStorFavorites = JSON.parse(localStorage.getItem('favorites'));
localStorFavorites?.length && favoriteCards.push(...localStorFavorites);

export function addLocalFavorites(card) {
  favoriteCards.push(card);
  localStorage.setItem('favorites', JSON.stringify(favoriteCards));
}

export const deleteLocalFavorites = id => {
  favoriteCards = favoriteCards.filter(item => item._id !== id);

  localStorage.setItem(
    'favorites',
    JSON.stringify([...favoriteCards])
  );

};