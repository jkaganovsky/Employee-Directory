/* eslint-disable no-undef */
import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import API from "./utils/API";

class App extends Component {
  state  = {
    employees: [],
    search: "",
    original: [],
    ascending: true
  }

  // When the component mounts/loads, a list of available employees is acquired and gets updated in this.state.employees
  componentDidMount() {
    API.getRandomUser()
      .then(response => {
        this.setState({
          employees: response.data.results,
          original: response.data.results
        })
      })
      .catch(err => console.log(err));
  }

  searchFilter = event => {
    event.preventDefault();

    const {name, value} = event.target;
    this.setState({
      [name]: value
    });

    const firstNameFilter = this.state.original.filter(user => {
      return user.name.first.toLowerCase().includes(value)
    });
    this.setState({
      employees: firstNameFilter
    });

  };

  render() {
    return (
      <>
        <div>
          <Header />
        </div>

        <div>
          <Search
          employeeSearch = {this.state.search}
          nameSearch = {this.searchFilter}
          />
        </div>

        <div>
          <Table
          randomUser = {this.state.employees}
          nameSearch = {this.searchFilter}
          />
        </div>
     </>
    )
  }

}

export default App;
