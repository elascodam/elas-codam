import React from 'react';
import { Titles } from '../../componets/Titles/Titles';
import { Input } from './styles';

const FaleComElasForms = () => {
  return (
    <>
      <Titles text="Fale com elas" />
      <label htmlFor="Nome">Nome</label>
      <Input />
    </>
  )
}

export default FaleComElasForms;