// Loads this specific modules CSS styles
const navBarCss = document.createElement('link')
navBarCss.rel = 'stylesheet';
navBarCss.href = './globalComponents/navBar/navBar.css';
indexHtmlId.append(navBarCss)


// Navigation bar, for global use in other html files and dynamic views
const navBar = document.createElement('section');
navBar.className = 'navBar'
navBar.id = 'navBar';
indexBodyId.append(navBar)


// Navigation bar home button
const navHomeAnch = document.createElement('a')
navHomeAnch.id = 'navHomeAnch';
navBar.append(navHomeAnch)

const navHomeBtn = document.createElement('button');
navHomeBtn.className = 'home-closed'
navHomeBtn.id = 'navBtns';
navHomeBtn.textContent = 'Home';
navHomeAnch.append(navHomeBtn)


// Navigation bar application list button
const navAppListAnch = document.createElement('a')
navAppListAnch.id = 'navAppListAnch';
navBar.append(navAppListAnch)

const navAppListBtn = document.createElement('button');
navAppListBtn.className = 'navAppList-closed'
navAppListBtn.id = 'navBtns';
navAppListBtn.textContent = 'Open AppList';
navAppListAnch.append(navAppListBtn)

const appListModalScript = document.createElement('script')
appListModalScript.id = 'appListModal'
appListModalScript.setAttribute('src', './loadComponents/appListModal/appListModal.js')

const navAppListModal = document.createElement('section');
navAppListModal.className = 'appListModal'
navAppListModal.id = 'appListModal';


// Navigation bar menu button
const navMenuAnch = document.createElement('a')
navMenuAnch.id = 'navBtns';
navBar.append(navMenuAnch)

const navMenuBtn = document.createElement('button');
navMenuBtn.className = 'navMenuModal-closed'
navMenuBtn.id = 'navBtns';
navMenuBtn.textContent = 'Open Menu';
navMenuAnch.append(navMenuBtn)

const navMenuModalScript = document.createElement('script')
navMenuModalScript.id = 'menuModal'
navMenuModalScript.setAttribute('src', './loadComponents/menuModal/menuModal.js')

const navMenuModal = document.createElement('section');
navMenuModal.className = 'navMenuModal-fadeIn'
navMenuModal.id = 'navMenuModal-fadeIn';



const domRefresh = function () {
    navMenuModal.id = 'navMenuModal-fadeOut'
    setTimeout(() => {
        appListModalScript.remove()
        navAppListModal.remove()
        navMenuModal.remove()
        navMenuModalScript.remove()
        testCompScript.remove()
        componentOneScript.remove()
        testCompScript.remove()
        navAppListBtn.className = 'navAppList-closed'
        navAppListBtn.textContent = 'Open AppList';
        

        navMenuModal.id = 'navMenuModal-fadeIn';
    }, 500);
    navMenuBtn.className = 'navMenuModal-closed'
    navMenuBtn.textContent = 'Open Menu'

}

navHomeBtn.onclick = domRefresh

// this function needs to append the appListModal child elements and remove them. you can create the in the appListModal js file, but proper appending needs to happen here or else some elements don't consistant get re-appened after open and close, like the appListModalCss element, the tyles will not be loaded and render a second time unless appended if the below if statement function
const appListModalOpenCLose = function () {
    if (navAppListBtn.className == 'navAppList-closed') {
        navAppListBtn.className = 'navAppList-opened'
        indexBodyId.append(appListModalScript)
        indexBodyId.append(navAppListModal);
        navAppListBtn.textContent = 'Close AppList';
        closeNavMenu()
    } else {
        navAppListBtn.className = 'navAppList-closed'
        appListModalScript.remove()
        navAppListModal.remove()
        navAppListBtn.textContent = 'Open AppList';
    }
}
navAppListBtn.onclick = appListModalOpenCLose;

closeNavMenu = function() {
    navMenuBtn.className = 'navMenuModal-closed'
    navMenuModalScript.remove()
    navMenuModal.remove()
    navMenuBtn.textContent = 'Open Menu'
}

const menuModalOpenClose = function () {
    if (navMenuBtn.className == 'navMenuModal-closed') {
        navMenuModal.id = 'navMenuModal-fadeIn';
        navMenuBtn.className = 'navMenuModal-opened'
        indexBodyId.append(navMenuModalScript)
        indexBodyId.append(navMenuModal);
        navMenuBtn.textContent = 'Close Menu'
       
        closeAppList()
    } else {
        navMenuBtn.className = 'navMenuModal-closed'
        navMenuModalScript.remove()
        navMenuModal.remove()
        navMenuBtn.textContent = 'Open Menu'
    }
}

navMenuBtn.onclick = menuModalOpenClose;

closeAppList = function () {
    navAppListBtn.className = 'navAppList-closed'
    appListModalScript.remove()
    navAppListModal.remove()
    navAppListBtn.textContent = 'Open AppList';
}