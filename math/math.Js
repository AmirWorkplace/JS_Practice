console.log(" ");

let arr = [100, 100];


function getRandonNumber(amounts) {


  function randomNum() {
    let ranNo1 = (Math.random() * 20) + (Math.random() * 5) + 5 + (Math.random() * 50) + 6;

    let ranNo2 = (Math.random() * 10) + (Math.random() * 15) + (2 ** 2) + (Math.random() ** 300);

    let ranNum1 = (45/12) + 2 * (1.36**2)/2 + ranNo1;
    let ranNum2 = 0.36 * (ranNo2 ** 1.62);

    if (ranNum1 < 20){
      ranNum1 += 5; 
    } else if (ranNum1 < 20) {
      ranNum1 += 100; 
    } else if (ranNum1 < 23) {
      ranNum1 += 105;
    } else if (ranNum1 < 26) {
      ranNum1 += 200;
    } else if (ranNum1 < 29) {
      ranNum1 += 236;
    } else if (ranNum1 < 32) {
      ranNum1 += 500;
    } else if (ranNum1 < 36) {
      ranNum1 += 460;
    } else if (ranNum1 < 39) {
      ranNum1 += 100;
    } else if (ranNum1 < 42) {
      ranNum1 += 500;
    } else if (ranNum1 < 45) {
      ranNum1 += 331;
    } else if (ranNum1 < 48) {
      ranNum1 += 130;
    } else if (ranNum1 < 51) {
      ranNum1 += 801;
    } else if (ranNum1 < 54) {
      ranNum1 += 7;
    } else if (ranNum1 < 57) {
      ranNum1 += 896;
    } else if (ranNum1 < 60) {
      ranNum1 += 335;
    }else{
      ranNum1 = ranNum1;
    }

    let getNum = (ranNum1 <= 30 ? ranNum1 = (ranNum1 + ranNum2) : ranNum1 = ranNum1);
    return getNum;
  }

  let arryNumber = [];
  let amount = (amounts - 1);
  for (let i = 0; i <= amount; i++) {
    arryNumber.push(randomNum());
  }

  function averageCalculator() {
    let sum = 0;

    for (let i = 0; i <= (arryNumber.length - 1); i++) {
      sum = sum + arryNumber[i];
    }

    let result = sum / arryNumber.length;

    let results = parseFloat(result).toFixed(3);
    // let mainResults = `The average result is : ${results} !`;
    return results;
  }  


  return averageCalculator();
};
function getRandonNumberResults(data){
  let mainResults = `The average result is : ${getRandonNumber(data) } !`;
  return mainResults;
}


console.log(getRandonNumberResults(100));
console.log(getRandonNumberResults(139));

let a = getRandonNumber(2) + 'px';
let b = getRandonNumber(3) + 'px';
let c = getRandonNumber(11) + 'px';
let d = getRandonNumber(33) + 'px';
let e = getRandonNumber(49) + 'px';
console.log(a,b,c,d,e);



function createDivElements(amount) {
  var count = 0;

  for (count = 0; count <= amount; count++) {
    document.querySelector('.createDiv').appendChild(document.createElement('div'));
  }
} createDivElements(10);

const div = document.querySelectorAll('.createDiv div');

/*

|| ranNum1 < 23 || ranNum1 < 26 || ranNum1 < 29 || ranNum1 < 31 || ranNum1 < 34 || ranNum1 < 37 || ranNum1 < 40 || ranNum1 < 40


function averageCalculator(arryNumber) {
  let sum = 0;

  for (let i = 0; i <= (arryNumber.length - 1); i++) {
    sum = sum + arryNumber[i];
  }

  let result = sum / arryNumber.length;

  let results = parseFloat(result).toFixed(3);
  let mainResults = `The average result is : ${results} !`;
  // console.log(mainResults);
  return mainResults;
}


console.log(averageCalculator(getRandonNumber(100)));











/*
  let arrb = [
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),100000,
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber(),
    getRandonNumber()
  ];
console.log(arrb, arrb.length);




function averageCalculator(arryNumber){
  let sum = 0;

  for (let i = 0; i <= (arryNumber.length -1); i++) {
    sum = sum + arryNumber[i];
  }

  let result = sum / arryNumber.length;

  let results = parseFloat(result).toFixed(3);
  let mainResults = `The average result is : ${results} !`;
  console.log(mainResults);
  return mainResults;
}

averageCalculator([10, 20, 30]);
let h = averageCalculator(arrb);

function createDivElements(amount) {
  var count = 0;

  for (count = 0; count <= amount; count++) {
    document.querySelector('.createDiv').appendChild(document.createElement('div'));
  }
}createDivElements(10);

const div = document.querySelectorAll('.createDiv div');


// 2nd
let arrb1 = [
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber(),
  getRandonNumber()
];
let arrb3 = [getRandonNumber(), getRandonNumber(), getRandonNumber(), getRandonNumber(), getRandonNumber(), 10020, -2300, 25, 60, 29, 84,693, (2**10)/5];
div[1].innerHTML = averageCalculator(arrb);
div[2].innerHTML = averageCalculator(arrb1);
div[3].innerHTML = averageCalculator(arrb3);
console.log('');
console.log('');


*/














function arrayfirst(amounts) {
  let arr2 = [];
  let amount = (amounts - 1);
  for (let i = 0; i <= amount; i++) {
    arr2.push(i);
  }
  console.log(arr2);
  return arr2;
} arrayfirst(10);
