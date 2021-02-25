import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      titel: this.state.item,
    };
    const updatedItem = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItem,
        id: uuidv4(),
        item: "",
        editItem: false,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  clearList = () => {
    console.log("clear list");
  };
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  };
  render() {
    // console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-center text-capitalize">todo item</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
