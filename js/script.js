const buttonClick = document.querySelector('button');

buttonClick.addEventListener('click', function(){
    let kmUser = document.getElementById('km').value;
    let agePassenger = document.getElementById('age').value;
    // let nameUser = document.getElementById('name').value;

    let realPrice = kmUser * 0.1976;

    if (agePassenger < 18){
        realPrice = realPrice - ( realPrice * ( 0.1765 * 100 ));
    } else if (agePassenger > 65) {
        realPrice = realPrice - ( realPrice * ( 0.5327 * 100 ));
    }

    let price = realPrice.toFixed(2);

    console.log(price);

    document.getElementById('ticket').value = 'Il prezzo del tuo biglietto è: ' + price + '€';
});

