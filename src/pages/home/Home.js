import React from 'react';
import { connect } from 'react-redux';
import Typewriter from 'typewriter-effect';

import { Redirect } from 'react-router-dom';

import { LoaderComponent } from '../../components/loader/Loader';
import { Dispatchers } from '../../store/ducks/app';
import './Home.css';


const HomeComponent = ({ app }) => {
  
  const { loading, success } = app;


  if (success) {
    return (
      <Redirect to="/side-force" />
    )
  }


  function requestData() {
    Dispatchers.fetchData();
  }

  return (
    <main className="container-background">
      <header>
        <Typewriter
          options={{
            strings: ['Welcome to <strong>iClinic</strong>'],
            autoStart: true,
            loop: true,
          }}
        />
        <p>FrontEnd Challenge</p> 
      </header>
      <button className="button button-primary" 
        onClick={() => requestData() }>
        { loading ? 'Wait' : 'Start'} 
        { loading &&  <LoaderComponent/> } 
      </button>
    </main>
  );
};


const mapStateToProps = state => ({
  app: state.app
});

const HomePage = connect(mapStateToProps)(HomeComponent);

export { HomePage }; 