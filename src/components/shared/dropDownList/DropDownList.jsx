import React from 'react'
import { Component } from 'react';

import './DropDownList.css'
import DropDownListItem from './dropDownListItem/DropDownListItem';
import SubDropDownListItem from './subDropDownListItem/SubDropDownListItem';


class DropDownList extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            open:'',
            dataList : [
                {
                    itemName:"Mathematiques",
                    subItemList:[
                        {link:"Hi", subItemName:"Algebre"}
                    ]
                }
            ]
        }
    }
    

    changeToMinus=(id)=>{
        const currentClass = document.getElementById(id).classList
        currentClass.remove('fa-plus-circle')
        currentClass.add('fa-minus-circle')
    }

    changeToPlus=(id)=>{
        const currentClass = document.getElementById(id).classList
        currentClass.remove('fa-minus-circle')
        currentClass.add('fa-plus-circle')
    }

    handlePlusClick= (e, prop) =>{
        e.preventDefault();
        console.log(document.getElementById(`${prop}DropIcon`).classList.contains('fa'))
        const currentClass = document.getElementById(`${prop}DropIcon`).classList
        if(currentClass.contains("fa-plus-circle")){
            this.changeToMinus(prop+'DropIcon')
            if(this.state.open!==''){this.changeToPlus(this.state.open)}
            this.setState({open:prop})
        }
        else{
            this.changeToPlus(prop+'DropIcon')
            this.setState({open:''})
        }
    }
    
    styledList =()=> this.state.dataList.map(data=>(
        <div className="module" key={data.itemName}>
            <span className = 'moduleTitle'>
                <DropDownListItem itemName={data.itemName} handleClick={(e)=>this.handlePlusClick(e, data.itemName)}/>
            </span>
            {this.state.open===data.itemName?(
                <div className='matieres'>
                    {
                        data.subItemList.map(subject=><SubDropDownListItem key={subject.subItemName}
                            link={subject.link} 
                            subItemName={subject.subItemName}
                        />)
                    }
                </div>):(null)
            }
        </div>
    ))


    render(){
        return (
            <div className="module">
                {this.styledList()}
            </div>
        )
    }
}

export default DropDownList