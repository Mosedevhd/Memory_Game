const grid = document.querySelector (`.grid`)
const spanPlayer = document.querySelector (`.player`)
const timer = document.querySelector (`.timer`)

const cards = [
    `bendita` ,
    `chitongua`,
    `dorivaldo`,
    `henrique`,
    `kina`,
    `luis`,
    `luivy`,
    `pacix`,
    `helena`,
    `curinga`,
    

];


const createElement = (tag , className) => {
    const element = document.createElement(tag);
    element.className = className; 
    return element;

}
let firstCard = ``;
let secondCard = ``;

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(`.disabled-card`)

     if ( disabledCards.length === 20) {
        clearInterval(this.loop)
        alert(`Parabéns, ${spanPlayer.innerHTML} | Seu tempo foi ${timer.innerHTML} segundos `)
     }
}

const checkCards = () => {
   const firstToni = firstCard.getAttribute(`data-toni`)
   const secondToni = secondCard.getAttribute(`data-toni`)
    
    if ( firstToni === secondToni ) {

        firstCard.firstChild.classList.add(`disabled-card`)
        secondCard.firstChild.classList.add(`disabled-card`)
          
        firstCard = ``;
        secondCard = ``;

         checkEndGame();

    } else {
              
        setTimeout(() => {
            
            firstCard.classList.remove(`reveal-card`)
            secondCard.classList.remove(`reveal-card`)

             firstCard = ``;
             secondCard = ``;

        }, 500);
        
    }
}

const revealCard = ( { target } ) => {
    if (target.parentNode.className.includes(`reveal-Card`)) {
        return;
    }

    if ( firstCard === ``){
        target.parentNode.classList.add(`reveal-card`)
        firstCard = target.parentNode;

    } else if (secondCard ===  ``) {
        target.parentNode.classList.add(`reveal-card`)
        secondCard = target.parentNode;

        checkCards ();
    }
}

const createCard = (toni) => {
    const card = createElement(`div` , `card`);
    const front = createElement(`div` , `face front`);
    const back = createElement(`div` , `face back`);

    front.style.backgroundImage = `url("../img_proj/${toni}.png")`;

    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener(`click`, revealCard)
    card.setAttribute(`data-toni`, toni)
    return card;
}
    
const LoadGame = () => {
    const duplicar = [...cards, ...cards]

    const sorteiar = duplicar.sort( () => Math.random() - 0.3 )

    
    sorteiar.forEach((toni)  => {
        const card = createCard(toni)
        grid.appendChild(card)
    });



}

 const startTimer = () => {

    this.loop = setInterval (() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    },  1000)
 }

window.onload = () => {
    const playerName =   localStorage.getItem(`jogar`)
    spanPlayer.innerHTML = playerName

    startTimer();
    LoadGame();
}












