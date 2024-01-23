let arrCol = ["red", "yellow", "blue"];

let intColSize = arrCol.length;
let intCol= 0;

let x = document.getElementById("bdy");

function btnPressed() {
    let rndNo = Math.floor(Math.random() * intColSize);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    x.style.backgroundColor = arrCol[rndNo];
}
x.addEventListener('click', btnPressed);