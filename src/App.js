import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ people: users }))
      .catch((err) => console.log(err.message));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.currentTarget.value });
  };
  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter((person) =>
      person.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>People Rolodex </h1>
        <SearchBox
          placeholder="search people"
          handleChange={this.handleChange}
        />
        <CardList people={filteredPeople}></CardList>
      </div>
    );
  }
}
export default App;
