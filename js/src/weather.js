
export function updateWeather(scene, gameState) {
    if (scene.time.now > gameState.lastChange + 1000) {
        gameState.lastChange = scene.time.now;
        if (gameState.weather == "hot") {
          gameState.weather = "cold";
        } else {
          gameState.weather = "hot";
        }
      } 
}