// These getElements are hardcoded html elements and are global for any script to use to append new script elements from any script file
const indexHtmlId = document.getElementById('indexHtmlId');
const indexHeadId = document.getElementById('indexHeadId');
const indexBodyClass = document.getElementsByClassName('indexBodyClass');
const indexBodyId = document.getElementById('indexBodyId')

// Naming scheme 1) application (html) name, 2) element to create, 3) how its loaded, through which element type, script or link. index = application-name, main = element, script which is the main.js file. The main.js file is where the element will be created. Each element or component will also load their own styles.

// Each element or component will have a className files styles and an id for functions baring the same name used for it's const variable

// Main element
const indexMainScript = document.createElement('script');
indexMainScript.setAttribute('src', './globalComponents/main/main.js');
indexHtmlId.append(indexMainScript);
// Navigation element
const indexNavBar = document.createElement('script');
indexNavBar.setAttribute('src', './globalComponents/navBar/navBar.js')
indexHtmlId.append(indexNavBar)

