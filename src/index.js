import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const muiTheme = getMuiTheme({
    appBar: {
        height: 50,
    },
    fontFamily: 'Roboto, sans-serif',
    palette: {
      primary1Color: '#009688',
    }
});
ReactDOM.render(<MuiThemeProvider muiTheme={muiTheme}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
