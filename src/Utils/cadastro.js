function validaCpf(cpf) {
  if (cpf.length != 11) {
    return { valido: false, erroMensagem: "CPF deve ter 11 digitos" };
  }

  return { valido: true, erroMensagem: "" };
}

function validaSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    
    return {
      valido: false,
      erroMensagem: "Semnha deve ter entre 4 e 72 dígitos",
    };
  }

  return { valido: true, erroMensagem: "" };
}

export {validaCpf, validaSenha};
