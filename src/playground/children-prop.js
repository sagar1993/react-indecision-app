// passing children prop

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
}

ReactDOM,render(<Layout><p>test</p></Layout>, document.getElementById('app'));