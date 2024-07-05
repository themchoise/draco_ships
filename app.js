import ships from "./normal_ship.js";
import rosenritter from "./rosenritter_ship.js"
import fighters from "./fighters_ship.js"

let divroot = document.getElementById("root")

let access_normal_ships = document.getElementById("access_normal_ships")
let access_rosenritter_ships = document.getElementById("access_rosenritter_ships")
let access_fighters_ships = document.getElementById("access_fighters_ships")

const shipGenerator = function(listado_de_naves){

    for (let i = 0; i < listado_de_naves.length; i++) {
        const div = document.createElement('div')
        const div_h6 = document.createElement('div')
        div.classList.add("nave")
        div_h6.classList.add("h6div")
    
    
        const ship = listado_de_naves[i];
        const h6 = document.createElement('h6')
        const listita = document.createElement('ul')
        const item = document.createElement('li')
        const item_uno = document.createElement('li')
        for (const atributo_nave in ship) {
            const item_for = document.createElement('li')
            item_for.innerText = `${atributo_nave}: ${ship[atributo_nave]}`
            listita.appendChild(item_for)
        }
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
    
}

access_normal_ships.addEventListener('click', () => {
    divroot.innerHTML=''
    shipGenerator(ships)
})

access_rosenritter_ships.addEventListener('click', () => {
    divroot.innerHTML=''
    shipGenerator(rosenritter)
})

access_fighters_ships.addEventListener('click', () => {
    divroot.innerHTML=''
    shipGenerator(fighters)
})





