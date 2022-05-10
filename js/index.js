let userInput2 = document.getElementById('characterList')
const content = document.getElementById('content')
const nameCharacter = document.getElementById('nameCharacter')
const characterGender = document.getElementById('characterGender')
const characterBirth_year = document.getElementById('characterBirth_year')
const characterOrigin = document.getElementById('characterOrigin')
const characterFilms = document.getElementById('characterFilms')
let teste = document.getElementById('teste')

let origin = ''
const url = 'https://swapi.dev/api/people'

userInput2.addEventListener('focusout', function (event) {
    let x = event.target.value
    getPosts(x[0])
})

function getPosts(user) {
    fetch(`${url}/${user}`)
        .then((response) => response.json())
        .then((data) => {
            nameCharacter.innerHTML = `${data.name}`
            characterGender.innerHTML = `${data.gender}`
            characterBirth_year.innerHTML = `${data.birth_year}`
            // characterOrigin.innerHTML = `${data.homeworld}`
            let origin = data.homeworld
            return (fetch(origin)
                .then((response) => response.json())
                .then((data) =>
                    characterOrigin.innerHTML = `${data.name}`
                )
           )
        
        })
        .catch((error) => console.error('Error:', error.message || error))
    content.style.visibility = 'visible'
}

