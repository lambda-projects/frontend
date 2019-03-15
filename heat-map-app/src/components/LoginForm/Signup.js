import React from 'react';
import axios from 'axios';
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


class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("The login button was just clicked!");
		
		this.registerUser(this.state);
	}

	handleChanges = e => {
		this.setState({ [e.target.name]: e.target.value });
	};



    registerUser = (userRegistration, props) => {
        axios
            .post('https://dbase.wtf/api/user/register', userRegistration)
            .then(
                props.history.push("/login")
            )
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
					<p className="login-form-header">Register your new account</p>
					</Header>
					<Form size='large' onSubmit={this.handleSubmit}>
						<Segment stacked>
							<Form.Input 
								fluid 
								type='text'
								icon='user' 
								iconPosition='left'
								name='username' 
								placeholder='Desired Username'
								value={this.state.username} 
								onChange={this.handleChanges}
							/>
							<Form.Input
								fluid
								type='password'
								icon='lock'
								iconPosition='left'
								name='password' 
								placeholder='Desired Password'
								onChange={this.handleChanges}								
							/>

							<Button type='submit' color='teal' fluid size='large'>
							    Register
							</Button>
						</Segment>
					</Form>
					<Message>
						Already have an account? <a href='/login'>Login</a>
					</Message>
				</Grid.Column>
			</Grid>
		</div>
		);
	};
	
}

export default Signup;