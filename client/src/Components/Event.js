import React from "react";
import {
  Row,
  Container,
  Button,
  Card,
  ListGroup
} from "react-bootstrap";
import EventNavbar from "./Common Pages/EventNavbar";
import Footer from "./Common Pages/Footer";
import "./Event.css";

const Event = () => {
  return (
    <Container className="scrollable-container" fluid>
      <Row className="Navbar_Container position-sticky top-0 start-0 end-0 z-3 p-0">
        <EventNavbar />
      </Row>
      <Row className="Card_Container bg-dark">
        <Row className="p-0 w-100 py-4">
          <span className="fs-3 fw-bolder pb-2 text-light px-0">Dancing</span>
        </Row>
        <Row className="d-flex justify-content-evenly">
          <Card style={{ width: "18rem" }} className="pt-3">
            <Card.Img variant="top" src="/card03.jpg" className="pt-2" />
            <Card.Body>
              <Card.Title>Solo Dance</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Seminar Hall</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" target="block"
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="pt-3">
            <Card.Img variant="top" src="/duodance1.jpeg" className="pt-2" />
            <Card.Body>
              <Card.Title>Duo Dance</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Auditorium</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" 
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="pt-3">
            <Card.Img variant="top" src="/card1.jpg" className="pt-2" />
            <Card.Body>
              <Card.Title>Group Dance</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Stage</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" target="block"
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Row>
      <Row className="Card_Container bg-dark py-5">
        <Row className="p-0 w-100 py-4">
          <span className="fs-3 fw-bolder pb-2 text-light px-0">Singing</span>
        </Row>
        <Row className="d-flex justify-content-evenly">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/solosinging.jpeg" className="pt-2" />
            <Card.Body>
              <Card.Title>Solo Singing</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Stage</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" target="block"
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/duosinging.jpeg" className="pt-2" />
            <Card.Body>
              <Card.Title>Duo Singing</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Seminar Hall</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" target="block"
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/card2.jpg" className="pt-2" />
            <Card.Body>
              <Card.Title>Group Singing</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Auditorium</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" target="block"
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Row>
      <Row className="Card_Container bg-dark py-5">
        <Row className="p-0 w-100 py-4">
          <span className="fs-3 fw-bolder pb-2 text-light px-0">E-Sports</span>
        </Row>
        <Row className="d-flex justify-content-evenly">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/bgmi.jpeg" className="pt-2" />
            <Card.Body>
              <Card.Title>BGMI</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Stage</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" target="block"
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form2" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/freefire.jpeg" className="pt-2" />
            <Card.Body>
              <Card.Title>FREEFIRE</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Seminar Hall</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" target="block"
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form2" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/clashroyale.jpeg" className="pt-2" />
            <Card.Body>
              <Card.Title>ClashRoyale</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Auditorium</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" target="block"
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form2" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Row>
      <Row className="Card_Container bg-dark py-5">
        <Row className="p-0 w-100 py-4">
          <span className="fs-3 fw-bolder pb-2 text-light px-0">Hackathon</span>
        </Row>
        <Row className="d-flex justify-content-evenly">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/debugging.jpg" className="pt-2" />
            <Card.Body>
              <Card.Title>Debugging</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Stage</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" target="block"
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form2" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/coding.jpg" className="pt-2" />
            <Card.Body>
              <Card.Title>Coding</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Seminar Hall</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" target="block"
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form2" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/problemsolving.jpg" className="pt-2" />
            <Card.Body>
              <Card.Title>Problem Solving</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>01/10/2024</ListGroup.Item>
              <ListGroup.Item>Hindustan University</ListGroup.Item>
              <ListGroup.Item>Auditorium</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-between">
              <Button
                href="./Joints.pdf" target="block"
                className="btn41-43 btn-41 text-decoration-none"
              >
                Event Info
              </Button>
              <Button href="/form2" variant="primary">
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Row>
      <Row id="About">
        <Footer />
      </Row>
    </Container>
  );
};

export default Event;
