import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Container, Form, Navbar, Row, Table } from 'react-bootstrap'
import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/react-toastify.css"

const api = "http://localhost:8080/users"

const initState = {
  name: "",
  email: "",
  contact: "",
  address: ""
}

const Formjsonapp = () => {
  const [state, setState] = useState([])
  const [data, setData] = useState([])
  const {name, email, contact, address} = state

  useEffect (() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const response = await axios.get(api)
    setData(response.data)
  }

  // const handle

  return (
    <>
      <ToastContainer />
      <Navbar>
        <Navbar.Brand>
          build and deploy React app using JSON server on heroku
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col md={4}>
            <Form>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}>Name</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Name'
                  name='name'
                  value={name}
                >
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email'
                  name='email'
                  value={email}
                >
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}>Contact</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter contact'
                  name='contact'
                  value={contact}
                >
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}>Address</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Address'
                  name='address'
                  value={address}
                >
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col md={8}>
            <Table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data && data.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td>
                      <ButtonGroup>
                        <Button style={{marginRight: "5px"}} variant="secondary">
                          Update
                        </Button>
                        <Button style={{marginRight: "5px"}} variant="danger">
                          delete
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Formjsonapp
