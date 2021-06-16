import {sendLessonRequest} from "./dataAccess.js"

const  mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
   if(clickEvent.target.id === "requestLesson") {
     //Need to grab the values of our form
     const studentName = document.querySelector("input[name='studentName']").value
     const email = document.querySelector("input[name='email']").value
     const theSelectedIndex = document.getElementById("instrumentSelection").options.selectedIndex
     const selectedInstrument = document.getElementById('instrumentSelection').options[theSelectedIndex].text
     const date = document.querySelector("input[name='lessonDate']").value

     // Make an object to Post to the database
    const datatoSend = {
      studentName: studentName,
      email: email,
      selectedInstrument: selectedInstrument,
      date: date
    }
     //Invoke a function that posts the data
     sendLessonRequest(datatoSend)
   }
})

export const RequestForm = () =>{
  const html = `
    <div class="field">
      <label class="label" for="studentName">Student's Name</label>
      <input type="text" name="studentName" class="input" />
    </div>
    <div class="field">
      <label class="label" for="email">Email</label>
      <input type="email" name="email" />
    </div>
    <div class="field">
      <label class="label">Choose Instrument</label>
      <select id="instrumentSelection"  class="select">
        <option value="piano">Piano</option>
        <option value="clarinet">Clarinet</option>
        <option value="banjo">Banjo</option>
        <option value="theremin">Theremin</option>
      </select>
    </div>
    <div class="field">
      <label class="label" for="lessonDate">Lesson Date</label>
      <input type="date" name="lessonDate" />
    </div>
    <button id="requestLesson">Request a Lesson</button>
  `

  return html
}