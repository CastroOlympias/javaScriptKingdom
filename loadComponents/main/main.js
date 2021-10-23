const indexMainCss = document.createElement('link');
indexMainCss.rel = "stylesheet";
indexMainCss.href = "./loadComponents/main/main.css";
indexHeadId.append(indexMainCss)

// Loads the index main element section
const indexMainId = document.createElement('main');
indexMainId.id = 'indexMain';
indexBodyId.append(indexMainId)

const indexMainH1 = document.createElement('h1');
indexMainH1.textContent = 'INDEX 1 MAINddddddd  dddddddddddddd d d dddddddddddddddd ddddddd ddddddddddddddd dddddddddd dddddddddd';
indexMain.append(indexMainH1);

const anch = document.createElement('a')
anch.id = 'goTo'
anch.setAttribute('href', './index2.html');
indexMainId.append(anch)

const anchButton = document.getElementById('goTo')
const button = document.createElement('button');
button.id = 'button';
button.textContent = 'CLICK TO GO TO INDEX 2';
anch.append(button)

