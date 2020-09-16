import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";

import './BackButton.css';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';

export const BackButtonComponent = () => {

  const [ isBack, setBackPage ] = useState(false);

  return (
    <React.Fragment>
      <button className="back-button" 
        onClick={() => setBackPage(true)}>
        <ArrowIcon className="ico"/>
        back
      </button>
    </React.Fragment>
  )
};
