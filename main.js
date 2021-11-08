/* Snack 1
1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%. */


/* ogetto dei giocatori */
const player = [

    {
        codePlayer: letterCodePlayer(),
        firstName: 'LeBron',
        lastName: 'James',
        age: 39,
        averagePoints: randomNumber(0, 50),
        percentageShots: randomNumber(0, 100),
    },


]


/* Stampare Nome, cognome, età e codice giocatore */
const {firstName, lastName, age, codePlayer} = player;

console.log(firstName, lastName, age, codePlayer);


/* generazione 10 giocatori */
generatePlayerTeam(player);

console.table(player);




/* FUNCTION */

/* numeri random */
function randomNumber(min, max) {
    const points = Math.floor(Math.random() * (max - min + 1))+min;
    return points;
}

/* generazione codice giocatore */
function letterCodePlayer() {
    let alphabet = "abcdefghiklmnopqrstuvwxyz".toUpperCase();
    let letterCode = '';
    let numberCode = '';

    for (let i = 0; i < 3; i++) {
        letterCode += alphabet[randomNumber(0, alphabet.length)];
        numberCode += randomNumber(0, 9); 
    }

    const codeRandom = letterCode + numberCode;

    return codeRandom;
}

function generatePlayerTeam(player) {
    for (let i = 0; i < 9; i++) {

        const namePlayerTeam = ['John J.',
                                'Patrick',
                                'James',
                                'Dwight',
                                'Ruben',
                                'Max',
                                'Lucas',
                                'Luiz',
                                'Rafael',];
                                
        const surnamePlayerTeam = ['Rodriguez',
                                    'Hildebrandt',
                                    'Cote',
                                    'Ruben',
                                    'Coldham',
                                    'Buntine',
                                    'Costa',
                                    'Sousa',
                                    'Goncalves',
                                    'Lund',];

        const generatePlayer = {
            codePlayer: letterCodePlayer(),
            firstName: namePlayerTeam[i],
            lastName: surnamePlayerTeam[i],
            age: randomNumber(20, 40),
            averagePoints: randomNumber(0, 50),
            percentageShots: randomNumber(0, 100),
        }
    
        player.push(generatePlayer);
    }
}