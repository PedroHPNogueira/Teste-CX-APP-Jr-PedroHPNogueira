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

const Core = {
  setNewSubject,
};

export default Core;
