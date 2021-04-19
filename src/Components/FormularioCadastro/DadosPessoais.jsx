import React, { useState, setState } from "react";
import { validaCpf } from "../../Utils/cadastro";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const DadosPessoais = ({ onSubmit }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf: { valido: false, erroMensagem: "" },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (erros.cpf.valido) {
          onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = validaCpf(cpf);
          setErros({ cpf: ehValido });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.erroMensagem}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        value={promocoes}
        onChange={(event) => {
          setPromocoes(event.target.checked);
        }}
        label="Promoções"
        control={
          <Switch name="promocoes" defaultChecked={true} color="primary" />
        }
      />

      <FormControlLabel
        value={novidades}
        onChange={(event) => {
          setNovidades(event.target.checked);
        }}
        label="Novidades"
        control={
          <Switch name="novidades" defaultChecked={true} color="primary" />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};

export default DadosPessoais;
