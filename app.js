console.log('loaded');
let randQuote=[`"The purpose of our lives is to be happy." — Dalai Lama`, `"Life is what happens when you're busy making other plans." — John Lennon`, `"Get busy living or get busy dying." — Stephen King`, `"You only live once, but if you do it right, once is enough." — Mae West`, `"Many of life's failures are people who did not realize how close they were to success when they gave up." -  Thomas A. Edison`, `"If you want to live a happy life, tie it to a goal, not to people or things." -  Albert Einstein`, `"Never let the fear of striking out keep you from playing the game."-  Babe Ruth`, `"Never let the fear of striking out keep you from playing the game." -  Babe Ruth`, ` "Not how long, but how well you have lived is the main thing.” — Seneca`, ` “If life were predictable it would cease to be life, and be without flavor.” - Eleanor Roosevelt`];


let rand=Math.floor(Math.random()*randQuote.length);
console.log(randQuote[rand]);

let btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    console.log('clicked');
    let text= document.querySelector('.text');
    text.innerHTML=randQuote[rand];
})