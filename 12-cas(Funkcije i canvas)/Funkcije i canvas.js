//Vežbe


function   napraviCanvas(width, height) {
      let divElement = document.querySelector('#container');
      let canvasElement = document.createElement("canvas");
        canvasElement.id = "myCanvas";
      canvasElement.width = width;
      canvasElement.height = height;
      divElement.appendChild(canvasElement);
}
napraviCanvas(700, 700)
//====================================
let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

function crtajKrug(ctx, x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill()
}
crtajKrug(ctx,  100, 100, 50, 'red')
//=========================================
function crtajPravougaonik(ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);


}
crtajPravougaonik(ctx, 300, 300, 100, 50,  'red');
//=====================================
function povecajBroj(broj) {
    return broj+1
}
let noviBroj = povecajBroj(5)

ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText(noviBroj, 100, 100);
//=================================
function nasumicnaBoja() {
    let r  = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b  = Math.floor(Math.random() * 255);

    return `rgb(${r} ${g} ${b})`;
}
console.log(nasumicnaBoja())
//=========================
function crtajLiniju(ctx, x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
}
crtajLiniju(ctx, 300, 300, 100, 100, 'red');
//===============================================
function prosekNiza(niz) {
    let rezultat = 0;
    for (let i = 0; i < niz.length; i++) {
        rezultat += niz[i];
    }
    return rezultat / niz.length
}
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText(prosekNiza([10, 10, 5, 3, 6]), 330, 330);
console.log(prosekNiza([10, 10, 5, 3, 6]))
//=================================
function nasumicnaVelicina() {
    let velicina = Math.floor(Math.random() * 200);
    return velicina
}
function crtajKombinaciju(ctx) {
    crtajKrug(ctx, 200, 200, nasumicnaVelicina(), nasumicnaBoja());
    crtajKrug(ctx, 500, 300, nasumicnaVelicina() , nasumicnaBoja());
    crtajKrug(ctx, 700, 400, nasumicnaVelicina(), nasumicnaBoja());

}

crtajKombinaciju(ctx);
//============================
function maksBroj(niz) {
    let broj = 0;
    let najveciBroj = 0;
    for (let i = 0; i < niz.length; i++) {
        broj = niz[i];
        if(broj > najveciBroj) {
            najveciBroj = broj;
        }
    }
    return najveciBroj;
}
function crtajKvadrat(ctx, x, y, width, height,  color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}
crtajKvadrat(ctx, 300, 600, maksBroj([20, 10, 15, 22, 60]), maksBroj([20, 10, 15, 22, 60]), 'red');
//=============================================
function ispisiTekst(ctx, tekst, x, y, color) {
    ctx.font = "30px Arial";
    ctx.fillStyle = color;
    ctx.fillText(tekst, x, y);
    return tekst

}
ispisiTekst(ctx, 'Hello World!', 200, 600, 'yellow');