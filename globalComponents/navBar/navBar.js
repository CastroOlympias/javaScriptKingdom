const navBar = document.createElement('section');
navBar.className = 'navBar'
indexHtmlId.append(navBar)

const navHomeAnch = document.createElement('a')
navBar.append(navHomeAnch)

const navHomeBtn = document.createElement('button');
navHomeBtn.className = 'navMenuButtons'
navHomeBtn.textContent = 'Home';
navHomeAnch.append(navHomeBtn)

const homeButtonScript = document.createElement('script')
homeButtonScript.setAttribute('src', './globalComponents/navBar/homeButton/navHomeButton.js')
indexHeadId.append(homeButtonScript)

const navAppListAnch = document.createElement('a')
navBar.append(navAppListAnch)

const navAppListBtn = document.createElement('button');
navAppListBtn.className = 'navMenuButtons'
navAppListBtn.id = 'navAppList-closed'
navAppListBtn.textContent = 'Open AppList';
navAppListAnch.append(navAppListBtn)

const appListButtonScript = document.createElement('script')
appListButtonScript.setAttribute('src', './globalComponents/navBar/appListButton/navAppListButton.js')
indexHeadId.append(appListButtonScript)

const navMenuAnch = document.createElement('a')
navBar.append(navMenuAnch)

const navMenuBtn = document.createElement('button');
navMenuBtn.className = 'navMenuButtons'
navMenuBtn.id = 'navMenu-open'
navMenuBtn.textContent = 'Open Menu';
navMenuAnch.append(navMenuBtn)

const menuButtonScript = document.createElement('script')
menuButtonScript.setAttribute('src', './globalComponents/navBar/menuButton/navMenuButton.js')
indexHeadId.append(menuButtonScript)