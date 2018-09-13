console.log("App.js is running");

// JSX - javascript xml, needs root element

const app = {
    title: "Indecision App",
    subtitle: "Select activity randomly",
    value: 22,
    options: []
}

const getTitle = function(title){
    return <h1>{title}</h1>
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderElements();
    }
};

const removeAllClick = () => {
    app.options = [];
    renderElements();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderElements = () => {
    const template = (
        <div>
            {getTitle(app.title)}
            <p>{app.subtitle ? app.subtitle : "N/A"}</p>
            {/* {(app.value && app.value > 10) && <p>{app.value}</p>} */}
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAllClick}> Remove All</button>
            <ol>
                {
                    app.options.map((val) => {
                        return <li key={val}>{val}</li>;
                    })
                }
            </ol>
            {/* <ol>
                <li>Option one</li>
                <li>Option two</li>
            </ol> */}
            <form onSubmit={onFormSubmit}>
                <input type="Text" name="option"></input>
                <button>Submit</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);  
};

renderElements();