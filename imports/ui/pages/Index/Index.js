import React from 'react';
import { Button, Form, FormControl, FormGroup, ControlLabel, Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import VisibilitySensor from 'react-visibility-sensor';
import Icon from '../../components/Icon/Icon';

const StyledIndex = styled.div`
  padding: 20px;
  margin-left: -15px;
  margin-right: -15px;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100px;
    height: auto;
  }

  h1 {
    font-size: 28px;
    font-family: "Cabin", sans-serif;
  }

  p {
    font-size: 16px;
    font-family: "Omnes", "Cabin", sans-serif;
    color: var(--white);
  }
  
  i {
 
  }

  > div {
    display: inline-block;
    margin: 10px 0 0;
    max-width: 1024px;
    width: 100%;
    flex: 1;
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
    padding-top: 58px;
    
    .hero-overlay {
      position: absolute;
      margin: 0;
      top: 0;
      left: 0;
      max-width: none;
      height: 100%;
      z-index: 1;
      opacity: .9;
      background: var(--blue);
    }
    
    .hero-content {
      display: flex;
      //flex-direction: column;
      height: 100%;
      z-index: 2;
      position: relative;
      text-align: left;
      align-items: center;
     
      
      &>div {
        margin: 16px 0;
        //text-align: left;
      }
      
      .card {
        box-shadow: var(--standard-shadow);
        background: var(--mid);
        padding: 40px;
        border-radius: 12px;
        width: 400px;
        
        & > h1 {
          margin-top: 0;
        }
        
        .flex {
          display: flex;
          
          .form-group {
            margin-right: 4px;
            flex: 1;
            
            &:last-child {
              margin-right: 0;
              margin-left: 4px;
            }
          }
        }
        
        & > form {
          .form-holder {
            margin: 38px 0;
          }
        }
      }
      
      .hero-title {
        display: flex;
        flex: 1;
        align-items: center;
        margin-left: 24px;
        text-align: right;
        
        h1 {
          font-size: 46px;
          font-weight: 600;
        }
      }
    }
    
    .hero-scroll-down {
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      max-height: 40px;
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
  
  @media screen and (max-width: 768px) {
    > div {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const OnChange = (val, section) => {
  console.log('Changin', val, section);
};

const heroForm = () => (
  <form>
    <div className="form-holder">
      <div className="flex">
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Starting..."
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Ending..."
          />
        </FormGroup>
      </div>
      <FormGroup>
        <FormControl
          type="text"
          placeholder="Location"
          value="Pottstown, PA"
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          type="text"
          placeholder="Studio"
        />
      </FormGroup>
    </div>
    <Button bsStyle="primary">Get Started</Button>
  </form>
);

const Index = () => (
  <div>
    <VisibilitySensor partialVisibility onChange={() => OnChange('hero')}>
      <StyledIndex id="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-title">
            <h1>Coworking space for <br /><strong>Musicians_</strong></h1>
          </div>
          <div className="card">
            <h1>Dont let your dreams be dreams.</h1>
            <h3><strong>Rent studios starting at </strong>$35/hour</h3>
            {heroForm()}
          </div>
        </div>
        <div className="hero-scroll-down">
          <p>Whats this?</p>
          <Icon iconStyle="solid" icon="arrow-down" />
        </div>
      </StyledIndex>
    </VisibilitySensor>
    <VisibilitySensor partialVisibility onChange={() => OnChange('about')}>
      <StyledIndex id="about">
        <h1>Get out of the Garage</h1>
        <h3>Book studios by the hour, and start creating</h3>
        <p>Studious is a place where content creators like bands, musicians, photographers, graphic designers, videographers, podcasters, boardcasters, and much more from within the Philadelphia area, come together to produce top quality multimedia without the overhead of owning or renting traditional studio space.
        </p>
      </StyledIndex>
    </VisibilitySensor>
    <VisibilitySensor partialVisibility onChange={() => OnChange('location')}>
      <StyledIndex id="location">
        <h1>Our Location</h1>
      </StyledIndex>
    </VisibilitySensor>
    <VisibilitySensor partialVisibility onChange={() => OnChange('studios')}>
      <StyledIndex id="studios">
        <h1>Studios</h1>
      </StyledIndex>
    </VisibilitySensor>
    <VisibilitySensor partialVisibility onChange={() => OnChange('pricing')}>
      <StyledIndex id="pricing">
        <h1>Become a Member!</h1>
      </StyledIndex>
    </VisibilitySensor>
  </div>
);

export default Index;
