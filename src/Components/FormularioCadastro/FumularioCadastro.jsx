import React, { useState, setState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const FormularioCadastro = (props) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit({nome,sobrenome, cpf, novidades, promocoes})
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

export default FormularioCadastro;
