const userDp = document.querySelector('.user-info');
const addBtn = document.querySelector('.add-btn');
const accountBox = document.querySelector('.account-box');
const addOpt = document.querySelector('.add-options');
const accountOverlay = document.querySelector('.account-overlay');
const addOverlay = document.querySelector('.add-overlay');

userDp.addEventListener('click', () => {
    accountBox.classList.toggle('display');
    accountOverlay.classList.toggle('display');
});

addBtn.addEventListener('click', () => {
    addOpt.classList.toggle('display');
    addOverlay.classList.toggle('display');
});

accountOverlay.addEventListener('click', () => {
    accountBox.classList.toggle('display');
    accountOverlay.classList.toggle('display');
})

addOverlay.addEventListener('click', () => {
    addOpt.classList.toggle('display');
    addOverlay.classList.toggle('display');
})