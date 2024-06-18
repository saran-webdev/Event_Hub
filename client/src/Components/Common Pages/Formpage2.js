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
  const [performanceType, setPerformanceType] = useState("select");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");
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

    if (
      performanceType === "BGMI" ||
      performanceType === "FREE FIRE" ||
      performanceType === "CLASH ROYAL"
    ) {
      userData = {
        ...userData,
        memberNames: [name2, name3, name4]
      };
    } else if (
      performanceType === "DEBUGGING" ||
      performanceType === "CODING" ||
      performanceType === "PROBLEM SOLVING"
    ) {
      userData = {
        ...userData,
        partnerName: name2
      };
    }

    axios
      .post("http://localhost:5000/event-user-register-two", userData)
      .then((response) => {
        console.log(response);
        messageApi.open({
          type: "success",
          content: response.data.message || "Data Submitted Successfully"
        });
        console.log("Data successfully saved to the backend:", response.data);
        resetForm();
      })
      .catch((error) => {
        console.error("Error saving data to the backend:", error);
        messageApi.open({
          type: "error",
          content: "Error saving data to the backend"
        });
      });
  };
  const resetForm = () => {
    setName("");
    setRollNo("");
    setDepartment("");
    setCollege("");
    setPhoneNo("");
    setEmail("");
    setPerformanceType("select");
    setName2("");
    setName3("");
    setName4("");
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
                          <option value="select">select</option>
                          <option value="BGMI">BGMI</option>
                          <option value="FREE FIRE">FREE FIRE</option>
                          <option value="CLASH ROYAL">CLASH ROYAL</option>
                          <option value="DEBUGGING">DEBUGGING</option>
                          <option value="CODING">CODING</option>
                          <option value="PROBLEM SOLVING">
                            PROBLEM SOLVING
                          </option>
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
                          type="tel"
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

                      {(performanceType === "DEBUGGING" ||
                        performanceType === "CODING" ||
                        performanceType === "PROBLEM SOLVING") && (
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

                      {(performanceType === "BGMI" ||
                        performanceType === "FREE FIRE") && (
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
