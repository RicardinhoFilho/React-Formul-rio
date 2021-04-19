import { Fragment } from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FumularioCadastro';
import {Container,Typography} from "@material-ui/core";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
     <Typography variant="h3" component="h1">Formulário Cadastro</Typography>
     <FormularioCadastro onSubmit={onSubmitForm} validaCpf={validaCpf}/>
    </Container>
  );
}

function onSubmitForm(dados){
  console.log(dados);
}

function validaCpf(cpf){

  if(cpf.length != 11){
    return {valido:false, erroMensagem:"CPF deve ter 11 digitos"}
  }
    
  return {valido:true, erroMensagem:""}
  
}

export default App;
