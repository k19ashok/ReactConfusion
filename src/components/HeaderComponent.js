import React, { Component } from "react";
import { Navbar, NavbarBrand, Card } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">CONFUSION</NavbarBrand>
          </div>
        </Navbar>
        <>
          <div className="jumbotron">
            <div className="container">
              <div className="row row-header">
                <div className="col-12 col-sm-6 text-white">
                  <h1>Confusion Restaurant</h1>
                  <p>
                    We take inspiration from the world's best cuisines and
                    create a unique fusion experience. Our lipsmaking creations
                    will tackle your culinary senses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    );
  }
}

export default Header;
