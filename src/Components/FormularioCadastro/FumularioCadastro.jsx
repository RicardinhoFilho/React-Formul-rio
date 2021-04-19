import React, { useState, setState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosDeEntrega from "./DadosDeEntrega";
import { Typography, Step, StepLabel, Stepper } from "@material-ui/core";

const FormularioCadastro = (props) => {
  const [etapaAtual, setEtapa] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual == 3) {
      props.onSubmit(dadosColetados);
    }
  });

  const proximo = () => {
    setEtapa(etapaAtual + 1);
    //console.log({ dados });
  };

  const formularioAtual = (etapa) => {
    switch (etapa) {
      case 0:
        return <DadosUsuario onSubmit={coletarDados} validaSenha = {props.validaCpf} />;

      case 1:
        return (
          <DadosPessoais onSubmit={coletarDados} validaCpf={props.validaCpf} />
        );

      case 2:
        return <DadosDeEntrega onSubmit={coletarDados} />;

      default:
        return <Typography variant="h5"> Muito Obrigado Por se Cadastrar </Typography>;
    }
  };

  const coletarDados = (dados) => {
    setDados({ ...dadosColetados, ...dados });
    //console.log(dadosColetados);
    proximo();
  };

  return (
  <>
   <Stepper activeStep={etapaAtual}>
  <Step> <StepLabel>Login</StepLabel></Step>
  <Step> <StepLabel>Pessoal</StepLabel></Step>
  <Step> <StepLabel>Endereço</StepLabel></Step>
  <Step> <StepLabel>Finalização</StepLabel></Step>
  </Stepper>
   
    

  {formularioAtual(etapaAtual)}
  </>)
  ;
};

export default FormularioCadastro;
