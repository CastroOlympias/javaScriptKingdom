// These getElements are global and accessable to any script that gets loaded
const rootHtml = document.getElementById('rootHtml');
const rootHead = document.getElementById('rootHead');
const rootBody = document.getElementById('rootBody');

// Loads the index.css file to style the root of the application
const indexCss = document.createElement('link')
indexCss.rel = 'stylesheet';
indexCss.href = './index.css';
rootHead.append(indexCss)

// Loads the root main element section
const rootMain = document.createElement('main');
rootMain.id = 'rootMain';
rootBody.append(rootMain)

// Nabigation bar is globalally loaded via a havaScript
const navBarModule = document.createElement('script');
navBarModule.setAttribute('src', './modules/navBar/navBar.js')
rootHtml.append(navBarModule)

