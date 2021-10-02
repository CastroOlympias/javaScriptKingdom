// These getElements are globally to any script that gets loaded
const rootHtml = document.getElementById('rootHtml');
const rootHead = document.getElementById('rootHead');
const rootBody = document.getElementById('rootBody');
// Loads the index.css file to style the root of the application
const indexCss = document.createElement('link')
indexCss.rel = 'stylesheet';
indexCss.href = './index.css';
rootHead.append(indexCss)
// script elements here for auto loading section type parent elements not trigger loaded by running functions

// Main element auto loaded here by sript
const rootMainScript = document.createElement('script');
rootMainScript.setAttribute('src', './modules/main/main.js');
rootHtml.append(rootMainScript);

// Nabigation bar is globalally loaded via a javaScript
const navBarModule = document.createElement('script');
navBarModule.setAttribute('src', './modules/navBar/navBar.js')
rootHtml.append(navBarModule)

