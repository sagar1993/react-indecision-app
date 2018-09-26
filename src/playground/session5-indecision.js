


// stateless functional components
// when parent passes new values, the child re renders

// stateless component
// react component lifecycle

// fetching data from local storage

const appRoot = document.getElementById('app');

class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            options: props.options,
        };
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteSingle = this.handleDeleteSingle.bind(this);
    }

    // lifecycle method : pnly for class based componenets
    // called when component is created.
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

    // fired when props or state values changes.
    componentDidUpdate (prevProps, prevState) {
        if (prevState.options.length !== this.state.options) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('option', json);
        }
        // can be used to make service calls.
    }

    // when switch pages
    componentWillUnmount () {
        console.log("unmount");
    }

    // 
    handleDeleteOption () {
        // this.setState(() => {
        //     return {
        //         options: [],
        //     }
        // });


        // different way to return object
        // const func = () => ({});
        // above return empty object

        this.setState(()=> ({options: []}));
    }

    handleAddOption (option) {
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option]),
        //     };
        // });

        this.setState((prevState) => ({options: prevState.options.concat([option]),}));
    }
    
    handleDeleteSingle (option) {
        this.setState((prevState) => ({
            options : prevState.options.filter((name) => {
                return name != option;
            })
        }));
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
            handleDeleteOption={this.handleDeleteOption}
            handleDeleteSingle={this.handleDeleteSingle} />
          <AddOption 
            handleAddOption={this.handleAddOption}/>
        </div>
      );
    }
};
  
IndecisionApp.defaultProps = {
    options: [],
};

  const Header = (props) => {
    return (
        <div>
          <h1>{props.title}</h1>
          <h2>Put your life in the hands of a computer</h2>
        </div>
      );
  };

  Header.defaultProps = {
    title: "Test Indecision",
  };

//   class Header extends React.Component {
//     render() {
//       return (
//         <div>
//           <h1>{this.props.title}</h1>
//           <h2>Put your life in the hands of a computer</h2>
//         </div>
//       );
//     }
//   }
  
  const Action = (props) =>{
    return (
        <div>
          <button onClick={props.handlePick}
            disabled={!props.hasOptions}>
            What should I do?
          </button>
        </div>
      );
  };

//   class Action extends React.Component {
//     render () {
//       return (
//         <div>
//           <button onClick={this.props.handlePick}
//             disabled={! this.props.hasOptions}>
//             What should I do?
//           </button>
//         </div>
//       );
//     }
//   }
  
  const Options = (props) => {
    const options = props.options;
    const handleDeleteSingle = props.handleDeleteSingle;
    return (
        <div>
          <button onClick={props.handleDeleteOption}> Remove All </button>
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

//   class Options extends React.Component {
//     render() {
//       const options = this.props.options;
//       return (
//         <div>
//           <button onClick={this.props.handleDeleteOption}> Remove All </button>
//           {options.length}
//           {
//               options && options.map((option) => {
//                     return <Option key={option} option={option}/>
//                 })
//           }
//         </div>
//       );
//     }
//   }
  
  const Option = (props) => {
    return (
        <div>
          {props.option}
          <button onClick={ () => {
            props.handleDeleteSingle(props.option);
          }
        }> remove </button>
        </div>
    );
  };

//   class Option extends React.Component {
//     render() {
//       const option = this.props.option;
//       return (
//         <div>
//           {option}
//         </div>
//       );
//     }
//   }
  
  class AddOption extends React.Component {
    constructor (props) {
        super(props);
        this.submitReuquest = this.submitReuquest.bind(this);
    }
    
    submitReuquest (e) {
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
          <form onSubmit={this.submitReuquest}>
              <input type="text" name="option"></input>
              <button>Add Option</button>
          </form>
        </div>
      );
    }
  };


  // stateless components

//   const User = (props) => {
//     return (
//         <div>
//             <p>Name : {props.name} </p>
//             <p>Age : {props.age} </p>
//         </div>
//     );
//   };
 
 // ReactDOM.render(<User name="Sagar" age="25"/>, document.getElementById('app'));

 ReactDOM.render(<IndecisionApp />, document.getElementById('app'));