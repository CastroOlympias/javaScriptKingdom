const mainHead = document.getElementById('head');
const mainHeadCssLink = document.createElement('link');
mainHeadCssLink.rel = "stylesheet";
mainHeadCssLink.href = "./assets/index/cssStyles/main/main.css";
bodyHead.append(mainHeadCssLink)




const main = document.createElement('main');
main.id = 'main';
bodyEl.append(main)

const mainH1El = document.createElement('h1');
mainH1El.textContent = 'Main';
main.append(mainH1El);

const button = document.createElement('button');
button.id = 'button';
button.textContent = 'click me to go document 1';
main.append(button)





document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
    window.location.href = "../../../../index.html"
    
})
