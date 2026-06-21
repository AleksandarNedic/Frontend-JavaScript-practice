//Vežbe

let mainVR = document.querySelector("#main");
let paragraf = document.createElement('p')
    paragraf.textContent = 'Dobrodosao';
paragraf.style.fontSize = '18px';
mainVR.appendChild(paragraf);
//============================
let names = ['Petar', 'Luka', 'Maja', 'Gojko'];
for (let i = 0; i < names.length; i++) {
    if (names[i].includes('a')) {
        let paragrafVar = document.createElement('p');
        paragrafVar.textContent = `${names[i]} sadrzi slovo a`;
        mainVR.appendChild(paragrafVar);
    }
}
//=========================================
let score = 88;
let  paragraf1 = '';
paragraf1 = document.createElement('p');
paragraf1.textContent = score >= 70 ? 'pass' : 'fail';
mainVR.appendChild(paragraf1);
//============================================
let numbers = [3, 6, 9, 12, 15];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%3 === 0) {
        let pVar = document.createElement('p');
        pVar.textContent = `Broj ${numbers[i]} je deljiv sa 3`;
        mainVR.appendChild(pVar);
    }
}
//=====================================
let divVar = document.querySelector('.container');
let colors = ['red', 'green', 'blue', 'yellow'];
for (let i = 0; i < colors.length; i++) {
    let spanVar = document.createElement('span');
    spanVar.textContent = `Element ${colors[i]}`;
    spanVar.style.color = colors[i];
    divVar.appendChild(spanVar);
    console.log(spanVar);
}
//================================================
let products = ['Mleko', 'Hleb', 'Sir'];

for (let i = 0; i < products.length; i++) {
    let quantitys = Math.floor(Math.random() * 100) + 1;
    listVar = document.createElement('li');
    listVar.textContent = `${products[i]} QTY: ${quantitys}`;
    divVar.appendChild(listVar);
}
//=====================================
let h1Var = document.querySelector('#naslov');
if ('Hello World '.length > 5) {
    paragrafs = document.createElement('p')
    paragrafs.textContent = 'Long title'
    h1Var.appendChild(paragrafs);
}
else {
    let paragrafs = document.createElement('p');
    paragrafs.textContent = 'Short title';
    h1Var.appendChild(paragrafs);
}
//================================
let grades =  [1, 3, 5, 2, 4,];
let result = 0;
let average = 0;
for (let i = 0; i < grades.length; i++) {
    result += grades[i];
}
average =  result / 5;

let prosekVar = document.querySelector('#prosek');
prosekVar.textContent = `The average of these numbers is ${average}`;
//=======================================
let gradovi = ['Beograd', 'Novi Sad', 'Nis', 'Subotica'];
for (let i = 0; i < gradovi.length; i++) {
    if (gradovi[i] === 'Nis') {
        continue;

    }
    console.log(gradovi[i]);
    let gradoviVar = document.querySelector('#listaGradova');
    let nizGradova = document.createElement('li')
    nizGradova.textContent = `${gradovi[i]}`;
    gradoviVar.appendChild(nizGradova);
}
//====================================================
let boxes = document.querySelector('#boxes');
let colorss = ['red', 'green', 'blue', 'yellow'];
for (let i = 0; i < 4; i++) {
    let box = document.createElement('div');
    box.style.backgroundColor = colorss[i];
    box.style.width = '20px';
    box.style.height = '20px';
    boxes.appendChild(box);
}
//==================================================

let uloge = ['admin', 'user', 'guest'];
for (let i = 0; i < uloge.length; i++) {
    let list = document.createElement('li')
    switch (uloge[i]) {
        case 'admin':
            list
            list.textContent = 'Pun pristup'
            boxes.appendChild(list);
            break;
        case 'user':
            list
            list.textContent = 'Ogranicen pristup'
            boxes.appendChild(list);
            break;
        case 'guest':
            list
            list.textContent = 'Samo citanje'
            boxes.appendChild(list);
            break;
    }
}
//====================================================
let inputVar = document.querySelector('#textInput');
let charCountP = document.querySelector('#charCount');
inputVar.addEventListener('input', (e) => {
    charCountP.textContent = e.target.value.length ;
})
//=======================================
let toggleButton = document.querySelector('#toggleBtn');
let infoVar = document.querySelector('#info');
infoVar.style.opacity = '1';
toggleButton.addEventListener('click', (e) => {
    if (infoVar.style.opacity === '1') {
        infoVar.style.opacity = '0';
    }
    else
    {infoVar.style.opacity = '1';}
})
//===========================================
let parniVar = document.querySelector('#parni');
let cifre = [0, 1, 2, 3, ,4 ,5, 6, 7, 8, 9];
for (let i = 0; i < cifre.length; i++) {
    if (cifre[i]%2 === 0) {
        let par = document.createElement('li')
        par.textContent = `${cifre[i]}`;
        parniVar.appendChild(par);
    }
}
//================================================
let colorBox = document.querySelector('#colorBox');

colorBox.style.height = '50px';
colorBox.style.width = '50px';
colorBox.addEventListener('mouseover', (e) => {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).
    toString(16);
    colorBox.style.backgroundColor = randomColor;
})
colorBox.addEventListener('mouseout', (e) => {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).
    toString(16);
    colorBox.style.backgroundColor = randomColor;});
