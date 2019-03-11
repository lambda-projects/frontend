import React from 'react';
	import { 
	Button, 
	Form, 
	Grid, 
	Header, 
	Image, 
	Message, 
	Segment 
} from 'semantic-ui-react';
import LoginIcon from '../LoginIcon/LoginIcon';

import '../../App.css';


const LoginForm = () => (
	<div className='login-form-container'>

		<style>{`
		body > div,
		body > div > div,
		body > div > div > div.login-form {
			height: 100%;
		}
		`}</style>

		<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as='h2' color='teal' textAlign='center'>
				<LoginIcon />
				<p className="login-form-header">Log-in to your account</p>
				</Header>
				<Form size='large'>
					<Segment stacked>
						<Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
						<Form.Input
						fluid
						icon='lock'
						iconPosition='left'
						placeholder='Password'
						type='password'
						/>

						<Button color='teal' fluid size='large'>
						Login
						</Button>
					</Segment>
				</Form>
				<Message>
					New to us? <a href='#'>Sign Up</a>
				</Message>
			</Grid.Column>
		</Grid>
	</div>
)

export default LoginForm;