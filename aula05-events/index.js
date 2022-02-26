const EventEmitter = require('events')

class MyEmitter extends EventEmitter {

}

const Emitter = new MyEmitter()
const nameEvent = 'user:click'

Emitter.on(nameEvent, function(click) {
  console.log('um usuario clicou', click)
})

// Emitter.emit(nameEvent, 'na barra de rolagem')
// Emitter.emit(nameEvent, 'no ok')

// let count = 0
// setInterval(function() {
//   Emitter.emit(nameEvent, 'no ok' + (count++))
// }, 1000)

const stdin = process.openStdin()

function main() {
  return new Promise(function(resolve, reject) {
    stdin.addListener('data', function(value) {
      // console.log(`Você digitou: ${value.toString().trim()}`)
      return resolve(value)
    })
  })
}

main()
  .then(function(result) {
    console.log('resultado', result.toString())
  })