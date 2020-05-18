import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import './styles.css'
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }
    render() {
        const { status } = this.state;
        return (
            <Container fluid="true" className="justify-content-center">
          
                <Container style={{ width: "80%" }} className="justify-content-center">

                    <section className="center-block text-center center">
                        <h1>Contato</h1>
                    </section>
                    <Container style={{ width: "100%" }}>
                        <section className="form-container">
                            <Form onSubmit={this.submitForm}
                                action="https://formspree.io/mnqgnjjy"
                                method="POST">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Menssagem: </Form.Label>
                                    <Form.Control name="message" as="textarea" rows="3" placeholder="message" />
                                </Form.Group>
                                {status === "SUCCESS" ? <p>Obrigada!</p> : <Button className="button" variant="primary" type="submit">Submit</Button>}
                                {status === "ERROR" && <p>Ooops! Ocorrou um erro.</p>}

                            </Form>
                        </section>
                    </Container>

                </Container>
            </Container>
        )
    }
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}
export default Contact;