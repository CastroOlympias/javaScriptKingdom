const appListModalCss = document.createElement('Link');
appListModalCss.rel = 'stylesheet';
appListModalCss.href = './loadComponents/appListModal/appListModal.css';
// indexHeadId.append(appListModalCss)



// const componentOneScript = document.createElement('script');
// componentOneScript.setAttribute('srs', './loadComponents/componentOne/componentOne.js')

const text = document.createElement('h1')
text.id = 'text'
text.textContent = "Hey dude, you killed a mouse, you shouldn't have!";
navAppListModal.append(text)

const anch2 = document.createElement('a')
anch2.id = 'goTo'
// anch2.setAttribute('href', './index2.html');
navAppListModal.append(anch2)

// const anch2Button = document.getElementById('goTo')
const button2 = document.createElement('button');
button2.id = 'button';
button2.textContent = 'CLICK TO GO TO INDEX 2';
anch2.append(button2)

// const alerts = function () {

//     indexHtmlId.append(componentOneScript)
    
// }
const test = 'hehehehe'
console.log(test)

// button2.onclick = alerts;

// navMenuBtn.onclick = alerts;

// const hello = document.createElement('h1');
// hello.textContent = 'Heey asdlkfasdlkasdklfjlkf gggggggggggggggg dfdfdf dfj dlkjf lskdjf ffffff lskdfjsss';
// indexBodyId.append(hello);
// console.log(hello.textContent)
