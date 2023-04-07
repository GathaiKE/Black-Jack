let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")
// let cards = [firstCard,secondCard]
let clearEl = document.getElementById("clear-el")
function clear() {
    sum = 0
    sum.textContent = "Sum: "
    cards.textContent + "Cards: "
}
function getRandomCard() {
    let randomi =  Math.floor(Math.random()*13)+1
    if (randomi >10) {
        return 10
    } else if (randomi === 1) {
        return 11
    } else {
        return randomi
    }
    return randomi
}
// CASH OUT

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for ( i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent ="Sum: "+ sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"

    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}
function newCardEl() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
let player = {
    name: "Brian ",
    chips: 20000
}
let playerEl = document.getElementById("player-el").textContent = player.name +":KES "+ player.chips