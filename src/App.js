import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    maxId: 4,
  };

  constructor() {
    super();
    console.log("App-constructor");
  }

  componentDidMount() {
    //Ajax call to get data
    //this.setstate({movies})
    console.log("App-mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value !== 0) {
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((x) => x.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleAddition = () => {
    console.log("In addition");
    const counters = [...this.state.counters];
    const addCounter = { id: this.state.maxId + 1, value: 0 };
    let maxId = this.state.maxId + 1;
    this.setState({ maxId });
    counters[counters.length] = { addCounter };
    this.setState({ counters });
  };

  render() {
    console.log("App-Rendered");
    const { counters } = this.state;
    return (
      <>
        <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            counters={counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onAdd={this.handleAddition}
          />
        </main>
      </>
    );
  }
}

export default App;
