import React, {Component} from "react";
//import {Link} from "react-router";

export class AppHeader extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-center">
          <a href="/" className="nav-item">
            asdf
          </a>
        </div>
      </nav>
    );
  }
}

export class AppFooter extends Component {
  render() {
    return(
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h4>About Konbini</h4>
              <p>
                Konbini is a directory of web resources for learning the Japanese language. If you would like to recommend a resource, please contact us.
              </p>
            </div>
            <div className="column is-half">
              <h4>Links</h4>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://github.com/JamieCrisman/konbini">Github Repo</a></li>
                <li><a className="grey-text text-lighten-3" href="http://longest.voyage">Longest.Voyage</a></li>
              </ul>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              <p>
                Developed and Maintained by <a href="http://github.com/jamiecrisman" className="grey-text text-lighten-4">James Crisman</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default class App extends Component {

  render() {
    return (
      <div>
        <AppHeader/>
        <div className="container">
          {this.props.children}
        </div>
        <AppFooter/>
      </div>
    );
  }
}

