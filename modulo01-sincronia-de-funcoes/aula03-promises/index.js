/*
  - Obter um usuário
  - Obter o número de telefone de um usuário a partir de seu ID
  - Obter o endereço do usuário pelo ID
*/
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

const userPromise = getUser()

userPromise
  .then(function (user) {
    return getTelephone(user.id)
      .then(function resolveTelephone(result) {
        return {
          user: {
            name: user.name,
            id: user.id
          },
          telephone: result
        }
      })
  })
  .then(function (data) {
    const address = getAddressAsync(data.user.id)
    return address.then(function resolveAddress(result) {
      return {
        user: data.user,
        telephone: data.telephone,
        address: result
      }
    })
  })
  .then(function (result) {
    console.log(`
      Nome: ${result.user.name}
      Endereço: ${result.address.street}, ${result.address.number}
      Telephone: (${result.telephone.prefix}) ${result.telephone.number}
    `)
  })
  .catch(function (error) {
    console.log('DEU RUIM', error)
  })

// getUser(function resolveUser(error1, user) {
//   if (error1) {
//     console.error('DEU RUIM EM USUÁRIO', error1)
//     return
//   }
//   getTelephone(user.id, function resolveTelephone(error2, telephone) {
//     if (error2) {
//       console.error('DEU RUIM NO TELEFONE', error2)
//       return
//     }
//     getUserAddressByID(user.id, function resolveUserAdress(error3, address) {
//       if (error3) {
//         console.error('DEU RUIM NO ENDEREÇO', error3)
//         return
//       }
//       console.log(`
//         Nome: ${user.name},
//         Endereço: ${address.street},
//         Telefone: (${telephone.prefix}) ${telephone.number},
//       `)
//     })
//   })
// })
