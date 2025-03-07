import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <>
      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Privacy Policy
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
                      Privacy Policy
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Start */}
        <Container className="py-10">
          <Row className="justify-content-center">
            <Col md={10}>
              <Card className="shadow p-4">
                <h2 className="text-center text-primary mb-4">Privacy Policy</h2>
                <p>
                  <strong>Last Updated:</strong> 06/03/2025
                </p>

                <h4>1. Information We Collect</h4>
                <p>
                  <strong>Personal Information:</strong> We may collect your
                  name, email, phone number, payment details, and travel
                  preferences.
                </p>
                <p>
                  <strong>Non-Personal Information:</strong> This includes your
                  IP address, browser type, and cookies data.
                </p>

                <h4>2. How We Use Your Information</h4>
                <p>
                  We use your information to process bookings, improve services,
                  and send travel updates.
                </p>

                <h4>3. Sharing Your Information</h4>
                <p>
                  We do not sell your data. However, we may share it with
                  trusted partners for booking purposes.
                </p>

                <h4>4. Data Security</h4>
                <p>
                  We take appropriate security measures to protect your data
                  from unauthorized access.
                </p>

                <h4>5. Cookies and Tracking</h4>
                <p>
                  We use cookies to enhance your experience. You can manage
                  cookies through browser settings.
                </p>

                <h4>6. Your Rights</h4>
                <p>
                  You have the right to access, update, or delete your personal
                  information.
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
        {/* Contact End */}
      </div>
    </>
  );
};

export default PrivacyPolicy;
