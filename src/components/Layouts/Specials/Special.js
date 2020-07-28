import React from 'react';
import './Special.css'
import Carousels from '../SliderView/Carousels';


function Special(){
    return(
        <div className="special-bg">
            <div className="special">
                <h2>Specials</h2>
                <p></p>
            </div>
            <div>
                <Carousels/>

            </div>

        </div>
    )
}

export default Special