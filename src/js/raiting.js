const ratingContainer = document.querySelector('.rating');
const stars = ratingContainer.querySelectorAll('.star');

stars.forEach((star, index) => {
star.addEventListener('mouseover', () => highlightStars(index));
star.addEventListener('mouseout', resetStars);
star.addEventListener('click', () => setRating(index + 1));
});

function highlightStars(selectedIndex) {
    resetStars();
    for (let i = 0; i <= selectedIndex; i++) {
        stars[i].classList.add('hovered');
    }
}

function resetStars() {
    stars.forEach(star => {
        star.classList.remove('hovered');
    });
}

function setRating(selectedRating) {
    ratingContainer.setAttribute('data-rating', selectedRating);

    // Закрасити обрану зірку та всі попередні зірки
    stars.forEach((star, index) => {
        if (index + 1 <= selectedRating) {
        star.classList.add('selected');
        } else {
        star.classList.remove('selected');
        }
    });

    console.log(selectedRating);
    // Тут ви можете додати логіку для відправки рейтингу на сервер чи інші дії
}
