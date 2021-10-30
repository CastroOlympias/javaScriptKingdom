const navAppListModalStyles = document.createElement('link')
navAppListModalStyles.rel = 'stylesheet'
navAppListModalStyles.href = './loadComponents/appListModal/navAppListModal.css'

const navAppListModalScript = document.createElement('script')
navAppListModalScript.setAttribute('src', './loadComponents/appListModal/navAppListModal.js')

const navAppListModalOffClickClose = document.createElement('section')
navAppListModalOffClickClose.className = 'navAppListModalOffClickClose-opened'
navAppListModalOffClickClose.setAttribute('onclick', 'DOMRefresh()')

const navAppListModal = document.createElement('section');
navAppListModal.className = 'navAppListModal-opened'
navAppListModal.id = 'navAppListModal-closed'

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
        navAppListModalOffClickClose.className = 'navAppListModalOffClickClose-opened'
        indexHeadId.append(navAppListModalStyles)
        indexHeadId.append(navAppListModalScript)
        setTimeout(() => {
            indexBodyId.append(navAppListModalOffClickClose)
            indexBodyId.append(navAppListModal);
        }, `${modalOpenDelayTimer}`)
        navMenuModalClose()
    }
}

const navAppListModalClose = function () {
    if (navAppListModal.id == 'navAppListModal-closed') {
        return
    } else {
        navAppListModal.className = 'navAppListModal-closed'
        navAppListBtn.id = 'navAppList-closed'
        navAppListBtn.textContent = 'Open AppList'
        navAppListModalOffClickClose.className = 'navAppListModalOffClickClose-closed'
        setTimeout(() => {
            navAppListModal.id = 'navAppListModal-closed'
            navAppListModalStyles.remove()
            navAppListModalScript.remove()
            navAppListModalOffClickClose.remove()
            navAppListModal.remove()
        }, `${navModalFadeOutTimer}`)
    }
}

navAppListBtn.onclick = checkDOMForAppListComponent;