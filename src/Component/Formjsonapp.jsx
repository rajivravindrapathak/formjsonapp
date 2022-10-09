import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Container, Navbar, Row, Table } from 'react-bootstrap'
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
  const [data, setData] = useState([])

  useEffect (() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const response = await axios.get(api)
    setData(response.data)
  }

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
            <h2>Form</h2>
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
