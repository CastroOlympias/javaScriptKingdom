const appListModal = document.createElement('section');
appListModal.className = 'appListModal'
appListModal.id = 'appListModal';
indexBodyId.append(appListModal);

const text = document.createElement('h1')
text.id = 'text'
text.textContent = "Hey dude, you killed a mouse, you shouldn't have!";
appListModal.append(text)

const anch2 = document.createElement('a')
anch2.id = 'goTo'
anch2.setAttribute('href', './index2.html');
appListModal.append(anch2)

const anch2Button = document.getElementById('goTo')
const button2 = document.createElement('button');
button2.id = 'button';
button2.textContent = 'CLICK TO GO TO INDEX 2';
anch2.append(button2)

const componentOneScript = document.createElement('script');
componentOneScript.setAttribute('srs', './loadComponents/componentOne/componentOne.js')
appListModal.append(componentOneScript)