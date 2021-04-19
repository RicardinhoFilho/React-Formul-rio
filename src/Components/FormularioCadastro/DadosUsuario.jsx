import React, { useState, setState } from "react";
import { TextField, Button } from "@material-ui/core";
import { validaSenha } from "../../Utils/cadastro";

const DadosUsuario = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({
    senha: { valido: false, erroMensagem: "" },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (erros.senha.valido == true) {
          onSubmit({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        value={senha}
        onBlur={(event) => {
          const ehValido = validaSenha(senha);
          setErros({ senha: ehValido });
        }}
        error={!erros.senha.valido}
        helperText={erros.senha.erroMensagem}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Confirmar
      </Button>
    </form>
  );
};

export default DadosUsuario;
