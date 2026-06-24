//Vežbe
function saberi(a, b) {
    return a+b;
}
console.log(saberi(10, 10));
//==============================================
function umnozi(a, b) {
        return a*b;
}
console.log(umnozi(5, 5));
//=========================================
function prosek(niz) {
    let zbir = 0;
    let nizLength = niz.length;
    for (let i = 0; i < niz.length; i++) {
        zbir += niz[i];
    }
    return zbir/nizLength;
}
console.log(prosek([3, 5, 2, 1]))
//=====================================
function maks(niz) {
    let najveciBroj = niz[0];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > najveciBroj) {
            najveciBroj = niz[i];
            return najveciBroj;
        }
    }
}
console.log(maks([3, 5, 2, 1]))
//==========================================
function min(niz) {
    let najmanjiBroj = niz[0];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] < najmanjiBroj) {
            najmanjiBroj = niz[i];
            return najmanjiBroj;
        }
    }

}
console.log(min([10, 12, 8, 40, 2]))
//===============================================
function duzinaStringa(str) {
    return str.length
}
console.log(duzinaStringa('aleksandar'));
//=============================================
function parnost(broj) {

        if (broj%2 === 0) {
            return 'Paran'
        }
        else {
            return 'Neparan'
        }
    }
console.log(parnost(9))
//==========================================
function pozdrav(ime) {
    return `Zdravo ${ime}`
}
console.log(pozdrav('Aleksandar'))
//===============================
function kvadrat(broj) {
    return broj*broj
}
console.log(kvadrat(10))
//=================================
function obrniString(str) {
        return str.split('').reverse().join('')
}
console.log(obrniString('Aleksandar'))
//==========================================
function sumParnih(niz) {
    let rezultat = [];
    for (let i = 0; i < niz.length; i++) {
        if(niz[i]%2 === 0) {
            rezultat.push(niz[i]);
        }
    }
    return rezultat
}
console.log(sumParnih([10, 20, 3, 6]))
//===============================
function brojNeparih(niz) {
    let rezultat = [];
    for (let i = 0; i < niz.length; i++) {
        if(niz[i]%2 !== 0) {
            rezultat.push(niz[i]);
        }
    }
    return rezultat
}
console.log(brojNeparih([10, 20, 3, 6]))
//======================================
function najcesciElement(niz) {
    let countElement = {};
    let maxCount = 0;
    let najcesci = [];
    for (let i = 0; i < niz.length; i++) {
       let broj = niz[i];
       countElement[broj] = (countElement[broj] || 0) + 1;
       if (countElement[broj] > maxCount) {
           maxCount = countElement[broj];
           najcesci = broj;
       }
    }
    return najcesci;
}
console.log(najcesciElement([10, 10, 2, 4, 4, 3, 1, 3, 3]))
// bez chatgpt nista xD
//============================================
function slovoMaX(str, slovo) {
    let brojPonavljanja = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === slovo.toLowerCase()) {
            brojPonavljanja++
        }
    }
    return brojPonavljanja;
}
console.log(slovoMaX('Aleksandar', 'A'))
//==================================================
function ispisiUloge(uloge) {
    let rezultat = [];
    for (let i = 0; i < uloge.length; i++) {
        if (uloge[i] === '1') {
            rezultat.push('admin');
        }
        else if (uloge[i] === '2') {
            rezultat.push('guest');
        }
        else if (uloge[i] === '3') {
            rezultat.push('user');
        }
    }
    return rezultat
}
console.log(ispisiUloge('[1, 2, 3, 1, 1]'))
//============================================
function duzinaNiza(niz) {
    let nizElement = [];
     for (let i = 0; i < niz.length; i++) {
         nizElement.push(niz[i]);
     }
     return nizElement.length;
    }
console.log(duzinaNiza(['aleksandar', 'Marko', 'Hello', 4, 5]))
//=============================================
function proveriPrvi(niz, broj) {
        if (niz[0] === broj) {
            return true
        }
        else {
            return false
        }
    }


console.log(proveriPrvi([10, 20 , 6, 4], 10))
//==================================
function srednjaVrednost(niz) {
    let sredina = Math.floor(niz.length / 2);
    return niz[sredina]
}

console.log(srednjaVrednost(['Aco', 'Beograd', 'Ceca']))
//=====================================
function ispisiParniString(niz) {
    let parniBrojevi = [];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i]%2 === 0) {
            parniBrojevi.push(niz[i]);
        }
    }
    return `Parni brojevi su: ${parniBrojevi}`
}
console.log(ispisiParniString([10, 20, 3, 5, 6]))
//=====================================
function spojiImena(niz) {
        return niz.join(', ')
}
console.log(spojiImena(['Aleksandar', 'Ana', 'Toma', 'Marko']))





