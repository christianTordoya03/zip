import Home from "./home";
import SessionsService from "./services/sessions_service";
import STORE from "./store.js";

export default function Login(parentSelector) {
    if (!Login.instance) {
      this.parentSelector = parentSelector;
      this.parentElement = document.querySelector(parentSelector);
      this.toString = function () {
        return `
        <section>
          <h2>{ Doable }</h2>
          <form class="js-login-form login-form">
            <div>
            <label>Email</label> <br>
            <input type="text" name="username" placeholder="you@example.com">
            </div>
            <div>
            <label>Password</label><br>
            <input type="password" name="password" placeholder="******">
            </div>
            <div>
            <button type="submit">Login</button>
            </div>
            <a href="#signup">Create account</a>
          </form>
        </section>
        `;
      };
      Login.instance = this;
    }
    return Login.instance;
  }

  Login.prototype.render = function () {
    this.parentElement.innerHTML = this;
    this.addFormSubmitListener();
  };

  Login.prototype.addFormSubmitListener = function () {
    const form = this.parentElement.querySelector(".js-login-form");
    if (form) {
      form.addEventListener("submit", this.submitForm);
    }
  };

  Login.prototype.submitForm = async function (e) {
    e.preventDefault();
    const form = e.target;
    const { email, password } = form;
    try {
      const sessionsService = new SessionsService();
      const data = await sessionsService.login(email.value, password.value);
      STORE.user = data;
      sessionStorage.setItem("token", data.token);
      if (data.token) {
        const home = new Home();
        home.render();
      }
    } catch (e) {
      alert(e.message);
    }
  };
  