const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')
const form = document.querySelector('form')
const pokemonInputName = document.querySelector('.input__search')
const btnPRev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let searchPokemon = 1

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (APIResponse.status === 200) {
        const data = await APIResponse.json()
        return data
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = ''
    const pokemonData = await fetchPokemon(pokemon)
    if (pokemonData) {
        pokemonImage.style.display = 'block'
        pokemonName.innerHTML = pokemonData.name
        pokemonNumber.innerHTML = pokemonData.id
        pokemonImage.src = pokemonData['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        searchPokemon = pokemonData.id
    }
    else {
        pokemonImage.style.display = 'none'
        pokemonName.innerHTML = 'Not Found :('
        pokemonNumber.innerHTML = ''
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    renderPokemon(pokemonInputName.value.toLowerCase())
    pokemonInputName.value = ""

})

btnPRev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        renderPokemon(searchPokemon -= 1)
    }
})
btnNext.addEventListener('click', () => {
    renderPokemon(searchPokemon += 1)
})

renderPokemon(searchPokemon)