/* 
test
var i = 18178075944,
j =1817817594;

let loop = document.querySelector(".loop");

var i = 0,
  j = 1817817594;

for(i = 0; i <= 100; i++){
  loop.innerHTML = "<br>"+ i;
  console.log('<br>'. i);
}*/

/*
// Started 

function logger(){
  var x = 10,
  y = 20, z = 30, a = (x**y)/z, b = 12045;

  let name = "My name is Syed Amir Ali!";

  console.log(name, ':', a);
}

logger();
logger();
logger();


function fruitProcessor(mango, apple){
  console.log(mango, apple);

  const juice = `I want To Drink ${mango} pcs Mango with ${apple} pcs apple juice.`;

  return juice;
}

const getJuice = fruitProcessor(10, 3);
console.log(getJuice);
console.log(fruitProcessor(10, 3));

document.querySelector('.juice').innerHTML = getJuice;


//Functions Part 2

// const num = Number("100");

function ageCalc(birthDate){
  return 2022 - birthDate;
}

function titles(manName){
  const getMainTitle = `The age of ${manName} are `;
  return getMainTitle;
}

let title = 1;

const ageAmir = ageCalc(2003);
console.log(ageAmir);

const ageRifat = ageCalc(2001);
console.log(ageRifat);

function conso(){
  console.log(titles("Rifat"), ageCalc(2001));
  let getIt = (titles("Rifat"), ageCalc(2001));
  return getIt;
}

function conso1() {
  console.log(titles("Amir"), ageCalc(2003));
  let getIt = (titles("Amir"), ageCalc(2003));
  return getIt;
}

function conso2() {
  console.log(titles("Arzu"), ageCalc(1984));
  let getIt = (titles("Arzu"), ageCalc(1984));
  return getIt;
}

conso();
conso1();
conso2();

const allage = function getAllAge(){
  conso();
  conso1();
  conso2();
  return;
}

console.log(conso());

const getAgeAll = document.querySelector(".get-age-all");

let getConso = conso();

// getAgeAll.innerHTML = getConso;
console.log(getConso);


function tyrConso(){
  titles("Rifat"), ageCalc(2001);
  return;
}

// getAgeAll.innerHTML = allage;
getAgeAll.innerHTML = tyrConso(); 
A*/

/* 
const getage01 = birthDat => 2022 - birthDat;
console.log(getage01(2000));

// First Way
const getAgeName = (age, name) => `My name is ${name} and My age is ${age}`;
console.log(getAgeName(': ' + getage01(2000) + ' !', "Hridoy"));

// And Second Way!
const hridoyAge = getAgeName(": " + getage01(2000) + " !", "Hridoy");
console.log(hridoyAge);

// Push HTML Body
const age01 = document.getElementById("age01");
age01.innerHTML = hridoyAge;

// Selected Path
const ageAll = document.querySelectorAll
("#age");

// ageAll index[0]
ageAll[0].innerHTML = getAgeName(": " + getage01(2003) + " !", "Amir");

// ageAll index[1]
ageAll[1].innerHTML = getAgeName(": " + getage01(1999) + " !", "Mama");

// ageAll index[2]
ageAll[2].innerHTML = getAgeName(": " + getage01(2021) + " !", "Nondu");

// ageAll index[3]
ageAll[3].innerHTML = getAgeName(": " + getage01(2018) + " !", "sadika");

// ageAll index[4]
ageAll[4].innerHTML = getAgeName(": " + getage01(1936) + " !", "Baba");

// ageAll index[5]
ageAll[5].innerHTML = getAgeName(": " + getage01(2001) + " !", "Apon");

const retirementUntilYear = (birthDate, name) => {
  const age = 2022 - birthDate;
  const retirement = 65 - age;

  // return retirement; 
  return `${name} retires in ${birthDate} but Unfotunately Died !`;
}

console.log(retirementUntilYear(1976, 'Oskar Fukasu'));

//The Right Way !
ageAll[6].innerHTML = '<br>' + retirementUntilYear(1976, "Oskar Fukasu");


 */


// Day 02 JS Functions

