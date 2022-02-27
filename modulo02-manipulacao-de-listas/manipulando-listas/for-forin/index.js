const service = require('./service')

async function main() {
  try {
    const result = await service.getPeoples('a')

    const names = []

    console.time('Timer for')
    for(let i = 0; i <= result.length - 1; i++) {
      const person = result[i]
      const personName = person.name
      names.push(personName)
    }
    console.timeEnd('Timer for')

    console.time('Timer for in')
    for(let i in result) {
      const personName = result[i].name
      names.push(personName)
    }
    console.timeEnd('Timer for in')

    console.time('Timer for of')
    for(person of result) {
      const personName = person.name
    }
    console.timeEnd('Timer for of')

    console.time('Timer map')
    const getResult = result.map((persons) => {
      return persons.name
    })
    console.timeEnd('Timer map')
  } catch(error) {
    console.error(`Deu ruim: ${error} 💣`)
  }
}

main()