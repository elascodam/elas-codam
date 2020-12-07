import React from 'react';
import { Titles } from '../../componets/Titles/Titles';
import { FormsContainer, Input, Label, SubmitBtn, TextArea } from './styles';

const FaleComElasForms = () => {
  return (
    <>
      <Titles text="Fale com elas" />
      <FormsContainer>
        <Label htmlFor="Nome">Nome*</Label>
        <Input />
        <Label htmlFor="Email">Email*</Label>
        <Input />
        <Label htmlFor="Assunto">Assunto*</Label>
        <Input />
        <Label htmlFor="Mensagem">Mensagem*</Label>
        <TextArea />
        <p>* Preenchimento obrigatório</p>
        <SubmitBtn>Enviar</SubmitBtn>
      </FormsContainer>
    </>
  )
}

export default FaleComElasForms;
