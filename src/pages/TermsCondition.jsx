import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const TermsConditions = () => {
  return (
    <>
      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Terms & Conditions
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      Terms & Conditions
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions Start */}
        <Container className="py-10">
          <Row className="justify-content-center">
            <Col md={10}>
              <Card className="shadow p-4">
                <h2 className="text-center text-primary mb-4">Terms & Conditions</h2>
                <p>
                  <strong>Last Updated:</strong> 06/03/2025
                </p>

                <h4>1. Introduction</h4>
                <p>
                  By using our services, you agree to the following terms and conditions.
                </p>

                <h4>2. Booking & Payments</h4>
                <p>
                  All bookings must be made in advance. Payments should be completed before confirmation.
                </p>

                <h4>3. Cancellations & Refunds</h4>
                <p>
                  Cancellation policies vary based on the service booked. Refunds are subject to our policy.
                </p>

                <h4>4. User Responsibilities</h4>
                <p>
                  Users must provide accurate information and follow local travel regulations.
                </p>

                <h4>5. Limitation of Liability</h4>
                <p>
                  We are not responsible for third-party service failures or unforeseen circumstances.
                </p>

                <h4>6. Privacy Policy</h4>
                <p>
                  Your data is protected under our Privacy Policy. Please review it for more details.
                </p>

                <h4>7. Contact Us</h4>
                <p>If you have any questions, contact us at:</p>
                <ul>
                  <li>
                    <strong>Email:</strong> uttamshg@gmail.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +91 9485004706
                  </li>
                  <li>
                    <strong>Address:</strong> HVHQ+8MQ, near Oriental House, Khyndailad, Police Bazar, Shillong, Meghalaya - 793001
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* Terms & Conditions End */}
      </div>
    </>
  );
};

export default TermsConditions;
