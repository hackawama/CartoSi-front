import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { removeToken } from './utils/storage';
import AuthContext from './utils/context'

function Layout({ outlet }) {
    const Auth = useContext(AuthContext)
    console.log(Auth)
    const handlCick = () => {
        removeToken();
        window.location.reload();
    };
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" id='a'>
                            CARTOSI</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/cve" id='a'>CVE</Link>
                        <Link to="/sw" id='a'>Sw</Link>
                        <Link to="/hw" id='a'>Hw</Link>
                        <Link to="/schema" id='a'>Schéma SI</Link>

                    </Nav>
                    <Button onClick={handlCick} variant="outline-danger">Se Déconnecter</Button>
                </Container>

            </Navbar>
            <h2 className='d-flex align-items-center justify-content-center'>{Auth.strucure}</h2>
            {outlet}
        </>

    )
}

export default Layout