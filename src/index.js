
const DancingKingJD = () => {
    let stage = document.createElement('div');
    stage.style.position = 'fixed';
    stage.style.bottom = '10px';
    stage.style.left = '10px';
    stage.style.zIndex = '10000';

    let dancer = document.createElement('img');
    dancer.src = chrome.runtime.getURL('img/tang.gif');
    dancer.style.width = '100px';
    dancer.style.height = '112px';

    stage.appendChild(dancer);

    document.body.appendChild(stage);
}

window.addEventListener('load', DancingKingJD);