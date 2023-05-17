import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Memes App</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Link to="/">Home</Link>
                        <Link to="/favlist">FavList</Link> */}
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favlist">FavList</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;