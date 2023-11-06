const countMe = document.querySelector('.count');
const incrementMe = document.querySelector('.btn');
const warnMe = document.querySelector('.btn3');
const clearAll = document.querySelector('.btn4');
const clearPg = document.querySelector('.pg');
let count = 0;
let time = 5;
let intervalId; //declared it globally so i can use it to clear the interval for the cancel button

// event listener to increment the 0 digit
incrementMe.addEventListener('click', () => {
    count++;
    countMe.innerHTML = count;

    incrementMe.addEventListener('mouseout', () => {
        setTimeout(() => {
            if (count > 0)
            count--;
            countMe.innerHTML = count;
        }, 5000);
    });
});

warnMe.addEventListener('click', () => {
    intervalId = setInterval(() => {
        if (time > 0) {
            clearPg.innerHTML = `Warning: You have ${time} seconds remaining to cancel`;
            time--;
        } else {
            clearInterval(intervalId);
            clearPg.innerHTML = '';
        }
    }, 1000);
});

clearAll.addEventListener('click', () => {
    clearPg.innerHTML = '';
    clearInterval(intervalId);
})