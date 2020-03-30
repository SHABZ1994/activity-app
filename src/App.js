import React from "react";
import Table from "./components/table";
import ModalComponent from "./components/modal";
import "./styles/styles.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h2>React Calender App</h2>
        <h4>Check the activities</h4>
      </header>
      <Table />
      <ModalComponent />
    </div>
  );
};

export default App;
