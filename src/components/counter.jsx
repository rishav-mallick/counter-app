import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   // tags: ["tag1", "tag2", "tag3"],
  //   // imageUrl: "http://picsum.photos/400",
  // };
  componentDidUpdate(prevProps, prevState) {
    console.log("Prev Props", prevProps);
    console.log("Prev State", prevState);
  }
  componentWillUnmount() {
    console.log("Apps-Unmount...");
  }
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  render() {
    console.log("Counter-render");
    return (
      <React.Fragment>
        <div>
          {/* <h4>{this.props.id}</h4> */}
          {/* <img src={this.state.imageUrl} alt=""></img> */}
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>

          {/* <div>
          {this.state.tags.length === 0 && "Create a NEW TAG!!"}
          {this.renderTags()}
        </div> */}
        </div>
      </React.Fragment>
    );
  }

  //controlled component
  // handleIncrement = () => {
  //   // console.log("Incremented..", this);
  //   this.setState({ count: this.state.count + 1 });
  // };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
