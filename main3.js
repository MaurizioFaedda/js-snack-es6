$(document).ready(function() {

    const nomi = ['mario', 'luca', 'luigi', 'maria', 'sara', 'mauro', 'alice'];



    let nomi_copia = nomi.map((element) =>
    element);

    nomi_copia.forEach((element) => {

        element.position = {
            position : getRandomChar()
        };
    });



    console.log(nomi_copia);

})

function getRandomChar() {
    const abc = 'abcdefghijklmnopqrstuvwxyz';

    const posizione = getRndInteger(0, 25);

    const lettera_random = abc.charAt(posizione);
    return lettera_random;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
