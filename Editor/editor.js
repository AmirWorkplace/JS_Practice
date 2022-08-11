/* ====================================>> Day 01 Started <<==================================== */
const body = document.querySelector('body');

function createDiv() {
  let elementCount = 200;
  var i = 0;

  for (var m = 0; m <= elementCount; m++) {
    let element = document.createElement('span');
    body.appendChild(element);
  }

  let x = Math.random() * 3 + 1;
  let y = Math.random() * 2 + 2;

  let spanAll = document.querySelectorAll("body span");

  spanAll.forEach((getSpanAll) => {
    getSpanAll.style.height = x + 'px';
    getSpanAll.style.width = y + 'px';
    // getSpanAll.style.background =  '#f00';
  });



}

createDiv();









/* ====================================>> Day 01 Endeds <<===================================== */
/* ====================================>> Day 02 Started <<==================================== */
/* ====================================>> Day 02 Endeds <<===================================== */
/* ====================================>> Day 07 Started <<==================================== */
/* ====================================>> Day 07 Endeds <<===================================== */
/* ====================================>> Day 08 Started <<==================================== */
/* ====================================>> Day 08 Endeds <<===================================== */