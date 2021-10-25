const navBar = document.createElement('section');
navBar.className = 'navBar'
indexBodyId.append(navBar)

const domRefreshTimer = 500
const navModalTimer = 500

setTimeout(() => {
    const homeButtonScript = document.createElement('script')
    homeButtonScript.setAttribute('src', './globalComponents/navBar/homeButton/homeButton.js')
    indexBodyId.append(homeButtonScript)
}, 0)

setTimeout(() => {
    const appListButtonScript = document.createElement('script')
    appListButtonScript.setAttribute('src', './globalComponents/navBar/appListButton/appListButton.js')
    indexBodyId.append(appListButtonScript)
}, 10)

setTimeout(() => {
    const menuButtonScript = document.createElement('script')
    menuButtonScript.setAttribute('src', './globalComponents/navBar/menuButton/menuButton.js')
    indexBodyId.append(menuButtonScript)
}, 20)