//=========================================
let flexContainer = document.querySelector('#flexContainer');
for (let i = 0; i < 5; i++) {
    let p = document.createElement('p');
    p.textContent = `Red ${i + 1}`;
    if (i % 2 === 0) {
        p.style.fontStyle = 'italic';
    }
    flexContainer.appendChild(p);
}
//===========================================
let results = document.querySelector('#rezultat');
let ocene = [5, 4, 3, 2, 1];
for (let i = 0; i < ocene.length; i++) {
    if (ocene[i] === 5) {
        let paraGraf = document.createElement('p');
        paraGraf.textContent = 'Odlican'
        results.appendChild(paraGraf);
    }
    else if (ocene[i] === 4 || ocene[i] === 3) {
        let paraGraf = document.createElement('p');
        paraGraf.textContent = 'Dobar'
        results.appendChild(paraGraf);
    }
    else {
        let paraGraf = document.createElement('p');
        paraGraf.textContent = 'Dovoljan'
        results.appendChild(paraGraf);
    }
}
//================================================
let addBtn = document.querySelector('#addCard');
let cardsDiv = document.querySelector('#cards');
addBtn.addEventListener('click', (e) => {
    let h2Element = document.createElement('h2');
    h2Element.textContent = `Naslov`;
    let p2Element = document.createElement('p');
    p2Element.textContent = `Opis`;
    cardsDiv.appendChild(h2Element);
    cardsDiv.appendChild(p2Element);
})
//=============================================
let voce = ["Jabuka","Banana","Kruska","Ananas"];
for (let i = 0; i < voce.length; i++) {
    if (voce[i].length >= 5) {
        let fruitList = document.createElement('li')
            fruitList.textContent = `Voce:${voce[i]}`;
        console.log(fruitList);
        document.querySelector('#vocke').appendChild(fruitList);
    }
}
//==========================================
let numbersVar = document.querySelector('#numbers');
let niz = [2,4,6,8];
for (let i = 0; i < niz.length; i++) {
    let nizP= document.createElement('p');
    nizP.textContent = niz[i] * niz[i];
    numbersVar.appendChild(nizP);
}
//==========================
let inputElement = document.querySelector('#focusInput');
inputElement.addEventListener('focus', (e) => {
    inputElement.style.backgroundColor = '#90EE90';
})
//==============================
let blurInput = document.querySelector('#blurInput');
blurInput.addEventListener('blur', (e) => {
    blurInput.style.backgroundColor = '#90EE90';
})
//======================================================
let doubleClickP = document.querySelector('#doubleClick');
doubleClickP.addEventListener('dblclick', (e) => {
    doubleClick.textContent = 'Kliknuto dvaput';
})
//=============================================
let grades2 = [3, 4, 5, 2];
let countParagraf = document.querySelector('#count');
for (let i = 0; i < grades2.length; i++) {
    if (grades2[i] > 3 ) {
        let p = document.createElement('p');
        p.textContent = `${grades2[i]}`;
        countParagraf.appendChild(p);
    }
}
//==================================
let divElement = document.querySelector('#hoverEffect');
divElement.style.width = '50px';
divElement.style.height = '50px';
divElement.style.backgroundColor = '#90EE90';
divElement.addEventListener('mouseover', (e) => {
    let randomColorGenerator =  '#' + Math.floor(Math.random() * 16777215).
    toString(16);
    divElement.style.backgroundColor = randomColorGenerator;
})
divElement.addEventListener('mouseout', (e) => {
    let randomColorGenerator =  '#' + Math.floor(Math.random() * 16777215).
    toString(16);
    divElement.style.backgroundColor = randomColorGenerator;})
//============================================
let addBtnList = document.querySelector('#addItemBtn');
let itemsList = document.querySelector('#items');
addBtnList.addEventListener('click', (e) => {
    let list = document.createElement('li');
    list.textContent = `Nova Stavka`;
    itemsList.appendChild(list);
})
//=================================
let namesDiv = document.querySelector('#names');
let names3 = ['Ana', 'Maja', 'Ivan', 'Luka'];
for (let i = 0; i < names3.length; i++) {
    let namesParagraf = document.createElement('p');
    namesParagraf.textContent = `Ime: ${names3[i]}`;
    namesDiv.appendChild(namesParagraf);
}
//===================================
let divCointainer = document.querySelector('#boxesContainer');
for (let i = 0; i < 3; i++) {
    let randomColors = ['red', 'green', 'blue'];
    let divElement = document.createElement('div');
    divElement.textContent = `Box X ${i + 1}`;
    divElement.style.backgroundColor = randomColors[i];
    divCointainer.appendChild(divElement);
}
//=============================
let container = document.querySelector('#container');
let brojevi = [5, 10, 15, 20, 25];

for (let i = 0; i < brojevi.length; i++) {

    let p = document.createElement('p');

    switch (brojevi[i] % 5 === 0) {
        case true:
            p.textContent = 'Deljiv sa 5';
            break;

        case false:
            p.textContent = 'Nije deljiv';
            break;
    }

    container.appendChild(p);
}
//=================================
let lootTextElement = document.querySelector('#loopText');
for (let i = 0; i < 5; i++) {
    let p = document.createElement('p');
    p.textContent = `Paragraf X`;
    if (i%2 === 0) {
        p.style.color = 'blue';
    }
    lootTextElement.appendChild(p);
}

