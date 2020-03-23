import React from 'react';

import StatLine from './../statLine/StatLine';

export default function Statistique(props)
{
    let tdata = props.tdata.map((data)=><StatLine type="td" tdata={data} key={new Date().getTime()} />);
    return (
        <div className="row">
            <StatLine type="th" tdata={props.thead} />
            {tdata}
        </div>
    );    
}