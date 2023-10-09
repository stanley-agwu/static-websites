import React, {Component} from "react"
import {Container} from "react-bootstrap"
import "./Footer.css"

class Footer extends Component{
  render(){
    return(
      <footer class="container py-5 mt-auto py-md-5 border-top">
        <div class="row">
          <div class="col-6 col-md-3 pt-5">
            <small class="d-block mb-3 text-muted">© 2020
            <span class="footer-text text-uppercase"><a href="/"> 5 Stack Programming
            </a></span> <br/>All Rights Reserved</small>
            <div>
            	<small class="text-muted">Follow Us</small>
  				<div><a class="btn btn-ht-facebook-blue btn-ht-xs border"
  					target="_blank" href="https://facebook.com/" rel="nofollow"
  					title="Share on Facebook"><i class="text-primary bg-white fab fa-facebook-f">
  					</i></a></div>
  				<div><a class="btn btn-ht-twitter-blue btn-ht-xs border"
  					target="_blank" href="https://twitter.com/" rel="nofollow"
  					title="Share on Twitter"><i class="text-primary bg-white fab fa-twitter-square">
  					</i></a></div>
  				<div><a class="btn btn-ht-instagram-blue btn-ht-xs border"
  					target="_blank" href="https://instagram.com/" rel="nofollow"
  					title="Share on Instagram"><i class="text-dark bg-white fab fa-instagram-square">
  					</i></a></div>
  				<div><a class="btn btn-ht-youtube-red btn-ht-xs border"
  					target="_blank" href="https://youtube.com/" rel="nofollow"
  					title="Share on Youtube"><i class="text-danger bg-white fab fa-youtube">
  					</i></a></div>
            </div>
          </div>
          <div class="col-6 col-md-3 pt-5">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/news">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="/about">Team feature</a></li>
              <li><a class="text-muted" href="/news">Articles</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 pt-5">
            <h5>Company</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/about">About Us</a></li>
              <li><a class="text-muted" href="/contact">Contact Us</a></li>
              <li><a class="text-muted" href="/contact">Support Us</a></li>
              <li><a class="text-muted" href="/contact">Start Teaching</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 pt-5">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/about">Our Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy Policy</a></li>
              <li><a class="text-muted" href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div class="row">
        	<div class="mt-5 ml-auto made">
        		<small>Made with <i class="fas fa-heart text-danger"></i> in Norway</small></div>
        	</div>
      </footer>
    )
  }
}
export default Footer
