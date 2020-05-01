fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data)
  })