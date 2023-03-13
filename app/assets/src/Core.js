const setNewSubject = (event, client) => {
  let newSubject
  let dateTimeString
  const textareaValue = document.querySelector("textarea").value
  
  client.get("ticket").then((data) => {
    const date = new Date(data.ticket.createdAt)
    dateTimeString = date.toLocaleString()
    newSubject = `${textareaValue} - ${dateTimeString}`

    client.set("ticket.subject", newSubject)
  })
};

const addLatestTickets = (client) => {
  client.request('/api/v2/tickets.json').then(
    (data) => {
      const table = document.querySelector("table")
      console.log(table)
      data.tickets.forEach((ticket) => {
        const data = new Date(ticket.created_at)
        const dataString = data.toLocaleString().split(",")[0]

        const tr = document.createElement("tr")
        tr.innerHTML = `
          <td>${ticket.id}</td>
          <td>${ticket.status}</td>
          <td>${dataString}</td>
        `

        table.appendChild(tr)
      })
    }
  )
}

const Core = {
  setNewSubject,
  addLatestTickets
};

export default Core;