/* 
// Selected Path
// const ageAll = document.querySelectorAll
// ("#age");

const ageCalcu = (birthdate) => {
  const getdate = 2022 - birthdate;
  return getdate;
};

const retirementAgeCalculator = (birthdate, name) =>{
  let age = ageCalcu(birthdate);
  let retirement = 65 - age;

  let retire = `${name} is retire in ${retirement} years. He is also a good man.`;
  let retired = `${name} has Already retired!`;

  if(retirement > 0){
    console.log(retire);
    // return retirement;
    return retire;
  }else{
    console.log(retired);
    // return -1;
    return retired;
  }
}

const cosmos = retirementAgeCalculator(1889, "Kosmos");
const koruch = retirementAgeCalculator(1892, "Koruch");
const moruch = retirementAgeCalculator(2037, "Moruch");

console.log(cosmos);
console.log(koruch);
console.log(moruch);

//Print in HTML Files
ageAll[7].innerHTML = "<br>" + cosmos;
ageAll[8].innerHTML = "<br>" + koruch;
ageAll[9].innerHTML = "<br>" + moruch;


// Tutorial Copy

const CalcAge = function (birthDate) {
  return 2037 - birthDate;
}

const yearsUntilRetirements = function (birthDate, name){
  let age = CalcAge(birthDate);
  let retirement = 65 - age;

  if (retirement > 0) {
    // console.log(`${name} retires in ${retirement} years !`);
    let retirementLog = `${name} retires in ${retirement} years`;
    console.log(retirementLog);
    return retirement;
  }else{
    // console.log(`${name} has already retires !`);
    notRetirementLog = `${name} has already retires`;
    console.log(notRetirementLog);
    return -1;
  }
}

console.log(yearsUntilRetirements(1991, 'Jonas'));
console.log(yearsUntilRetirements(1950, 'Mike')); */


// Day 02 Coding Test 
/* ====================================>> Day 02 <<==================================== */

/**/ // coding challenges

/* const calcAverage = (a, b, c) => (a + b + c) / 3;

// Find out the Average for test the calcAverage Function
console.log(calcAverage(3, 4, 5));

// Teset 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreWheel = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreWheel);

const CheckWinner = (avgDolphins, avgWheel) =>
{
  if(avgDolphins >= 2 * avgWheel){
    let testWinner01 = `Dolphins win Trophi (${avgDolphins} vs ${avgWheel}) !`;
    console.log(testWinner01);
  }else if(avgWheel >= 2 * avgDolphins){
    let testWinner02 = `Wheel win Trophi (${avgWheel} vs ${avgDolphins}) !`;
    console.log(testWinner02);
  }else{
    let testWinner03 = 'No Team Win the game !';
    console.log(testWinner03);
  }
}

CheckWinner(scoreDolphins, scoreWheel);
CheckWinner(1000, 499);
CheckWinner(1499, 301);
CheckWinner(1504, 2904);

// Test 02
console.log('Test 02');

scoreDolphins = calcAverage(53, 64, 75);
scoreWheel = calcAverage(14, 54, 25);
console.log(scoreDolphins, scoreWheel);
// Just Call The Functions
CheckWinner(scoreDolphins, scoreWheel);
 */

/* ====================================>> Day 02 Ends <<==================================== */
/* ========================>> JavaScript Snippets Add test started <<======================== */


// console.log('ddklsfjsl;');
// console.log('');
// console.log();
// console.log('');

// const variable = document.querySelector('');
// console.log('');
// const may = document.getElementById('');

// const okey = document.getElementById('');
// menubar.array.forEach(element => {
//   el
// });

// ame.forEach((getame) => {getame.addEventListener('click', () =>{});});
// amee.forEach((getame) => {
//   getame.addEventListener('click', () =>{
//   ndaf
// });
// });

// me.forEach((getme) => {
//   getme.addEventListener('click', () =>{

//   });
// });


// a.forEach((geta) => {
//   geta.addEventListener('click', () =>{

//   });
// });


// am.forEach((get) => {mget.addEventListener('click', () =>{});});
// amir.forEach((getamir) => {amirget.addEventListener('click', () =>{});});
// mea.forEach((getmea) => {
//   getmea.addEventListener('click', () =>{});
// });

// amirs.forEach((getamird) => {
//   getamird.addEventListener('click', () =>{
//     // wow.style.$3. = 'none';
//   });
// });

// wow.style.ok = 'block';
// ok.addEventListener('click', () =>{
//   display.style.display = 'none';
  
// });

// ok.addEventListener('click', () =>{
  
// });

// ksf.addEventListener('click', () =>{
  
// });
  // geta.forEach((getgeta) => {getgeta.addEventListener('click', () =>{});});

// ok.addEventListener('click', () =>{});

// wrong.addEventListener('click', () =>{
//   mcq.forEach((getmcq) => {
//     getmcq.addEventListener('click', () =>{
//       getmcq.style.display = 'block';      
//     });
//   });
  
  
// });
// console.log();
// console.log();
// console.log('');


