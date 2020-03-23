import React, {Component} from 'react';
import OptionListStat from '../../shared/optionListStat/OptionListStat';

class StatistiquePageAdmin extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            head:["Eff total","Inscrits","Absents","Admis"],
            faculte:{
                faculteCourante:'',
                listFaculte:[],
                stat:[]             
            },
            filiere:{
                filiereCourante:'',
                listFiliere:[],
                stats:[]
            }
        };
    }
    changeFaculte(faculte)
    {
        if(faculte!=='') this.getStatFaculte(faculte);
    }
    getStatFaculte(faculte)
    {
        let data=[];
        this.setState({[this.state.faculte.faculteCourante]: faculte, [this.state.faculte.stats]: data});
    }
    changeFiliere(filiere)
    {
        if(filiere!=='') this.getStatFiliere(filiere);
    }    
    getStatFiliere(filiere)
    {
        let data=[];
        this.setState({[this.state.filiere.filiereCourante]: filiere,[this.state.filiere.stat]:data});
    }
    render()
    {
        return (
            <div>
                <OptionListStat listData={this.state.faculte.listFaculte} selectedData={this.state.faculte.faculteCourante} statData={this.state.faculte.stat} headData={this.state.head} handleChangeFunction={(faculte)=> this.changeFaculte(faculte)}/>
                <OptionListStat listData={this.state.filiere.listFiliere} selectedData={this.state.filiere.filiereCourante} statData={this.state.filiere.stat} headData={this.state.head} handleChangeFunction={(filiere)=> this.changeFiliere(filiere)}/>

            </div>
        );
    }
}
export default StatistiquePageAdmin