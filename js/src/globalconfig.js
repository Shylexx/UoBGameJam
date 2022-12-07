let state = {
    timer: 1000,
    weather: "hot",
    lastChange: 0,
}
  
let ui = {
    weatherText: null,
}

let globalConfig = {
    ui: ui,
    state: state
}

export default globalConfig;