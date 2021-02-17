import React from 'react';
import './about-them.css';

export default class SobreElas extends React.Component {
  render() {
    return (
      <div>
        <h1 className="sobre-elas-title"><span className="symbol">&lt;</span> Sobre elas <span className="symbol">&gt;</span></h1>
        <section className="text-section">
          <p>Somos um coletivo de mulheres que estudam programação e 
          que atuam no mercado de tecnologia. Esse grupo surgiu de uma iniciativa de 
          alunas da Trybe, mas está aberto à todas as mulheres que se interessem em participar. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum, 
          nisi a viverra ullamcorper, sapien metus sagittis sapien, ac sodales sapien risus in.
          </p>
        </section>
      </div>
    )
  }
}