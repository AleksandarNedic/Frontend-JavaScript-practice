//Vežbe – Funkcije
function pozdravi () {
    console.log('Zdravo')
}
pozdravi();
//===============================
function pozdraviIme (ime) {
    console.log(`Zdravo, ${ime}`)
}
pozdraviIme('Aleksandar')
//========================================
function ispisiBroj (broj) {
    console.log(`Broj je ${broj}`)
}
ispisiBroj('20')
//=========================================
function ispisiNiz (niz) {
    for (let i = 0; i < niz.length; i++) {
        console.log(`${niz[i]}`);
    }

}
ispisiNiz(['JS', "HTML", 'CSS'])
//==================================
function  ispisiParne (brojevi) {
    for (let i = 0; i < brojevi.length; i++) {
        if (brojevi[i]%2 === 0) {
            console.log(`${brojevi[i]}`);
        }
    }
}
ispisiParne([2, 10, 15, 19, 25, 16]);
//=================================
let divContainer = document.querySelector('#container');
function dodajParagraf (tekst) {
       let paragraf = document.createElement('p')
       paragraf.innerHTML = tekst;
       divContainer.appendChild(paragraf);
}
dodajParagraf('Hello World!')
//===============================
let divElement = document.querySelector('#coloredDiv');
function promeniBoju (boxId, boja) {
    divElement.style.height = '20px';
    divElement.style.width = '20px';
    divElement.style.backgroundColor = boja;
}
promeniBoju(divElement, 'blue');
//==============================
function ispisiPozdravImeGodine (ime, godine) {
    console.log(`Zdravo ${ime}! Imas ${godine} godina!`);
}
ispisiPozdravImeGodine('Aleksandar', '23')
//=================================
divElement = document.querySelector('#listDiv');
function ispisiListe (niz) {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < niz.length; i++) {
        let listElement = document.createElement('li');
        listElement.innerHTML = niz[i];
        ulElement.appendChild(listElement);
        divElement.appendChild(ulElement);
    }
}
ispisiListe(['Beograd', 'Bijeljina', 'Zagreb', 'Novi Sad'])
//=========================================
let divE = document.querySelector('#container2');
function dodajNaslov(tekst) {
    let h2Element = document.createElement('h2');
     h2Element.innerHTML = tekst;
     divE.appendChild(h2Element);
}

dodajNaslov('Naslov Funkcije');
//===========================
function proveriParnost(broj) {
    if (broj%2 === 0) {
        console.log('Broj je paran')
    }
    else {
        console.log('Broj je neparan')
    }
}
proveriParnost(10);
//=================================
function ispisiUloge(niz) {
    for (let i = 0; i < niz.length; i++) {
        switch (niz[i]) {
            case 'Admin':
                console.log(`Admin pristup`);
                break;
                case 'User':
                    console.log(`User pristup`);
                    break;
            case 'Guest':
                console.log(`Guest pristup`);
                break;
        }
    }
}
ispisiUloge(['Admin', 'Guest', 'User', 'Guest'])
//===================================
function  ispisiKvadrate(niz) {
    for (let i = 0; i < niz.length; i++) {
        console.log(niz[i]*niz[i]);
    }
}
ispisiKvadrate([2, 10, 12, 8]);
//===============================================
let container = document.querySelector('#container3');
function dodajBox (tekst, boja) {
    let box = document.createElement('div');
    box.innerHTML = tekst;
    box.style.color = boja;
    container.appendChild(box);
}
dodajBox('Tekst unutar diva', 'red')
//=====================================
function pozdraviSve (nizImena) {
   for (let i = 0; i < nizImena.length; i++) {
       console.log(`Zdravo ${nizImena[i]}`);
   }
}
pozdraviSve(['Marko', 'Toma', 'Sofija']);
//=======================================
function ispisiDuzinuStringa (string) {
    for (let i = 0; i < string.length; i++) {
        console.log(`Duzina stringa je ${string.length}`);
        return;
    }

}
ispisiDuzinuStringa('aleksandar')
//=========================================
function dodajParagrafove(nizTekstova) {
    for (let i = 0; i < nizTekstova.length; i++) {
        let paragraf = document.createElement('p');
        paragraf.innerHTML = nizTekstova[i];
        container.appendChild(paragraf);
    }
}
dodajParagrafove(
    ['Aleksandar', 'Dobar Dan', 'Beograd', 'Java Script']);
//==========================================
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let boje = ['red', 'green', 'blue'];
box3.style.width = '20px';
box3.style.height = '20px';
box2.style.width = '20px';
box2.style.height = '20px';
box1.style.width = '20px';
box1.style.height = '20px';

function promeniSveBoje (nizId, boja) {
    for (let i = 0; i < nizId.length; i++) {
        let element = document.getElementById(nizId[i]);
        element.style.backgroundColor = boja[i];
    }
}
promeniSveBoje(['box1', 'box2', 'box3'], boje)
//=======================
function ispisiOcene(niz) {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] === 5) {
            console.log('Odlican');
        }
        else if (niz[i] === 4 || niz[i] === 3) {
            console.log('Dobar');
        }
        else {
            console.log('Nedovoljan');
        }
    }
}
ispisiOcene([1, 2, 3, 4, 5])
//==================================
function ispisiNizUDiv (niz, divId) {
    let container = document.querySelector(divId);
    for (let i = 0; i < niz.length; i++) {
        let paragraf = document.createElement('p');
        paragraf.innerHTML = niz[i];
        container.appendChild(paragraf);
    }

}
ispisiNizUDiv(['Beograd', 'Novi Sad', 'Bijeljina'], '#container')