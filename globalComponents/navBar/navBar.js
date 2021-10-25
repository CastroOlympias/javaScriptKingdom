// Loads this specific modules CSS styles
const navBarCss = document.createElement('link')
navBarCss.rel = 'stylesheet';
navBarCss.href = './globalComponents/navBar/navBar.css';
indexHtmlId.append(navBarCss)


// Navigation bar, for global use in other html files and dynamic views
const navBar = document.createElement('section');
navBar.className = 'navBar'
indexBodyId.append(navBar)


// Navigation bar home button
const navHomeAnch = document.createElement('a')
navBar.append(navHomeAnch)

const navHomeBtn = document.createElement('button');
navHomeBtn.className = 'navMenuButtons'
navHomeBtn.textContent = 'Home';
navHomeAnch.append(navHomeBtn)


// Navigation bar application list button
const navAppListAnch = document.createElement('a')
navBar.append(navAppListAnch)

const navAppListBtn = document.createElement('button');
navAppListBtn.className = 'navMenuButtons'
navAppListBtn.id = 'navAppList-open'
navAppListBtn.textContent = 'Open AppList';
navAppListAnch.append(navAppListBtn)

const appListModalScript = document.createElement('script')
appListModalScript.id = 'appListModal'
appListModalScript.setAttribute('src', './loadComponents/appListModal/appListModal.js')

const navAppListModal = document.createElement('section');
navAppListModal.className = 'navAppListModal-open'



// Navigation bar menu button
const navMenuAnch = document.createElement('a')
navBar.append(navMenuAnch)

const navMenuBtn = document.createElement('button');
navMenuBtn.className = 'navMenuButtons'
navMenuBtn.id = 'navMenu-open'
navMenuBtn.textContent = 'Open Menu';
navMenuAnch.append(navMenuBtn)

const navMenuModalScript = document.createElement('script')
navMenuModalScript.id = 'menuModal'
navMenuModalScript.setAttribute('src', './loadComponents/menuModal/menuModal.js')

const navMenuModal = document.createElement('section');
navMenuModal.className = 'navMenuModal-open'


const timer = 2000;

// Home button DOM refresh timer
const domRefresh = function () {
    navMenuModal.id = 'navMenuModal-open'
    navAppListModal.id = 'navAppListModal-open'
    setTimeout(() => {
        appListModalScript.remove()
        navAppListModal.remove()
        navMenuModalScript.remove()
        navMenuModal.remove()

        testCompScript.remove()
        componentOneScript.remove()
        testCompScript.remove()
    }, `${timer}`);
    navAppListModal.className = 'navAppListModal-close'
    navMenuModal.className = 'navMenuModal-close';

    navAppListBtn.id = 'navAppList-open'
    navAppListBtn.textContent = 'Open AppList';
    navMenuBtn.id = 'navMenu-open'
    navMenuBtn.textContent = 'Open Menu'


}
navHomeBtn.onclick = domRefresh




// this function needs to append the appListModal child elements and remove them. you can create the in the appListModal js file, but proper appending needs to happen here or else some elements don't consistant get re-appened after open and close, like the appListModalCss element, the tyles will not be loaded and render a second time unless appended if the below if statement function
const appListModalOpenCLose = function () {
    if (navAppListBtn.id == 'navAppList-open') {
        navAppListBtn.id = 'navAppList-close'
        indexBodyId.append(appListModalScript)
        indexBodyId.append(navAppListModal);
        navAppListModal.className = 'navAppListModal-open'
        navAppListBtn.textContent = 'Close AppList';
        closeNavMenu()
    } else {
        setTimeout(() => {
            appListModalScript.remove()
            navAppListModal.remove()
        }, `${timer}`)
        navAppListModal.className = 'navAppListModal-close'
        navAppListBtn.id = 'navAppList-open'
        navAppListBtn.textContent = 'Open AppList';
    }
}
navAppListBtn.onclick = appListModalOpenCLose;

closeNavMenu = function () {
    navMenuBtn.id = 'navMenu-open'
    navMenuBtn.textContent = 'Open Menu'
    navMenuModal.className = 'navMenuModal-close'
    setTimeout(() => {
        navMenuModalScript.remove()
        navMenuModal.remove()
    }, `${timer}`)

    
}

const menuModalOpenClose = function () {
    if (navMenuBtn.id == 'navMenu-open') {
        navMenuBtn.id = 'navMenu-close'
        indexBodyId.append(navMenuModalScript)
        indexBodyId.append(navMenuModal);
        navMenuModal.className = 'navMenuModal-open'
        navMenuBtn.textContent = 'Close Menu'
        closeAppList()
    } else {
        setTimeout(() => {
            navMenuModalScript.remove()
            navMenuModal.remove()
        }, `${timer}`)
        navMenuModal.className = 'navMenuModal-close'
        navMenuBtn.id = 'navMenu-open'
        navMenuBtn.textContent = 'Open Menu'
    }
}

navMenuBtn.onclick = menuModalOpenClose;

closeAppList = function () {
    navAppListBtn.id = 'navAppList-open'
    navAppListBtn.textContent = 'Open AppList';
    navAppListModal.className = 'navAppListModal-close'
    setTimeout(() => {
        appListModalScript.remove()
        navAppListModal.remove()
    }, `${timer}`)

    
}