//   console.log(IKSLDFGGS);
//   console.log('');
//   console.log();
//   jhdksfhksaf.addEventListener('click', () =>{
//     me.forEach((getme) => {
//       getme.addEventListener('click', () =>{
        
//       });
//     });
    
//   });


// amirsss.forEach((amirsss) => {getamirsss.addEventListener('click', () =>{amirsss});});
// docs.forEach((getdocs) => {
//   getdocs.addEventListener('click', () =>{
//     getdocs});
//   });
//  sdfhsdf.forEach((getsdfhsdf) => {
//   getsdfhsdf.addEventListener('click', () =>{
//     getsdfhsdf});
// });



// just.forEach((getjust) => {
//   getjust.addEventListener('click', () =>{
//     getjust.style.display = 'none';
//     get.style.display = 'block';
    
//   });
// });

// console.log(wow);


// const mst = document.querySelector('#mast');


// aster.addEventListener('click', () =>{});
// master.forEach((getmaster) => {
//   getmaster.addEventListener('click', () =>{
//     getmaster
//   });
// });


// cokakacola.forEach((getcokakacola) => {
//   getcokakacola.addEventListener('click', () =>{
//     getcokakacola
//   });
// });



/* ========================>> JavaScript Snippets Add test Ended <<======================== */

/* ====================================>> Day 03 Started <<==================================== */


// Array !

/* const friends = ['kamrul', 'kakon', 'kartik', 'kulsum', 'kobir', 'Kasem',];
console.log(friends);
console.log(friends[5]);

friends[5] = 'Mirakkle';
console.log(friends);
console.log(friends.length);

let Years = new Array(2021, 2020, 2019, 2018, 2017, 2016,);
console.log(Years.length);
console.log(Years);

const frlm1 = friends[friends.length - 1];
console.log(frlm1);
console.log(friends); */


/* const friends = ['kamrul', 'kakon', 'kartik', 'kulsum', 'kobir', 'Kasem',];
console.log(friends);
let push = ['Amir', 'Apon', 'Noyon'];
console.log(push);
let unshift = ['Syed', 'Kazi', 'Sheikh'];
console.log(unshift);

const pushFrinds = friends.push(push);
const unshiftFrinds = friends.unshift(friends);

console.log(pushFrinds);
console.log(unshiftFrinds);
console.log(friends);

// friends.push('Apon');
// console.log(friends);
// console.log(friends.length);

// friends.unshift('Amir');
// console.log(friends);
// console.log(friends.length);

console.log('Fetch All : ');


friends.forEach((getfriends) => {
    console.log(getfriends);
});

friends.pop(push);
friends.pop(unshift);
console.log(friends);

console.log('<br> Easy Try <br>'); */


/* const Friends = ['kamrul', 'kakon', 'kartik', 'kulsum', 'Kasem', 'kobir'];
// console.log(Friends);
// Friends.pop();
// console.log(Friends);
// Friends.shift();
// console.log(Friends);
// console.log(Friends);

let indf = Friends.indexOf('kobir');
console.log(indf);
let inclu = Friends.includes('kobir');
console.log(inclu);
let incluf = Friends.includes('Akkas');
console.log(incluf);

// check condition
console.log('Check Condition 01: ');

if(inclu){
  let sometxt01 = "My Friend Kobir are Attended our programme !";
  console.log(sometxt01);
}else if(!incluf){
  let sometxt02 = "My Friend Kobir are not Attended our programme !";
  console.log(sometxt02);
}else{
  let sometxt03 = "My Coding are Wrong !";
  console.log(sometxt03);
}

// check 2nd Condition
// Friends.push('Akkas');
// console.log(Friends);
// Friends.pop();
// console.log(Friends);
console.log('Check Condition 02: ');

if(inclu){
  let sometxt04 = "My Friend Kobir are not Attended our programme !";
  console.log(sometxt04);
}else if(!incluf){
  let sometxt05 = "My Friend Kobir are Attended our programme !";
  console.log(sometxt05);
}else{
  let sometxt06 = "My Coding are Wrong !";
  console.log(sometxt06);
}

// Check Condition 03
console.log('Check Condition 03: ');

Friends.push('Akkas');
console.log(Friends);
Friends.pop();
console.log(Friends);
inclu = Friends.includes('kobir');
incluf = Friends.includes('Akkas');
console.log('Check Condition 03: ');
console.log(Friends);
console.log(Friends);

if(inclu){
  let sometxt04 = "My Friend Kobir are not Attended our programme !";
  console.log(sometxt04);
}else if(!incluf){
  let sometxt05 = "My Friend Kobir are Attended our programme !";
  console.log(sometxt05);
}else{
  let sometxt06 = "My Coding are Wrong !";
  console.log(sometxt06);
}


// Check Condition 04
console.log('Check Condition 04: ');

Friends.push('Akkas');
console.log(Friends);
incluf = Friends.includes('Akkas');


if(!inclu){
  let sometxt04 = "My Friend Kobir are not Attended our programme !";
  console.log(sometxt04);
}else if(incluf){
  let sometxt05 = "My Friend Kobir are Attended our programme !";
  console.log(sometxt05);
}else{
  let sometxt06 = "My Coding are Wrong !";
  console.log(sometxt06);
}

// My 3 and 4 no. Check Condition Was Successfull !
console.log('My 3 and 4 no. Check Condition Was Successfull !');
 */

