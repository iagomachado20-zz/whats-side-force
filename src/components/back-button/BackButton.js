import React from 'react';

import './BackButton.css';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';

export const BackButtonComponent = () => {

  return (
    <React.Fragment>
      <button className="back-button" 
        onClick={() => window.location.href='/'}>
        <ArrowIcon className="ico"/>
        back
      </button>
    </React.Fragment>
  )
};
