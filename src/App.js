// import './App.css';
import Cargos from "./components/web/Cargos";
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@material-ui/core";
import React from "react";
import DesktopRoutes from "./routes/DesktopRoutes";

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

      return (
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Router>
                <Switch>
                    <DesktopRoutes exact path="/" component={Cargos} />
                    <DesktopRoutes exact path="/:id" component={Cargos} />
                </Switch>
              </Router>
          </ThemeProvider>
      );
}

export default App;
