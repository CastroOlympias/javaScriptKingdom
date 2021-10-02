const rootMainCss = document.createElement('link');
rootMainCss.rel = "stylesheet";
rootMainCss.href = "./modules/main/main.css";
rootHead.append(rootMainCss)

// Loads the root main element section
const rootMain = document.createElement('main');
rootMain.id = 'rootMain';
rootBody.append(rootMain)

const rootMainH1 = document.createElement('h1');
rootMainH1.textContent = 'INDEX 1 MAINddddddd  dddddddddddddd d d dddddddddddddddd ddddddd ddddddddddddddd dddddddddd dddddddddd';
rootMain.append(rootMainH1);

const anch = document.createElement('a')
anch.id = 'goTo'
anch.setAttribute('href', './index2.html');
rootMain.append(anch)

const anchButton = document.getElementById('goTo')
const button = document.createElement('button');
button.id = 'button';
button.textContent = 'CLICK TO GO TO INDEX 2';
anch.append(button)

