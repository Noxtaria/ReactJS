import React, { Component } from "react";
import Car from "./Cars";
import Wrapper from "./Wrapper";

class Mycars extends Component {

    state = {
        cars: ["Ford", "Mercedes", "Audi"]
    }
    
    render() {

        const {title, color} = this.props;
        
        return ( 
            
            <div>
                <Wrapper>
                <h1 style={{color}}>{title}</h1>
                </Wrapper>

                <Car color="Red"> {this.state.cars[0]} </Car>
                <Car>{this.state.cars[1]}</Car>
                <Car color="Blue">{this.state.cars[2]}</Car>

            </div>
        )
        
    }
}

export default Mycars;