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

  showErrorMessage() {
    let notification;
    if(this.state.errorMessage) {
      notification = (
        <div className="notification is-danger" if={this.state.errorMessage}>
          {this.state.errorMessage}
        </div>
      );
    } else {
      notification = "";
    }
    return notification;
  }

  constructor(props) {
    super(props)
    this.state = {email: "", password: "", errorMessage: ""};
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
        "content-type": "application/json"
      },
      body: JSON.stringify({email, password})
    }).then((data) => {
      return data.json()
    }).then((json) => {
      if (json.success) {
        this.setState({errorMessage: ""});

      } else {
        if(json.error) {
          this.setState({errorMessage: json.error});
        }else {
          this.setState({errorMessage: "There was an issue trying to log in :C"});
        }
      }
    }).catch((data) => {
      this.setState({errorMessage: "There was an issue trying to log in :C"})
    });
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <form className="login-form" onSubmit={this.handleFormSubmit.bind(this)}>
            {this.showErrorMessage()}
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
                  pattern=".{8,}"
                  title="Minimum of 8 characters"
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