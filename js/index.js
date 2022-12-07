import { updateWeather } from "./src/weather.js";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  pixelArt: true,
}

let state = {
  timer: 1000,
  weather: "hot",
  lastChange: 0,
}

let ui = {
  weatherText: null,
}

function preload() {

}

function create() {
  this.add.text(20, 20, "Current Weather: ", {
    fontFamily: 'KenneyPixel',
    fontSize: '40px',
  });

  ui.weatherText = this.add.text(400, 20, "", {
    fontFamily: 'KenneyPixel',
    fontSize: '40px',
  });

}

function update() {
  ui.weatherText.setText(state.weather);

  updateWeather(this, state);

}


let game = new Phaser.Game(config);