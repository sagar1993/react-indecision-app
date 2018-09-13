class Header extends React.Component {
    render () {
        return <p>This is from header!</p>;
    }
}

const jsx = (
    <Header/>
);
ReactDOM.render(jsx, document.getElementById('app'));


// index.html

<html>
    <body>
        <div id="app">
        </div>
    </body>
</html>