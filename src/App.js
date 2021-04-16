import { Fragment } from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FumularioCadastro';
import {Container,Typography} from "@material-ui/core";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
     <Typography variant="h3" component="h1">Formulário Cadastro</Typography>
     <FormularioCadastro/>
    </Container>
  );
}

export default App;
