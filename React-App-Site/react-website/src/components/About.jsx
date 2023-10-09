import React, {Component} from "react"
import {Link} from "react-router-dom"
import {Container, Jumbotron, Button, Row, Col, Image} from 'react-bootstrap'

import "./Home.css"

class Home extends Component{
  render(){
    return (
      <Container className="mb-5 pb-5">
          <Jumbotron>
            <h1>Who we are</h1>
            <p class="lead">Our Vision, Mission, and Contributors</p>
            <p>We are a team of highly trained Journalists seeking to put the truth
            out there to positively influence people's lives and get people properly
            informed on a varieties of life's issuses.</p>
            <br />
            <Link to="/news">
              <Button variant="primary">continue reading...</Button>
            </Link>
          </Jumbotron>
          <Row className="show-grid text-center">
            <Col xs={12} md={4} className="person-wrapper" >
              <Image src="assets/person-1.jpg" roundedCircle className="profile-pic"/>
              <h3>David Thomas</h3>
              <p>Take your time. Speed will come later. Just a happy little shadow that lives in there.
              In this world, everything can be happy. We'll lay all these little funky little things
              in there. There isn't a rule. You just practice and find out which way works
               best for you.</p>
            </Col>
            <Col xs={12} md={4} className="person-wrapper">
              <Image src="assets/person-2.jpg" roundedCircle className="profile-pic"/>
              <h3>Vanessa Williams</h3>
              <p>Now then, let's play. Only eight colors that you need. These things happen
              automatically. All you have to do is just let them happen. We don't make mistakes
               we just have happy little accidents. Let your imagination be your guide.</p>
            </Col>
            <Col xs={12} md={4} className="person-wrapper">
              <Image src="assets/person-3.jpg" roundedCircle className="profile-pic"/>
              <h3>Christy Martins</h3>
              <p>If we're gonna walk though the woods, we need a little path. The light is your friend. Preserve it. We don't have anything but happy trees here. These things happen automatically. All you have to do is just let them happen. If you didn't have baby clouds, you wouldn't have big clouds. Only eight colors that you need.</p>
            </Col>
        </Row>
      </Container>
    )
  }
}
export default Home
