import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const CookiesPolicy = () => {
  return (
    <>
      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Cookies Policy
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item text-white active" aria-current="page">
                      Cookies Policy
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Cookies Policy Start */}
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={10}>
              <Card className="shadow p-4">
                <h2 className="text-center text-primary mb-4">Cookies Policy</h2>
                <p><strong>Last Updated:</strong> 06/03/2025</p>

                <h4>1. What Are Cookies?</h4>
                <p>
                  Cookies are small text files stored on your device when you visit a website. They help us improve your experience by remembering preferences and tracking site usage.
                </p>

                <h4>2. How We Use Cookies</h4>
                <p>We use cookies to:</p>
                <ul>
                  <li>Enhance website performance and security.</li>
                  <li>Remember user preferences and settings.</li>
                  <li>Analyze website traffic and improve services.</li>
                  <li>Personalize content and advertisements.</li>
                </ul>

                <h4>3. Types of Cookies We Use</h4>
                <p><strong>Essential Cookies:</strong> Required for website functionality.</p>
                <p><strong>Analytical Cookies:</strong> Help us understand website usage and improve services.</p>
                <p><strong>Marketing Cookies:</strong> Used for personalized advertising.</p>

                <h4>4. Managing Cookies</h4>
                <p>
                  You can manage cookies through your browser settings. Most browsers allow you to block or delete cookies, but doing so may affect website functionality.
                </p>

                <h4>5. Third-Party Cookies</h4>
                <p>
                  Some cookies are set by third-party services (e.g., Google Analytics, social media plugins). We do not control these cookies and recommend checking their respective privacy policies.
                </p>

                <h4>6. Contact Us</h4>
                <p>If you have any questions about our Cookies Policy, contact us at:</p>
                <ul>
                  <li><strong>Email:</strong> uttamshg@gmail.com</li>
                  <li><strong>Phone:</strong> +91 9485004706</li>
                  <li><strong>Address:</strong> HVHQ+8MQ, near Oriental House, Khyndailad, Police Bazar, Shillong, Meghalaya - 793001</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* Cookies Policy End */}
      </div>
    </>
  );
};

export default CookiesPolicy;