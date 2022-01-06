import logo from './logo.svg';
import { Navbar,NavbarBrand} from "reactstrap";
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from "./shared/dishes";
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES
    }
  };
  render(){

  
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}>
      </Menu>
  
    </div>
  );
  }
}

export default App;
