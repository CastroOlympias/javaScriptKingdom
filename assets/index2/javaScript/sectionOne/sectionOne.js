const sectionOne = function() {

    const bodyHead = document.getElementById('head');
    const bodyEl = document.getElementById('body');
    
    const sectionOne = document.createElement('section');
    sectionOne.id = 'sectionOne';
    bodyEl.append(sectionOne)
    
    const sectionOneH1El = document.createElement('h1');
    sectionOneH1El.textContent = 'INDEX 2 SECTION ONE'
    sectionOne.append(sectionOneH1El)
    
}
sectionOne()