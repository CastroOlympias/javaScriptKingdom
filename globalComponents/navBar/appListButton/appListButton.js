const navAppListModalStyles = document.createElement('link')
navAppListModalStyles.rel = 'stylesheet'
navAppListModalStyles.href = './loadComponents/appListModal/appListModal.css'

const navAppListModalScript = document.createElement('script')
navAppListModalScript.setAttribute('src', './loadComponents/appListModal/appListModal.js')

const navAppListModal = document.createElement('section');
navAppListModal.className = 'navAppListModal-opened'
navAppListModal.id = 'navAppListModal-closed'

console.log(`initial state ${navAppListModal.id}`)

const checkDOMForAppListComponent = function () {
    if (navAppListModal.id == 'navAppListModal-closed') {
        navAppListModalOpen()
    } else {
        navAppListModalClose()
    }
}

const navAppListModalOpen = function () {
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

        navMenuModal.className = 'navMenuModal-closed'
        navMenuBtn.id = 'navMenu-closed'
        navMenuBtn.textContent = 'Open Menu'
        setTimeout(() => {
            navMenuModal.id = 'navMenuModal-closed'
            navMenuModalStyles.remove()
            navMenuModalScript.remove()
            navMenuModal.remove()
            console.log(navMenuModal.id)
        }, `${navModalTimer}`)
    }
}

const navAppListModalClose = function () {
    if (navAppListModal.id == 'navAppListModal-closed') {
        return
    } else {
        navAppListModal.className = 'navAppListModal-closed'
        navAppListBtn.id = 'navAppList-closed'
        navAppListBtn.textContent = 'Open AppList'
        setTimeout(() => {
            navAppListModal.id = 'navAppListModal-closed'
            navAppListModalStyles.remove()
            navAppListModalScript.remove()
            navAppListModal.remove()
            console.log(navAppListModal.id)
        }, `${navModalTimer}`)
    }
}

navAppListBtn.onclick = checkDOMForAppListComponent;