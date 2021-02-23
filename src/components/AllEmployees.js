import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/styles.css";
///import { baseUrl, baseFileUrl } from "../config/baseUrl";

import { Button, Container, Row, Col, Table, Image } from "react-bootstrap";
import Axios from "axios";
export default class AllEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("response", response.data);
        this.setState({
          employees: response.data,
        });
      })
      .catch((error) => {});
  }
  render() {
    return (
      <>
        <Container className='margin-top '>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <h3 className='text-center'>All Employees </h3>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Website</th>
                    <th>Company</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employees.length > 0 ? (
                    this.state.employees.map((employee) => {
                      return (
                        <tr key={employee.id}>
                          <td>{employee.name}</td>
                          <td>{employee.username}</td>
                          <td>{employee.email}</td>
                          <td>{employee.phone}</td>
                          <td>{employee.website}</td>
                          <td>{employee.company.name}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan='6'>Loading</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
