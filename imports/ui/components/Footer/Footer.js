import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { year } from '../../../modules/dates';
import Icon from '../../components/Icon/Icon';

const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: var(--dark);
  color: var(--white);
  padding: 32px 0;
  z-index: 1032;
  
  a {
    color: var(--white);
    transition: all .1s;
    
    &:hover,
    &:active,
    &:focus {
      color: var(--accent);
      text-decoration: none;
    }
  }

  p {
    color: var(--white);
    font-size: 14px;
    margin: 16px 0;
  }
  
  h4, h5 {
    margin: 0;
  }
  
  section {
   padding: 16px 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul {
    li {
      margin-bottom: 20px;
    
      a {
        font-size: 20px;
      }
    }
  }
  
  .social {
    a {
      font-size: 20px;
      margin-right: 28px;
    }
    
    i {
      color: var(--white);
    }
  }
  
  .col-md-4 {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .link-group {
    ul li {
      margin-bottom: 24px;
    }
    &:after {
      content: '';
      height: 4px;
      width: 48px;
      background: var(--accent);
      display: block;
      margin: 20px 0;
     }    
  }
  
  .footer-logo {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    ul li:first-child {
      margin-right: 30px;
    }
  }
`;

const { companyName, copyrightStartYear } = Meteor.settings.public;
const copyrightYear = () => {
  const currentYear = year();
  return currentYear === copyrightStartYear ? copyrightStartYear : `${copyrightStartYear}-${currentYear}`;
};

const Footer = () => (
  <StyledFooter>
    <Grid>
      <Row>
        <Col md={4}>
          <section>
            <img src="/logo.svg" alt="Studious" className="footer-logo" />
          </section>
          <section>
            <h5>224 Maugers Mill Rd</h5>
            <h5>Pottstown, PA 19464</h5>
          </section>
          <section>
            <a href="#"><h5>info@studiouscreative.co</h5></a>
          </section>
          <section>
            <Button bsStyle="primary">Chat With Us</Button>
          </section>
          <section>
            <div className="group-header">
              <h3>©{copyrightYear()} {companyName}</h3>
              <h2>studiouscreative.co</h2>
            </div>
          </section>
          <section>
            <ul>
              <li><Link to="/terms">Terms<span className="hidden-xs"> of Service</span></Link></li>
              <li><Link to="/privacy">Privacy<span className="hidden-xs"> Policy</span></Link></li>
            </ul>
          </section>
        </Col>
        <Col md={4}>
          <section>
            <div className="link-group">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#location">Location</Link></li>
                <li><Link to="/#studios">Studios</Link></li>
              </ul>
            </div>
            <div className="link-group">
              <ul>
                <li><Link to="/">Reserve Now</Link></li>
                <li><Link to="/#about">Log In</Link></li>
                <li><Link to="/#location">Forums</Link></li>
                <li><Link to="/#studios">Support</Link></li>
              </ul>
            </div>
          </section>
          <section className="social">
            <h3>Follow Us</h3>
            <hr />
            <Link to="/"><Icon iconStyle="brand" icon="facebook" /></Link>
            <Link to="/"><Icon iconStyle="brand" icon="instagram" /></Link>
            <Link to="/"><Icon iconStyle="brand" icon="twitter" /></Link>
            <Link to="/"><Icon iconStyle="brand" icon="google" /></Link>
            <Link to="/"><Icon iconStyle="brand" icon="soundcloud" /></Link>
          </section>
        </Col>
        <Col md={4}>
          <section>
            <div className="group-header">
              <h3>Broadcast Partners</h3>
              <h2>98.5 WXPM FM</h2>
            </div>
            <p>This is a post from our blog that will have some blog-like content within it. The post should probably be about 3 or maybe 4 paragraphs long and maybe include some pictures or videos. We won’t display that here obviously, because this is just an exerpt so it should cut off any…</p>
          </section>
          <section>
            <div className="group-header">
              <h3>From the Blog</h3>
              <h2>Blog Post Title</h2>
            </div>
            <p>This is a post from our blog that will have some blog-like content within it. The post should probably be about 3 or maybe 4 paragraphs long and maybe include some pictures or videos. We won’t display that here obviously, because this is just an exerpt so it should cut off any…</p>
          </section>
        </Col>
      </Row>
    </Grid>
  </StyledFooter>
);

Footer.propTypes = {};

export default Footer;
