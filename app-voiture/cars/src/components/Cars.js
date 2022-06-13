import React from "react";
import Wrapper from "./Wrapper";

const Car = ({children, color}) => {

    let colorInfo = "";
    if (color) {
        colorInfo = color;
    } else {
        colorInfo = "Non défini";
    }

    return children && (

        <Wrapper>
            <p>Marque : {children}</p>
            <p>Couleur: {colorInfo}</p>
        </Wrapper>
                
    )
        
            
}

export default Car;