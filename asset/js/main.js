/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const play_button = document.getElementById ('play_button')
const row_grill = document.getElementById ('row_grill')
let number_of_cells = 100
//all'evento del click si generano 100 celle 
//all'interno della riga con all'interno un paragrafo col numero corispettivo e anche una clesse

play_button.addEventListener ('click', function(){
    let i = 1
    while (i < number_of_cells + 1) {
        
        const cell_el = document.createElement("div");
        const number_into_cell =document.createElement('p')
        number_into_cell.innerHTML = `${i}`
        cell_el.insertAdjacentElement ('beforeend',number_into_cell)
        cell_el.classList.add('col','square')
        row_grill.insertAdjacentElement ('beforeend',cell_el)
        i++
    }
    const cell = document.querySelectorAll ('.col')
    for (let i = 0; i < cell.length - 1; i++) {
        cell[i].addEventListener ('click',function(){
            console.log(Number(cell[i].innerText))
        })
        
    }
}) 