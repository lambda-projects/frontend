import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { 
	Button, 
	Form, 
	Grid, 
	Header,
	Message, 
	Segment 
} from 'semantic-ui-react';
import LoginIcon from '../LoginIcon/LoginIcon';
import LoginNavbar from "../LoginNavbar/LoginNavbar";

import '../../App.css';


class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("The login button was just clicked!");
		
		this.loginUser(this.state);
	}

	handleChanges = e => {
		this.setState({ [e.target.name]: e.target.value });
	};


	loginUser = userCredentials => {
		axios
		  .post('https://dbase.wtf/api/user/login', userCredentials)
		  .then(response => {
			window.localStorage.setItem("token", response.data.token);
			window.localStorage.setItem("username", userCredentials.username);
			window.localStorage.setItem("userId", response.data.id);
		  })
		  .catch();
	  };


	render() {
		return (
			<div className='login-form-container'>

			<style>{`
			body > div,
			body > div > div,
			body > div > div > div.login-form {
				height: 100%;
			}
			`}</style>

			<LoginNavbar />
			<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' color='teal' textAlign='center'>
					<LoginIcon />
					<p className="login-form-header">Login to your account</p>
					</Header>
					<Form size='large' onSubmit={this.handleSubmit}>
						<Segment stacked>
							<Form.Input 
								fluid 
								type='text'
								icon='user' 
								iconPosition='left'
								name='username' 
								placeholder='Username'
								value={this.state.username} 
								onChange={this.handleChanges}
							/>
							<Form.Input
								fluid
								type='password'
								icon='lock'
								iconPosition='left'
								name='password' 
								placeholder='Password'
								onChange={this.handleChanges}								
							/>

							<Button type='submit' color='teal' fluid size='large'>
							Login
							</Button>
						</Segment>
					</Form>
					<Message>
						New to us? <Link to='/signup'>Sign Up</Link>
					</Message>
				</Grid.Column>
			</Grid>
		</div>
		);
	};
	
}

export default LoginForm;



// const baseUrl = "https://dbase.wtf";

// user registration


//user login
