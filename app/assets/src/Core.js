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
      const table = document.getElementById("client-last-tickets")
      console.log(table)
      data.tickets.forEach((ticket) => {
        console.log(ticket)
      })
    }
  )
}

const Core = {
  setNewSubject,
  addLatestTickets
};

export default Core;
