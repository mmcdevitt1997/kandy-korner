import React, { Component } from 'react'


export default class CandyType extends Component{
    render(){
        return (
            <section className="candyTypes">
            {
             this.props.candyTypes.map(candyTypes=>
                <div key={candyTypes.id}>
                <p>{candyTypes.name}</p>
                </div>
             )
            }
            </section>
        )
    }
}