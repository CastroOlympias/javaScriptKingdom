const appListModal = document.createElement('section');
appListModal.id = 'appListModal';
rootBody.append(appListModal);

const text = document.createElement('h1')
text.id = 'text'
text.textContent = "Hey dude, you killed a mouse, you shouldn't have!";
appListModal.append(text)