const domRefresh = function () {
    navMenuModal.id = 'navMenuModal-open'
    navAppListModal.id = 'navAppListModal-open'
    setTimeout(() => {
        navAppListModalScript.remove()
        navAppListModal.remove()
        navMenuModalScript.remove()
        navMenuModal.remove()
        testCompScript.remove()
        componentOneScript.remove()
        testCompScript.remove()
    }, `${domRefreshTimer}`);
    navAppListModal.className = 'navAppListModal-close'
    navAppListBtn.id = 'navAppList-open'
    navAppListBtn.textContent = 'Open AppList';
    navMenuModal.className = 'navMenuModal-close';
    navMenuBtn.id = 'navMenu-open'
    navMenuBtn.textContent = 'Open Menu'
}
navHomeBtn.onclick = domRefresh