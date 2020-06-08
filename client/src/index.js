import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//STYLED COMPONENTS
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyle from "./utils/globalStyle";
// import TasksContextProvider from "./contexts/TasksContext";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            {/* <TasksContextProvider> */}
            <BrowserRouter>
                <App />
                <GlobalStyle />
            </BrowserRouter>
            {/* </TasksContextProvider> */}
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
