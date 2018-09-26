import React from 'react';

const Option = (props) => (
  <div>
    {props.option}
    <button 
      className="button button--link"
      onClick={ () => {
      props.handleDeleteSingle(props.option);
    }
  }> remove </button>
  </div>
);

  export default Option;