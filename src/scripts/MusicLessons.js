import {RequestForm} from './RequestForm.js'
//inport Requests

//event listener for the button click

export const MusicLessons = () => {
  return `
      <h1>Hire Blaise for Music Lessons</h1>
      <section class="requestForm">
        ${RequestForm()}
      </section>

      <section class="lessonRequests">
          <h2>Lesson Requests</h2>
//Add Requests
      </section>
  `
}