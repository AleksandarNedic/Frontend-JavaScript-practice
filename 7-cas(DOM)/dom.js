//Vežbe – DOM (querySelector,
// getElementById,
// getElementsByClassName, innerText,
// innerHTML)
let pElement = document.getElementById('paragraf1');
console.log(pElement.innerText);

//==================
let tekstElement = document.getElementsByClassName('tekst');
console.log(tekstElement[0].innerText);
//===================
let h1Element = document.querySelector('#naslov');
h1Element.innerText = 'Novi Naslov';
console.log(h1Element.innerText);
//==================
let divElement = document.querySelector('.box');
divElement.innerHTML = 'Novi sadrzaj';
console.log(divElement.innerText);
//=================
let paragraf = document.querySelector('#par1');
paragraf.innerHTML = '<strong>Bold Naslov</strong>';
//=======================
let itemJS = document.getElementsByClassName('item');
itemJS[0].innerText = 'Prvi promenjen';
//===========================
let div1 = document.getElementById('glavni');
div1.innerText += '  Dodato';
//=========================
let liElement = document.getElementsByClassName('lista');
liElement[1].innerText = 'Kruska';
//=============================
let paraElement = document.querySelector('.para');
paraElement.style.color = 'red';
//=========================
let div2Element = document.getElementById('box');
div2Element.innerHTML += '<p>Novi paragraf</p>'
//======================
let tekstVar = document.querySelector('#tekst');
tekstVar.textContent += ' +Dodatak';
//==================================
let cardVar = document.getElementsByClassName('card');
cardVar[0].innerText = 'Promenjeno'
cardVar[1].innerText = 'Promenjeno'
//===========================
let spanElement = document.getElementById('broj');
let broj = Number(spanElement.textContent);
spanElement.textContent =
broj += 5;
//===================================
let opisVar = document.querySelector('.opis');
opisVar.textContent = 'Novi opis'
//===================================
let sadrzajVar = document.querySelector('#sadrzaj');
sadrzajVar.innerHTML += '<ul><li>Prvi</li><li>Drugi</li></ul>'
//================
let paraVar = document.getElementsByClassName('para');
for (let i = 0; i < paraVar.length; i++) {
    paraVar[i].textContent = 'Promenjeno';
}
//========================================
let naslov2Var = document.querySelector('#naslov2');
naslov2Var.textContent = 'Novi Naslov 2';
//================================
let boxVar = document.getElementsByClassName('box');
boxVar[2].textContent = 'Box2 promenjen'
//========================
let para2Var = document.querySelector('#para2');
para2Var.textContent += '  + dodatni tekst'
//=================================
let glavniDivVar = document.querySelector('#glavniDiv');
glavniDivVar.innerHTML +=  '<h3>Novi naslov</h3>';
//==================================
let itemVar = document.getElementsByClassName('item');
for (let i = 0; i < itemVar.length; i++) {
    itemVar[i].textContent *= 10 ;}
//========================
let porukaVar = document.querySelector('#poruka');
porukaVar.style.color = 'blue';
//==========================
let karticaVar = document.querySelector('.kartica');
karticaVar.innerHTML += '<p>Opis kartice</p>';
//======================
let helloVar = document.querySelector('.test');
helloVar.textContent += ' World'
//============================
let divBoxVar = document.querySelector('#glavniBox');
divBoxVar.innerHTML += '<ul><li>A</li><li>B</li></ul>'
//============================
let para1Var = document.getElementsByClassName('para1');
for (let i = 0; i < para1Var.length; i++) {
    para1Var[i].textContent = 'Promenjeno';
}
//===============================
let spanVar = document.querySelector('#broj2');
let dodajBroj = Number(spanVar.innerHTML);
dodajBroj += 10;
console.log(dodajBroj);
//==============================
let cardVar2 = document.querySelector('.card1');
cardVar2.innerHTML += '<h2>Naslov</h2><p>Opis</p>'
//==================================
tekst2Var = document.querySelector('#tekst2');
tekst2Var.style.fontSize = '24px'
//===============================
let divElement3 = document.getElementsByClassName('item3');
divElement3[0].textContent = 'Prvi';
divElement3[1].textContent = 'Drugi'


