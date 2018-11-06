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
    
    --accent: #E63946;
    --blue: #1C1F28;
    --mid: #23252E;
    --dark: #04080F;
    --white: #FFFFFF;
    
    --blue-trans: rgba(0,43,66,.6);
    --dark-trans: rgba(23,23,23,.8);
    --shadow-trans: rgba(23,23,23,.48);
    --accent-trans: rgba(230,57,70,.6);

    --transparent: rgba(0,0,0,0);
    
    --level1: 0 3px 6px;
    --level2: 0 3px 12px;
    --level3: 0 3px 24px;
    
    --level1-shadow: var(--level1) var(--shadow-trans);
    --level2-shadow: var(--level2) var(--shadow-trans);
    --level3-shadow: var(--level3) var(--shadow-trans);
    
    --level1-shadow-dark: var(--level1) var(--dark-trans);
    --level2-shadow-dark: var(--level2) var(--dark-trans);
    --level3-shadow-dark: var(--level3) var(--dark-trans);
    
    --color-shadow: var(--level2) var(--accent-trans);
    --color-shadow-hover: var(--level3) var(--accent-trans);
    --standard-shadow: var(--level2) var(--shadow-trans);
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .form-control {
    background: none;
    border: 0;
    border-radius: 0;
    -webkit-appearance: none;
    border-bottom: 1px solid var(--white);
    color: var(--white);
    padding: 0;
    
    &:active, &:focus {
      box-shadow: none;
      border-bottom: 1px solid var(--accent);
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
  
  .btn {
    font-size: 18px;
    padding: 8px 22px;
    border-radius: 25px;
    font-weight: 300;
    font-family: "Omnes", "Cabin", sans-serif;
  }
  
  .btn-default {
    background: none;
    border: 2px solid var(--white);
    color: var(--white);
  }
  
  .btn-primary {
    background: var(--accent);
    border: 2px solid var(--accent);
    color: var(--white);
    font-weight: 400;
    transition: all .1s;
    box-shadow: var(--color-shadow);
    
    &:hover {
      background: var(--accent);
      border: 2px solid var(--accent);
      box-shadow: var(--color-shadow-hover);
    }
  }
  
  .input-group-addon:first-child {
    background: none;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #ffffff;
    padding: 0;
    padding-right: 8px;
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
