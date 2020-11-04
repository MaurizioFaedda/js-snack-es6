$(document).ready(function() {

    const nomi = ['mario', 'luca', 'luigi', 'maria', 'sara', 'mauro', 'alice'];

    console.log(nomi);

    const inizio = parseInt(prompt('inserisci un numero tra 0 e 6'));
    const fine =  parseInt(prompt('inserisci un numero tra 0 e 6'));

    console.log(inizio, fine);

    const nomi_scelti = nomi.filter((element, index) => inizio <= index && fine >= index ); // arrow function con return implicito
    console.log(nomi_scelti);

    // var nomi_estratti = [];
    //
    // for (var i = inizio; i <= fine; i++) {
    //     var nome = nomi[i];
    //     console.log(nome);
    //     nomi_estratti.push(nome);
    // }
    //
    // console.log(nomi_estratti);
})
