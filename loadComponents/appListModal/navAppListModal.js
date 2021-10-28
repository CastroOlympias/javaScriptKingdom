
console.log('App List Modal now opened')
const componentOneScript = document.createElement('script')
componentOneScript.setAttribute('src', './loadComponents/testComp2/testComp2.js')
indexHeadId.append(componentOneScript)

const ApplicationAnchor = document.createElement('a')
ApplicationAnchor.href = 'application.html'
navAppListModal.append(ApplicationAnchor)

const ApplicationButton = document.createElement('button')
ApplicationButton.className = 'ApplicationButton-open'
ApplicationButton.id = 'ApplicationButton-open'
ApplicationButton.textContent = 'Application'
ApplicationAnchor.append(ApplicationButton)

const RootApplicationAnchor = document.createElement('a')
RootApplicationAnchor.href = 'index.html'
navAppListModal.append(RootApplicationAnchor)

const RootApplicationButton = document.createElement('button')
RootApplicationButton.className = 'RootApplicationButton-open'
RootApplicationButton.id = 'RootApplicationButton-open'
RootApplicationButton.textContent = 'Root Application'
RootApplicationAnchor.append(RootApplicationButton)