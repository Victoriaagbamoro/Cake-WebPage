import React from 'react';
import './Header.css'
import Slider from '../Slide/Slider';



export default class Header extends React.Component{
    render(){
        return(
            <div className="Header-bg">
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="overall-container">
                    <div className="image-bg">
                        <div className="cake-img">
                            <img src="https://i.ibb.co/wdgN2Tz/cake.jpg" alt="cake"/>
                        </div>
                        <div className="font-awesome">
                            <span className="arrow">
                                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                            </span>
                            <span className="dot">......</span>
                            <span className="arrow">
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </span>
                        </div>
    
                    </div>
    
                    <div className="text-area">
                        <div className="text">
                            <h1>Bam-Bam Lala Special Offer</h1>
                            <p>Get bambam for your loved ones this season!</p>
                            <button>Shop!</button>
                        </div>
                    </div>
    
                    <div className="Form">
                        <Slider/>
                    </div>
                </div>
            </div>
        )
    
    }
}