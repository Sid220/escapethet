import Dino from './dino.min.js'
import Levels from './levels.min.js';
window.startGame = function() {
    const config = {
        width: 1000,
        height: 700,
        parent: 'dino',
        backgroundColor: '#202124',
        title: 'Escape The T',
        url: 'webtips.dev',
        pixelArt: true,
        physics: {
            default: 'arcade',
            arcade: {
                //debug: true, set debug to true if you want collision boxes to be drawn
                // debug: true,
                gravity: {
                    y: 1000
                }
            }
        },
        scene: [
            Levels,
            Dino
        ]
    };

    new Phaser.Game(config);
}
startGame();
window.alert = function(message, run, btnText = "Ok") {
    [...document.getElementsByClassName("user-div")].forEach((box) => {
        box.remove();
    })
    let div = document.createElement("div");
    div.classList.add("user-div");
    document.body.append(div);
    let p = document.createElement("h1");
    div.append(p);
    p.classList.add("p-message");
    p.innerText = message;
    let btn = document.createElement("button");
    div.append(btn);
    btn.classList.add("user-btn");
    btn.innerText = btnText;

    btn.addEventListener("click", () => {
        if(typeof run === 'function') {
            run();
        }
        div.remove();
    })
}