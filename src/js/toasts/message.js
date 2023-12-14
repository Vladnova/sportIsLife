import iziToast from "izitoast";

iziToast.settings({
  timeout: 3000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  onOpening: function () {
    console.log('callback abriu!');
  },
  onClosing: function () {
    console.log('callback fechou!');
  },
});

class Message {
  error(message) {
    iziToast.error({
      title: 'Помилка',
      message,
    });
  }

  success(message) {
    iziToast.success({
      title: 'OK',
      message,
    });
  }

  info(message) {
    iziToast.info({
      title: 'Привіт',
      message,
    });
  }

}

export const message = new Message()