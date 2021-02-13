
import React from 'react'
import { Button, FormControl, FormGroup, FormLabel, Modal, ModalBody } from 'react-bootstrap'

export default function Login({ show, handleClose }) {
    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Password" />
                    </FormGroup>
                    <Button>Login</Button>
                </ModalBody>
            </Modal>
        </div>
    )
}
