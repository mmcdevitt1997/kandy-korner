import React, { Component } from 'react'
import CandyTypeCard from "./CandyTypeCard"


 export default class CandyType extends Component{
     render(){
        return (
            <div>
                <div className="candyTypeButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                           this.props.history.push("/candyTypes/new")
                        }
                    }>Add Candy Type</button>
                 </div>
            <section className="candyTypes">
            {
            this.props.candyTypes.map(candyType=>
                <CandyTypeCard key={candyType.id} candyType={candyType} {...this.props} />
              )
            }
            </section>
            </div>
       )
    }
}
