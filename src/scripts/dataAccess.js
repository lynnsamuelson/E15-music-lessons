//ask the api for requests (GET)
const API = "http://localhost:8088"

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

  })

}