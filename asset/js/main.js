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
    
    for (let i = 0; i < number_of_cells + 1; i++) {
        const cell_el = (`<di class='col ${i}'><p>${i}</p></di>`)
        row_grill.innerHTML += cell_el
    }
})
