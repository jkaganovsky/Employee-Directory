import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {

  return (
    <Router>

      <div>
        <Header />
      </div>

      <div>
        <Search />
      </div>

      <div>
        <Table />
      </div>

    </Router>
  );

}

export default App;
