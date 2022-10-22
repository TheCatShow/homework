console.log ("*******Zadanie 1*******");

function checkNumb(a) {
    if (a > 89) {
        console.log('A');
    } else if(a > 79) {
        console.log('B');
    } else if(a > 69) {
        console.log('C');
    } else if(a > 59) {
        console.log('D');
    } else {
        console.log('F');
    }
}

checkNumb(94);

console.log ("*******Zadanie 2*******");

function getMonth(a) {
    if (a.toLowerCase() == 'весна') {
        console.log('март, апрель, май');
    } else if (a.toLowerCase() == 'лето') {
        console.log('июнь, июль, август');
    } else if (a.toLowerCase() == 'зима') {
        console.log('декабрь, январь, февраль');
    }
}

getMonth('Зима');

console.log ("*******Zadanie 3*******");

function getRandom(a) {
    var randomNumber = Math.floor(Math.random() * 101); {
        console.log(randomNumber);
    }
    var randomNumber = Math.floor(Math.random() * 101); {
        console.log(randomNumber);
    }
    var randomNumber = Math.floor(Math.random() * 101); {
        console.log(randomNumber);
    }
}

getRandom();