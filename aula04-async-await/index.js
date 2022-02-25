const util = require('util')

const getAddressAsync = util.promisify(getUserAddressByID)

async function getUser() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      // return reject(new Error('DEU RUIM DE VERDADE 🔥'))
      
      return resolve({
        id: 1,
        name: 'Yago',
        birthDay: new Date()
      })
    }, 1000)
  })
}

function getTelephone(userID, callback) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        number: '999999999',
        prefix: 51
      })
    }, 2000)
  })
}

function getUserAddressByID(userID, callback) {
  setTimeout(() => {
    return callback(null, {
      street: 'Rua dos Bobos',
      number: 0
    }, 3000)
  })
}

async function main() {
  try {
    console.time('medida-promise')
    const user = await getUser()
    // const address = await getAddressAsync(user.id)
    // const telephone = await getTelephone(user.id)
    const [address, telephone] = await Promise.all([
      getAddressAsync(user.id),
      getTelephone(user.id),
    ])

    console.log(`
      Usuário: ${user.name}.
      Endereço: ${address.street}.
      Telefone: (${telephone.prefix}) ${telephone.number}.
    `)
    console.timeEnd('medida-promise')
  } catch(error) {
    console.error('DEU RUIM', error)
  }
}

main()