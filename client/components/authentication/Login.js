import React from 'react';
import { loginInServer } from '../../redux/user';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const userInfo = {
      email: 'cody@email.com',
      password: '12345',
    };
    this.props.loginInServer(userInfo);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="jumbotron mt-5">
          <h1 className="h3">Login</h1>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.onChange}
              value={this.state.email}
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.onChange}
              value={this.state.password}
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatch = (dispatch) => {
  return {
    loginInServer: (userInfo) => dispatch(loginInServer(userInfo)),
  };
};

export default connect(null, mapDispatch)(Login);
