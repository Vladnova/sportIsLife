const modalButon = document.querySelector('.modal-js')
modalButon.addEventListener('click', modalHandler)

class Modal {
    constructor() {
        this.overlay = document.querySelector('.overlay');
        this.modal = document.querySelector('.modal-info');

        this.closeButtonHandler = () => this.close();
        this.escapeKeyHandler = (event) => this.handleEscapeKey(event);
        this.overlayClickHandler = (event) => this.handleOverlayClick(event);
    }

    open(content) {
        this.overlay.innerHTML = content;
        this.overlay.style.display = 'flex';
        this.modal.classList.remove("visually-hidden");
        const closeButton = document.querySelector('.modal-button-close');

        closeButton.addEventListener('click', this.closeButtonHandler);
        document.addEventListener('keydown', this.escapeKeyHandler);
        this.overlay.addEventListener('click', this.overlayClickHandler);
    }

    close() {
        this.modal = document.querySelector('.modal-info') || document.querySelector('.modal-get-raiting');
        this.overlay.style.display = 'none';
        this.modal.classList.add("visually-hidden");
        
        this.closeButton.removeEventListener('click', this.closeButtonHandler);
        document.removeEventListener('keydown', this.escapeKeyHandler);
        this.overlay.removeEventListener('click', this.overlayClickHandler);

    }

    handleEscapeKey(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    handleOverlayClick(event) {
        if (event.target === this.overlay) {
            this.close()
        }
    }
}

const myModal = new Modal();

const content = `<div class="modal-info">
     <button class="modal-button-close" id="button-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <use href="./img/icons.svg#icon-close" />
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img class="modal-img" src="./img/stub-modal.jpg" alt="Example" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">Air bake</h3>
        <p class="rating-modal">4.0 riting ****</p>
      </div>
      <hr class="modal-decoration-line" />
      <ul class="modal-table">
        <li>
          <h4 class="title-collum">Target</h4>
          <p class="data-collumn">Abs</p>
        </li>
        <li>
          <h4 class="title-collum">Body Part</h4>
          <p class="data-collumn">Waist</p>
        </li>
        <li>
          <h4 class="title-collum">Equipment</h4>
          <p class="data-collumn">Body weight</p>
        </li>
        <li>
          <h4 class="title-collum">Popular</h4>
          <p class="data-collumn">150</p>
        </li>
        <li>
          <h4 class="title-collum">Burned Calories</h4>
          <p class="data-collumn">323/3 min</p>
        </li>
      </ul>
      <hr class="modal-decoration-line" />
      <p class="about-exercise">
        This refers to your core muscles, which include the rectus abdominis, obliques, and
        transverse abdominis. They're essential for maintaining posture, stability, and generating
        force in many movements. Exercises that target the abs include crunches, leg raises, and
        planks.
      </p>
      <div class="button-section-modal">
        <button class="add-favorite" type="button">
          <span>Add to favorites</span><span>❤️</span>
        </button>
        <button class="add-rating" type="button">Give a rating</button></div>`

const content2 = `<div class="modal-get-raiting">
    <button class="modal-button-close" id="button-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <use href="./img/icons.svg#icon-close" />
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <p class="rating-modal">4.0 riting ****</p>
      </div>
      <form class="form raiting-form">
        <label class="raiting-form-field">
          <input
            type="Email"
            class="raiting-form-field-input"
            name="user_email"
            placeholder="Email"
            required
          />
        </label>
        <label class="form-comment">
          <textarea
            class="raiting-form-field-comment"
            name="user_comment"
            placeholder="Your comment"
          ></textarea>
        </label>
        <button class="raiting-form-submit">Send</button>
      </form>
    </div>
  </div>`

function modalHandler(event) {
    myModal.open(content2)
}