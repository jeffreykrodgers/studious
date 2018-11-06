import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
import PropTypes from 'prop-types';

class PublicNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRegmenu() {
    return (
      <Nav pullRight className="scrollnav">
        <LinkContainer to="/#about">
          <NavItem eventKey={3} href="/#about">About</NavItem>
        </LinkContainer>
        <LinkContainer to="/#location">
          <NavItem eventKey={4} href="/#location">Location</NavItem>
        </LinkContainer>
        <LinkContainer to="/#studios">
          <NavItem eventKey={5} href="/#studios">Studios</NavItem>
        </LinkContainer>
        <LinkContainer to="/#pricing">
          <NavItem eventKey={5} href="/#pricing">Pricing</NavItem>
        </LinkContainer>
      </Nav>
    );
  }

  renderHomeMenu() {
    return (
      <ul className="navbar-nav nav navbar-right scrollnav">
        <li><Scrollchor to="#about">About</Scrollchor></li>
        <li><Scrollchor to="#location">Location</Scrollchor></li>
        <li><Scrollchor to="#studios">Studios</Scrollchor></li>
        <li><Scrollchor to="#pricing">Pricing</Scrollchor></li>
      </ul>
    );
  }

  render() {
    const { location } = this.props;

    return (
      <div>
        <Nav pullRight bsStyle="pills">
          <LinkContainer to="/login">
            <NavItem eventKey={2} href="/login">Log In</NavItem>
          </LinkContainer>
        </Nav>
        {location.pathname === '/' ? this.renderHomeMenu() : this.renderRegmenu()}
      </div>
    );
  }
}

PublicNavigation.defaultProps = {
  location: { pathname: {} },
};

PublicNavigation.propTypes = {
  location: PropTypes.object,
};

export default PublicNavigation;
