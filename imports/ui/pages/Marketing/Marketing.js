import React from 'react';
import { Button, FormControl, FormGroup, InputGroup, Fade } from 'react-bootstrap';
import Typing from 'react-typing-animation';
import Scrollchor from 'react-scrollchor';
import VisibilitySensor from 'react-visibility-sensor';
import Icon from '../../components/Icon/Icon';
import DateTimeInput from '../../components/DateTimeInput/DateTimeInput';
import StyledIndex from './Marketing.style';

class Marketing extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      view: 'hero',
    });
  }

  OnChange(val) {
    console.log('Changin', val);
  }

  HeroForm() {
    return (
      <div />
    );
  }

  Hero() {
    return (
      <div />
    );
  }

  About() {
    return (
      <div />
    );
  }

  Location() {
    return (
      <div />
    );
  }

  Studio() {
    return (
      <div />
    );
  }

  Pricing() {
    return (
      <div />
    );
  }

  render() {
    return (
      <div>
        <VisibilitySensor onChange={() => this.OnChange('hero')}>{this.Hero()}</VisibilitySensor>
        <VisibilitySensor onChange={() => this.OnChange('about')}>{this.About()}</VisibilitySensor>
        <VisibilitySensor onChange={() => this.OnChange('location')}>{this.Location()}</VisibilitySensor>
        <VisibilitySensor onChange={() => this.OnChange('studios')}>{this.Studios()}</VisibilitySensor>
        <VisibilitySensor onChange={() => this.OnChange('pricing')}>{this.Pricing()}</VisibilitySensor>
      </div>
    );
  }
}

const OnChange = (val) => {
  console.log('Changin', val);
};

const HeroForm = () => (
  <form>
    <div className="form-holder">
      <FormGroup>
        <FormControl
          type="text"
          placeholder="Location"
          value="Pottstown, PA"
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          componentClass="select"
          placeholder="Choose Studio..."
        >
          <option value="audio">Audio Production ($35/hr)</option>
          <option value="audio">Large Audio Studio ($25/hr)</option>
          <option value="audio">Small Audio Studio ($15/hr)</option>
          <option value="audio">Broadcast Production ($35/hr)</option>
          <option value="audio">Photo/Video Studio ($55)</option>
        </FormControl>
      </FormGroup>
      <div className="flex">
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon><Icon icon="calendar" /></InputGroup.Addon>
            <DateTimeInput inputProps={{ placeholder: 'Date...' }} timeFormat={false} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon><Icon icon="clock" /></InputGroup.Addon>
            <DateTimeInput inputProps={{ placeholder: 'Time...' }} dateFormat={false} />
          </InputGroup>
        </FormGroup>
      </div>
    </div>
    <Button bsStyle="primary">Get Started</Button>
  </form>
);

const Hero = () => (
  <StyledIndex id="hero">
    <div className="hero-overlay" />
    <div className="hero-content">
      <div className="hero-title">
        <h1>Coworking space for <br />
          <Typing loop cursorClassName="cursor">
            <strong>Musicians</strong>
            <Typing.Backspace count={9} delay={2000} speed={50} />
            <strong>Graphic <br />Designers</strong>
            <Typing.Backspace count={19} delay={2000} speed={50} />
            <strong>Broadcasters</strong>
            <Typing.Backspace count={12} delay={2000} speed={50} />
            <strong>Photographers</strong>
            <Typing.Backspace count={13} delay={2000} speed={50} />
            <strong>Content Creators</strong>
            <Typing.Backspace count={16} delay={16000} speed={50} />
          </Typing>
        </h1>
      </div>
      <div className="card">
        <h1>Dont let your dreams be dreams.</h1>
        <h3><strong>Rent studios starting at </strong>$15/hour</h3>
        {HeroForm()}
      </div>
    </div>
    <Scrollchor className="hero-scroll-down" to="#about">
      <p>Whats this?</p>
      <Icon iconStyle="solid" icon="arrow-down" />
    </Scrollchor>
  </StyledIndex>
);

const About = () => (
  <StyledIndex id="about">
    <StyledIndex className="about-section">
      <VisibilitySensor onChange={() => OnChange('intro-p')}>
        <Fade>
          <div className="intro-p">
            <h1>Get out of the Garage</h1>
            <h3>Book studios by the hour, and start creating</h3>
            <p>Studious is a place where content creators like bands, musicians, photographers, graphic designers, videographers, podcasters, broadcasters, and much more from within the Philadelphia area, come together to produce top quality multimedia without the overhead of owning or renting traditional studio space.
            </p>
          </div>
        </Fade>
      </VisibilitySensor>
    </StyledIndex>
    <StyledIndex className="about-section">
      <h1>Get out of the Garage</h1>
      <h3>Book studios by the hour, and start creating</h3>
      <p>Studious is a place where content creators like bands, musicians, photographers, graphic designers, videographers, podcasters, broadcasters, and much more from within the Philadelphia area, come together to produce top quality multimedia without the overhead of owning or renting traditional studio space.
      </p>
    </StyledIndex>
  </StyledIndex>
);

const Location = () => (
  <StyledIndex id="location">
    <h1>Our Location</h1>
  </StyledIndex>
);

const Studios = () => (
  <StyledIndex id="studios">
    <h1>Our Studios</h1>
  </StyledIndex>
);

const Pricing = () => (
  <StyledIndex id="pricing">
    <h1>Our Pricing</h1>
  </StyledIndex>
);

const MarketingDep = () => (
  <div>
    <VisibilitySensor onChange={() => OnChange('hero')}>{Hero()}</VisibilitySensor>
    <VisibilitySensor onChange={() => OnChange('about')}>{About()}</VisibilitySensor>
    <VisibilitySensor onChange={() => OnChange('location')}>{Location()}</VisibilitySensor>
    <VisibilitySensor onChange={() => OnChange('studios')}>{Studios()}</VisibilitySensor>
    <VisibilitySensor onChange={() => OnChange('pricing')}>{Pricing()}</VisibilitySensor>
  </div>
);

export default MarketingDep;
