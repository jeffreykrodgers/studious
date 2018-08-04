/* eslint-disable jsx-a11y/no-href */

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import Navigation from '../../components/Navigation/Navigation';
import Authenticated from '../../components/Authenticated/Authenticated';
import Authorized from '../../components/Authorized/Authorized';
import Public from '../../components/Public/Public';
import Index from '../../pages/Index/Index';
import Documents from '../../pages/Documents/Documents';
import NewDocument from '../../pages/Documents/NewDocument/NewDocument';
import ViewDocument from '../../pages/Documents/ViewDocument/ViewDocument';
import EditDocument from '../../pages/Documents/EditDocument/EditDocument';
import Signup from '../../pages/Signup/Signup';
import Login from '../../pages/Login/Login';
import Logout from '../../pages/Logout/Logout';
import VerifyEmail from '../../pages/VerifyEmail/VerifyEmail';
import RecoverPassword from '../../pages/RecoverPassword/RecoverPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Profile from '../../pages/Profile/Profile';
import AdminUsers from '../../pages/AdminUsers/AdminUsers';
import AdminUser from '../../pages/AdminUser/AdminUser';
import AdminUserSettings from '../../pages/AdminUserSettings/AdminUserSettings';
import NotFound from '../../pages/NotFound/NotFound';
import Footer from '../../components/Footer/Footer';
import Terms from '../../pages/Terms/Terms';
import Privacy from '../../pages/Privacy/Privacy';
import ExamplePage from '../../pages/ExamplePage/ExamplePage';
import VerifyEmailAlert from '../../components/VerifyEmailAlert/VerifyEmailAlert';
import GDPRConsentModal from '../../components/GDPRConsentModal/GDPRConsentModal';
import { onLogin, onLogout } from '../../../modules/redux/actions';
import withTrackerSSR from '../../../modules/with-tracker-ssr';
import getUserName from '../../../modules/get-user-name';

const StyledApp = styled.div`
  visibility: ${props => (props.ready && !props.loading ? 'visible' : 'hidden')};

  > .container-fluid, > .container {
    margin-bottom: 80px;
    //padding: 0 0 20px;
    
    .no-padding {
      padding: 0 0 20px;
    }
  }

  .verify-email {
    margin-bottom: 0;
    padding: 0;
    border-top: none;
    border-bottom: 1px solid #e7e7e7;
    background: #fff;
    color: var(--gray-dark);
    border-radius: 0;

    p {
      padding: 19px;
    }

    .btn {
      padding: 0;
    }
  }
  
  .group-header {
    &:after {
      content: '';
      height: 4px;
      width: 48px;
      background: var(--orange);
      display: block;
      margin: 20px 0 0;
     }    
  };
  
  h1 {
    font-size: 48px;
    
    & strong {
      color: var(--orange);
    }
  }
  
  h2 {
    font-size: 32px;
    margin-top: 4px;
  }
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: var(--orange);
    margin-bottom: 0;
  }
  
  h4 {
    font-size: 20px;
    font-weight: 300;
  }
  
  h5 {
    font-size: 16px;
    font-weight: 200;
  }
  
  hr {
    height: 4px;
    width: 48px;
    background: var(--orange);
    display: block;
    margin: 20px 0;
    border: 0;
  }
  
  .btn {
    font-size: 18px;
    padding: 8px 16px;
  }
  
  .btn-default {
    background: none;
    border: 2px solid var(--white);
    color: var(--white);
  }
  
  .btn-primary {
    background: none;
    border: 2px solid var(--orange);
    color: var(--white);
    transition: all .1s;
    
    &:hover {
      background: var(--orange);
    }
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ready: false, afterLoginPath: null };
    autoBind(this);
  }

  componentDidMount() {
    const { handleOnLogin, handleOnLogout } = this.props;
    Accounts.onLogin(() => handleOnLogin());
    Accounts.onLogout(() => handleOnLogout());
    this.setPageReady();
  }

  setPageReady() {
    this.setState({ ready: true });
  }

  setAfterLoginPath(afterLoginPath) {
    this.setState({ afterLoginPath });
  }

  render() {
    const { props, state, setAfterLoginPath } = this;
    return (
      <StyledApp ready={this.state.ready} loading={props.loading}>
        {props.authenticated ?
          <VerifyEmailAlert
            userId={props.userId}
            emailVerified={props.emailVerified}
            emailAddress={props.emailAddress}
          />
          : ''}
        {props.authenticated ? <GDPRConsentModal userId={props.userId} /> : ''}
        <Navigation {...props} {...state} />
        <Grid fluid>
          <Switch>
            <Route exact name="index" path="/" component={Index} />
            <Authenticated exact path="/documents" component={Documents} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
            <Authenticated exact path="/documents/new" component={NewDocument} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
            <Route exact path="/documents/:_id" component={ViewDocument} />
            <Authenticated exact path="/documents/:_id/edit" component={EditDocument} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
            <Authenticated exact path="/profile" component={Profile} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
            <Public path="/signup" component={Signup} {...props} {...state} />
            <Public path="/login" component={Login} {...props} {...state} />
            <Route path="/logout" render={routeProps => <Logout {...routeProps} setAfterLoginPath={setAfterLoginPath} />} {...props} {...state} />
            <Route name="verify-email" path="/verify-email/:token" component={VerifyEmail} />
            <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
            <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
            <Route name="terms" path="/terms" component={Terms} />
            <Route name="privacy" path="/privacy" component={Privacy} />
            <Route name="examplePage" path="/example-page" component={ExamplePage} />
            <Authorized exact allowedRoles={['admin']} path="/admin/users" pathAfterFailure="/" component={AdminUsers} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
            <Authorized exact allowedRoles={['admin']} path="/admin/users/settings" pathAfterFailure="/" component={AdminUserSettings} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
            <Authorized exact allowedRoles={['admin']} path="/admin/users/:_id" pathAfterFailure="/" component={AdminUser} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
            <Route component={NotFound} />
          </Switch>
        </Grid>
        <Footer />
      </StyledApp>
    );
  }
}

App.defaultProps = {
  userId: '',
  emailAddress: '',
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  emailAddress: PropTypes.string,
  emailVerified: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  handleOnLogin: PropTypes.func.isRequired,
  handleOnLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  handleOnLogin: data => dispatch(onLogin(data)),
  handleOnLogout: data => dispatch(onLogout(data)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTrackerSSR(() => {
    const app = Meteor.subscribe('app');
    const loggingIn = Meteor.loggingIn();
    const user = Meteor.user();
    const userId = Meteor.userId();
    const loading = !app.ready() && !Roles.subscription.ready();
    const name = user && user.profile && user.profile.name && getUserName(user.profile.name);
    const emailAddress = user && user.emails && user.emails[0].address;

    return {
      loading,
      loggingIn,
      authenticated: !loggingIn && !!userId,
      name: name || emailAddress,
      roles: Roles.getRolesForUser(userId),
      userId,
      emailAddress,
      emailVerified: user && user.emails ? user && user.emails && user.emails[0].verified : true,
    };
  }),
)(App);
