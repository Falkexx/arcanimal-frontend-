interface ErrorsProps {
  Error: string
}

export function CheckIfPasswordIsCorrect(Credential:string){

  const Errors:ErrorsProps = {
    Error: ''
  }

  /*Parte condicional: Você pode adicionar mais erros abaixo!*/
  if(Credential === ''){

    return Errors.Error = "O campo Senha é obrigatório."
  }

  return Errors.Error
}


export function CheckIfEmailIsCorrect(Credential:string){

  const Errors:ErrorsProps = {
    Error: ''
  }

  /*Parte condicional: Você pode adicionar mais erros abaixo!*/
  if(Credential === ''){

    return Errors.Error = "O campo E-mail é obrigatório."
  }

  return Errors.Error
}