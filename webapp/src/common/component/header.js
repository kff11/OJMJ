import React, {useState} from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import {useDispatch} from "react-redux";
import Modal from "./modal";
import {Link} from "react-router-dom";

const Header = () => {
    //Modal (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="my_nav">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">오점뭐먹</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/admin">AdminPage</Nav.Link>
                            <Nav.Link onClick={openModal}>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <Modal
                    open={modalOpen}
                    close={closeModal}
                    header={"Login"}>
                    <div className={"login_modal"}>
                        <div className={"login_input_div"}>
                            <input className={"login_input"} placeholder="ID"></input>
                            <input className={"login_input"} placeholder="PW"></input>
                        </div>
                        <div className={"login_link_div"}>
                            <a className={"login_link"} href="/">로그인</a>
                            <hr/>
                            <a className={"signup_link"} href="/signUp">회원가입</a>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Header;