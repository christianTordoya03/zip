import Home from "./assets/scripts/home.js";
import Login from "./assets/scripts/login.js";

async function init() {
    const login = new Login(".js-content");
    const home = new Home(".js-content");
    
    if(sessionStorage.getItem("token")){
        home.render();
    } else {
    login.render();
    }
  }

  init();