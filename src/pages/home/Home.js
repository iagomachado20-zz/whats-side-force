import React, { useState } from 'react';
import { connect } from 'react-redux';
import Typewriter from 'typewriter-effect';

import { LoaderComponent } from '../../components/loader/Loader';
import { Dispatchers } from '../../store/ducks/app';
import './Home.css';


const HomeComponent = ({ app }) => {

  console.log(app);

  const [ isRequesting, callRequest ] = useState(false);

  function requestData() {
    Dispatchers.fetchData();
    return true;
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
        onClick={() => callRequest(requestData)}>
        { isRequesting ? 'Wait' : 'Start'} 
        { isRequesting &&  <LoaderComponent/> } 
      </button>
    </main>
  );
};


const mapStateToProps = state => ({
  app: state.app
});

const HomePage = connect(mapStateToProps)(HomeComponent);

export { HomePage }; 