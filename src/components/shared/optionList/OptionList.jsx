import React from 'react';
import { render } from 'react-dom';

export default function OptionList(props)
{
    let data=props.data.map((dt)=> <option value={dt}>{dt}</option>)
    render(
        <select class="form-control" onChange={(e)=> props.handleChangeFunction(e.target.value)}>
            {data}
        </select>
    );
}