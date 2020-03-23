import React from 'react'
import './headerCours.css';
import Profile from './../../../asset/Profile.png';

export default function HeaderCours(props)
{
    console.log(props);
    return (
        <div className="col-xs-12 col-sm-8 col-md-8 headerCours mr-auto">
            <div className="row align-items-center align-self-center">
                <div className="col-xs-3 col-sm-4 col-md-4 profile">
                    <img src={Profile} alt="Profile" className="img-fluid"/>
                </div>
                <div className="col-xs-9 col-sm-7 col-md-6 align-items-center  align-self-center header-cours ">
                    <div className="row">Ens: {props.enseignant}</div>
                    <div className="row">Cours: {props.cours}</div> 
                    <div className="row"><span className={`rounded-circle ${props.live?"green-live":"black-live"}`}></span>Live</div> 
                </div>
            </div>
            
        </div>
        
    );
}