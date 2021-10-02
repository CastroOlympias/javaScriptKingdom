// Loads this specific modules CSS styles
const navBarCss = document.createElement('link')
navBarCss.rel = 'stylesheet';
navBarCss.href = './modules/navBar/navBar.css';
rootHead.append(navBarCss)

// Navigation bar, for global use in other html files and dynamic views
const navBar = document.createElement('section');
navBar.id = 'navBar';
rootBody.append(navBar)

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
navAppListBtn.className = 'appList-closed'
navAppListBtn.id = 'navBtns';
navAppListBtn.textContent = 'AppList';
navAppListAnch.append(navAppListBtn)

// Navigation bar menu button
const navMenuAnch = document.createElement('a')
navMenuAnch.id = 'navBtns';
navBar.append(navMenuAnch)

const navMenuBtn = document.createElement('button');
navMenuBtn.className = 'menu-closed'
navMenuBtn.id = 'navBtns';
navMenuBtn.textContent = 'Menu';
navMenuAnch.append(navMenuBtn)

const appListModalScript = document.createElement('script')
appListModalScript.id = 'appListModal'
appListModalScript.setAttribute('src', './modules/navBar/appListModal.js')

const appListModalOpenCLose = function () {
    if (navAppListBtn.className == 'appList-closed') {
        navAppListBtn.className = 'appList-opened'
        rootHead.append(appListModalScript)
        rootBody.append(appListModal);
    } else {
        navAppListBtn.className = 'appList-closed'
        appListModalScript.remove()
        appListModal.remove()
    }
}
navAppListBtn.onclick = appListModalOpenCLose;