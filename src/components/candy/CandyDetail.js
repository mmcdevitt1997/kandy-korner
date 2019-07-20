import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class CandyDetail extends Component {
    state = {
      saveDisabled: false
    }

    render() {
      console.log(this.props.updateCandy)

      return (
        <section className="candys">
          <div key={ this.props.candy.id } className="card">
            <div className="card-body">
              <h4 className="card-title">
                  { this.props.candy.name }
              </h4>
              <h6 className="card-title">{ this.props.candy.name}</h6>
              <button onClick={
                      () => {
                          this.setState(
                              { saveDisabled: true },
                              () => this.props.deleteCandy(this.props.candy.id)
                          )
                      }
                  }
                  disabled={ this.state.saveDisabled }
                  className="card-link">Delete</button>
                    <Link className="nav-link" to={`/candys/${this.props.candy.id}/edit`}>Edit</Link>

                  <button onClick={
                      () => {
                          this.setState(
                              () => this.props.updateCandy(this.props.candy.id)


                          )
                      }
                  }
                  disabled={ this.state.saveDisabled }
                  className="card-link" to={`/candys/${this.props.candy.id}/edit`}>Edit</button>
            </div>
          </div>
        </section>
      )
    }
  }
