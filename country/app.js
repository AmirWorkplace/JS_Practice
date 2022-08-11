'use strict';

const amir = function () {
  let x = Math.random();

  let ranNo1 = ((x * 0.5666) * ((x + 1) * 0.346) + 5 + (x ** 1.2682)) + (((x * 9) + 1.5567) * x + (((5 ** x) + 4.659) + (x * 1.966) + 2.65891) + (x * 3.9287584));

  let ranNo2 = ((x * 1.5666) * ((x + 1.5621) * 0.346) + 2 + (x ** 4.2682)) + (((x * 1.6752) + 3.5567) * x + (((5 ** x) + 2.659) + (x * 1.966) + 2.67891) + (x * 3.9287584));

  let ranNo3 = ((x * 6.5666) * ((x + 3.565) * 2.346) + 5 + (x ** 1.2682)) + (((x * 9) + 1.5567) * x + (((5 ** x) + 0.659) + (x * 1.966) + 2.65891) + (x * 0.9287584));

  let ranNo4 = ((x * 100.5666) * ((x + 10.67) * 0.346) + 1 + (x ** 0.2682)) + (((x * 9.75947) + 1.5567) * x + (((5 ** x) + 4.659) + (x * 1.966) + 2.65891) + (x * 9.9287584));

  // console.log((ranNo1,ranNo2,ranNo3,ranNo4).toFixed(3));
  let ranNoArrInt = [];
  let ranNoArrFloat = [];
  let ranNoArrFloatStr = [];
  let ranRes01 = Math.trunc(ranNo1);
  let ranRes1 = (ranNo1).toFixed(2);
  let ranRes02 = Math.trunc(ranNo2);
  let ranRes2 = (ranNo2).toFixed(2);
  let ranRes03 = Math.trunc(ranNo3);
  let ranRes3 = (ranNo3).toFixed(2);
  let ranRes04 = Math.trunc(ranNo4);
  let ranRes4 = (ranNo4).toFixed(2);

  ranNoArrFloatStr.push(ranRes1, ranRes2, ranRes3, ranRes4);
  ranNoArrFloat.push(ranNo1, ranNo2, ranNo3, ranNo4);
  ranNoArrInt.push(ranRes01, ranRes02, ranRes03, ranRes04);
  console.log(ranNoArrFloatStr);
  console.log(ranNoArrInt);
  console.log(ranNoArrFloat);
  console.log(ranNoArrFloatStr[0]);
  console.log(ranNoArrFloatStr[0] + 10);

  let getRandomNumberArrayFloat = [];
  let getRandomNumberArrayInt = [];

  for (var i = 1; i <= 10; i++) {
    console.log(ranRes01, ranRes02, ranRes03, ranRes04);
  }

};
amir();

// dsjkfhrkdn
function ranNum1() {
  let x = Math.random();

  let ranNo = ((x * 0.5666) * ((x + 1) * 0.346) + 5 + (x ** 1.2682)) + (((x * 9) + 1.5567) * x + (((5 ** x) + 4.659) + (x * 1.966) + 2.65891) + (x * 3.9287584));
  return ranNo;
}

function ranNum2() {
  let x = Math.random();
  let ranNo = ((x * 1.5666) * ((x + 1.5621) * 0.346) + 2 + (x ** 4.2682)) + (((x * 1.6752) + 3.5567) * x + (((5 ** x) + 2.659) + (x * 1.966) + 2.67891) + (x * 3.9287584));
  return ranNo;
}
function ranNum3() {
  let x = Math.random();
  let ranNo = ((x * 6.5666) * ((x + 3.565) * 2.346) + 5 + (x ** 1.2682)) + (((x * 9) + 1.5567) * x + (((5 ** x) + 0.659) + (x * 1.966) + 2.65891) + (x * 0.9287584));
  return ranNo;
}

function ranNum4() {
  let x = Math.random();
  let ranNo = ((x * 100.5666) * ((x + 10.67) * 0.346) + 1 + (x ** 0.2682)) + (((x * 9.75947) + 1.5567) * x + (((5 ** x) + 4.659) + (x * 1.966) + 2.65891) + (x * 9.9287584)); return ranNo;
}

console.log(ranNum1(), ranNum2(), ranNum3(), ranNum4());
console.log('');
console.log('');

let floatranNum1 = Math.trunc(ranNum1());
let floatranNum2 = Math.trunc(ranNum2());
let floatranNum3 = Math.trunc(ranNum3());
let floatranNum4 = Math.trunc(ranNum4());

function NumFloatArray(amount) {
  let getRandomNumberArrayFloat = [];
  for (var i = 1; i <= amount; i++) {
    getRandomNumberArrayFloat.push(ranNum1(), ranNum2(), ranNum3(), ranNum4());
  }
  return getRandomNumberArrayFloat;
}

function NumIntArray(amount) {
  let getRandomNumberArrayInt = [];
  for (var a = 0; a < amount; a++) {
    getRandomNumberArrayInt.push(floatranNum1, floatranNum2, floatranNum3, floatranNum4);
  }
  return getRandomNumberArrayInt;
}


console.log(`The result is: !`);
console.log(NumFloatArray(10));
console.log('result :');
console.log(NumIntArray(10));


