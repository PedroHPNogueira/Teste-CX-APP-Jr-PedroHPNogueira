import Core from "./Core.js";

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  const App = document.getElementById("app");
  let appBody = `
    <div id="main-content">
      <textarea rows="3"></textarea>
      <button>Definir assunto</button>
    </div>`;

  // Write App
  App.innerHTML = appBody;

  const button = document.querySelector("button")
  button.addEventListener("click", (e) => {Core.setNewSubject(e, client)})
};

export default Main;
