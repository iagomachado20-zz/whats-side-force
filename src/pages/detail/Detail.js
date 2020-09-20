import React from 'react';
import { connect } from 'react-redux';

import './Detail.css';


import { BackButtonComponent } from '../../components/back-button/BackButton';
import { Redirect } from 'react-router-dom';
import { Dispatchers } from '../../store/ducks/app';

const component = function({app}) {

  const { person, loading } = app;

  if (!person.name) {
    return <Redirect to="/"></Redirect>
  }

  function requestData() {
    Dispatchers.fetchData()
  }

  return (
    <main className={`container-background ` + person.theme}>
      <BackButtonComponent />
      <button 
        onClick={() => requestData()} 
        className={'button-line ' + (loading ? 'loading': '')}>
          { loading ? 'Loading...' : 'choose your path again, Padawan' }
      </button>
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
