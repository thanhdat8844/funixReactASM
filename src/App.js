import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react/cjs/react.production.min';
import {STAFFS} from "./shared/staffs";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      staff : STAFFS
    }
  }
  render(){
      return (
        <div>
        <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href = "/">
              Ứng dụng quản lý nhân sự v1.0
            </NavbarBrand>
          </div>
        </Navbar>
      </div>

      );
  }
 
}

export default App;