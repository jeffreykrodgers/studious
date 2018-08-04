import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import VisibilitySensor from 'react-visibility-sensor';
import Scrollchor from 'react-scrollchor';

const StyledIndex = styled.div`
  padding: 20px;
  margin-left: -15px;
  margin-right: -15px;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  min-height: 100vh;

  img {
    width: 100px;
    height: auto;
  }

  h1 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
    color: ${lighten(0.25, '#4285F4')};
  }

  > div {
    display: inline-block;
    margin: 10px 0 0;
  }

  footer {
    margin: 20px -20px -20px;
    padding: 20px;

    p {
      font-size: 14px;
      line-height: 22px;
      color: ${lighten(0.35, '#4285F4')};
      margin: 0;
    }

    p a {
      color: ${lighten(0.35, '#4285F4')};
      text-decoration: underline;
    }
  }
  
  &#hero {
    background: url("/mixer.png") center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .hero-overlay {
      position: absolute;
      margin: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: linear-gradient(to right, var(--blue-trans), var(--dark-trans));
    }
    
    .hero-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      z-index: 2;
      position: relative;
      text-align: left;
      
      &>div {
        margin: 16px 0;
        //text-align: left;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 30px;

    footer {
      margin: 30px -30px -30px;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 40px;

    footer {
      margin: 40px -40px -40px;
    }
  }
`;

const OnChange = (val) => {
  console.log('Changin', val);
};

const Index = () => (
  <div>
    <VisibilitySensor partialVisibility onChange={OnChange}>
      <StyledIndex id="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1><strong>Recording</strong> Studios<br /> by the Hour</h1>
          <div><Scrollchor to="#about"><Button bsStyle="primary">Learn More</Button></Scrollchor></div>
        </div>
      </StyledIndex>
    </VisibilitySensor>
    <VisibilitySensor partialVisibility onChange={OnChange}>
      <StyledIndex id="about">
        <img
          src="https://s3-us-west-2.amazonaws.com/cleverbeagle-assets/graphics/email-icon.png"
          alt="Clever Beagle"
        />
        <h1>Shared Studio Space</h1>
        <p>A boilerplate for products.</p>
        <div>
          <Button href="http://cleverbeagle.com/pup">Read the Docs</Button>
          <Button href="https://github.com/cleverbeagle/pup"><i className="fa fa-star" /> Star on GitHub</Button>
        </div>
        <footer>
          <p>Want to ensure that your product sees the light of day? <a href="https://cleverbeagle.com?utm_source=pup&utm_medium=app&utm_campaign=oss">Work with Clever Beagle</a>.</p>
        </footer>
      </StyledIndex>
    </VisibilitySensor>
    <VisibilitySensor partialVisibility onChange={OnChange}>
      <StyledIndex id="location">
        <img
          src="https://s3-us-west-2.amazonaws.com/cleverbeagle-assets/graphics/email-icon.png"
          alt="Clever Beagle"
        />
        <h1>Our Studio</h1>
        <p>A boilerplate for products.</p>
        <div>
          <Button href="http://cleverbeagle.com/pup">Read the Docs</Button>
          <Button href="https://github.com/cleverbeagle/pup"><i className="fa fa-star" /> Star on GitHub</Button>
        </div>
        <footer>
          <p>Want to ensure that your product sees the light of day? <a href="https://cleverbeagle.com?utm_source=pup&utm_medium=app&utm_campaign=oss">Work with Clever Beagle</a>.</p>
        </footer>
      </StyledIndex>
    </VisibilitySensor>
    <VisibilitySensor partialVisibility onChange={OnChange}>
      <StyledIndex id="studios">
        <img
          src="https://s3-us-west-2.amazonaws.com/cleverbeagle-assets/graphics/email-icon.png"
          alt="Clever Beagle"
        />
        <h1>Available Spaces</h1>
        <p>A boilerplate for products.</p>
        <div>
          <Button href="http://cleverbeagle.com/pup">Read the Docs</Button>
          <Button href="https://github.com/cleverbeagle/pup"><i className="fa fa-star" /> Star on GitHub</Button>
        </div>
        <footer>
          <p>Want to ensure that your product sees the light of day? <a href="https://cleverbeagle.com?utm_source=pup&utm_medium=app&utm_campaign=oss">Work with Clever Beagle</a>.</p>
        </footer>
      </StyledIndex>
    </VisibilitySensor>
  </div>
);

export default Index;
