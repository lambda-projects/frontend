import React from 'react'
import { Icon } from 'semantic-ui-react'

const LoginIcon = () => (
  <div className="login-icon-container">
    <Icon.Group size='huge'>
      <Icon loading size='big' name='circle notch' />
      <Icon name='user' />
    </Icon.Group>
  </div>
)

export default LoginIcon;