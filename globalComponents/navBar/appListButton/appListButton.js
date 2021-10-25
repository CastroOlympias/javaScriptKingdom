const navAppListAnch = document.createElement('a')
navBar.append(navAppListAnch)

const navAppListBtn = document.createElement('button');
navAppListBtn.className = 'navMenuButtons'
navAppListBtn.id = 'navAppList-open'
navAppListBtn.textContent = 'Open AppList';
navAppListAnch.append(navAppListBtn)

const navAppListModalStyles = document.createElement('link')
navAppListModalStyles.rel = 'stylesheet'
navAppListModalStyles.href = './loadComponents/appListModal/appListModal.css'

const navAppListModalScript = document.createElement('script')
navAppListModalScript.setAttribute('src', './loadComponents/appListModal/appListModal.js')

const navAppListModal = document.createElement('section');
navAppListModal.className = 'navAppListModal-open'

const appListModalOpenCLose = function () {
    if (navAppListBtn.id == 'navAppList-open') {
        navAppListBtn.id = 'navAppList-close'
        indexHeadId.append(navAppListModalStyles)
        indexBodyId.append(navAppListModalScript)
        indexBodyId.append(navAppListModal);
        navAppListModal.className = 'navAppListModal-open'
        navAppListBtn.textContent = 'Close AppList';
        closeNavMenu()
    } else {
        setTimeout(() => {
            navAppListModalStyles.remove()
            navAppListModalScript.remove()
            navAppListModal.remove()
        }, `${navModalTimer}`)
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
        navMenuModalStyles.remove()
        navMenuModalScript.remove()
        navMenuModal.remove()
    }, `${navModalTimer}`)
}