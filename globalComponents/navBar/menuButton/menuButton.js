const navMenuModalStyles = document.createElement('link')
navMenuModalStyles.rel = 'stylesheet'
navMenuModalStyles.href = './loadComponents/menuModal/menuModal.css'

const navMenuModalScript = document.createElement('script')
navMenuModalScript.setAttribute('src', './loadComponents/menuModal/menuModal.js')

const navMenuModal = document.createElement('section');
navMenuModal.className = 'navMenuModal-open'

const menuModalOpenClose = function () {
    if (navMenuBtn.id == 'navMenu-open') {
        navMenuBtn.id = 'navMenu-close'
        indexHeadId.append(navMenuModalStyles)
        indexBodyId.append(navMenuModalScript)
        indexBodyId.append(navMenuModal);
        navMenuModal.className = 'navMenuModal-open'
        navMenuBtn.textContent = 'Close Menu'
        closeAppList()
    } else {
        setTimeout(() => {
            navMenuModalStyles.remove()
            navMenuModalScript.remove()
            navMenuModal.remove()
        }, `${navModalTimer}`)
        navMenuModal.className = 'navMenuModal-close'
        navMenuBtn.id = 'navMenu-open'
        navMenuBtn.textContent = 'Open Menu'
    }
}
navMenuBtn.onclick = menuModalOpenClose;

closeAppList = function () {
    navAppListBtn.id = 'navAppList-open'
    navAppListBtn.textContent = 'Open AppList';
    navAppListModal.className = 'navAppListModal-close'
    setTimeout(() => {
        navAppListModalStyles.remove()
        navAppListModalScript.remove()
        navAppListModal.remove()
    }, `${navModalTimer}`)
}