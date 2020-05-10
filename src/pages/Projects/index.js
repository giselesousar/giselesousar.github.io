import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Components/Navbar/NavbarComponent'
import Footer from '../Components/Footer/FooterComponent'


class Projects extends React.Component {
    render() {
        return (
            <Container fluid="true" className="justify-content-center">
                <Navbar />
                <Container style={{ width: "80%" }} className="justify-content-center">

                    <section className="center-block text-center center">
                        <h1>Projetos</h1>
                        <div className="paragrafo-container">
                            <p></p>
                        </div>
                        <Container style={{ width: "70%" }} >

                        </Container>
                    </section>
                </Container>
                <Footer />
            </Container>
        )
    }
}
export default Projects;