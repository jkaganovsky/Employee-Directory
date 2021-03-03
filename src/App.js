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
    sortAscend: true
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

  handleSearch = e => {
    e.preventDefault();

    const {name, value} = e.target;
    this.setState({
      [name]: value
    });

    const searchFilter = this.state.original.filter(user => {
      return user.name.first
        .toLowerCase()
        .includes(value.toLowerCase()) ||

        user.name.last
          .toLowerCase()
          .includes(value.toLowerCase()) ||

        user.email
          .toLowerCase()
          .includes(value.toLowerCase()) ||

        user.phone
          .includes(value)
    });
    this.setState({
      employees: searchFilter
    });
  };

  handleSort = () => {
    if (this.state.sortAscend) {
      const sortedEmployees = this.state.employees.sort((a, b) => {
        return a.name.first
          .localeCompare(b.name.first) ||

          a.email
            .localeCompare(b.email)
      })
      this.setState({ employees: sortedEmployees, sortAscend: false})
    } else {
      const sortedEmployees = this.state.employees.sort((a, b) => {
        return b.name.first
          .localeCompare(a.name.first) ||

          b.email
            .localeCompare(a.email)
      })
      this.setState({ employees: sortedEmployees, sortAscend: true})
    }
  }

  render() {
    return (
      <>
        <div>
          <Header />
        </div>

        <div>
          <Search
          employeeSearch = {this.state.search}
          search = {this.handleSearch}
          />
        </div>

        <div>
          <Table
          randomUser = {this.state.employees}
          sort = {this.handleSort}
          />
        </div>
     </>
    )
  }

}

export default App;
