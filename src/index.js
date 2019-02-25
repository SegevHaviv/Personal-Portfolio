import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider} from '@material-ui/styles';

import * as serviceWorker from "./serviceWorker";
import { createMuiTheme } from "@material-ui/core";


const theme = createMuiTheme({
    overrides: {
      MuiTooltip: {
        tooltip: {
          backgroundColor: "black",
          fontSize:"0.7em"
        }
      }
      
    }, 
     typography: {
      useNextVariants: true,
    },
  });

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
