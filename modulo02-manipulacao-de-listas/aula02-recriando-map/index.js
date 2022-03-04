const service = require('../aula01-manipulando-listas/for-forin-forof-map/service')

Array.prototype.myMap = function(callback) {
  const newMappedArray = []
  for(let index = 0; index <= this.length - 1; index++) {
    const result = callback(this[index], index, newMappedArray)
    newMappedArray.push(result)
  }

  return newMappedArray
}

async function main() {
  try {
    const results = await service.getPeoples('a')
    // const names = []

    // results.forEach(function(item) {
    //   names.push(item.name)
    // })

    // const names = results.map(function(person) {
    //   return person.name
    // })

    // const names = results.map(({ name }) => name)
    const names = results.myMap(({ name }, index) => {
      return {
        index: `${index}`,
        name: `${name}`,
      }
    })
  } catch (error) {
    console.error(`Deu ruim ${error} 💣`)
  }
}

main()