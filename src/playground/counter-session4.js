// refresh the count value on UI as soon as value changes 
// create state object
// call setState to change values on UI


  class Counter extends React.Component {
      constructor (props) {
          super(props);
          this.state = {
              count: 0,
          }
          this.count = 0;
          this.addClick = this.addClick.bind(this);
          this.subtractClick = this.subtractClick.bind(this);
          this.resetClick = this.resetClick.bind(this);
      }
      addClick () {
          // will not re render automatically
          // this.state.count += 1;
  
          // need to call this.setState function
  
          this.setState((prevState) => {
              return {
                  count: prevState.count + 1,
              };
          });
      }
      subtractClick () {
          this.setState((prevState) => {
              return {
                  count: prevState.count - 1,
              };
          });
      }
      resetClick () {
          this.setState(() => {
              return {
                  count: 0,
              };
          });
      }
      render () {
          return (
              <div>
                  <h1> Count : {this.state.count} </h1>
                  <button onClick={this.addClick}> +1 </button>
                  <button onClick={this.subtractClick}> -1 </button>
                  <button onClick={this.resetClick}> reset </button>
              </div>
          );
      }
  }
  
  ReactDOM.render(<Counter/>, appRoot)