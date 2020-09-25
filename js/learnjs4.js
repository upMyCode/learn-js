'use strict'

const person = {
    name : 'Johan',
    phone : '1111111',
    parents : {
        mom : 'Helga',
        dad : 'Ragnar'
    }
};

const clone = JSON.parse(JSON.stringify(person));

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');



inputRub.addEventListener('change', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset= utf-8');
    request.send();
    request.addEventListener('readystatechange', () => {
        if(request.readyState == 4 && request.status == 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else{
            inputUsd.value = 'Ops';
        }
    });
});