
const sectionOne = function () {

    const bodyHead = document.getElementById('head');
    const bodyEl = document.getElementById('body');

    const sectionOne = document.createElement('section');
    sectionOne.id = 'sectionOne';
    bodyEl.append(sectionOne)

    const sectionOneH1El = document.createElement('h1');
    sectionOneH1El.textContent = 'INDEX 1 SECTION ONE'
    sectionOne.append(sectionOneH1El)

    const loadSectionTwo = document.createElement('button');
    loadSectionTwo.textContent = 'LOAD SECTION TWO';
    sectionOne.append(loadSectionTwo)

    const sectionTwo = function() {
        const number = '6'
        console.log(number)
        const testH1El = document.createElement('h1')
        testH1El.textContent = 'Hey there!';
        sectionOne.append(testH1El)
    }
    loadSectionTwo.onclick = sectionTwo;

}
sectionOne()