// Projects
/* 
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  // return 50;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

const billsPlusTotal = ('bills, tips, totals');
console.log(billsPlusTotal);
console.log(bills, tips, totals);


// Fetch all Array !
let titleBills = "All the history of Bills : ";
console.log(titleBills);

bills.forEach((getbills) => {
  console.log(getbills);
});

let titleTips = "All the history of Tips : ";
console.log(titleTips);

tips.forEach((gettips) => {
  console.log(gettips);
});

let titleTotals = "All the history of Totals : ";
console.log(titleTotals);

totals.forEach((gettotals) => {
  console.log(gettotals);
});


 */

/*
const aboutMe = {
  firstname: 'MOHAMMAD AMIR ALI',
  username: 'Apon',
  passion: 'Student',
  study: 'Class Xi',
  job: 'Web Dveloper',
  age: '19 Years old',
  location: 'Bangladesh',
  favourite: 'Do Coding',
  programmingLanguage: 'JsvsScript, HTML, CSS, REACT, PHP',
  favouriteProgrammingLanguage: 'C',
  hobby: 'Eating & Electronics MC-Base Project Making.',
  teacher: 'Jonas Schmedtmann',
  friends: ['Sara', 'Jara', 'Kira', 'Era', 'Mira']
};
 
// Whats the console output of thr aboutMe Class !
console.log(aboutMe);
console.log(aboutMe.firstname);
console.log(aboutMe['job']);

// Add a variable

let namekey = 'name';
console.log(aboutMe['first' + namekey]);

// like seaarch system 
//firstname, username, passion, study, job, age, location, favourite, programmingLanguage, hobby, teacher, favouriteProgrammingLanguage, friends
// our input search !

let result = 'Now is this your Result : ';
console.log(result);

const interestedIn = prompt("What do you want to know about Me? Chose between => firstname, username, passion, study, job, age, location, favourite, programmingLanguage, hobby, teacher, favouriteProgrammingLanguage, friends");

if(aboutMe[interestedIn]){
  let testPromt01 = aboutMe[interestedIn];
  console.log(testPromt01);
}else{
  let testPromt02 = 'Wrong request ! Please chose between => firstname, username, passion, study, job, age, location, favourite, programmingLanguage, hobby, teacher, favouriteProgrammingLanguage, friends';
  console.log(testPromt02);
}

aboutMe.location = 'Bangladesh';
aboutMe['GitHub'] = 'AmirWorkPlace';
console.log(aboutMe);

// Placeholder Test !

let amirBio = `Amir's fullname is ${aboutMe.firstname} ! and his best friend are ${aboutMe.friends[0]} & ${aboutMe.friends[4]}. Amir is good and full-stack ${aboutMe['job']}. Otherwise his teacher is ${aboutMe.teacher}. ${aboutMe['firstname']} is also known as ${aboutMe['username']} . Is this some Biodata of ${aboutMe.username} !`;

console.log(amirBio);

*/
/* ====================================>> Day 03 Endeds <<===================================== */

/* ====================================>> Day 04 Started <<==================================== */



