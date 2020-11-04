$(document).ready(function() {

    const bici = [
        {
            nome : 'corsa',
            peso : 40
        },
        {
            nome : 'bmx',
            peso : 30
        },
        {
            nome : 'mountain',
            peso : 90
        }
    ];

    const bici_copia = bici.map((element) =>{
        const element_copia = {
            ...element
        };
        return element_copia;
    })

    bici_copia.forEach((element) => {
        let position;
        element.posizione = {
            position : getRandomChar()
        };
    });



    console.log(bici_copia);
    console.log(bici);

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
