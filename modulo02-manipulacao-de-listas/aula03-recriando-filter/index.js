const { getPeoples } = require('../aula01-manipulando-listas/for-forin-forof-map/service')

Array.prototype.myFilter = function(callback) {
  const list = []
  for(i in this) {
    const result = callback(this[i], i, this)
    if(!result) continue;
    list.push(this[i])
  }
  return list
}

async function main() {
  try {
    const response = await getPeoples('a')
    // const personNamesIncludeLars = response.filter(({ name }) => {
    //   const result = name.toLowerCase().indexOf('lars') !== -1
    //   return result
    // })
    const personNamesIncludeLars = response.myFilter(({ name }) =>
      name.toLowerCase().indexOf('lars') !== -1
    )
    const onlyNamesLars = personNamesIncludeLars.map(({ name }) => name)
    console.log(`Resultado: ${onlyNamesLars} 🔥`)
  } catch(error) {
    console.error(`Deu ruim ${error} 💣`)
  } 
}

main()