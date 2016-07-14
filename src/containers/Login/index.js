import React, {Component} from "react";
//import {Link} from "react-router";
// import { connect } from "react-redux";
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
  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <form>
            <div className="control is-horizontal">
              <div className="control-label">
                <label className="label" htmlFor="email">Email</label>
              </div>
              <div className="control">
                <input type="text" className="input" name="email" id="email" placeholder="email" />
              </div>
            </div>
            <div className="control is-horizontal">
              <div className="control-label">
                <label className="label" htmlFor="password">Password</label>
              </div>
              <div className="control">
                <input type="text" className="input" name="password" id="password" placeholder="password" />
              </div>
            </div>
            <div className="control is-horizontal">
              <div className="control-label">
                
              </div>
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