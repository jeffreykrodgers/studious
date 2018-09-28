import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import PublicNavigation from '../PublicNavigation/PublicNavigation';
import AuthenticatedNavigation from '../AuthenticatedNavigation/AuthenticatedNavigation';
import styled from 'styled-components';

const StyledNav = styled.div`
  .navbar-inverse .navbar-nav > a, .navbar-inverse .navbar-nav > li > a {
    color: var(--white);
    font-size: 16px;
    padding: 16px 32px;
    font-weight: 500;
    transition: all .1s;
    
    :hover {
      color: var(--accent);
      text-decoration: none;

      &:after {
        content: '';
        height: 2px;
        width: 100%;
        background: var(--accent);
        display: block;
        margin: 8px auto -10px;
      }      
    }
    
    :focus {
      outline: none;
    }
  }
  
  .navbar-right {
    margin-left: 16px;
  }
  
  .navbar-brand {
    padding: 4px 8px;
    
    img {
      width: 180px;
    }
  }
  
  &.scrollnav {
    height: 54px;
    display: flex;
    justify-content: center;
  }
  
  .navbar {
    border: none;
    padding: 8px;
    margin-bottom: 4px;
    color: var(--white);
    font-family: "Omnes", "Cabin", sans-serif;
    font-weight: 300;
    background: linear-gradient(to bottom, var(--dark-trans), var(--transparent));
   
    
    .nav-pills {
      a {
        border: 2px solid var(--white);
        border-radius: 25px;
        margin: 6px 4px 6px 4px;
      }
      
      & > li.accent > a {
        border-color: var(--accent);
      }
      
      & > li > a {
      padding: 8px 20px;
      color: var(--white);

     
        &:hover {
         border-color: var(--accent);
         
         &:after {
            display: none;
         }
        }
      }
    }
  }
`;

const Navigation = props => (
  <StyledNav>
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
  </StyledNav>
);

Navigation.defaultProps = {
  name: '',
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default Navigation;
