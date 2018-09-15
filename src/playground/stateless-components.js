// stateless component simple components which just renders information
// returns jsx
// can take props as argument: which are argumets passed converted by jsx compiler
// faster than class based components, no overhead
// easier to test.

const User = (props) => {
    return (
        <div>
            <p>Name : {props.name} </p>
            <p>Age : {props.age} </p>
        </div>
    );
  };

  // setting default properties.
  User.defaultProps = {
      name: "test",
  }
 
 ReactDOM.render(<User name="Sagar" age="25"/>, document.getElementById('app'));