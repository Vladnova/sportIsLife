const favoriteCards = [];

export function addLocalFavorites(card) {
  favoriteCards.push(card);
  localStorage.setItem('favorites', JSON.stringify(favoriteCards));
}

export const deleteLocalFavorites = id => {
  console.log(favoriteCards);
  console.log(id);
  localStorage.setItem(
    'favorites',
    JSON.stringify([...favoriteCards.filter(item => item._id !== id)])
  );
};