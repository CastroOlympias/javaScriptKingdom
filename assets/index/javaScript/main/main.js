const mainHead = document.getElementById('head');
const mainHeadCssLink = document.createElement('link');
mainHeadCssLink.rel = "stylesheet";
mainHeadCssLink.href = "./assets/index/cssStyles/main/main.css";
bodyHead.append(mainHeadCssLink)

const main = document.createElement('main');
main.id = 'main';
bodyEl.append(main)

const mainH1El = document.createElement('h1');
mainH1El.textContent = 'INDEX 1 MAIN';
main.append(mainH1El);

const anch = document.createElement('a')
anch.id = 'goTo'
anch.setAttribute ('href', './index2.html');
main.append(anch)

const anchButton = document.getElementById('goTo')
const button = document.createElement('button');
button.id = 'button';
button.textContent = 'CLICK TO GO TO INDEX 2';
anch.append(button)
