export function markupText() {
  const parentEl = document.querySelector('.wrap-js')
  const subtitle = document.createElement('p');
  parentEl.appendChild(subtitle);
  subtitle.textContent ="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."
}
