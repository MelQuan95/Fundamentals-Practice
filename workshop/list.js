import { usePoison } from "./dataprovider.js";
import { Poison } from "./workshop.js";


 const buildHTML = (poisonArray) => {

    let poisonHTMLRepresentation = ""
    for (const singlePoisonObject of poisonArray) {
        poisonHTMLRepresentation += Poison(singlePoisonObject)
    }
    return poisonHTMLRepresentation
}

export const poisonList = () => {
    const contentElement = document.querySelector(".poisons")

    const poisonFunction = usePoison()
    const poisonHTML = buildHTML(poisonFunction)

    contentElement.innerHTML += `
    <article class="poisons">
    <h1>Poisons</h1>
    ${poisonHTML}
    `
}

