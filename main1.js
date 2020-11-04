$(document).ready(function() {
    // creo un array di oggetti
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

    // soluzione
    let bici_min = bici[0];
    bici.forEach((element) => {
        if(element.peso < bici_min.peso) {
            bici_min = element;
        }
    });
    console.log(bici_min);

    const {peso, nome} = bici_min;
    console.log(peso);
    console.log(nome);

    // voglio trovare il peso minimo usando la nuova sintassi es6
    // bici.forEach((peso, i) => {
    //     console.log(peso.peso);
    // });
    // let bici = bici[0].peso;
    // let peso_minimo = bici.filter((item) => item.peso < macchina_leggera)
    // console.log(peso_minimo );
    // let peso_bici = bici.map((peso) => peso.peso);
    // console.log(peso_bici);
    //
    // let pesi_min = peso_bici.sort();
    // console.log(pesi_min);
    //
    // let peso_min = pesi_min[0];
    // console.log(peso_min);
    //
    // let bici_min = bici.filter((item) => item.peso = pesi_min[0]);
    // console.log(bici_min);


})
