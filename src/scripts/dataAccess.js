//ask the api for requests (GET)
const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

const applicationState = {
  requests: []
}

//POST a new request
export const sendLessonRequest = (lessonRequest) => {
  //To include method, headers and the body

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    //JSON.stringify converts the JavaScript Object into JSON
    body: JSON.stringify(lessonRequest)
  }

  return fetch(`${API}/requests`, fetchOptions)
  .then(response => response.json())
  .then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
  })

}

export const getAllLessonRequests = () => {

  return fetch(`${API}/requests`)
  .then(response => response.json())
  .then( serviceRequests => {
    applicationState.requests = serviceRequests
  })

}

export const getRequests = () => {
  return applicationState.requests.map(request => ({...request}))
}