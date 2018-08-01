import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { year } from '../../../modules/dates';

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: var(--dark);
  color: var(--white);
  padding: 20px 0;

  p {
    color: var(--white);
    font-size: 14px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    float: left;

    &:first-child {
      margin-right: 15px;
    }

    a {
      color: var(--white);
    }

    a:hover,
    a:active,
    a:focus {
      text-decoration: none;
      color: var(--white);
    }
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
      <p className="pull-left">&copy; {copyrightYear()} {companyName}</p>
      <ul className="pull-right">
        <li><Link to="/terms">Terms<span className="hidden-xs"> of Service</span></Link></li>
        <li><Link to="/privacy">Privacy<span className="hidden-xs"> Policy</span></Link></li>
      </ul>
    </Grid>
  </StyledFooter>
);

Footer.propTypes = {};

export default Footer;