/* 
const Amir = {
  firstname: 'MOHAMMAD AMIR ALI',
  username: 'Apon',
  passion: 'Student',
  study: 'Class Xi',
  job: 'Full-Stack Web Dveloper',
  age: '19 Years old',
  location: 'Bangladesh',
  favourite: 'Do Coding',
  programmingLanguage: 'JsvsScript, HTML, CSS, REACT, PHP',
  favouriteProgrammingLanguage: 'C',
  hobby: 'Eating & Electronics MC-Base Project Making.',
  teacher: 'Jonas Schmedtmann',
  friends: ['Sara', 'Jara', 'Kira', 'Era', 'Mira'],
  birthYeah: 2003,
  hasDriverLicence: true,

  // calcAge: (BirthYear) => {
  //   let returnYear = 2037 - BirthYear;
  //   return returnYear;
  //   console.log(returnYear);
  // },

  studyResult: `I am ${this.firstname} was understood the lacture of my teacher's ${this.teacher}. I am Successfull !`,

  calcAge2: function () {
    let returnYear = 2037 - this.birthYeah;
    return returnYear;
    console.log(returnYear);
  },

  calcAge3: () =>{
    return 2022 - this.birthYeah;
  },

  calcAge4: function (){
    let returnYear = 2022 - this.birthYeah;
    let writeDetails = `The main year of the owner of ${Amir.firstname} is ${returnYear} ! Good Idea ! Bye.`;

    return writeDetails;
  },

  // birthDate: 1991,

  testCondition: function (birthDate) {
    let getBirthDate = 2022 - birthDate;
    let summery = `${this.teacher} is ${getBirthDate} years old. And he is also a good full Stack ${this.job} !`;

    return summery;
  },

  // jonas: Amir.testCondition(1991),
  // jonas: Amir.testCondition,

  aboutJonas: () =>{
    if(Amir.hasDriverLicence == true){
      let jonas = Amir.testCondition(1991);
      return jonas;
    }else if(Amir.hasDriverLicence == false){
      let getStudyResult = Amir.studyResult; 
      return getStudyResult;
    }else{
      let returnMsg = `Somethis was Wrong ! or I am did not understood the lacture of ${Amir.teacher} !`;
      return returnMsg;
    }
  },

  //TryOut
  aboutJonasTryOut: (birthDate) =>{

    let getBirthDate = 2022 - birthDate;
    let jonasSummery = `${Amir.teacher} is ${getBirthDate} years old. And he is also a good full Stack ${Amir.job} !`;

    if(Amir.hasDriverLicence == true){
      return jonasSummery;
    }else if(Amir.hasDriverLicence == false){
      let getStudyResult = Amir.studyResult; 
      return getStudyResult;
    }else{
      let returnMsg = `Somethis was Wrong ! or I am did not understood the lacture of ${Amir.teacher} !`;
      return returnMsg;
    }
  },

  universalAboutAnyoneTryOut: (birthDate, name, passion) =>{

    let getBirthDate = 2022 - birthDate;
    let anyoneSummery = `${name} is ${getBirthDate} years old. And he is also a good ${passion} !`;

    if(Amir.hasDriverLicence == true){
      return anyoneSummery;
    }else if(Amir.hasDriverLicence == false){
      let getStudyResult = Amir.studyResult; 
      return getStudyResult;
    }else{
      let returnMsg = `Somethis was Wrong ! or I am did not understood the lacture of ${Amir.teacher} !`;
      return returnMsg;
    }
  },

  getJonasDriverLicense: function () {
    let returnMsg = `${this.teacher} is a ${Amir.calcAge2()} ~ year old ${this.job}, and he has ${this.hasDriverLicence ? 'a' : 'no'} driver license !`;
    return returnMsg;
  }


};


  // const calcAge = (BirthYear) => {
  //   let returnYear = 2037 - BirthYear;
  //   return returnYear;
  // };


  // // Amir.forEach((getAmir) => {
  // //   // let getdata = getAmir;
  // //  console.log(getAmir);
  //   // return getAmir;
  // // });
  
// let consolesClassFunc = Amir.calcAge(2003),
// consolesClassFunc01 = Amir['calcAge'](2014);
// console.log(consolesClassFunc, consolesClassFunc01);

// This Function Test :
console.log('This Function Test :');

let consolesClassFunc02 = Amir.calcAge2();
console.log(Amir.calcAge2());
console.log(consolesClassFunc02);
console.log(consolesClassFunc02);

console.log(Amir.calcAge3());
console.log(Amir.calcAge4());

// Check My Class or Object Oriantation experticity Test !
console.log('Check Object hard codings :');

let checkSkill = Amir.aboutJonas();
console.log(checkSkill);
console.log(Amir.aboutJonas());

// let's Check a Years Calculator and Some Summery Added function testout !
console.log('The next Chalenge : (Try)');

let summeryOfjonas01 = Amir.aboutJonasTryOut(1995);
let summeryOfjonas02 = Amir.aboutJonasTryOut(2005);
let summeryOfjonas03 = Amir.aboutJonasTryOut(1955);
console.log(summeryOfjonas01);
console.log(summeryOfjonas02);
console.log(summeryOfjonas03);

//universalAboutAnyoneTryOut(birthDate, name, passion);

// let's Check a Years Calculator and Some Summery Added function testout for Anyone!
console.log('The next Chalenge for Anyone : (Try)');

let Rifat = Amir.universalAboutAnyoneTryOut(2001, 'Mohammad Rifat Hossain', 'Farmar');
let Sabbir = Amir.universalAboutAnyoneTryOut(1999, 'Mohammad Sabbir Ahamed', 'Ghraphics Designer');
let Sattar = Amir.universalAboutAnyoneTryOut(1996, 'Mohammad Sattar Hossain', 'Clasher');
let ZakirKaka = Amir.universalAboutAnyoneTryOut(1993, 'Mohammad Zakir Hossain', 'Sceintist');
let Kobir = Amir.universalAboutAnyoneTryOut(2004, 'Mohammad Kobir Hossain', 'Student');

console.log(Rifat);
console.log(Sabbir);
console.log(Sattar);
console.log(ZakirKaka);
console.log(Kobir);

// next nont understanding Challenge Test:
console.log('Next Challenge : (LearnOut)');

let getClng01 = Amir.getJonasDriverLicense();
console.log(getClng01);

 */



