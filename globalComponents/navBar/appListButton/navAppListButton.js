const navAppListModalStyles = document.createElement('link')
navAppListModalStyles.rel = 'stylesheet'
navAppListModalStyles.href = './loadComponents/appListModal/navAppListModal.css'

const navAppListModalScript = document.createElement('script')
navAppListModalScript.setAttribute('src', './loadComponents/appListModal/navAppListModal.js')

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
        indexHeadId.append(navAppListModalScript)
        setTimeout(() => {
            indexBodyId.append(navAppListModal);
        }, `${modalOpenDelayTimer}`)
        
        // navAppListModal.append(hello);
        navMenuModal.className = 'navMenuModal-closed'
        navMenuBtn.id = 'navMenu-closed'
        navMenuBtn.textContent = 'Open Menu'
        setTimeout(() => {
            navMenuModal.id = 'navMenuModal-closed'
            navMenuModalStyles.remove()
            navMenuModalScript.remove()
            navMenuModal.remove()
            console.log(navMenuModal.id)
        }, `${navModalFadeOutTimer}`)
    }
}

const navAppListModalClose = function () {
    if (navAppListModal.id == 'navAppListModal-closed') {
        return
    } else {
        navAppListModal.className = 'navAppListModal-closed'
        navAppListBtn.id = 'navAppList-closed'
        navAppListBtn.textContent = 'Open AppList'
        // hello.remove()
        setTimeout(() => {
            navAppListModal.id = 'navAppListModal-closed'
            
            navAppListModalStyles.remove()
            navAppListModalScript.remove()
            navAppListModal.remove()
            console.log(navAppListModal.id)
        }, `${navModalFadeOutTimer}`)
    }
}

navAppListBtn.onclick = checkDOMForAppListComponent;