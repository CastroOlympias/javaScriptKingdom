// Loads this specific modules CSS styles
const navBarCss = document.createElement('link')
navBarCss.rel = 'stylesheet';
navBarCss.href = './indexModules/navBar/navBar.css';
rootHead.append(navBarCss)

// Navigation bar, for global use in other html files and dynamic views
const navBar = document.createElement('section');
navBar.id ='navBar';
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



const alterClass = function() {
    if (navAppListBtn.className === 'appList-closed') {
        navAppListBtn.className = 'appList-open'
    } else {
        navAppListBtn.remove()
    }
}
console.log(navAppListBtn.id)

navAppListBtn.onclick = alterClass;

// I think I can use an if statement in a function, that when I press a navbutton, who's id or class is default, appList-closed, then I can run an if statement to check the id,..closed then create an elemmetn section which would containt links to load into other html apps or load other modules. Once the module loads becuase it's closed I can alter the id of the elment to say ...open, then with the if statement if it is not closed, else, remove() on the list element to simulate a closing window or app menu