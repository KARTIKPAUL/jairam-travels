import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Help = () => {
  return (
    <>
      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Help & Support
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item text-white active" aria-current="page">
                      Help & Support
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section Start */}
        <Container className="py-10">
          <Row className="justify-content-center">
            <Col md={10}>
              <Card className="shadow p-4">
                <h2 className="text-center text-primary mb-4">How Can We Help?</h2>
                <p>
                  At <strong>Jairam Travel Agency Shillong</strong>, we are dedicated to providing excellent customer support. Below, you will find answers to some of the most frequently asked questions.
                </p>

                <h4>1. How do I make a booking?</h4>
                <p>
                  You can book your trip online through our website by selecting your preferred destination and completing the payment process. Alternatively, you can contact our support team for assistance.
                </p>

                <h4>2. Can I modify or cancel my booking?</h4>
                <p>
                  Yes, you can modify or cancel your booking based on our cancellation policy. Please refer to our terms and conditions for details or contact customer support.
                </p>

                <h4>3. What payment methods do you accept?</h4>
                <p>
                  We accept credit/debit cards, UPI, net banking, and other secure payment methods for online bookings.
                </p>

                <h4>4. How do I contact customer support?</h4>
                <p>
                  Our customer support team is available 24/7. You can reach us via:
                </p>
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

                <h4>5. What should I do if I face an issue during my trip?</h4>
                <p>
                  If you encounter any issues during your journey, please contact our support team immediately. We will do our best to assist you.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* Help Section End */}
      </div>
    </>
  );
};

export default Help;