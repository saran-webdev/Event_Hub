import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./Formpage.css";
import { message, Space } from "antd";
const Formpage = () => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [college, setCollege] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [performanceType, setPerformanceType] = useState("solo_singing"); // Default to solo singing
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");
  const [name5, setName5] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const handleRegister = (e) => {
    e.preventDefault();

    let userData = {
      name,
      rollNo,
      department,
      college,
      phoneNo,
      email,
      performanceType
    };

    if (performanceType === "duo_singing" || performanceType === "duo_dance") {
      userData = {
        ...userData,
        partnerName: name2
      };
    } else if (
      performanceType === "group_singing" ||
      performanceType === "group_dance"
    ) {
      userData = {
        ...userData,
        memberNames: [name2, name3, name4, name5]
      };
    }

    axios
      .post("http://localhost:5000/event-user-register", userData)
      .then((response) => {
        messageApi.open({
          type: "success",
          content: response.data.message || "Data Submitted Successfully"
        });
        setName("");
        setRollNo("");
        setDepartment("");
        setCollege("");
        setPhoneNo("");
        setEmail("");
        setPerformanceType("solo_singing");
        setName2("");
        setName3("");
        setName4("");
        setName5("");
      })
      .catch((error) => {
        messageApi.open({
          type: "error",
          content: "This is an error message"
        });
        console.error("Error saving data to the backend:", error);
      });
  };

  return (
    <Container>
      {contextHolder}
      <Row className="my-5">
        <Col xs={12} className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="form-content">
                  <div className="form-items">
                    <h3>Register Now</h3>
                    <p>Fill in the data below.</p>
                    <Form
                      className="requires-validation"
                      noValidate
                      onSubmit={handleRegister}
                    >
                      <div className="mb-3">
                        <select
                          className="form-select mb-3"
                          value={performanceType}
                          onChange={(e) => setPerformanceType(e.target.value)}
                        >
                          <option value="solo_singing">Solo Singing</option>
                          <option value="duo_singing">Duo Singing</option>
                          <option value="group_singing">Group Singing</option>
                          <option value="solo_dance">Solo Dance</option>
                          <option value="duo_dance">Duo Dance</option>
                          <option value="group_dance">Group Dance</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Leader's Full Name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="rollNo"
                          placeholder="Leader's Roll No"
                          required
                          value={rollNo}
                          onChange={(e) => setRollNo(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="department"
                          placeholder="Department"
                          required
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="college"
                          placeholder="College"
                          required
                          value={college}
                          onChange={(e) => setCollege(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="number"
                          name="mobileNo"
                          placeholder="Mobile No"
                          required
                          value={phoneNo}
                          onChange={(e) => setPhoneNo(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="E-mail Address"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      {(performanceType === "duo_singing" ||
                        performanceType === "duo_dance") && (
                        <div className="mb-3">
                          <input
                            className="form-control"
                            type="text"
                            name="name2"
                            placeholder="Partner's Full Name"
                            required
                            value={name2}
                            onChange={(e) => setName2(e.target.value)}
                          />
                        </div>
                      )}

                      {(performanceType === "group_singing" ||
                        performanceType === "group_dance") && (
                        <>
                          <div className="mb-3">
                            <input
                              className="form-control"
                              type="text"
                              name="name2"
                              placeholder="Member 2's Full Name"
                              required
                              value={name2}
                              onChange={(e) => setName2(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              className="form-control"
                              type="text"
                              name="name3"
                              placeholder="Member 3's Full Name"
                              required
                              value={name3}
                              onChange={(e) => setName3(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              className="form-control"
                              type="text"
                              name="name4"
                              placeholder="Member 4's Full Name"
                              required
                              value={name4}
                              onChange={(e) => setName4(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              className="form-control"
                              type="text"
                              name="name5"
                              placeholder="Member 5's Full Name"
                              required
                              value={name5}
                              onChange={(e) => setName5(e.target.value)}
                            />
                          </div>
                        </>
                      )}

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label className="form-check-label">
                          I confirm that all data are correct
                        </label>
                      </div>

                      <div className="form-button mt-3">
                        <Button
                          id="submit"
                          type="submit"
                          className="btn btn-primary"
                        >
                          Register
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Formpage;
