import ships from "./normal_ship.js";

let divroot = document.getElementById("root")



for (let i = 0; i < ships.length; i++) {
    const div = document.createElement('div')
    const div_h6 = document.createElement('div')
    div.classList.add("nave")
    div_h6.classList.add("h6div")


    const ship = ships[i];
    const h6 = document.createElement('h6')
    const listita = document.createElement('ul')
    const item = document.createElement('li')
    const item_uno = document.createElement('li')

    item_uno.classList.add("designation")
    const item_dos = document.createElement('li')
    h6.innerText = ship.id
    item.innerText = "nombre: " + ship.name
    item_uno.innerText = "designation: " + ship.designation
    item_dos.innerText = "tech/manufacturer: " + ship["tech/manufacturer"]

    


    div_h6.appendChild(h6)
    div.appendChild(div_h6)
    listita.appendChild(item)
    listita.appendChild(item_uno)
    listita.appendChild(item_dos)
    div.appendChild(listita)

    divroot.appendChild(div)

    
}
