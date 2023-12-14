
import './js/header.js';
import './js/burger';
import './js/authentication.js';

import './js/modal-window/modal.js'
import './js/muscles.js';
import './js/exercises';
import './js/pagination/pagination.js';
import './js/scrollToTopButton';
// How to Use Spinner
// 1. Import spinner to your js file. (Don't forget about relative path)
import { showSpinner, hideSpinner } from './js/spinner';
//2. Call showSpinner() in your req func
//3. Call hideSpinner() in .finally (in .then.finally chaining method) or finally{} block if use try-catch block
