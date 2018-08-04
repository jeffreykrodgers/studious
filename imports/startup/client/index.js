/* eslint-disable no-underscore-dangle, no-unused-expressions */

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import App from '../../ui/layouts/App/App';
import mainReducer from '../../modules/redux/reducers';
import '../both/api';

Bert.defaults.style = 'growl-bottom-right';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(mainReducer, preloadedState, applyMiddleware(thunk));

injectGlobal`
  :root {
    --primary: #337ab7;
    --success: #5cb85c;
    --info: #5bc0de;
    --warning: #f0ad4e;
    --danger: #d9534f;

    --gray-darker: #222;
    --gray-dark: #333;
    --gray: #555;
    --gray-light: #777;
    --gray-lighter: #eee;

    --facebook: #3b5998;
    --google: #ea4335;
    --github: var(--gray-dark);

    --cb-blue: #4285F4;
    --cb-green: #00D490;
    --cb-yellow: #FFCF50;
    --cb-red: #DA5847;
    
    --orange: #F17300;
    --blue: #002B42;
    --dark: #171717;
    --white: #FFFFFF;
    
    --transparent: rgba(0,0,0,0);
    --dark-trans: rgba(23,23,23,.8);
  }

  html {
    position: relative;
    min-height: 100%;
    background: linear-gradient(to right, var(--blue), var(--dark));
  }
  
  body {
    margin-bottom: 80px;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    background: none;
    color: var(--white);
    font-family: "Cabin", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .navbar-inverse .navbar-nav > a, .navbar-inverse .navbar-nav > li > a {
    color: var(--white);
    font-size: 16px;
    padding: 16px 32px;
    
    :hover {
      color: var(--orange);
      text-decoration: none;

      &:after {
        content: '';
        height: 2px;
        width: 100%;
        background: var(--orange);
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
    font-family: "Questrial", sans-serif;
    background: linear-gradient(to bottom, var(--dark-trans), var(--transparent));
   
    
    .nav-pills {
      a {
        border: 2px solid var(--white);
        border-radius: 4px;
        margin: 6px 4px 6px 4px;
      }
      
      & > li.orange > a {
        border-color: var(--orange);
      }
      
      & > li > a {
      padding: 8px 20px;
      color: var(--white);

     
        &:hover {
         border-color: var(--orange);
         
         &:after {
            display: none;
         }
        }
      }
    }
  }

  form label {
    display: block;
  }

  form .control-label {
    display: block;
    margin-bottom: 7px;
  }

  form label.error {
    display: block;
    margin-top: 8px;
    font-size: 13px;
    font-weight: normal;
    color: var(--danger);
  }

  .page-header {
    margin-top: 0;
  }

  .table tr td {
    vertical-align: middle !important;
  }

  @media screen and (min-width: 768px) {
    .page-header {
      margin-top: 20px;
    }
  }
`;

const theme = {};

Meteor.startup(() => hydrate(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('react-root'),
));
