import React, { Component } from 'react'


 export default class CandyType extends Component{
     render(){
        console.log(this.props.candyTypes)
        return (
            <section className="candyTypes">
            {
            this.props.candyTypes.map(candyType=>
            <div key={candyType.id}>
             <p>{candyType.name}</p>
             <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>Add Candy Type </button>
             <button onClick={() => this.props.deleteCandyType(candyType.id)}
                 className="card-link">Delete</button>
               </div>
              )
            }
            </section>
       )
    }
}
