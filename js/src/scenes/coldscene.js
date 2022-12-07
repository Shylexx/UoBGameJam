import globalConfig from "../globalconfig.js";
import { updateWeather } from "../weather.js";

class ColdScene extends Phaser.Scene {
    constructor() {
        super('ColdScene');
    }

    preload() {
  
    }
    
    create() {
      this.add.text(20, 20, "Current Weather: ", {
        fontFamily: 'KenneyPixel',
        fontSize: '40px',
      });
    
      globalConfig.ui.weatherText = this.add.text(400, 20, "", {
        fontFamily: 'KenneyPixel',
        fontSize: '40px',
      });
    
    }
    
    update() {
      globalConfig.ui.weatherText.setText(globalConfig.state.weather);
    
      updateWeather(this, globalConfig.state);
    
    }

}

export default ColdScene;