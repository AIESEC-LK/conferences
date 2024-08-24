import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

//import guyImg from "../assets/images/delivery-guy.png";
import "../styles/hero-section.css";

const ConferenceDetails = () => {
    return (
        <Helmet title="Conference Details">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero__content">

                            </div>
                        </Col>

                        <h1>TEST</h1>




                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default ConferenceDetails;
