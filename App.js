import React, { Component } from "react";

const database = [
  {
    name: "petrol",
    unit: "litres",
    zl: "4.21",
    dollars: "2.19",
    euro: "3.45",
  },
  {
    name: "gasoline",
    unit: "units",
    zl: "2.21",
    dollars: "1.19",
    euro: "1.45",
  },
  {
    name: "oil",
    unit: "litres",
    zl: "3.21",
    dollars: "2.23",
    euro: "2.11",
  },
];
class App extends Component {
  state = {
    chosenType: "petrol",
    chosenValue: "",
  };

  changeType = (e) => {
    this.setState({
      chosenType: e.target.value,
      chosenValue: "",
    });
  };
  changeValue = (e) => {
    this.setState({
      chosenValue: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <label htmlFor="selection">
          Choose product:
          <select
            name="selection"
            id="selection"
            value={this.state.chosenType}
            onChange={this.changeType}
          >
            {database.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label htmlFor="qtySelection">
          <input
            value={this.state.chosenValue}
            onChange={this.changeValue}
            type="number"
          />
          {database.map((item) => {
            if (item.name === this.state.chosenType) {
              return item.unit;
            }
          })}
        </label>
        {database.map((item) => {
          if (item.name === this.state.chosenType) {
            return (
              <>
                <div>
                  Value in Zlotych{" "}
                  {this.state.chosenValue
                    ? (item.zl * this.state.chosenValue).toFixed(2)
                    : ""}
                </div>
                <div>
                  Value in Dollars{" "}
                  {this.state.chosenValue
                    ? (item.dollars * this.state.chosenValue).toFixed(2)
                    : ""}
                </div>
                <div>
                  Value in Euros{" "}
                  {this.state.chosenValue
                    ? (item.euro * this.state.chosenValue).toFixed(2)
                    : ""}
                </div>
              </>
            );
          }
        })}
      </div>
    );
  }
}
export default App;
