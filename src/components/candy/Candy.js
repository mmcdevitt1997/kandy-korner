import React, { Component } from 'react'
import {CandyType} from "./candy-type/CandyType"

export default class CandyList extends Component{
    render(){
        return (
            <section className="candys">
            {
             this.props.candys.map(candy =>
                <div key={candy.id}>
                <p>{candy.name}</p>
                of candyType
                {
                this.props.candyType
                    .find(candyTypes.id)
                    .name
            }
                </div>
             )
            }
            </section>
        )
    }
}