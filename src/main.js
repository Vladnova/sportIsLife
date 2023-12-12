
import{googleSignin, logOut} from "./js/authentication.js"
import {openMenu, closeMenu} from "./js/burger"
import {chengeOnActive} from "./js/header.js"
import './js/muscles.js';
import './js/exercises';

import fetchSportEnergy from "./shared/api/apiSport";

// Цитата дня
async function getQuotes() {
    const quotes = await fetchSportEnergy.getQuotes();
    console.log('quotes-->', quotes);
}

// Перелік фільтрів (вправ) з урахування назви фільтру, кількості категорій у відповіді на запит та порядкового номеру сторінки 
const dataFilter = {
    bodypart: 'Muscles',
    page: 1,
    limit: 12,
};

export async function getDataFilter() {
    const filter = await fetchSportEnergy.getByFilterName(dataFilter);
    console.log('filter-->', filter);
}

//Перелік вправ з фільтрацією по категорії та ключовому слову з урахування кількості вправ у запиті та порядкового номеру сторінки 
const dataExercises = {
    bodypart: 'back',
    muscles: 'lats',
    equipment: 'barbell',
    keyword: 'pull',
    page: 1,
    limit: 10,
};
async function getDataExercises() {
    const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);
    console.log('exercises-->', exercises);
}

// Детальна інформація про вправу
async function getByIdExercises() {
    const oneExercises = await fetchSportEnergy.getOneExercises('64f389465ae26083f39b1ab2')
    console.log('oneExercises-->', oneExercises);
}

// Додавання рейтингу окремій вправі
const dataRate = {
    rate: 5,
    email: 'test2@gmail.com',
    review: 'My best exercise',
};
async function addExercisesRate() {
    const addRate = await fetchSportEnergy.addExercisesRate(
        '64f389465ae26083f39b1ab2',
        dataRate
        );
        console.log('addRate-->', addRate);
    }
    
    // Оформлення підписки на розсилку нових вправ
    const dataEmail = {
        email: 'test2@gmail.com',
    };
    async function addSubscription() {
        const subscription = await fetchSportEnergy.addSubscription(dataEmail);
        console.log('subscription-->', subscription);
    }
    
    getQuotes();
    getDataFilter();
    getDataExercises();
    getByIdExercises();
    addExercisesRate();
    addSubscription();
    
    
    export {googleSignin, logOut, openMenu, closeMenu,chengeOnActive};