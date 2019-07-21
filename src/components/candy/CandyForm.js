import React, { Component } from "react";

export default class CandyForm extends Component{
    state = {
        candyName:"",
        amount: "",
        candyTypeId:""

    };
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      }

      constructNewCandy = evt => {
        evt.preventDefault();
        if (this.state.candy === "") {
          window.alert("Please name the candy");
        } else {
          const candy = {
            candyName: this.state.candyName,
            amount: this.state.amount,
            candyTypeId: parseInt(this.state.candyTypeId)
          };

          // Create the animal and redirect user to animal list
          this.props
            .addCandy(candy)
            .then(() => this.props.history.push("/candys"));
        }
      };

      render() {
        return (
          <React.Fragment>
            <form className="candyForm">
              <div className="form-group">
                <label htmlFor="candyName">Candy name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="candyName"
                  placeholder="Candy Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount of Candy</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="amount"
                  placeholder="Candy Amount"
                />
              </div>
              <div className="form-group">
            <label htmlFor="candyType">Select Candy Type</label>
            <select
              defaultValue=""
              name="candyType"
              id="candyTypeId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select Candy Type</option>
              {this.props.candyTypes.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
              <button
                type="submit"
                onClick={this.constructNewCandy}
                className="btn btn-primary"
                >
                Submit
              </button>
            </form>
            </React.Fragment>

        );
      }
    }