const randomNumberArray = {
  generateNum: function () {
    let x = Math.random();

    let ranNo1 = ((x * 0.5666) * ((x + 1) * 0.346) + 5 + (x ** 1.2682)) + (((x * 9) + 1.5567) * x + (((5 ** x) + 4.659) + (x * 1.966) + 2.65891) + (x * 3.9287584));

    let ranNo2 = ((x * 1.5666) * ((x + 1.5621) * 0.346) + 2 + (x ** 4.2682)) + (((x * 1.6752) + 3.5567) * x + (((5 ** x) + 2.659) + (x * 1.966) + 2.67891) + (x * 3.9287584));

    let ranNo3 = ((x * 6.5666) * ((x + 3.565) * 2.346) + 5 + (x ** 1.2682)) + (((x * 9) + 1.5567) * x + (((5 ** x) + 0.659) + (x * 1.966) + 2.65891) + (x * 0.9287584));

    let ranNo4 = ((x * 100.5666) * ((x + 10.67) * 0.346) + 1 + (x ** 0.2682)) + (((x * 9.75947) + 1.5567) * x + (((5 ** x) + 4.659) + (x * 1.966) + 2.65891) + (x * 9.9287584));

    let ranNoArrInt = [];
    let ranNoArrFloat = [];
    let ranNoArrFloatStr = [];
    let ranRes01 = Math.trunc(ranNo1);
    let ranRes1 = (ranNo1).toFixed(2);
    let ranRes02 = Math.trunc(ranNo2);
    let ranRes2 = (ranNo2).toFixed(2);
    let ranRes03 = Math.trunc(ranNo3);
    let ranRes3 = (ranNo3).toFixed(2);
    let ranRes04 = Math.trunc(ranNo4);
    let ranRes4 = (ranNo4).toFixed(2);

    ranNoArrFloatStr.push(ranRes1, ranRes2, ranRes3, ranRes4);
    ranNoArrFloat.push(ranNo1, ranNo2, ranNo3, ranNo4);
    ranNoArrInt.push(ranRes01, ranRes02, ranRes03, ranRes04);
  },

  ranNum1: function () {
    let x = Math.random();

    let ranNo = ((x * 0.5666) * ((x + 1) * 0.346) + 5 + (x ** 1.2682)) + (((x * 9) + 1.5567) * x + (((5 ** x) + 4.659) + (x * 1.966) + 2.65891) + (x * 3.9287584));
    return ranNo;
  },

  ranNum2: function () {
    let x = Math.random();
    let ranNo = ((x * 1.5666) * ((x + 1.5621) * 0.346) + 2 + (x ** 4.2682)) + (((x * 1.6752) + 3.5567) * x + (((5 ** x) + 2.659) + (x * 1.966) + 2.67891) + (x * 3.9287584));
    return ranNo;
  },
  ranNum3: function () {
    let x = Math.random();
    let ranNo = ((x * 6.5666) * ((x + 3.565) * 2.346) + 5 + (x ** 1.2682)) + (((x * 9) + 1.5567) * x + (((5 ** x) + 0.659) + (x * 1.966) + 2.65891) + (x * 0.9287584));
    return ranNo;
  },

  ranNum4: function () {
    let x = Math.random();
    let ranNo = ((x * 100.5666) * ((x + 10.67) * 0.346) + 1 + (x ** 0.2682)) + (((x * 9.75947) + 1.5567) * x + (((5 ** x) + 4.659) + (x * 1.966) + 2.65891) + (x * 9.9287584));
    return ranNo;
  },

  floatranNum1: Math.trunc(ranNum1()),
  floatranNum2: Math.trunc(ranNum2()),
  floatranNum3: Math.trunc(ranNum3()),
  floatranNum4: Math.trunc(ranNum4()),

  NumFloatArray: function (amount) {
    let getRandomNumberArrayFloat = [];
    for (var i = 1; i <= amount; i++) {
      getRandomNumberArrayFloat.push(ranNum1(), ranNum2(), ranNum3(), ranNum4());
    }
    return getRandomNumberArrayFloat;
  },

  NumIntArray: function (amount) {
    let getRandomNumberArrayInt = [];
    for (var a = 0; a < amount; a++) {
      getRandomNumberArrayInt.push(floatranNum1, floatranNum2, floatranNum3, floatranNum4);
    }
    return getRandomNumberArrayInt;
  },

  CalcAverage: function(inputNumbers){
    let sum = 0;
    for(var i = 0; i <= (inputNumbers.length - 1); i++){
      sum += inputNumbers[i];
    }
    return `The Average Number is : ${sum} !`;
  },

  CalcAverageNum: function (inputNumbers) {
    let sum = 0;
    for (var i = 0; i <= (inputNumbers.length - 1); i++) {
      sum += inputNumbers[i];
    }
    return sum;
  },



};

console.log(`The Final result I am Includes in Object: ${'Amir'}`);

console.log(randomNumberArray.NumIntArray(100));

console.log(randomNumberArray.CalcAverage(randomNumberArray.NumIntArray(100)));

console.log(randomNumberArray.CalcAverageNum(randomNumberArray.NumIntArray(101)));

console.log(randomNumberArray.CalcAverageNum(randomNumberArray.NumFloatArray(10)));

console.log((randomNumberArray.CalcAverageNum(randomNumberArray.NumFloatArray(10))).toFixed(2));
