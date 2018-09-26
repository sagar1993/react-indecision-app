import React from 'react';
import Option from './Option';

const Options = (props) => {
    const options = props.options;
    const handleDeleteSingle = props.handleDeleteSingle;
    return (
        <div>
          <div className="widget-header">
            <h3 className="widget-header__title"> Your Options </h3>
            <button 
              className="button button--link"
              onClick={props.handleDeleteOption}> Remove All </button>
          </div>
          {options.length}
          {
              options && options.map((option) => {
                    return <Option 
                            key={option} 
                            option={option}
                            handleDeleteSingle={handleDeleteSingle}
                           />
                })
          }
        </div>
    );
  };

export default Options;