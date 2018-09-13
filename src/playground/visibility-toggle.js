let textVisible = false;
const object = {
    title : "Visibility Toggle",
    text  : "Visible Text"
};
const toggleVisibility = () => {
    textVisible = !textVisible;
    render();
};

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h1>{object.title}</h1>
            <button onClick={toggleVisibility}>Toggle</button>
            {textVisible && <p>{object.text}</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
}; 
render();


// session4

class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.toggleState = this.toggleState.bind(this);
        this.state = {
            textVisible : false,
        }
    }
    toggleState () {
        this.setState((prevState) => {
            return {
                textVisible: !prevState.textVisible,
            }
        });
    }
    render () {
        return (
            <div>
                <h1> Visibility Toggle </h1>
                <button onClick={this.toggleState}> Toggle </button>
                { this.state.textVisible && <p> Text </p>}
            </div>
        );
    }
} 

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle/>, appRoot);