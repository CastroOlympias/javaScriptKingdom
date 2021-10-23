// These getElements are hardcoded html elements and are global for any script to use to append new a script from any script file. The id is to only load directly, into the html file, only one script which is index.js script, from all other scripts and child elements append will be handled, thus creating loading dynamic sections, componenetes, styles into a single page application, only loading user requested components and associated files

// the purpose of this index.js file is load only <script> elements, from which those <script> elements bring with them the functions, features and design of their relevant parts, styles and addtional elements that make of the applcation that are then appended to <main>, <section> or <body> elemements

// Primarily, elements IDs will be used for feature and functionality, classes will be used for styling. There maybe exceptions do for the need if flipping class or ID names to simulatie states for loading certian elements, like the nav bar elememnt, which changes from open to closed, that is then handled by an if function whereby it is determined to either create the applist modal or remove it.

// Styles of child element/componenets need to be loaded first in the parent component else styleing delay on componenet load will occur

// Element creations need to stay globally scoped as, when using an if statement for when to remove the element, the else { elment.remove() } doesn't have visbility to the globally defined element, and thus doesn't remove the element. eg. button click of appList creates mutiple isntances of the appListModal <script? element and doesn't remove any upon the closing of the modal

// <script> elements which are to load js files that load elemement into the body, need to be decalred in the parent element of the child elements

const indexHtmlId = document.getElementById('indexHtmlId')
const indexHeadId = document.getElementById('indexHeadId');
const indexBodyId = document.getElementById('indexBodyId')
const indexBodyClass = document.getElementsByClassName('indexBodyClass');

// Naming scheme 1) application (html file) name, 2) element to create, 3) how its loaded, through which element type, script or link. index = application-name, main = element, script which is the main.js file. The main.js file is where the element will be created. Each element or component will also load their own styles.

// Each element or component will have a className, files, styles and an id for functions baring the same name used for it's const variable. eg indexBodyClass and indexBodyId, to target the same element for styling on the class, and hanbdleing features and funcstions on the id

// Global components, are elements that presist in their visibility and functions that don't require to be called on demand by user action, like the nav bar or a header and footer

// *** Global Components/Elements ***

// Navigation component element <script>
const indexNavBar = document.createElement('script');
indexNavBar.setAttribute('src', './globalComponents/navBar/navBar.js')
indexHtmlId.append(indexNavBar)
console.log(indexNavBar)


// Load componenets are user called and so, are not always visibile and functional until called

// *** Load Components/Elements ***

// Main element <script>
const indexMainScript = document.createElement('script');
indexMainScript.setAttribute('src', './loadComponents/main/main.js');
indexBodyId.append(indexMainScript);

const h1 = document.createElement('h1')


const one = h1
const two = h1

one.id = 'firstH1'
two.id = 'secondH1'

createNewElement = { h1 }
// console.log(h1)

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