import React, { useState } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";

const FAQs = () => {
  return (
    <>
      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">FAQs</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item text-white active" aria-current="page">
                      FAQs
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section Start */}
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={10}>
              <Card className="shadow p-4">
                <h2 className="text-center text-primary mb-4">Frequently Asked Questions</h2>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>How do I book a trip?</Accordion.Header>
                    <Accordion.Body>
                      You can book a trip online by selecting your destination, choosing dates, and completing the payment process. If you need assistance, contact our support team.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Can I cancel my booking?</Accordion.Header>
                    <Accordion.Body>
                      Yes, you can cancel your booking according to our cancellation policy. Refund eligibility depends on the timing of your cancellation.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>What payment methods do you accept?</Accordion.Header>
                    <Accordion.Body>
                      We accept all major credit/debit cards, UPI, net banking, and mobile wallets for secure transactions.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>How can I contact customer support?</Accordion.Header>
                    <Accordion.Body>
                      You can reach our support team via:
                      <ul>
                        <li><strong>Email:</strong> uttamshg@gmail.com</li>
                        <li><strong>Phone:</strong> +91 9485004706</li>
                        <li><strong>Address:</strong> HVHQ+8MQ, near Oriental House, Khyndailad, Police Bazar, Shillong, Meghalaya - 793001</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>What happens if my trip gets canceled due to unforeseen events?</Accordion.Header>
                    <Accordion.Body>
                      In case of trip cancellations due to unforeseen events (e.g., natural disasters, government restrictions), we will provide rescheduling options or refunds as per our policy.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* FAQ Section End */}
      </div>
    </>
  );
};

export default FAQs;