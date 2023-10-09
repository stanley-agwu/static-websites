import React, {Component} from "react";
import {Form, Button, Container, Jumbotron } from "react-bootstrap"
import "./Contact-Us.css"


class Contact extends Component{
  render(){
    return(
      <Container className="mb-5 pb-5">
        <Jumbotron>
          <h1>Contact Us</h1>
          <p class="lead">You can reach us via this platform.</p>
          <p>If you have any questions about the contents on <a className="text-uppercase" href="#">5StackProgramming.com </a>
           (concerns, topics and subjects of discussion), you want to leave a feedback or become
          a sponsor of our site – don’t hesitate to contact us.</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
          </Jumbotron>

        <div className="mt-5 border p-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Your Name (required)</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Your Email (required)</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows="10" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    )
  }
}
export default Contact
