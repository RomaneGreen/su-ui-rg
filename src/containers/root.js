import React from "react";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import configureStore from "../configureStore";
import App from "./App";


const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    breakpoints:{
      values: {
        xs: 0,
        sm: 768,
        md: 1025,
        lg: 1025
      }
    },
    palette: {
      primary: {
        main: '#296bcf',
        contrastText: '#fff',
      },
      secondary: {
        main: '#50a942',
        contrastText: '#fff',
      },
    },
  });


const store = configureStore();
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
