const htmlPage = 'index2.html';
console.log(htmlPage)

const bodyHead = document.getElementById('head');
const bodyHeadCssLink = document.createElement('link');
bodyHeadCssLink.rel = "stylesheet";
bodyHeadCssLink.href = "./assets/index2/cssStyles/body/body.css";
bodyHead.append(bodyHeadCssLink)

// body HTML element
const bodyEl = document.getElementById('body');
// bodyEl.setAttribute('style', 'background-color: brown;');

const bodyH1El = document.createElement('h1');
bodyH1El.textContent = 'INDEX 2 BODY'
bodyEl.append(bodyH1El);

// javaScript elements
// main plus sections





const sectionTwo = document.createElement('section');
sectionTwo.id = 'sectionTwo';

const sectionThree = document.createElement('section');
sectionThree.id = 'sectionThree';

const sectionFour = document.createElement('section');
sectionFour.id = 'sectionFour';

const sectionFive = document.createElement('section');
sectionFive.id = 'sectionFive';


// section inner elements





// const bodyCss = src("../../../assets/cssStyles/body/body.css");
// console.log(bodyCss)