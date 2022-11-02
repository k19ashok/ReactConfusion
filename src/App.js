import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div>
      <Navbar dark color='secondary'>
          <NavbarBrand href='/'>CONFUSION</NavbarBrand>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
