const favoriteCards = [];

export function addLocalFavorites(card) {
  favoriteCards.push(card);
  localStorage.setItem('favorites', JSON.stringify(favoriteCards));
}

export const deleteLocalFavorites = id => {
  const deletedItem = favoriteCards.find(({ _id }) => _id === id)
  favoriteCards.splice(favoriteCards.indexOf(deletedItem), 1)
  localStorage.setItem(
    'favorites',
    JSON.stringify([...favoriteCards.filter(item => item._id !== id)])
  );
};