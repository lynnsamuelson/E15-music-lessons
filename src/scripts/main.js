import { MusicLessons } from "./MusicLessons.js"


const mainContainer = document.querySelector("#container")

const render = () => {
  mainContainer.innerHTML = MusicLessons()
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)