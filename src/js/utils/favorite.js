// export const setFavoriteArr = () => {
//     let list = []
//     if (localStorage.getItem('favorites')) {
//        list = [...JSON.parse(localStorage.getItem('favorites'))]
//     }
//     return list
// }

// export const setButtonFavorite = (status) => {
//     if (status === 'false') {
//         return `
//         <button class="add-favorite-js" type="button">
//             <span class="remote-favorites">Remove from favorites</span>
//             <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
//                 <use href="./img/svg/sprite.svg#icon-trash"></use>
//             </svg>
//         </button>
//         `
//     } else {
//         return `
//         <button class="add-favorite-js" type="button">
//             <span>Add to favorites</span>
//             <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
//                 <use href="./img/svg/sprite.svg#icon-heart"></use>
//             </svg>
//         </button>
//         `
//     }
// }

// export const cutString = (text, sliceCut) => {
//     if (text.length <= sliceCut) {
//         return text
//     } else {
//         return `${text.slice(0,sliceCut)}...`
//     }
// }

// export const deleteFavoriteItem = (id) => {
//     localStorage.setItem('favorites', JSON.stringify([
//         ...setFavoriteArr().filter(item => item !== id)
//     ]))
// }