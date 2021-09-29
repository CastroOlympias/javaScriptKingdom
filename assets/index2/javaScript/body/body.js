const body = function(props) {
     
    const bodyHead = document.getElementById('head');
    const bodyHeadCssLink = document.createElement('link');
    bodyHeadCssLink.rel = "stylesheet";
    bodyHeadCssLink.href = "./assets/index2/cssStyles/body/body.css";
    bodyHead.append(bodyHeadCssLink)
    
    const bodyEl = document.getElementById('body');
    
    const bodyH1El = document.createElement('h1');
    bodyH1El.textContent = 'INDEX 2 BODY'
    bodyEl.append(bodyH1El);

}
body();