//import the current state of requests
import { getRequests } from './dataAccess.js'

//export  the list of request that people have made

export const requestList = () => {
    // Make our lists with our requests
    
    const requests = getRequests() // an array of objects

    let html = '<ul>'

    html += requests.map(request => {
        return `<li> ${request.studentName} ${request.selectedInstrument} ${request.date} </li>`
    }
    ).join('') 

    html += '</ul>'

    return html
}