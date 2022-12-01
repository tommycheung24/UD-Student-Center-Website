// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import './navigationBar.css';

const logo = require('../resources/logo-udel.png');

export default function NavigationBar() {
    return (
        <Navbar class='navbar' bg='light'>
            <Navbar.Brand href="/">
                <img
                 src={logo}
                 className='logo'
                 alt="ud logo"
                />
            </Navbar.Brand>
        </Navbar>
    );
}