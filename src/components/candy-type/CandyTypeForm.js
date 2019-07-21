import React, { Component } from "react"


export default class CandyTypeForm extends Component{
    state = {
        name:""
    };
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      }

      constructNewCandyType = evt => {
        evt.preventDefault();
        if (this.state.candyType === "") {
          window.alert("Please name the candy");
        } else {
          const candyType = {
            name: this.state.name
          };
          this.props
          .addCandyType(candyType)
          .then(() => this.props.history.push("/candyTypes"));
      }

    }
    render() {
        console.log(this.constructNewCandyType)
        return (
          <React.Fragment>
            <form className="candyTypeForm">
              <div className="form-group">
                <label htmlFor="name">Candy Type</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="name"
                  placeholder="Candy Type"
                />
              </div>
              <button
                type="submit"
                onClick={this.constructNewCandyType}
                className="btn btn-primary"
                >
                Submit
              </button>
            </form>
            </React.Fragment>
        )
    }
}