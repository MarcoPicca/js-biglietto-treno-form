const buttonClick = document.querySelector('button');

buttonClick.addEventListener('click', function(){
    let kmUser = kmUser.className('km');
    let agePassenger = document.getElementsById('age');

    let realPrice = kmUser * 0.1976;

    if (agePassenger < 18){
        realPrice = realPrice - ( realPrice * ( 0.1765 * 100 ));
    } else if (agePassenger > 65) {
        realPrice = realPrice - ( realPrice * ( 0.5327 * 100 ));
    }

    let price = realPrice.toFixed(2);

    console.log(price);
});

