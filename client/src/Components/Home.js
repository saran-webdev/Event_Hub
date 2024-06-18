import {
  Row,
  Container,
  Carousel,
  Button,
  Card,
  ListGroup
} from "react-bootstrap";
import "./Home.css";
import Footer from "./Common Pages/Footer";
import EventNavbar from "./Common Pages/EventNavbar";

const Navbar_eb = () => {
  // const pdfdownload = () => {
  //   const pdfData = "Your PDF data as a string or ArrayBuffer";
  //   const pdfBlob = new Blob([pdfData], { type: "application/pdf" });
  //   const a = document.createElement("a");
  //   console.log(pdfBlob);
  //   a.href = window.URL.createObjectURL(pdfBlob);
  //   a.download = "Joints.pdf";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   window.URL.revokeObjectURL(a.href);
  // };
  return (
    // Navbar
    <Container fluid className="p-0 vh-100 overflow-x-hidden">
      <Row className="Navbar_Container position-sticky top-0 start-0 end-0 z-3 p-0">
        <EventNavbar />
      </Row>
      <Row className="Carousel_Container bg-black">
        <Carousel interval={2500}>
          <Carousel.Item>
            <img
              src="./slide01.jpg"
              alt="..."
              className="img-fluid"
              cltext="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="./slide2.jpg"
              alt="..."
              className="img-fluid"
              cltext="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      {/* Card Container */}
      <Row className="Card_Container bg-dark">
        <Row className="p-0 w-100 py-4">
          <span className="fs-3 fw-bolder pb-2 text-light px-0">
            Upcomming Events
          </span>
        </Row>
        <Row className="d-flex justify-content-evenly">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/card1.jpg" className="pt-2" />
            <Card.Body>
              <Card.Title>Group Dancing</Card.Title>
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
              <Card.Title>Singing</Card.Title>
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
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/card03.jpg" className="pt-2" />
            <Card.Body>
              <Card.Title>Solo Dance</Card.Title>
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
      <Row className="bg-dark" id="About">
        <Footer />
      </Row>
    </Container>
  );
};

export default Navbar_eb;
