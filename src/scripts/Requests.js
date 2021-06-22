//import the current state of requests
import { getRequests, deleteLessonRequest } from './dataAccess.js'

const mainContainer = document.querySelector("#container")

const handleClickEvent = (event) => {
    const deletePrefix = 'delete-lesson-'

    if (event.target.id.startsWith(deletePrefix)) {
        const lessonId = event.target.id.replace(deletePrefix, '')
        deleteLessonRequest(lessonId)
    }
}

mainContainer.addEventListener("click", handleClickEvent)

//export  the list of request that people have made
export const requestList = () => {
    // Make our lists with our requests
    
    const requests = getRequests() // an array of objects

    let html = '<ul>'

    html += requests.map(request => {
        return `
          <li class="lessonRequests__item">
            ${request.studentName} ${request.selectedInstrument} ${request.date}
            <button id="delete-lesson-${request.id}">Delete!</button>     
          </li>
        `
    }
    ).join('') 

    html += '</ul>'

    return html
}