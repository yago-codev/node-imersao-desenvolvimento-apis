const { getPeoples } = require('../aula01-manipulando-listas/for-forin-forof-map/service')

Array.prototype.myReduce = function(callback, initialValue) {
  let endValue = typeof initialValue !== undefined ? initialValue : this[0]
  const array = this
  for(let index = 0; index <= this.length -1; index++) {
    endValue = callback(endValue, this[index], array)
  }
  return endValue
}

async function main() {
  try {
    const results = await getPeoples('a')
    // const peopleWeights = results.map(item => parseInt(item.height))
    // const totalWeights = peopleWeights.reduce((prev, next) => {
    //   return prev + next
    // }, 0)
    const myList = [
      ['Zé', 'Godofredo'],
      ['JS', 'Node'],
      ['MongoDB', 'PostgreSQL']
    ]

    const total = myList.myReduce((prev, next, array) => {
      return prev.concat(next)
    }, []).join(', ')
    console.log(total)
  } catch(error) {
    console.error(`Deu ruim: ${error} 💣`)
  }
}

main()