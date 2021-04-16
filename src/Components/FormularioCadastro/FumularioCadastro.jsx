import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const FormularioCadastro = () => {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch name="promocoes" defaultChecked={true} color="primary" />
        }
      />

      <FormControlLabel
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
