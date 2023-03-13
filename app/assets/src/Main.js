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
      <div id="client-last-tickets">
        <h3>últimos tickets do cliente</h3>
        <table>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Data</th>
          </tr>
        </table>
      </div>
    </div>`;

  // Write App
  App.innerHTML = appBody;

  const button = document.querySelector("button")
  button.addEventListener("click", (e) => {Core.setNewSubject(e, client)})

  Core.addLatestTickets(client)
};

export default Main;