/* ====================================>> Day 04 Endeds <<===================================== */

//My Idea
/* console.log('My Idea BMICalculator : (Try)');

const kobir = {
  fullName: 'Mohammad Kobir Hossain',
  height: 1.95,
  mass: 85,
  passion: 'Doctor',

  calcBMI: function(){
    let bmi = this.mass / this.height ** 2;
    this.bmi = this.mass / this.height ** 2;
    return bmi,this.bmi;
  }
};

// console.log(kobir.calcBMI());// iT' The Not right way !
kobir.calcBMI();
console.log(kobir.bmi);



//My theacher's Idea :
console.log('My theacher~s BMICalculator : (Try)');

const Sabbir = {
  fullName: 'Mohammad Sabbir Hossain',
  height: 1.55,
  mass: 68,
  passion: 'Graphics Engineer',

  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

// console.log(Sabbir.calcBMI());
Sabbir.calcBMI();
let getBMISabbir = `The Bmi Of ${Sabbir.fullName} are : ` + Math.floor(Sabbir.bmi) + ' !';
console.log(getBMISabbir);



const Robb = {
  fullName: 'Mohammad Robert Hossain',
  height: 1.65,
  mass: 52,
  passion: 'Software Engineer',

  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

Robb.calcBMI();
let getBMIRobb = `The Bmi Of ${Robb.fullName} are :` + Math.floor(Robb.bmi) + ' !';
console.log(getBMIRobb);

// 2 in one 
console.log(getBMISabbir + ' & ! ' + getBMIRobb);

// Lets Condition try :
console.log('-');
console.log('-');
console.log('Condition Try : (Try)');

if(Sabbir.bmi > Robb.bmi){
  let returnMsg = `${Sabbir.fullName}'s BMI (${Sabbir.bmi}) is higher than ${Robb.fullName}'s BMI ${Robb.bmi} !`;
  // return returnMsg;
  console.log(returnMsg);
} else if(Sabbir.bmi < Robb.bmi){
  let returnMsg = `${Robb.fullName}'s BMI (${Robb.bmi}) is higher than ${Sabbir.fullName}'s BMI ${Sabbir.bmi} !`;
  // return returnMsg;
  console.log(returnMsg);
}


console.log(' ');
console.log(' ');

// For Loop:
console.log('For loop keeps running while the condition is true !');

// let aSummery = 'Claim Now 1 and win More Money !';

const funcSummery = function(repTest){
  return `Claim Now ${repTest} and win More Money !`;
}

for(var rep = 1; rep <= 10; rep++){
  console.log(funcSummery(rep));
}

var a = 10259425000;
var b = 10259426001;

const llops = document.querySelector('.llops');

for(var i = a; i <= b; i++){
  console.log(i);
  // llops.innerHTML = i.value;
}

console.log('My All E-mali ready for sell : ');
let allMail = (87-5)-9; 
console.log(allMail);
 */


