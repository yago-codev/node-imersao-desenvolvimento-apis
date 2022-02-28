const axios = require('axios')

const URL = `https://swapi.dev/api/people`

async function getPeoples(name) {
  const url = `${URL}/?search=${name}&format=json`
  const getData = axios.get(url)
  const response = await getData
  return response.data.results
}

// getPeoples('r2')
//   .then(function(result) {
//     console.log(`Resultado: ${result.data.results[0].name}`)
//   })
//   .catch(function(error) {
//     console.error(`Deu ruim: ${error} 💣`)
//   })

module.exports = {
  getPeoples
}