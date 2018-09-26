import React from 'react';

export default class AddOption extends React.Component {
    // constructor (props) {
    //     super(props);
    //     this.submitReuquest = this.submitReuquest.bind(this);
    // }
    
    submitReuquest = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
  
        if (option) {
            this.props.handleAddOption(option);
        }
        e.target.elements.option.value = "";
    }
    render() {
      return (
        <div>
          <form className="add-option" onSubmit={this.submitReuquest}>
              <input className="add-option__input" type="text" name="option"></input>
              <button className="button">Add Option</button>
          </form>
        </div>
      );
    }
  };
