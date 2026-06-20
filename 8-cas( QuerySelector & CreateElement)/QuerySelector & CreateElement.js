//Vežbe – Kombinovane (20 vežbi)

let divVar = document.querySelector('#glavni');
let p = document.createElement('p');
p.textContent = 'Zdravo';
divVar.appendChild(p);
console.log(divVar);
//======================
let imena = ['Ana','Marko', 'Jovan' ];
let listaVar = document.querySelector('#lista');
for (let i = 0; i < imena.length; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = imena[i];
    listaVar.appendChild(liElement);
}
//================================
let broj = 10;
let parVar = document.querySelector('#par');
if ( broj > 10 ) {
    parVar.textContent = 'Broj je veci od 10';
}
else if (broj === 10) {
    parVar.textContent = 'Broj je jednak 10';
}
else {parVar.textContent = 'broj je manji od 10';}
//=====================================
let zbirParagraf = document.querySelector('#zbir');
let ocene = [5, 3, 4, 2, 5];
let zbirVar = 0;
for (let i = 0; i < ocene.length; i++) {
    zbirVar += ocene[i];
}
let spanElement = document.createElement('span');
spanElement.textContent = zbirVar;
zbirParagraf.appendChild(spanElement);

//======================================================
let divElement = document.querySelector('#box');
let h2Element = document.createElement('h2');
h2Element.textContent = 'Naslov';
let paragrafElement = document.createElement('p');
paragrafElement.textContent = 'Opis';
divElement.appendChild(h2Element)
divElement.appendChild(paragrafElement);
//==========================
let ulElement = document.querySelector('#gradovi');
let gradovi = ['Beograd', 'Novi Sad', 'Nis'];

for (let i = 0; i < gradovi.length; i++) {
    if(gradovi[i][0] === 'N') {
        let liElement = document.createElement('li');
        liElement.textContent = gradovi[i];
        ulElement.appendChild(liElement);
    }
}
//=======================================
let cardVar = document.querySelector('.card');
let h3Element = document.createElement('h3')
    h3Element.textContent = 'Kartica';
let paragraf = document.createElement('p')
    paragraf.textContent = 'Opis kartice'
cardVar.appendChild(h3Element);
cardVar.appendChild(paragraf);
//==================================
let poeni = 72;
rezultatVar = document.querySelector('#rezultat');
if (poeni > 70) {
    rezultatVar.textContent = 'Odlican';
}
else if (poeni > 30 && poeni <= 70) {
    rezultatVar.textContent = 'Dobar';
}
else {rezultatVar.textContent = 'Nedovoljan';}
//===================================
let numbers = [2,4, 6, 8, 10];
for (let i = 0; i < numbers.length; i++) {
    let liElement = document.createElement('li');
    liElement.setAttribute('ID', 'liVar');
    liElement.textContent = numbers[i];
    document.querySelector('#listaBrojeva').
    appendChild(liElement);
}
//============================================
let containerVar = document.querySelector('#container');
let brojke = [1, 2, 3, 4, 5];
for (let i = 0; i < brojke.length; i++) {
    let paragrafX = document.createElement('p');
    paragrafX.textContent = `Paragraf ${brojke[i]}`;
    containerVar.appendChild(paragrafX);
}
//====================================
let uloge = ['admin', 'user', 'guest'];
let ulogeVar = document.querySelector('#uloge');
for (let i = 0; i < uloge.length; i++) {
    switch (uloge[i]) {
        case 'admin':
    let liVar = document.createElement('li')
        liVar.textContent = 'admin pristup';
    ulogeVar.appendChild(liVar);
    console.log(ulogeVar);
    break;
    case 'user':
      let liVar1 = document.createElement('li');
        liVar1.textContent = 'korisnik';
        ulogeVar.appendChild(liVar1);
        break;
        case 'guest':
            let liVar2 = document.createElement('li');
            liVar2.textContent = 'gost';
            ulogeVar.appendChild(liVar2);
            break;
}}
//============================
let statusiVar = document.querySelector('#statusi');
let statusi = [true, false, true];
for (let i = 0; i < statusi.length; i++) {
    let listVar = document.createElement('li');
    if (statusi[i] === true) {
            listVar.textContent = 'Ulogovan';
        statusiVar.appendChild(listVar);
    }
    else {
        listVar.textContent = 'Nije ulogovan';
        statusiVar.appendChild(listVar);
    }
}
//=================================
let tekstVar = document.querySelector('#tekst');
tekstVar.innerHTML += '  <strong>Novi tekst u bold</strong>'
//================================
let brojevi = [1, 3, 5, 7, 9];
let neparniVar = document.querySelector('#neparni');
for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i]%2 !== 0) {
       let neparnLi = document.createElement('li');
       neparnLi.textContent = brojevi[i];
       neparniVar.appendChild(neparnLi);
    }
}
//=======================================
let box2Var = document.querySelector('.box2');
let pVar = document.createElement('p');
pVar.style.color = 'blue';
pVar.textContent = 'Hello';
box2Var.appendChild(pVar)
//======================================
let imenaVar = document.querySelector('#imena');
let imena2 = ['Ana', 'Marko', 'Jovan'];
for (let i = 0; i < imena2.length; i++) {
    if (imena2[i].length > 3) {
        let liVar2 = document.createElement('li');
        liVar2.textContent = imena2[i];
        imenaVar.appendChild(liVar2);

    }
}
//===================================
let glavniVar = document.querySelector('#glavni2');
let h2Var = document.createElement('h2');
h2Var.textContent = 'Naslov';
let paragraf2Var = document.createElement('p');
paragraf2Var.textContent = 'Paragraf';
glavniVar.appendChild(h2Var);
glavniVar.appendChild(paragraf2Var);
let paragrafs = document.getElementsByTagName('p');
console.log(paragrafs);
paragrafs[paragrafs.length - 1].textContent = 'Promenjen paragraf';
//===================================
let brojevi3 = [10, 20, 30, 40, 50];
let listaBrojevaVar = document.querySelector('#listaBrojeva2');
for (let i = 0; i < brojevi3.length; i++) {
    let liVar3 = document.createElement('li');
    liVar3.textContent = `Broj ${brojevi3[i]}`;
    listaBrojevaVar.appendChild(liVar3);
}
//========================================
let containerVar1 = document.querySelector('.container2');
let pContainer = document.createElement('p');
pContainer.textContent = 'Paragraf1';
containerVar1.appendChild(pContainer);
for (let i = 2; i <= 4; i++) {
    let p = document.createElement('p');
    p.textContent = `Paragraf ${i}`;
    containerVar1.appendChild(p);
}
//==================================
let oceneVar = document.querySelector('#ocena');
let grades = [5, 4, 3, 2, 1];
for (let i = 0; i < grades.length; i++) {
    let lista = document.createElement('li');
    if (grades[i] === 5) {
        lista.textContent = 'Odlican';
        oceneVar.appendChild(lista);
    }
     else if (grades[i] === 4 || grades[i] === 3 ) {
        lista.textContent = 'Dovoljan';
        oceneVar.appendChild(lista);
    }
    else {
        lista.textContent = 'Nedovoljan'
        oceneVar.appendChild(lista);
    }
}












