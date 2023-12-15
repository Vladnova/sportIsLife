import fetchSportEnergy from './api/apiSport';

const refs = {
  quoteText: document.querySelector('.quote-text'),
  quoteAuthor: document.querySelector('.quote-author'),
};

document.addEventListener('DOMContentLoaded', quoteLoad);

async function quoteLoad() {
  const currentDate = new Date().toDateString();
  const {
    date: locStorDate,
    quote: locStorQuote,
    author: locStorAuthor,
  } = JSON.parse(localStorage.getItem('quote'));

  if (currentDate !== locStorDate) {
    const fetchQuote = await fetchSportEnergy.getQuotes();

    const { author, quote } = fetchQuote;

    const quoteObj = {
      author,
      quote,
      date: new Date().toDateString(),
    };

    localStorage.setItem('quote', JSON.stringify(quoteObj));

    refs.quoteText.innerHTML = quote;
    refs.quoteAuthor.innerHTML = author;
  } else {
    refs.quoteText.innerHTML = locStorQuote;
    refs.quoteAuthor.innerHTML = locStorAuthor;
  }
}
