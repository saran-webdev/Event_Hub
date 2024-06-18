import React, { useState } from "react";
import { Container, Row, Button, Table } from "react-bootstrap";

const Adminpg = () => {
  const [posts, setPosts] = useState([]);
  const [gets, setGets] = useState([]); // Changed variable name from setgets to setGets
  const [error, setError] = useState(null); // State to store error message

  const getTest = () => {
    fetch("http://localhost:5000/get-event-users", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        setPosts(data);
        setError(null); // Clear any previous error
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later."); // Set error message
      });
  };

  const getTests = () => {
    fetch("http://localhost:5000/get-event-userss", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        setGets(data); // Changed variable name from setgets to setGets
        setError(null); // Clear any previous error
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later."); // Set error message
      });
  };

  return (
    <Container>
      <Row>
        <h1 className="fw-bold fs-2 text-light pt-4">Welcome Admin</h1>
      </Row>
      <Row>
        <h1 className="fw-bold fs-2 text-light pt-4">
          {" "}
          E-Sports & Hackathon Data
        </h1>
      </Row>
      <Row>
        <Button onClick={getTests}>Show Details</Button>
      </Row>
      <Row>
        {error && <div>Error: {error}</div>} {/* Display error message */}
      </Row>
      <Row>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Department</th>
                <th>College</th>
                <th>Mobile No</th>
                <th>E-Mail</th>
                <th>Performance Type</th>
                <th>Partner Name / Member Names</th>
              </tr>
            </thead>
            <tbody>
              {gets.map((getss, index) => (
                <tr key={getss._id}>
                  <td>{index + 1}</td>
                  <td>{getss.name}</td>
                  <td>{getss.rollNo}</td>
                  <td>{getss.department}</td>
                  <td>{getss.college}</td>
                  <td>{getss.phoneNo}</td>
                  <td>{getss.email}</td>
                  <td>{getss.performanceType}</td>
                  <td>
                    {getss.performanceType === "BGMI" ||
                    getss.performanceType === "FREE FIRE" ||
                    getss.performanceType === "DEBUGGING" ||
                    getss.performanceType === "CODING" ||
                    getss.performanceType === "PROBLEM SOLVING"
                      ? getss.partnerName || getss.memberNames.join(",")
                      : getss.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>

      {/* Singing & Dancing Data */}
      <Row>
        <h1 className="fw-bold fs-2 text-light pt-4">Singing & Dancing Data</h1>
      </Row>
      <Row>
        <Button onClick={getTest}>Show Details</Button>
      </Row>
      <Row>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Department</th>
                <th>College</th>
                <th>Mobile No</th>
                <th>E-Mail</th>
                <th>Performance Type</th>
                <th>Partner Name / Member Names</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post._id}>
                  <td>{index + 1}</td>
                  <td>{post.name}</td>
                  <td>{post.rollNo}</td>
                  <td>{post.department}</td>
                  <td>{post.college}</td>
                  <td>{post.phoneNo}</td>
                  <td>{post.email}</td>
                  <td>{post.performanceType}</td>
                  <td>
                    {post.performanceType === "duo_singing" ||
                    post.performanceType === "group_singing" ||
                    post.performanceType === "duo_dance" ||
                    post.performanceType === "group_dance"
                      ? post.partnerName || post.memberNames.join(", ")
                      : post.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default Adminpg;
