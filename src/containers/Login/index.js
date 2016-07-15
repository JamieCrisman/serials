import React, {Component} from "react";
//import {Link} from "react-router";
// import { connect } from "react-redux";

import config from "../../../config/frontend"
import _ from "lodash";

// import {
//   loadResources
// } from "../../actions";

// import {
//   defaultFilters
// } from "../../utils/dummyData";

// import {ResourceList, FilterMenu} from "../../components";

export default class Login extends Component {
  // componentWillMount() {
  //   this.props.loadResources({
  //     filters: defaultFilters
  //   });
  // }

  constructor(props) {
    super(props)
    this.state = {email: "", password: ""};
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let email = this.state.email.trim();
    let password = this.state.password;
    fetch(`${config.apiEntry}/login.json`, {
      method: 'POST',
      headers: {
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin"
        "content-type": "application/json"
      },
      body: JSON.stringify({email, password})
    }).then((data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <form className="login-form" onSubmit={this.handleFormSubmit.bind(this)}>
            <div className="control is-horizontal">
              <div className="control-label">
                <label className="label" htmlFor="email">Email</label>
              </div>
              <div className="control">
                <input type="email" 
                  className="input" 
                  name="email" 
                  id="email" 
                  placeholder="email"
                  required
                  value={this.state.email} 
                  onChange={this.onChange} />
              </div>
            </div>
            <div className="control is-horizontal">
              <div className="control-label">
                <label className="label" htmlFor="password">Password</label>
              </div>
              <div className="control">
                <input type="password" 
                  className="input" 
                  name="password" 
                  id="password" 
                  required
                  placeholder="password" 
                  value={this.state.password} 
                  onChange={this.onChange} />
              </div>
            </div>
            <div className="control is-horizontal">
              <div className="control-label"></div>
              <div className="control">
                <input type="submit" className="button" value="login! <3" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   const {resources} = state;
//   if (resources.loading) {
//     return {
//       loading: resources.loading
//     };
//   }
//   return {
//     loading: resources.loading,
//     resources: resources.resources,
//     filters: resources.filters
//   };
// }

// export default connect(mapStateToProps, {
//   loadResources
// })(Dashboard);