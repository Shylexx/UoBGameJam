import { updateWeather } from "./src/weather.js";
import ColdScene from './src/scenes/coldscene.js';
import HotScene from './src/scenes/hotscene.js';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        debug: false,
        pixelArt: true,
    }
},
  scene: [ ColdScene, HotScene ],
  pixelArt: true,
}

let game = new Phaser.Game(config);