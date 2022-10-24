let number: number = Math.floor(Math.random() * (99) + 1);
console.log(`Il numero casuale è ${number}`);

let topolino: number = Math.floor(Math.random() * (99) + 1);
console.log(`Topolino ha scelto ${topolino}`);
let pippo: number = Math.floor(Math.random() * (99) + 1);
console.log(`Pippo ha scelto ${pippo}`);

function guessNumber() {
    if (topolino === number && pippo === number) {
        console.log('Bravi! Topolino e Pippo avete indovinato!');
    } else if (topolino === number && pippo !== number) {
        console.log('Topolino hai indovinato!');
    } else if (topolino !== number && pippo === number) {
        console.log('Pippo hai indovinato!'); 
    } else if (topolino !== number && pippo !== number) {
        if (Math.abs(topolino - number) === Math.abs(pippo - number)) {
            console.log('Siete due pippe in egual modo!');
        } else if (Math.abs(topolino - number) < Math.abs(pippo - number)) {
            console.log('Siete due pippe, ma Topolino si è avvicinato di più!');
        } else {
            console.log('Siete due pippe, ma Pippo è stata meno pippa!');
        }
    } 
}

guessNumber();
