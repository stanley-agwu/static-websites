import React, {Component} from "react"
import {Link} from "react-router-dom"
import {Container, Jumbotron, Button, Row, Col, Image} from 'react-bootstrap'

import "./Home.css"

class Home extends Component{
  render(){
    return (
      <Container className="mb-5 pb-5">
          <Jumbotron>
            <h2>Welcome to 5 Stack Development School</h2>
            <p><span className="jumbo-text">5 Stack Programming</span> is the next-generation school for learning to do exciting things with code. Our tutors
            are world-class, with top notch experience using lastest cutting edge technologies. They teach
            latest technologies in the do-it-myself approach.Our courses cover subjects like HTML, CSS, JavaScript,
            React, Vue, and more. They're all made with the goal of advancing your career. So pick a course
            and give your career a boost!</p>
            <br />
            <Link to="/news">
              <Button bsStyle="primary">Learn More</Button>
            </Link>
          </Jumbotron>
          <Row className="show-grid mt-3">
            <Col md={12} lg={4} className="person-wrapper">
              <div class="card">
                <img class="card-img-top p-2" src="../assets/1.jpg" alt="Card image cap"/>
                <div class="card-body card-img-overlay">
                  <h2 class="card-title text-white">Learn HTML5</h2>
                </div>
                <div class="card-body">
                  <p class="card-text">
                  HTML is the foundation of all web pages. Without HTML, you wouldn’t be
                  able to organize text or add images or videos to your web pages. HTML is
                  the beginning of everything you need to know to create engaging web pages!
                    </p>
                      <a href="/" className="btn btn-primary">Start</a>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4} className="person-wrapper">
              <div class="card">
                <img class="card-img-top p-2" src="../assets/2.jpg" alt="Card image cap"/>
                <div class="card-body card-img-overlay">
                  <h2 class="card-title text-white">Learn CSS3 and Sass</h2>
                </div>
                <div class="card-body">
                  <p class="card-text">
                  Without CSS, every web page would be drab plain text and images that flowed
                   straight down the page. With CSS, you can add color and background images and
                   change the layout of your page — your web pages can feel like works of art!
                    </p>
                      <a href="/" className="btn btn-primary">Start</a>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4} className="person-wrapper">
              <div class="card">
                <img class="card-img-top p-2 img-fluid" src="../assets/3.jpg" alt="Card image cap"/>
                <div class="card-body card-img-overlay">
                  <h2 class="card-title text-white">JavaScript Programming</h2>
                </div>
                <div class="card-body">
                  <p class="card-text">
                  JavaScript is a fun and flexible programming language. It’s one of the core technologies
                  of web development and can be used on both the front-end and the back-end.your web pages
                  can feel like works of art!
                    </p>
                      <a href="/" className="btn btn-primary">Start</a>
                </div>
              </div>
            </Col>
        </Row>
        <Row className="show-grid mt-3">
          <Col md={12} lg={4} className="person-wrapper">
            <div class="card">
              <img class="card-img-top p-2" src="../assets/4.jpg" alt="Card image cap"/>
              <div class="card-body card-img-overlay">
                <h2 class="card-title text-white">Python Programming</h2>
              </div>
              <div class="card-body">
                <p class="card-text">
                Python is a general-purpose, versatile, and powerful programming language.
                It’s a great first language because it’s concise and easy to read. Whatever
                you want to do, Python can do it. From web development to machine learning
                to data science, Python is the language for you.What do you think?
                  </p>
                    <a href="/" className="btn btn-primary">Start</a>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} className="person-wrapper">
            <div class="card">
              <img class="card-img-top p-2" src="../assets/5.jpg" alt="Card image cap"/>
              <div class="card-body card-img-overlay">
                <h2 class="card-title text-white">React.JS</h2>
              </div>
              <div class="card-body">
                <p class="card-text">
                ReactJS presents graceful solutions to some of front-end programming’s most
                persistent issues. It’s fast, scalable, flexible, powerful, and has a robust
                developer community that’s rapidly growing. There’s never been a better time
                to learn React.With it your web pages can feel like works of art!
                  </p>
                    <a href="/" className="btn btn-primary">Start</a>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} className="person-wrapper">
            <div class="card">
              <img class="card-img-top p-2 img-fluid" src="../assets/6.jpg" alt="Card image cap"/>
              <div class="card-body card-img-overlay">
                <h2 class="card-title text-white">Node.JS</h2>
              </div>
              <div class="card-body">
                <p class="card-text">
                The powerful Node.js runtime environment has been ranked the technology most
                commonly used by professional developers. Node.js is an event-driven JavaScript
                runtime. Node has myriad potential uses for JavaScript development including
                being a great environment for building applications.
                  </p>
                    <a href="/" className="btn btn-primary">Start</a>
              </div>
            </div>
          </Col>
      </Row>
      <Row className="show-grid mt-3">
        <Col md={12} lg={4} className="person-wrapper">
          <div class="card">
            <img class="card-img-top p-2" src="../assets/7.jpg" alt="Card image cap"/>
            <div class="card-body card-img-overlay">
              <h2 class="card-title text-white">Bootstrap4</h2>
            </div>
            <div class="card-body">
              <p class="card-text">
              If you want to quickly create a website without writing tons of CSS from
              scratch, then Bootstrap 4 might be the framework you’re looking for. In
              this course, you’ll see how Bootstrap makes it easy to layout and create
              interactive and responsive sites. I think it is cool stuff.
                </p>
                  <a href="/" className="btn btn-primary">Start</a>
            </div>
          </div>
        </Col>
        <Col md={12} lg={4} className="person-wrapper">
          <div class="card">
            <img class="card-img-top p-2" src="../assets/8.jpg" alt="Card image cap"/>
            <div class="card-body card-img-overlay">
              <h2 class="card-title text-white">Django Web Development</h2>
            </div>
            <div class="card-body">
              <p class="card-text">
              With Django, you can take Web applications from concept to launch in a matter of
              hours. Django takes care of much of the hassle of Web development, so you can focus
              on writing your app without needing to reinvent the wheel. It’s free and open source.
                </p>
                  <a href="/" className="btn btn-primary">Start</a>
            </div>
          </div>
        </Col>
        <Col md={12} lg={4} className="person-wrapper">
          <div class="card">
            <img class="card-img-top p-2 img-fluid" src="../assets/9.jpg" alt="Card image cap"/>
            <div class="card-body card-img-overlay">
              <h2 class="card-title text-white">SQL</h2>
            </div>
            <div class="card-body">
              <p class="card-text">
              We live in a data-driven world: people search through data to find insights to inform
              strategy, marketing, operations, and a plethora of other categories. There are a ton
              of businesses that use large, relational databases, which makes understanding
              of SQL a great employable skill.
                </p>
                  <a href="/" className="btn btn-primary">Start</a>
            </div>
          </div>
        </Col>
    </Row>
    <Row className="show-grid mt-3">
      <Col md={12} lg={4} className="person-wrapper">
        <div class="card">
          <img class="card-img-top p-2" src="../assets/10.jpg" alt="Card image cap"/>
          <div class="card-body card-img-overlay">
            <h2 class="card-title text-white">Express.JS</h2>
          </div>
          <div class="card-body">
            <p class="card-text">
            With these skills, you’ll be able to build APIs in JavaScript and implement the
            CRUD (create, retrieve, update, and delete) functionality which forms the backbone
            of modern-day apps. If you’ve ever wondered how to make a web app back-end or are
            looking to pick up a new back-end framework, this is the course for you!
              </p>
                <a href="/" className="btn btn-primary">Start</a>
          </div>
        </div>
      </Col>
      <Col md={12} lg={4} className="person-wrapper">
        <div class="card">
          <img class="card-img-top p-2" src="../assets/11.jpg" alt="Card image cap"/>
          <div class="card-body card-img-overlay">
            <h2 class="card-title text-white">Java Programming</h2>
          </div>
          <div class="card-body">
            <p class="card-text">
            Java is among the most popular programming language, mainly because
             of its versatility and compatibility. Its uses includes software,
             mobile applications, and large systems development. As of 2019, 88% market
             share of all smartphones run on Android, the mobile operating system written in Java.
              </p>
                <a href="/" className="btn btn-primary">Start</a>
          </div>
        </div>
      </Col>
      <Col md={12} lg={4} className="person-wrapper">
        <div class="card">
          <img class="card-img-top p-2 img-fluid" src="../assets/12.jpg" alt="Card image cap"/>
          <div class="card-body card-img-overlay">
            <h2 class="card-title text-white">AngularJS</h2>
          </div>
          <div class="card-body">
            <p class="card-text">
            As a web developer, you’ll need to learn how to use new frameworks on a regular basis.
            AngularJS is a full-featured framework that is incredibly popular among developers.
            For single-page applications, the AngularJS framework creates rich interactive features
            for a real-time experience.
              </p>
                <a href="/" className="btn btn-primary">Start</a>
          </div>
        </div>
      </Col>
  </Row>
      </Container>
    )
  }
}
export default Home
