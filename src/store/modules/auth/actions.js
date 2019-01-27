


// / verificando se o  usuario esta logado
const VerifyLogged = (context, payload) => {
  console.log(context, payload)
}


const ExitUser = (context) => {
  console.log(context)
}

export default {
  ExitUser,
  VerifyLogged,
}
