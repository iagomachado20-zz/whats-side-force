import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

import { LoaderComponent } from '../../components/loader/Loader';
import './Home.css';


export const HomePage = () => {

  const [ isRequesting, callRequest ] = useState(false);

  function requestData() {
    console.log('oi');
    return true;
  }

  return (
    <main className="container-background dark">
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
