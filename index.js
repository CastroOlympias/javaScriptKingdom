// These getElements are hardcoded html elements and are global for any script to use to append new script elements from any script file
const indexHtmlId = document.getElementById('indexHtmlId');
const indexHeadId = document.getElementById('indexHeadId');
const indexBodyId = document.getElementById('indexBodyId')
const indexBodyClass = document.getElementsByClassName('indexBodyClass');

// Naming scheme 1) application (html) name, 2) element to create, 3) how its loaded, through which element type, script or link. index = application-name, main = element, script which is the main.js file. The main.js file is where the element will be created. Each element or component will also load their own styles.

// Each element or component will have a className files styles and an id for functions baring the same name used for it's const variable

// Main element
const indexMainScript = document.createElement('script');
indexMainScript.setAttribute('src', './globalComponents/main/main.js');
indexHeadId.append(indexMainScript);
// Navigation element
const indexNavBar = document.createElement('script');
indexNavBar.setAttribute('src', './globalComponents/navBar/navBar.js')
indexHeadId.append(indexNavBar)

const h1 = document.createElement('h1')


const one = h1
const two = h1

one.id = 'firstH1'
two.id = 'secondH1'

createNewElement = { h1 }
console.log(h1)

// const anchor = document.createElement('a')
// const create = function() {
//     {
//         element: {
//             anchor = document.createElement('h1')
            
//         }
//     }

//     console.log(anchor)
// }

const textOne = 'hahahahgggaha'
const textTwo = 'heyeyeye'

// const testOne = h1

const testOne = textContent = textOne
testOne.id = 'hello';
const testTwo = textContent = textTwo

indexBodyId.append(one)
h1.append(testOne);
indexBodyId.append(two)
h1.append(testTwo)

console.log(window)
console.log(window.onload)