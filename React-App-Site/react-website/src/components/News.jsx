import React, { Component } from 'react';
import { Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
      <Container className="mb-5 pb-5">
        <Container>
          <Image src="assets/news.jpg" className="header-image" />
        </Container>
        <Container>
          <div>
            <h1 className="news-title">The News</h1>
            <hr/>
          </div>
          <Row>
            <Col xs={12} lg={8} className="main-section">
            <Container className="mb-3 border">
                <Row>
                  <Col xs={3} sm={4}><Image src="assets/person-4.jpg" roundedCircle className="img p-2"/></Col>
                  <Col xs={9} sm={8}><h3 className="p-2">Cross gender coaching will be encouraged?</h3></Col>
                </Row>
                <hr/>
                  <Row>
                  <p className="p-2">I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. Just go out and talk to a tree. Make friends with it. I guess that would be considered a UFO. A big cotton ball in the sky. Tree trunks grow however makes them happy. In nature, dead trees are just as normal as live trees.</p>
                  <p className="p-2">Sometimes you learn more from your mistakes than you do from your masterpieces. Here's something that's fun. If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. These trees are so much fun. I get started on them and I have a hard time stopping.</p>
                  <p className="p-2">Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. The light is your friend. Preserve it. If these lines aren't straight, your water's going to run right out of your painting and get your floor wet.</p>
                  </Row>
              </Container>
              <Container className="my-3 border">
                <Row>
                  <Col xs={3} sm={4}><Image src="assets/person-6.jpg" roundedCircle className="img p-2"/></Col>
                  <Col xs={9} sm={8}><h3 className="p-2">Artificial intelligence will replace human intellectual work</h3></Col>
                </Row>
                <hr/>
                <Row>
                <p className="p-2">Anyone can paint. This is the way you take out your flustrations. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so.</p>
                <p className="p-2">Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things Let's make some happy little clouds in our world. This is a happy place, little squirrels live here and play. We'll do another happy little painting. A fan brush is a fantastic piece of equipment. Use it. Make friends with it. We might as well make some Almighty mountains today as well, what the heck.</p>
                </Row>
              </Container>
            </Col>
            <Col xs={12} lg={4} className="sidebar-section">
            <div className="mb-5 border p-3 text-muted">
              <h3>Events and Happenings:</h3>
              <p>Trending events and other stuff</p>
              <ListGroup>
                <ListGroup.Item><a href="#">The Selennium Challenge</a></ListGroup.Item>
                <ListGroup.Item><a href="#">Job Fair</a></ListGroup.Item>
                <ListGroup.Item><a href="#">Women Conference</a></ListGroup.Item>
                <ListGroup.Item><a href="#">Fitness Day</a></ListGroup.Item>
                <ListGroup.Item><a href="#">Convocation</a></ListGroup.Item>
              </ListGroup>
            </div>
            <div>
              <Card style={{ width: 'auto', height: 'auto' }} className="mt-5">
                <Card.Img variant="top" src="assets/card-image.jpg" />
                <Card.Body>
                  <Button variant="btn btn-outline-primary btn-lg btn-block">Subscribe to our NewsLetter</Button>
                </Card.Body>
              </Card>
            </div>
            </Col>
          </Row>
          </Container>
        </Container>
      </div>
    )
  }
}
