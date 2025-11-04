let titolo = 'acc'
let zona = 'wash'


let titoloMinuscolo = title.toLowerCase()
let zonaMinuscolo = zona.toLowerCase()

for (let i = 0; i < jobs.length; i++) {

    let offerta = jobs[i];

    let titleMinuscolo = offerta.title.toLowerCase()
    let locationMinuscolo = offerta.location.toLowerCase()


    if (titleMinuscolo.includes(titoloMinuscolo) && locationMinuscolo.includes(zonaMinuscolo)) {
        console.log('trovato')
    }
    else {
        console.log("non trovato")
    }
}

