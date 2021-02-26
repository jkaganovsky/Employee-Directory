/* eslint-disable no-undef */
import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import API from "./utils/API";

class App extends Component {
  state  = {
    employees: [],
    search: ""
  }

  // When the component mounts/loads, a list of available employees is acquired and gets updated in this.state.employees
  componentDidMount() {
    API.getRandomUser()
      .then(response => this.setState({ employees: response.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <>
        <div>
          <Header />
        </div>

        <div>
          <Search  employeeSearch = {this.state.search} nameSearch = {this.handleInputChange}   />
        </div>

        <div>
          <Table randomUser = {this.state.employees} />
        </div>
     </>
    )
  }

}

export default App;
