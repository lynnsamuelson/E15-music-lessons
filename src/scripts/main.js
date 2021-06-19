import { MusicLessons } from "./MusicLessons.js"
import { getAllLessonRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {
  getAllLessonRequests().then(
    () => {
      mainContainer.innerHTML = MusicLessons()
    }
  )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)