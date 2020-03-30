import React from "react";
import TableComponent from "./components/table";
import ModalComponent from "./components/modal";
import "./styles/styles.css";
/**Material UI */
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="md" className="main-container">
        <Typography
          component="div"
          style={{ backgroundColor: "#96b8f773", height: "100vh" }}
        >
          <header className="header">
            <h2>React Calender App</h2>
            <h4>Check the activities</h4>
          </header>
          <TableComponent />
        </Typography>
      </Container>
      <ModalComponent />
    </div>
  );
};

export default App;
