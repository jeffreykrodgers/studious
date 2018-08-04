import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import PublicNavigation from '../PublicNavigation/PublicNavigation';
import AuthenticatedNavigation from '../AuthenticatedNavigation/AuthenticatedNavigation';

const Navigation = props => (
  <Navbar collapseOnSelect fluid inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><img src="/logo.svg" alt="Studious" /></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {!props.authenticated ? <PublicNavigation {...props} /> : <AuthenticatedNavigation {...props} />}
    </Navbar.Collapse>
  </Navbar>
);

Navigation.defaultProps = {
  name: '',
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default Navigation;
