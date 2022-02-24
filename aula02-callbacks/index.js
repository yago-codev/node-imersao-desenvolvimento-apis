/*
  - Obter um usuário
  - Obter o número de telefone de um usuário a partir de seu ID
  - Obter o endereço do usuário pelo ID
*/

async function getUser(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      name: 'Yago',
      birthDay: new Date()
    })
  }, 1000)
}

function getTelephone(userID, callback) {
  setTimeout(() => {
    return callback(null, {
      number: '999999999',
      prefix: 51
    })
  }, 2000)
}

function getUserAddressByID(userID, callback) {
  setTimeout(() => {
    return callback(null, {
      street: 'Rua dos Bobos',
      number: 0
    }, 3000)
  })
}

function resolveUser(error, user) {
  console.log(user)
}

getUser(function resolveUser(error1, user) {
  if (error1) {
    console.error('DEU RUIM EM USUÁRIO', error1)
    return
  }
  getTelephone(user.id, function resolveTelephone(error2, telephone) {
    if (error2) {
      console.error('DEU RUIM NO TELEFONE', error2)
      return
    }
    getUserAddressByID(user.id, function resolveUserAdress(error3, address) {
      if (error3) {
        console.error('DEU RUIM NO ENDEREÇO', error3)
        return
      }
      console.log(`
        Nome: ${user.name},
        Endereço: ${address.street},
        Telefone: (${telephone.prefix}) ${telephone.number},
      `)
    })
  })
})
