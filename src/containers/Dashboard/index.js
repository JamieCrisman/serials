import React, {Component} from "react";
import {Link} from "react-router";
import { connect } from "react-redux";
// import _ from "lodash";

// import {
//   loadResources
// } from "../../actions";

export default class Dashboard extends Component {
  render() {
    // const {} = this.props;
    if (this.props.loading) {
      return (
        <div className="container">
        <div className="row">
          <div className="col s12">
            Loading~
          </div>
        </div>
      </div>
      );
    }
    
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Link to="/login">goto login</Link>
          </div>
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