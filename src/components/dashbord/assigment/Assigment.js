import React, { Component } from 'react';

//Importation des styles ici
import "./style_assigment.css" 

class Assigment extends Component
{
    render()
    {
        return(
            <div id = "container" className ="container">
                <div id = "model-1" className = "model">
                    <div id = "model-1-title" className = "model-title">
                        <span> Titre de la div</span>
                        <span> image ici</span>
                    </div>
                    <div id = "model-1-content" className = "model-content">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Assigment