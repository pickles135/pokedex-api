//DOM OBJECTS
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');


fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })