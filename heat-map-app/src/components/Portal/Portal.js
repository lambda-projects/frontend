import React, { Component } from 'react'
import { Form, Grid, Header, Segment, TransitionablePortal } from 'semantic-ui-react'

const transitions = [
  'browse',
  'browse right',
  'drop',
  'fade',
  'fade up',
  'fade down',
  'fade left',
  'fade right',
  'fly up',
  'fly down',
  'fly left',
  'fly right',
  'horizontal flip',
  'vertical flip',
  'scale',
  'slide up',
  'slide down',
  'slide left',
  'slide right',
  'swing up',
  'swing down',
  'swing left',
  'swing right',
  'zoom',
]
const options = transitions.map(name => ({ key: name, text: name, value: name }))

export default class Portal extends Component {
  state = { animation: 'zoom', duration: 1000, open: false }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleClick = () => this.setState({ open: !this.state.open })

  render() {
    const { animation, duration, open } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Form>
            <Form.Button
              content={open ? 'Close Heat Map' : 'Open Heat Map'}
              negative={open}
              positive={!open}
              onClick={this.handleClick}
            />
          </Form>

          <TransitionablePortal open={open} transition={{ animation, duration }}>
            <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
              <Header>This is where the heat map could go!</Header>
            </Segment>
          </TransitionablePortal>
        </Grid.Column>
      </Grid>
    )
  }
}