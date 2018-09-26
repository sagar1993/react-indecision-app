import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options'
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        try {
            const options = JSON.parse(localStorage.getItem('option'));
            if (options){
                this.setState(() => ({options}));
            }
        } catch (e) {
            localStorage.removeItem('option');
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.options.length !== this.state.options) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('option', json);
        }
    }

    componentWillUnmount () {
        console.log("unmount");
    }

    handleDeleteOption = () => {
        this.setState(()=> ({options: []}));
    }

    handleAddOption = (option) => {
        this.setState((prevState) => ({options: prevState.options.concat([option]),}));
    }
    
    handleDeleteSingle = (option) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((name) => {
                return name != option;
            })
        }));
    }

    handlePick = () => {
        const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        if (this.state.options) {
            this.setState(() => ({
                selectedOption: option,
            }));
        }
    }
    render() {
      const title = "Indecision";
      return (
        <div>
          <Header title={title} />

          <div className="container">
            <Action hasOptions={this.state.options.length > 0} 
                handlePick = {this.handlePick}/>
            <div className="widget">
                <Options options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteSingle={this.handleDeleteSingle} />
                <AddOption 
                    handleAddOption={this.handleAddOption}/>
            </div>
            <OptionModal selectedOption={this.selectedOption}></OptionModal>
          </div>
        </div>
      );
    }
};
  
IndecisionApp.defaultProps = {
    options: [],
};

export default IndecisionApp;