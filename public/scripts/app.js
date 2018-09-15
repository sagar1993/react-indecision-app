'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// stateless functional components
// when parent passes new values, the child re renders

// stateless component
// react component lifecycle

// fetching data from local storage

var appRoot = document.getElementById('app');

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteSingle = _this.handleDeleteSingle.bind(_this);
        return _this;
    }

    // lifecycle method : pnly for class based componenets
    // called when component is created.


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var options = JSON.parse(localStorage.getItem('option'));
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                localStorage.removeItem('option');
            }
        }

        // fired when props or state values changes.

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('option', json);
            }
            // can be used to make service calls.
        }

        // when switch pages

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("unmount");
        }

        // 

    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption() {
            // this.setState(() => {
            //     return {
            //         options: [],
            //     }
            // });


            // different way to return object
            // const func = () => ({});
            // above return empty object

            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            // this.setState((prevState) => {
            //     return {
            //         options: prevState.options.concat([option]),
            //     };
            // });

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'handleDeleteSingle',
        value: function handleDeleteSingle(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (name) {
                        return name != option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            if (this.state.options) {
                alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options,
                    handleDeleteOption: this.handleDeleteOption,
                    handleDeleteSingle: this.handleDeleteSingle }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

;

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            'Put your life in the hands of a computer'
        )
    );
};

Header.defaultProps = {
    title: "Test Indecision"
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

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick,
                disabled: !props.hasOptions },
            'What should I do?'
        )
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

var Options = function Options(props) {
    var options = props.options;
    var handleDeleteSingle = props.handleDeleteSingle;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOption },
            ' Remove All '
        ),
        options.length,
        options && options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                option: option,
                handleDeleteSingle: handleDeleteSingle
            });
        })
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

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    props.handleDeleteSingle(props.option);
                } },
            ' remove '
        )
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

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.submitReuquest = _this2.submitReuquest.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'submitReuquest',
        value: function submitReuquest(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();

            if (option) {
                this.props.handleAddOption(option);
            }
            e.target.elements.option.value = "";
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.submitReuquest },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

;

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

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
