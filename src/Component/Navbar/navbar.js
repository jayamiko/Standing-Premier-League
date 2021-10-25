import React from "react";
import "./navbar.css";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function Navbar() {
    const [modal, setModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [severity, setSeverity] = useState('success')

    const openModalLogin = () => {
        setModal(true);
        setRegisterModal(false);
    };
    const closeModalLogin = () => {
        setModal(false);
    };
    const openModalRegister = () => {
        setRegisterModal(true);
        setModal(false);
    };
    const closeModalRegister = () => {
        setRegisterModal(false);
    };

    return (
        <div className="nav">
            <div className="nav-logo">
                <img src="assets/Icon.png" alt="dewe tour" />
            </div>
            <div className={`nav-title `}>
                <ul>
                    <li>
                        <a onClick={openModalLogin} className="btn-one" href="#">
                            Login
                        </a>
                        <Modal show={modal}>
                            <a onClick={closeModalLogin}>x</a>
                            <Modal.Body>
                                <img src="assets/palm2.png" className="palm"></img>
                                <img src="assets/hibiscus2.png" className="hibiscus"></img>
                                <Form>
                                    <h2 className="text-center my-5">Login</h2>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                        <Form.Label className="fw-bold">Email address</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicPassword">
                                        <Form.Label className="fw-bold">Password</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>
                                    <div class="d-flex flex-column gap-2 ">
                                        <Button
                                            className="text-white fw-bold"
                                            variant="warning"
                                            type="submit">
                                            Submit
                                        </Button>
                                        <small className="text-center">
                                            Don't have an account ? click{" "}
                                            <a onClick={openModalRegister}>Here</a>
                                        </small>
                                    </div>
                                </Form>
                            </Modal.Body>
                        </Modal>
                        <Modal show={registerModal}>
                            <a onClick={closeModalRegister}>x</a>
                            <Modal.Body className="modal-content">
                                <img src="assets/palm2.png" className='palm'></img>
                                <img src="assets/hibiscus2.png" className='hibiscus'></img>
                                <h2 className="text-center my-5">Register</h2>
                                <Form>
                                    <Form.Group className="mb-4" controlId="formBasicName">
                                        <Form.Label className="fw-bold">FullName</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                        <Form.Label className="fw-bold">Email address</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicPassword">
                                        <Form.Label className="fw-bold">Password</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicPhone">
                                        <Form.Label className="fw-bold">Phone</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <div class="d-flex flex-column gap-2 ">
                                        <Button
                                            className="text-white fw-bold"
                                            variant="warning"
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                        <small className="text-center">
                                            Have an account ? click{" "}
                                            <a onClick={openModalLogin}>Here</a>
                                        </small>
                                    </div>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </li>
                    <li>
                        <a
                            className="btn-two"
                            onClick={openModalRegister}
                            href="#services"
                        >
                            Register
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;