/* ====================================>> Day 05 Started <<==================================== */
/* 

// Now I am write a Array and using loop

console.log('Array using Loop:');
console.log(' ');


const amirArray = [
  'SYED',
  'Amir Ali',
  2022-2003,
  'Student',
  ['Sabir', 'Monir', 'Xakir', 'Milon', 'Kobir'],
  true,
  false
];

const type = [];

for(var i = 0; i < amirArray.length; i++){
  // let getbyArray = amirArray[4];
  // console.log(getbyArray);
  // console.log(amirArray[4]);
  console.log(amirArray[i], typeof amirArray[i]);
}

console.log(' ');

for(var i = 0; i < 5; i++){
  // console.log(amirArray[4]);
}

// pursh the amirArray type on a new array which the name of array is type !

console.log(' ');
console.log('Push The type of a array in a array;');

for(var i = 0; i < amirArray.length; i++){
  // 1st way
  // let firstWay = (type[i] = typeof amirArray);
  type[i] = typeof amirArray[i];
  // 2nd way
  // let secondWay = type.push(typeof amirArray[i]);
  // type.push(typeof amirArray[i]);
  // return firstWay,secondWay;

}

console.log(type);
console.log(' ');
console.log(' ');


console.log('----- Only Strings :-----');

for(var i = 0; i < amirArray.length; i++){
  if(typeof amirArray[i] !== 'string')
  continue;

  console.log(amirArray[i], typeof amirArray[i]);
}


console.log(' ');
console.log('----- Condition break with Number :-----');

for(var i = 0; i < amirArray.length; i++){
  if(typeof amirArray[i] === 'number')
  break;

  console.log(amirArray[i], typeof amirArray[i]);
}
 */



// Now I am starting the Decrease calculation on the for loop :
/* 
console.log('Decrease :');

const amir = [
  'SYED',
  'Amir Ali',
  2022-2003,
  'Student',
  ['Sabir', 'Monir', 'Xakir', 'Milon', 'Kobir'],
  true,
  false
];

for(let i = amir.length - 1; i >= 0; i--){
  let getAmir = (i, amir[i]);
  console.log(getAmir);
}

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days7nameAmrray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const days7name = "Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday";

const calender = document.querySelector('#calender');


for(var i = 0; i <= (month.length - 1); i++){
  // let getMonth = month[i];
  console.log(month[i]);

  for(var a = 1; a <= 1; a++){
    document.createElement('div').innerHTML = days7name;
    console.log(days7name);
  }
}
 */
// // Lop

// var a = 1817807594,
// b = 1817808594;

// for(var i = a; i <= b; i++){
//   console.log(i);

// }




/* ====================================>> Day 05 Endeds <<===================================== */


// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
// ];

// const days7names = "Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday";

// //nxt

// const body = document.querySelector('#body');

// function createElementTest(){

//   var amount = 24, i =0;

//   while(i < amount){
//     const createElement = document.createElement('div');
//     body.appendChild(createElement);

//     i++;
//   }
// }

// createElementTest();

// const bodys = document.querySelectorAll('#body div');
// console.log(bodys);


// for(var m = 0; m <= bodys.length - 1; m++){


//   function getMonth(mnth){
//     for(var k = 0; k <= months.length - 1; k++){
//       return mnth;
//     }
//     // return daysnum; , daysnum 
//   }

//   bodys[0].innerHTML = getMonth(months[0]);
//   bodys[1].innerHTML = days7names;

//   bodys[2].innerHTML = getMonth(months[1]);
//   bodys[3].innerHTML = days7names;

//   bodys[4].innerHTML = getMonth(months[2]);
//   bodys[5].innerHTML = days7names;

//   bodys[6].innerHTML = getMonth(months[3]);
//   bodys[7].innerHTML = days7names;

//   bodys[8].innerHTML = getMonth(months[4]);
//   bodys[9].innerHTML = days7names;

//   bodys[10].innerHTML = getMonth(months[5]);
//   bodys[11].innerHTML = days7names;

//   bodys[12].innerHTML = getMonth(months[6]);
//   bodys[13].innerHTML = days7names;

//   bodys[14].innerHTML = getMonth(months[7]);
//   bodys[15].innerHTML = days7names;

//   bodys[16].innerHTML = getMonth(months[8]);
//   bodys[17].innerHTML = days7names;

//   bodys[18].innerHTML = getMonth(months[9]);
//   bodys[19].innerHTML = days7names;

//   bodys[20].innerHTML = getMonth(months[10]);
//   bodys[21].innerHTML = days7names;

//   bodys[22].innerHTML = getMonth(months[11]);
//   bodys[23].innerHTML = days7names;

// }


