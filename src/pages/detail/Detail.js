import React from 'react';

import './Detail.css';
import DarthVader from '../../assets/darth_vader.png'; 

import { BackButtonComponent } from '../../components/back-button/BackButton';

export const DetailPage = () => {

  return (
    <main className="container-background yellow">
      <BackButtonComponent />
      <button className="button-line">choose your path again, Padawan</button>
      <img className="avatar-person" src={DarthVader} alt="Darth Vader"/>
      <h2>Your master is <strong>Darth Vader</strong></h2>  
    </main>
  );
};
