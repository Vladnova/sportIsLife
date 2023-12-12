import scrollToTopButton from './js/scrollToTopButton';
// how to use spinner
// 1. Import spinner to your js file
import { showSpinner, hideSpinner } from './js/spinner';
//2. Call showSpinner() in your req func
//3. Call stopSpinner() in .finally (in .then.finally chaining method) or finally{} block if use try-catch block

scrollToTopButton();

setTimeout(() => {
  showSpinner();
}, 500);

setTimeout(() => {
  hideSpinner();
}, 2500);
