// const square = function(x){
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x * x
// console.log(square(4))


//obs: arrow functions have no acces to the 'this' inside a function
const event = {//object event
    name: 'Birthday party',
    gestList: ['Igor', 'jen', 'mike'],
    printGuestList() {

        console.log('Gest list for ' + this.name)
        this.gestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
            //deu certo usar o this aqui pq arrow functions não usam o this delas, logo, ela pega o this
            //de fora dela, que era o this.name == Birthday Party
        })
    }
}

event.printGuestList()