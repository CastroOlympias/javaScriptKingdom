const navAppListAnch = document.createElement('a')
navBar.append(navAppListAnch)

const navAppListBtn = document.createElement('button');
navAppListBtn.className = 'navMenuButtons'
navAppListBtn.id = 'navAppList-closed'
navAppListBtn.textContent = 'Open AppList';
navAppListAnch.append(navAppListBtn)

const navAppListModalStyles = document.createElement('link')
navAppListModalStyles.rel = 'stylesheet'
navAppListModalStyles.href = './loadComponents/appListModal/appListModal.css'

const navAppListModalScript = document.createElement('script')
navAppListModalScript.setAttribute('src', './loadComponents/appListModal/appListModal.js')

const navAppListModal = document.createElement('section');
navAppListModal.className = 'navAppListModal-opened'
navAppListModal.id = 'navAppListModal-closed'

console.log(navAppListModal.id)

const checkDOMForComponent = function () {
    if (navAppListModal.id == 'navAppListModal-closed') {
        appListModalOpen()
    } else {
        appListModalClose()
    }
}

const appListModalOpen = function () {
    if (navAppListModal.id == 'navAppListModal-opened') {
        return
    } else {
        navAppListModal.className = 'navAppListModal-opened'
        navAppListModal.id = 'navAppListModal-opened'
        navAppListBtn.id = 'navAppList-opened'
        navAppListBtn.textContent = 'Close AppList';
        console.log(navAppListModal.id)
        indexHeadId.append(navAppListModalStyles)
        indexBodyId.append(navAppListModalScript)
        indexBodyId.append(navAppListModal);
        closeNavMenu()
    }
}

const appListModalClose = function () {
    if (navAppListModal.id == 'navAppListModal-closed') {
        return
    } else {
        navAppListModal.className = 'navAppListModal-closed'
        navAppListBtn.id = 'navAppList-closed'
        navAppListBtn.textContent = 'Open AppList';
        setTimeout(() => {
            navAppListModal.id = 'navAppListModal-closed'
            componentOneScript.remove()
            hello.remove()
            navAppListModalStyles.remove()
            navAppListModalScript.remove()
            navAppListModal.remove()
            console.log(navAppListModal.id)
        }, `${navModalTimer}`)
    }
}


navAppListBtn.onclick = checkDOMForComponent;

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