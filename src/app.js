// when parent passes new values, the child re renders

const appRoot = document.getElementById('app');

class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            options: ['one', 'two'],
        };
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }

    handleDeleteOption () {
        this.setState(() => {
            return {
                options: [],
            }
        });
    }
    
    handlePick () {
        if (this.state.options) {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }
    render() {
      const title = "Indecision";
      return (
        <div>
          <Header title={title} />
          <Action hasOptions={this.state.options.length > 0} 
            handlePick = {this.handlePick}/>
          <Options options={this.state.options}
            handleDeleteOption={this.handleDeleteOption}/>
          <AddOption />
        </div>
      );
    }
    }
  
  class Header extends React.Component {
    render() {
      console.log(this.props);
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>Put your life in the hands of a computer</h2>
        </div>
      );
    }
  }
  
  class Action extends React.Component {
    render () {
      return (
        <div>
          <button onClick={this.props.handlePick}
            disabled={! this.props.hasOptions}>
            What should I do?
          </button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
    render() {
      const options = this.props.options;
      return (
        <div>
          <button onClick={this.props.handleDeleteOption}> Remove All </button>
          {options.length}
          {
              options && options.map((option) => {
                    return <Option key={option} option={option}/>
                })
          }
        </div>
      );
    }
  }
  
  class Option extends React.Component {
    render() {
      const option = this.props.option;
      return (
        <div>
          {option}
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    submitReuquest (e) {
        console.log("Submit");
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
  
        if (option) {
            console.log(option);
        }
    }
    render() {
      return (
        <div>
          <form onSubmit={this.submitReuquest}>
              <input type="text" name="option"></input>
              <button>Add Option</button>
          </form>
        </div>
      );
    }
  }
  
 ReactDOM.render(<IndecisionApp />, document.getElementById('app'));