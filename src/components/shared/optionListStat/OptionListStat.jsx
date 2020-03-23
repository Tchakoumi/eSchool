import React from 'react';
import Statistique from './../statistique/Statistique';
import OptionList from './../optionList/OptionList';

export default function OptionListStat(props)
{
    return (
        <div>
            <div className="row">
                <OptionList data={props.listData} selected={props.selectedData} handleChangeFunction={props.handleChangeFunction}/>
            </div>
            <div className="row">
                <Statistique tdata={props.statData} thead={props.headData}/>
            </div>
        </div>
    );
}