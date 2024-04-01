const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')
const form = document.querySelector('form')
const pokemonInputName = document.querySelector('.input__search')

const fetchPokemon = (pokemon) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((dados) => {
        return dados.json()
    }).then((dadosJS) => {
        return dadosJS
    })
}

const renderPokemon = async (pokemon) => {
    const dadosPokemon = await fetchPokemon(pokemon)
    pokemonName.innerHTML = dadosPokemon.name
    pokemonNumber.innerHTML = dadosPokemon.id
    pokemonImage.src = dadosPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    renderPokemon(pokemonInputName.value.toLowerCase())
    pokemonInputName.value = ""

})