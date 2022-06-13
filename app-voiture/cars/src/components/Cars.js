import React from "react";


const Car = ({children, color}) => {

    let colorInfo = "";
    if (color) {
        colorInfo = color;
    } else {
        colorInfo = "Non défini";
    }

    return children && (

        <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' } }>
                <p>Marque : {children}</p>
                {/* { color ? <p>Couleur: {color}</p> : <p>Couleur: Non défini</p> } */}
                {/* <p>Couleur: { color ? color : "Non défini"}</p> */}
                <p>Couleur: {colorInfo}</p>
            </div>
    )
        
            
}

export default Car;