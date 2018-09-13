console.log("App.js is running");

// JSX - javascript xml, needs root element

const app = {
    title: "JSX app",
    subtitle: "react",
    value: 22
}

const getTitle = function(title){
    return <h1>{title}</h1>
}

const template = (
    <div>
        {getTitle(app.title)}
        <p>{app.subtitle ? app.subtitle : "N/A"}</p>
        {(app.value && app.value > 10) && <p>{app.value}</p>}
    </div>
);

// var template = React.createElement(
//     "h1",
//     { id: "some_id" },
//     " This is JSX from app.js! "
// );
const userName = "Sagar";
const templateTwo = (
    <div>
        <h1>{userName}</h1>
        <p>25</p>
        <p>LA</p>
    </div>
);

let count = 0;
const addClick = () => {
    console.log("click");
    count += 1;
    renderCountApp();
}
const subtractClick = () => {
    console.log("click 1")
    count -= 1;
    renderCountApp();
}


// JSX does not have in built data binding

// const templateThree = (
//     <div>
//         <h1> Count : {count} </h1>
//         <button onClick={addClick}> +1 </button>
//         <button onClick={subtractClick}> -1 </button>
//     </div>
// );

const appRoot = document.getElementById('app');

// ReactDOM.render(templateThree, appRoot);

const renderCountApp = () => {
    // react uses virtual DOM algorithms to find out which portion changed and what to render
    const templateThree = (
        <div>
            <h1> Count : {count} </h1>
            <button onClick={addClick}> +1 </button>
            <button onClick={subtractClick}> -1 </button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);  
};
renderCountApp();