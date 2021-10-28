const navMenuModalStyles = document.createElement('link')
navMenuModalStyles.rel = 'stylesheet'
navMenuModalStyles.href = './loadComponents/menuModal/menuModal.css'

const navMenuModalScript = document.createElement('script')
navMenuModalScript.setAttribute('src', './loadComponents/menuModal/menuModal.js')

const navMenuModal = document.createElement('section');
navMenuModal.className = 'navMenuModal-opened'
navMenuModal.id = 'navMenuModal-closed'

console.log(`initial state ${navMenuModal.id}`)

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
        console.log(navMenuModal.id)
        indexHeadId.append(navMenuModalStyles)
        indexBodyId.append(navMenuModalScript)
        indexBodyId.append(navMenuModal);

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
            navMenuModal.remove()
            console.log(navMenuModal.id)
        }, `${navModalTimer}`)
    }
}

navMenuBtn.onclick = checkDOMForMenuModalComponent;