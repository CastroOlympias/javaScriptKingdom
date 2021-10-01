const rootHtml = document.getElementById('rootHtml');
console.log(rootHtml);
const rootHead = document.getElementById('rootHead');
console.log(rootHead)
const rootBody = document.getElementById('rootBody');
console.log(rootBody)

// Loads the index.css file to style the root of the application
const indexCss = document.createElement('link')
indexCss.rel = 'stylesheet';
indexCss.href = './index.css';
rootHead.append(indexCss)

const navBarModule = document.createElement('script');
navBarModule.setAttribute('src', './indexModules/navBar/navBar.js')
rootHtml.append(navBarModule)

