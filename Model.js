import React from 'react';
import "../../style/global.css";

const Model = ({children, open, onClose}) => {

    if(!open) return null;

  return (
            <div>
                <div className="overlay" />
                <div className="model-pop">
                    <button onClick={onClose} className="btn btn-close"></button>
                    {children}
                </div>
            </div>
  )
}

export default Model;
