import React, { Component } from "react";

export default class CandyForm extends Component{
    state = {
        name:""
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
            name: this.state.name
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
                  id="name"
                  placeholder="Candy Name"
                />
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



