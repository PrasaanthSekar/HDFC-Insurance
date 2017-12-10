import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configureStore } from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
const store = configureStore()

const muiTheme = getMuiTheme({
    appBar: {
        height: 50,
    },
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: '#026d40',
    }
});
ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}><App /></Provider>
    </MuiThemeProvider>, document.getElementById('root')
);
registerServiceWorker();
