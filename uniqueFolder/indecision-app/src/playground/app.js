class RBCParent extends React.Component {
  render() {
    const date = '4/8/18';
    return (
      <div>
        <Header date={date} />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to RCB Network</h1>
        <h2>Where Cool Developers meet</h2>
        <h2>Today is {this.props.date}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <LoginForm />
        <button>Submit</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return <div>Options not Here</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div> AddOption component Here</div>;
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  handleLoginSubmit(e) {
    e.preventDefault();

    const loginData = e.target.elements.option.value.trim();
    if (loginData) {
      alert(loginData);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleLoginSubmit}>
          <input type="text" name="option" />
          <button>Login here</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<RBCParent />, document.getElementById('app'));
