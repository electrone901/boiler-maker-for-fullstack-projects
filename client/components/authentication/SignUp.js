import React from 'react';
import { connect } from 'react-redux';
import { signupInServer } from '../../redux/user';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
      name: 'You song ',
    };
    this.props.signupInServer(userInfo);
  }
  // make api call
  render() {
    console.log('w', this.state);
    return (
      <div className="container">
        <form className="jumbotron mt-5" onSubmit={this.onSubmit}>
          <h1 className="h3">Sign up</h1>
          <div className="form-group">
            <label htmlFor="name">Name </label>
            <input
              onChange={this.onChange}
              value={this.state.name}
              type="text"
              name="name"
              id="name"
              className="form-control"
            />
          </div>
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
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    signupInServer: (userInfo) => dispatch(signupInServer(userInfo)),
  };
};

export default connect(null, mapDispatch)(SignUp);
