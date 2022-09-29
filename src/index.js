import Dino from './dino.min.js'
import Levels from './levels.min.js';

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
            debug: true,
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

window.alert = function(message) {
    console.log(message);
}