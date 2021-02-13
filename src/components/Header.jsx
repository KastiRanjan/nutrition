import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Search, ShoppingBag, User } from 'react-feather'
import { Link } from 'react-router-dom'

import Login from './Login'


export default function Header() {
    const [scroll, setScroll] = useState(false)
    const [openLoginModel, setOpenLoginModel] = useState(false)
    const handleClose = () => {
        setOpenLoginModel(false)
    }

    const scrollNavbar = () => {
        if (window.scrollY >= 150) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollNavbar);
        return () => {
            window.removeEventListener("scroll", scrollNavbar);
        };
    }, []);

    let classname = scroll ? 'header header-fixed' : "header"
    return (
        <>
            <div className={classname} >
                <Container>
                    <Navbar expand="lg" className="">
                        <Navbar.Brand href="#home" className="hide-for-mobile">Logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto mr-3 navigator">
                                <Link to="/" className="nav-link nav-active ">Home</Link>
                                <Link to="/plans&packages" className="nav-link">
                                    Plans & Packages
                                        </Link>

                                {/* <Link to="/product" className="nav-link">Products</Link> */}
                                <Link to="/about" className="nav-link">About Us</Link>
                                <Link to="/story" className="nav-link">Success Story</Link>
                                <Link to="/Contact" className="nav-link">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>

                        <Nav className="" style={{ flexDirection: "row" }}>
                            <Nav.Link style={{ display: "flex", alignItems: "center" }}>  <Search /></Nav.Link>
                            <Nav.Link style={{ display: "flex", alignItems: "center" }} onClick={() => setOpenLoginModel(true)}>  <User /></Nav.Link>
                            <Nav.Link>  <Button className="cart-button"><ShoppingBag size="20" color="#fff" className="cart-icon" /></Button></Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
            </div>
            <Login show={openLoginModel} handleClose={handleClose} />
        </>
    )
}
