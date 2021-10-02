const appListModal = document.createElement('section');
appListModal.id = 'appListModal';
rootBody.append(appListModal);

const text = document.createElement('h1')
text.id = 'text'
text.textContent = "Hey dude, you killed a mouse, you shouldn't have!";
appListModal.append(text)

// const anch = document.createElement('a')
// anch.id = 'goTo'
// anch.setAttribute('href', './index2.html');
// appListModal.append(anch)

// const anchButton = document.getElementById('goTo')
// const button = document.createElement('button');
// button.id = 'button';
// button.textContent = 'CLICK TO GO TO INDEX 2';
// anch.append(button)