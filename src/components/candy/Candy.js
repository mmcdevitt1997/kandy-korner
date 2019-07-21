import React, { Component } from 'react'
import CandyCard from "./CandyCard"
import "./Candy.css"


export default class CandyList extends Component {
    render() {
        return (
            <div>
                <div className="candyButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/candys/new")
                        }
                        }>Add Candy</button>
                </div>

                <section className="candys">

                        {
                            this.props.candys.map(candy =>
                                <CandyCard key={candy.id} candy={candy} {...this.props} />
                            )
                        }


                </section>
            </div>
        )
    }
}


