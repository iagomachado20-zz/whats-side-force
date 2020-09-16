import React from 'react';
import { connect } from 'react-redux';

import './Detail.css';


import { BackButtonComponent } from '../../components/back-button/BackButton';

const component = function({app}) {

  const { person } = app;

  return (
    <main className={`container-background ` + person.theme}>
      <BackButtonComponent />
      <button className="button-line">choose your path again, Padawan</button>
      <img className="avatar-person" src={person.avatar} alt={person.name}/>
      <h2>Your master is <strong>{ person.name }</strong></h2>  
    </main>
  );
};

const mapStateToProps = (state) => ({
  app: state.app
});


const DetailPage = connect(mapStateToProps)(component);
export { DetailPage };
