const navMenuModalStyles = document.createElement('link')
navMenuModalStyles.rel = 'stylesheet'
navMenuModalStyles.href = './loadComponents/menuModal/navMenuModal.css'

const navMenuModalScript = document.createElement('script')
navMenuModalScript.setAttribute('src', './loadComponents/menuModal/navMenuModal.js')

const navMenuModalOffClickClose = document.createElement('section')
navMenuModalOffClickClose.className = 'navMenuModalOffClickClose'
navMenuModalOffClickClose.setAttribute('onclick', 'DOMRefresh()')

const navMenuModal = document.createElement('section');
navMenuModal.className = 'navMenuModal-opened'
navMenuModal.id = 'navMenuModal-closed'

const checkDOMForMenuModalComponent = function () {
    if (navMenuModal.id == 'navMenuModal-closed') {
        navMenuModalOpen()
    } else {
        navMenuModalClose()
    }
}

const navMenuModalOpen = function () {
    if (navMenuModal.id == 'navMenuModal-opened') {
        return
    } else {
        navMenuModal.className = 'navMenuModal-opened'
        navMenuModal.id = 'navMenuModal-opened'
        navMenuBtn.id = 'navMenuModal-opened'
        navMenuBtn.textContent = 'Close Menu'
        indexHeadId.append(navMenuModalStyles)
        indexBodyId.append(navMenuModalScript)
        setTimeout(() => {
            indexBodyId.append(navMenuModalOffClickClose)
            indexBodyId.append(navMenuModal);
        }, `${modalOpenDelayTimer}`)
        navAppListModalClose()
    }
}

const navMenuModalClose = function () {
    if (navMenuModal.id == 'navMenuModal-closed') {
        return
    } else {
        navMenuModal.className = 'navMenuModal-closed'
        navMenuBtn.id = 'navMenu-closed'
        navMenuBtn.textContent = 'Open Menu'
        setTimeout(() => {
            navMenuModal.id = 'navMenuModal-closed'
            navMenuModalStyles.remove()
            navMenuModalScript.remove()
            navMenuModalOffClickClose.remove()
            navMenuModal.remove()
        }, `${navModalFadeOutTimer}`)
    }
}

navMenuBtn.onclick = checkDOMForMenuModalComponent;