/* // for(var m = 0; m <= bodys.length - 1; m++){

//   for(var k =0; k <= months.length - 1; k++){
//     body[m].innerHTML = months[k];
//   }

//   // bodys[m].innerHTML = "Hey Modern JS";
//   // let txt = "Hey Modern JS";
//   for(var x = 0; x <= 1; x++){

//   let txt = "Hey Modern JS";
//     bodys[m].innerHTML = txt;
//   }
// }

  // for(var k = 0; k <= months.length - 1; k++){
  //   bodys[m].innerHTML =  months[k];
  //   console.log(months[k]);
  // }
  // console.log(bodys[m].innerHTML = getMonth());

  // bodys[0].innerHTML = getMonth();

  // function getMonth(){
  //   for(var k = 0; k <= months.length - 1; k++){
  //         return months[k];
  //   }
  // } */
/* 

var i = 0;
while(i <= 10){
  let test1 = `The While loop is running ${i}`;
  console.log(test1);
  i++;
}

console.log(' ');
console.log('while loop Math :');

let dice = Math.trunc(Math.random() * 6) + 10;
while(dice !== 6){
  let test2 = `You rolled a ${dice}`;
  console.log(test2);
  dice = Math.trunc(Math.random() * 6) + 1;

  let text3 = 'The While loopis Ended';
  if(dice === 6) console.log(text3);
}
 */

/* 
const calcTip = function(bill){
  return Math.floor(bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
}


let bills = [22, 235, 176, 440, 39, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for(var i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

console.log(' ');
console.log('GOOR ber korbo :');


const calcAverage = function(arrayNum){
  let sum = 0;
  for(var i = 0; i < arrayNum.length; i++){
    // same as like 
    sum = sum + arrayNum[i];
    // sum += arrayNum[i];
  }
  let sumAverage = sum / arrayNum.length;
  // return sumAverage;
  let float2digit = 'The result is : ' +  parseFloat(sumAverage).toFixed(2) + ' ! ';

  return float2digit;
}

// let Average1st = Math.floor(calcAverage([24,30,45,70,-10,60,-220,100,80,74,29,64,82,196,20,-660,250,140]));

let Average1st = calcAverage([24,30,45,70,-10,60,-220,100,80,74,29,64,82,196,20,-660,250,140]);
console.log(Average1st);

// var num1 = parseFloat("10.547892")
// var num2 = parseFloat(Average1st).toFixed(3)
// console.log("Without using toFixed() method");
// console.log(num1);
// console.log("Using toFixed() method");
// console.log(num2);

let AverageTest = calcAverage([12,14,16,23,29,-11,74,51,31,19,-99,42,49,37,43,17,15,9]);
console.log(AverageTest);

let AverageTest1 = calcAverage([12,13,12,14,16,23,29,-11,74,51,31,19,-99,42,49,37,43,17,15,9]);
console.log(AverageTest1);

// console.log(calcAverage([12,14,16,23,29,-11,74,51,31,19,-99,42,49,37,43,17,15,9]));

// console.log(parseFloat(calcAverage([10,20,100,12,14,16,23,29,-11,74,51,31,19,-99,42,49,37,43,17,15,9,1000])).toFixed(2));


// const tstfunc = function(passArray){

//   return parseFloat(calcAverage(passArray)).toFixed(2);
// }

// console.log('Test to simple : ' + tstfunc([10,20]));

console.log(calcAverage([10*9,-1000,200,138,137,-111,-1321,32,6**2/3]));

let bigAvgTest1 = calcAverage([10*9,-1000,200,138,137,-111,-1321,32,6**2/3,9**9-41,50,200,67,-5*5000,1-6**9,-11102023,-181888888,-181888888,-1818,-50000,769,490,-50770*8,-57800,-50000,-54780,-50045,-55050,-50078,-50054,-50450,-50450,1-100**3,1-9**6,30000]);

let bigAvgTest3 = calcAverage([10*9,-1000,200,138,137,-111,-1321,32,6**2/3,9**9-41,50,200,67,-5*5000,1-6**9,-11102023,-181888888,-181888888,-1818,-50000,769,490,-50770*8,-57800,-50000,-54780,-50045,-55050,-50078,-50054,-50450,-50450,1-100**3,1-9**6,313**3]);

let bigAvgTest2 = calcAverage([10*9,-1000,200,138,137,-111,-1321,32,6**2/3,9**9-41,50,200,67,-5*5000,1-6**9,-11102023,-181888888,-181888888,-1818,-50000,769,490,-50770*8,-57800,-50000,-54780,-50045,-55050,-50078,-50054,-50450,-50450,1-100**3,1-9**6,20000]);

console.log(bigAvgTest1);
console.log(bigAvgTest2);
console.log(bigAvgTest3);

 */


/* ====================================>> Day 06 Started <<==================================== */






















/* ====================================>> Day 06 Endeds <<===================================== */











/* 
`use strict`
console.log("Amir"); */