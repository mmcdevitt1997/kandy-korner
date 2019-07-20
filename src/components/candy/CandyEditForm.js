import React, { Component } from "react"
import candyHandler from "../../api-handlers/candyHandler"

export default class CandyEditForm extends Component{
    state = {
        name:""
    };
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      }
      updateCandy = evt => {
        evt.preventDefault();
        if (this.state.candy === "") {
          window.alert("Please name the candy");
        } else {
          const candy = {
            name: this.state.name,
            id: this.props.match.params.candyId,
          }

          // Create the animal and redirect user to animal list
          this.props
            .updateCandy(candy)
            .then(() => this.props.history.push("/candys"));
        }
      };
      componentDidMount() {
        candyHandler.get(this.props.match.params.candyId)
        .then(candy => {
          this.setState({
            name: candy.name,

          });
        });
      }


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
                  value = {this.state.name}
                />
              </div>
              <button
                type="submit"
                onClick={this.updateCandy}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </React.Fragment>
        );
      }
    }





