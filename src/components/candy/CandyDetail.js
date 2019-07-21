import React, { Component } from "react"
import { Link } from "react-router-dom"
import CandyTypeCard from "../candy-type/CandyTypeCard"

export default class CandyDetail extends Component {
    state = {
      saveDisabled: false
    }

    render() {
      // console.log(this.props.candyTypes)

      return (
        <section className="candys">
          <div key={ this.props.candy.id } className="card">
            <div className="card-body">
              <h4 className="card-title">
                  { this.props.candy.candyName }
              </h4>

              <p className="card-amount">Amount of candy: { this.props.candy.amount}</p>
              <div className="card-type">

                {
                  this.props.candyTypes
                    .filter(candyTest  => candyTest.id === this.props.candy.candyTypeId)
                    .map(candyTest => <CandyTypeCard key={candyTest.id} candyType={candyTest} {...this.props} />)
                }

              </div>


                    <Link className="nav-link" to={`/candys/${this.props.candy.id}/edit`}>Edit</Link>
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
            </div>
          </div>
        </section>
      )
    }
  }
