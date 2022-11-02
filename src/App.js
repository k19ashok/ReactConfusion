import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='secondary'>
        <div className='container'>
          <NavbarBrand href='/'>CONFUSION</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
