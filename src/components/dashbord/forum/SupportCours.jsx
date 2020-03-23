import React from 'react';
import './SupportCours.css';


export default function SupportCours(props)
{
    return (
        <div className="col-xs-12 col-sm-8 col-md-4  supportCours">
            <div className="row align-self-center"><span>Support de cours</span></div>
            <div className="row">
                <div className="col-sm-4 col-md-4 align-self-start"><i className="fa fa-file-pdf-o fa-5x"></i></div>
                <div className="col-sm-7 col-md-7 align-self-center">{props.fileName}</div>
            </div>
            <div className="row ">
                <div className="col-sm-12 col-md-12"><a className="btn btn-success" href={props.fileLink}>Télécharger<i className="fa fa-download"></i></a></div>
            </div>
        </div>
    )

}