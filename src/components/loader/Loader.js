import React from 'react';

import './Loader.css';

export const LoaderComponent = () => {
  return (
    <React.Fragment>
      <div className="lds-ring">
        <div></div><div></div><div></div><div></div>
      </div>
    </React.Fragment>
  )
};
