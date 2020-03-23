import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import Profile from './../../../asset/Profile.png';
import { createConnectedUser } from '../../../store/actions/connectedUserAction'
import './style_signin.css';


class Signin extends Component {
	state = {
			user_name:'',
			user_password:''
	};

	verifyValidUser=(user)=>{
		let valid = this.props.etudiants.filter(student=>{
			return student.nomEtudiant === user
		})
		return valid.length !== 0?(valid[0].pwd):(null)
	}

	handleSubmit=(e)=>{
		e.preventDefault();
		if (this.verifyValidUser(this.state.user_name) !== null){
			
			if(this.verifyValidUser(this.state.user_name) === this.state.user_password){
				this.props.createConnectedUser(this.state.user_name)
				this.props.history.push(`/dashboard/${this.state.user_name}`)
				//indicate the right route to go to from here.
			}else alert(this.state.user_name)
		}else alert('user does not exist')
	}

	handleChange=(e)=>{
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	handleClick=()=>{}

	render()
	{
		return (
				<div className="container start-page">
					<div className="row justify-content-center">
							<div className="col-md-6 offset-md-3">
							<img src={Profile} className="img-fluid" alt="Profile"/>
							</div>						
					</div>
					<div className="row justify-content-center">
						<form id='loginForm' onSubmit={this.handleSubmit}>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text"><i className="fa fa-user " ></i></span>
								</div>
								<input type="text" required className="form-control" placeholder="Username" id="user_name" onChange={this.handleChange} value={this.state.user_name} />
							</div>
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text"><span className="fa fa-key"></span></span>
								</div>
								<input type="password" required className="form-control" placeholder="Password" id="user_password" onChange={this.handleChange} value={this.state.user_password}/>
							</div>
							<div className="row forget-password justify-content-center">
								<Link to="/signup">
									<span className="offset-md-4">
									Mot de passe oublié?
									</span>
								</Link>
							</div>
							<button type="submit" className="btn " onClick={this.handleClick} >LOGIN</button>
						</form>	
					</div>
				</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		etudiants:state.etudiant.etudiants,
		enseignant:state.enseignant.enseignants,
	}
}

const mapDispatchToProps = dispatch => {
  return {
	createConnectedUser:user=>dispatch(createConnectedUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin)