import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";

class Main extends Component {
  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId
    });
  }

  render() {
    return (
      <div>
        <Navbar dark color="secondary">
          <div className="container">
          <NavbarBrand href="/">CONFUSION</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail selectedDish={this.state.dishes.filter((d) => d.id === this.state.selectedDish )[0]}/>
      </div>
    );
  }
}

export default Main;
