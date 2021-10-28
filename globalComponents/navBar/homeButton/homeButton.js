const DOMRefresh = function () {
    navMenuModal.className = 'navMenuModal-closed'
    navMenuBtn.id = 'navMenu-closed'
    navMenuBtn.textContent = 'Open Menu'

    navAppListModal.className = 'navAppListModal-closed'
    navAppListBtn.id = 'navAppList-closed'
    navAppListBtn.textContent = 'Open AppList'
    setTimeout(() => {
        navMenuModal.id = 'navMenuModal-closed'
        navMenuModalStyles.remove()
        navMenuModalScript.remove()
        navMenuModal.remove()
        console.log(navMenuModal.id)

        navAppListModal.id = 'navAppListModal-closed'
        navAppListModalStyles.remove()
        navAppListModalScript.remove()
        navAppListModal.remove()
        console.log(navAppListModal.id)
    }, `${DOMRefreshTimer}`)
}
navHomeBtn.onclick = DOMRefresh