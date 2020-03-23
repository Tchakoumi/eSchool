import React, { Component } from 'react';
import { connect } from "react-redux";


import { createEtudiant } from '../../../store/actions/etudiantAction'
import { createConnectedUser } from '../../../store/actions/connectedUserAction';
import { createClasse } from '../../../store/actions/classeAction'
import "./style_signup.css"

class Signup extends Component
{
    
    state= {
        //student
        student_first_name: '',
        student_last_name: '',
        student_email: '',
        student_phone: '',
        student_password: '',

        
        //classe
        student_major: '',
        student_level: '',
        
        student_faculty: '',
        student_confirm_password: '',
        student_agree_condition : ''
    };

    /*The varaibale udm can be construct from data base as tree an exemple is giving*/
    udm= {
        'faculte':['iea', 'isss', 'isst'],
        'iea':['PC'],
        'isss':['MED', 'PHA', 'DEN', 'BIO', 'SMS', 'KIN', 'IMG'],
        'isst':['AU', 'ERGC', 'GBM', 'GC', 'GEER', 'GIS', 'GM', 'IMB', 'IRT', 'MIAF', 'MIFA'],
        'PC':3, 'MED':7, 'PHA':7, 'DEN':7, 'BIO':5, 'SMS':3, 'KIN':3, 'IMG':3, 'AU': 3, 'ERGC': 3,
        'GBM': 2,'GC':3, 'GM': 3, 'GEER':2, 'GIS':2, 'IMB': 3, 'IRT': 3, 'MIAF': 3, 'MIFA': 2
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        let verifyClasse = this.props.classes.find(classe => {
          return (
            classe.nomFiliere === this.state.student_major &&
            classe.niveau === this.state.student_level
          );
        });
        let studId = Number(this.props.etudiants.length)+1
        let dispatchObject ={}
        if(verifyClasse !== undefined){
            dispatchObject = {
                deleted: false,
                idEtudiant: studId,
                idClasse: verifyClasse.idClasse,
                nomEtudiant: this.state.student_first_name,
                prenomEtudiant: this.state.student_last_name,
                emailEtudiant: this.state.student_email,
                pwd: this.state.student_password
            };
        }else{
            let classID = Number(this.props.classes.length)+1
            let classeDispatchObject = {
                deleted: false,
                idClasse: classID,
                niveau: this.state.student_level,
                nomFiliere: this.state.student_major,
                modules: []
            };
            this.props.createClasse(classeDispatchObject)
            dispatchObject = {
                deleted: false,
                idEtudiant: studId,
                idClasse: classID,
                nomEtudiant: this.state.student_first_name,
                prenomEtudiant: this.state.student_last_name,
                emailEtudiant: this.state.student_email,
                pwd: this.state.student_password
            };
        }
        //Signup step
        this.props.createEtudiant(dispatchObject);
        //login step
        this.props.createConnectedUser(dispatchObject.idEtudiant)
        // this.props.history.push(`/${this.state.user_name}`)
	}

    handleChange=(e)=>{

        this.verifFields(e);
        if(e.target.value.length=== 0)
        {
            if(e.target.classList.contains('is-valid')) e.target.classList.remove('is-valid');
            if(e.target.classList.contains('is-invalid')) e.target.classList.remove('is-invalid');
        }
		this.setState({
			[e.target.name]:e.target.value
        });
    };
    

    verifFields= (e)=>{
        /* This function is Used to verified all fields */
        
        /* The correspondance of two password is veried here */
        if(e.target.name=== "student_confirm_password")
        {
            if(e.target.value !== this.state.student_password)
            {
                if(e.target.classList.contains("is-valid")) e.target.classList.remove('is-valid');
                e.target.classList.add('is-invalid');
            }
            else if(e.target.value.length && e.target.value.split(' ').length > 0)
            {
                if(e.target.classList.contains("is-invalid")) e.target.classList.remove('is-invalid');
                e.target.classList.add('is-valid');
            }
        }   
    };

    /*componentDidMount*/
    render()
    {
        return (
            <div id="signup-form">
                <div id= "signup-form-title">
                    <span> Inscription (var)</span>
                </div>
                <form onSubmit={this.handleSubmit} id= "signup-form-section">  
                    <div id= "signup-form-section-fields">
                        <input type= 'text' name= 'student_first_name' placeholder= "Entrez votre nom (var)"  onChange= {this.handleChange} className="form-control" required />
                        <input type= 'text' name= 'student_last_name' placeholder= "Entrez votre prenom (var)"  onChange= {this.handleChange} className="form-control" required />
                        <input type= 'text' name= 'student_email' placeholder= "Entrez votre email (var)"  onChange= {this.handleChange} className="form-control" required />
                        <input type= 'tel'  name= 'student_phone' placeholder= "Entrer votre numero de telephone (var)" onChange= {this.handleChange} className="form-control" required/>
                        <select name= 'student_faculty' onChange= {this.handleChange} className="form-control" required >
                            <option> Selectionnez votre faculte (var)</option>
                        </select>

                        <select name= 'student_major' onChange= {this.handleChange} className="form-control" required >
                            <option> Selectionnez votre filiere (var)</option>
                        </select>

                        <select name= 'student_level' onChange= {this.handleChange} className="form-control" required >
                            <option> Selectionnez votre niveau (var)</option>
                        </select>
                        
                        <input type= 'password' name= 'student_password' placeholder = "Entrez votre mot de passe (var)" onChange= {this.handleChange} className="form-control" required />
                        <input type= 'password' name= 'student_confirm_password' placeholder= "Confirmez votre mot de passe (var)" onChange={this.handleChange} className="form-control" required />
                        <span>
                            <label htmlFor= "conditions"> J'ai lu et j'accepte les conditions (var) </label>
                            <input type= 'checkbox' name= 'student_agree_conditions' id= "conditions" onChange= {this.handleChange} className="" required/>
                        </span>
                    </div>
                    <div id= "signup-form-section-submit">
                        <input type= "submit" value= "S'inscrire (var)" className="btn " />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
      etudiants:state.etudiant.etudiants,
      classes:state.classe.classes,
      facultes:state.faculte.facultes,
      filieres:state.filiere.filieres
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEtudiant: etudiant => dispatch(createEtudiant(etudiant)),
    createClasse: classe => dispatch(createClasse(classe)),
    createConnectedUser: user => dispatch(createConnectedUser(user))
  };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Signup)
