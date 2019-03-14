import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Modal,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

import HeatMap from "../HeatMap/HeatMap";

import '../../App.css';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const src1 = "https://cdn-images-1.medium.com/max/1200/0*a_4llBIWbEeO9ML5.png";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Welcome to the Shots Fired App'
      inverted
      style={{
        fontFamily: 'Playfair Display SC, serif',
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '0.25em',
      }}
    />
    <Header
      as='h2'
      content="Don't just consume our data."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '2.0em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.0em',
      }}
    />
      <Header
      as='h3'
      content="Interact with it."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '2.0em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.0em' : '0.0em',
      }}
    />
    <Image src={src1} size="huge" centered />
    <Button 
        primary size='huge'
        style={{
            marginTop: mobile ? '1.5em' : '1.0em',
            fontSize: '1.6rem'
          }}
    >
      Interactive Heat Maps
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '2em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='huge'
            >
              <Container style={{ zIndex: 2 }}>
                <Menu.Item as='a' active style={{ fontSize: '1.6rem' }}>
                  Home
                </Menu.Item>
                <Menu.Item as='a' style={{ fontSize: '1.6rem' }}>About Us</Menu.Item>
                <Menu.Item as='a' style={{ fontSize: '1.6rem' }}>Data Visualizations</Menu.Item>
                <Menu.Item as='a' style={{ fontSize: '1.6rem' }}>Heat Map</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed} style={{ fontSize: '1.6rem'}}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em', fontSize: '1.6rem' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active style={{ fontSize: '1.6rem'}}>
            Home
          </Menu.Item>
          <Menu.Item as='a' style={{ fontSize: '1.6rem'}}>About Us</Menu.Item>
          <Menu.Item as='a' style={{ fontSize: '1.6rem'}}>Data Visualizations</Menu.Item>
          <Menu.Item as='a' style={{ fontSize: '1.6rem'}}>Heat Map</Menu.Item>
          <Menu.Item as='a' style={{ fontSize: '1.6rem'}}>Log in</Menu.Item>
          <Menu.Item as='a' style={{ fontSize: '1.6rem'}}>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' style={{ fontSize: '3.0rem', paddingTop: '7px'}} />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

class Home extends Component {
    state = {
      ohioData: [],
      zoom: 13
    }

    componentDidMount() {
        // console.log("CDM is running inside of <Home/> : ", this.state.data);

        axios
        .get('https://dbase.wtf/api/gundata/state/Ohio')
        .then(res => {
          // console.log(res);
          this.setState({ 
              ohioData: res.data
            });
        })
        .catch(err => {
          // console.log(err);
          this.setState({ error: err });
        });
    }

    render() {
      console.log("Inside <Home />'s render() function: ", this.state.ohioData);
        return(
            <ResponsiveContainer>
                <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                    <Grid.Column width={16}>
                        <Header as='h3' style={{ fontFamily: 'Playfair Display SC, serif', fontSize: '4em', color: 'white' }}>
                            Interactive Gun Violence Heat Map
                        </Header>
                        <HeatMap 
                          ohioData={this.state.ohioData}
                          zoom={this.state.zoom}
                        />
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Segment>
                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Column textAlign='center'>
                            <Header 
                              as='h3' 
                              style={{ 
                                fontFamily: 'Playfair Display SC, serif', 
                                fontSize: '4em', 
                                color: 'white',
                              }}
                            >
                                Our Inspirations
                            </Header>
                        </Grid.Column>
                        <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2.5em', color: 'white', paddingBottom: '0.0rem' }}>
                              "Visualizing gun violence in America"
                            </Header>
                            <Header as='h3' style={{ fontSize: '1.5em', color: 'white' }}>
                              Provided by Mikel Maron
                            </Header>                            
                            <Image
                              src='https://github.com/lambdabuildweek-gunviolenceheatmaps/frontend/blob/tico-thepsourinthone/heat-map-app/src/images/mapbox.png?raw=true'
                              as='a'
                              size='large'
                              rounded
                            /><br/>
                            <Modal trigger={<Button style={{ fontSize: '1.6rem', marginTop: '1.5rem' }}>Learn More</Button>}>
                              <Modal.Content image style={{ backgroundColor: 'lightgray' }}>
                                <Grid.Row textAlign='center'>
                                <Image 
                                  wrapped 
                                  rounded
                                  as='a' 
                                  href='https://blog.mapbox.com/visualizing-gun-violence-in-america-bb36021b3aae'
                                  target='_blank'
                                  src='https://github.com/lambdabuildweek-gunviolenceheatmaps/frontend/blob/tico-thepsourinthone/heat-map-app/src/images/mapbox.png?raw=true' 
                                />
                                <Modal.Description>
                                  <p style={{ color: 'black', fontSize: '2.0rem', paddingTop: '1.0rem' }}>Click the screenshot above to view the actual website.</p>
                                </Modal.Description> 
                                </Grid.Row>                          
                              </Modal.Content>
                            </Modal>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2.5em', color: 'white', paddingBottom: '0.0rem' }}>
                              "gunviolencearchive.org"
                            </Header>
                            <Header as='h3' style={{ fontSize: '1.5em', color: 'white' }}>
                              Provided by Gun Violence Archive
                            </Header> 
                            <Image
                              src='https://github.com/lambdabuildweek-gunviolenceheatmaps/frontend/blob/tico-thepsourinthone/heat-map-app/src/images/gva.png?raw=true'
                              as='a'
                              size='large'
                              rounded
                              /><br/>
                            <Modal trigger={<Button style={{ fontSize: '1.6rem', marginTop: '1.5rem' }}>Learn More</Button>}>
                              <Modal.Content image style={{ backgroundColor: 'lightgray' }}>
                                <Grid.Row textAlign='center'>
                                <Image 
                                  wrapped 
                                  rounded
                                  as='a' 
                                  href='https://www.gunviolencearchive.org/'
                                  target='_blank'
                                  src='https://github.com/lambdabuildweek-gunviolenceheatmaps/frontend/blob/tico-thepsourinthone/heat-map-app/src/images/gva.png?raw=true' 
                                />
                                <Modal.Description>
                                  <p style={{ color: 'black', fontSize: '2.0rem', paddingTop: '1.0rem' }}>Click the screenshot above to view the actual website.</p>
                                </Modal.Description> 
                                </Grid.Row>                          
                              </Modal.Content>
                            </Modal>                           
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2.5em', color: 'white', paddingBottom: '0.0rem' }}>
                              "Gun Violence Dataset"
                            </Header>
                            <Header as='h3' style={{ fontSize: '1.5em', color: 'white' }}>
                              Provided by James Ko
                            </Header>
                            <Image
                              src='https://github.com/lambdabuildweek-gunviolenceheatmaps/frontend/blob/tico-thepsourinthone/heat-map-app/src/images/kaggle.png?raw=true'
                              as='a'
                              size='large'
                              rounded
                              /><br/>
                            <Modal trigger={<Button style={{ fontSize: '1.6rem', marginTop: '1.5rem' }}>Learn More</Button>}>
                              <Modal.Content image style={{ backgroundColor: 'lightgray' }}>
                                <Grid.Row textAlign='center'>
                                <Image 
                                  wrapped 
                                  rounded
                                  as='a' 
                                  href='https://www.kaggle.com/jameslko/gun-violence-data'
                                  target='_blank'
                                  src='https://github.com/lambdabuildweek-gunviolenceheatmaps/frontend/blob/tico-thepsourinthone/heat-map-app/src/images/kaggle.png?raw=true' 
                                />
                                <Modal.Description>
                                  <p style={{ color: 'black', fontSize: '2.0rem', paddingTop: '1.0rem' }}>Click the screenshot above to view the actual website.</p>
                                </Modal.Description> 
                                </Grid.Row>                          
                              </Modal.Content>
                            </Modal>  
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2.5em', color: 'white', paddingBottom: '0.0rem' }}>
                              "America’s unique gun violence problem..."
                            </Header>
                            <Header as='h3' style={{ fontSize: '1.5em', color: 'white' }}>
                              Provided by German Lopez
                            </Header> 
                            <Image
                              src='https://github.com/lambdabuildweek-gunviolenceheatmaps/frontend/blob/tico-thepsourinthone/heat-map-app/src/images/vox.png?raw=true'
                              as='a'
                              size='large'
                              rounded
                              /><br/>   
                            <Modal trigger={<Button style={{ fontSize: '1.6rem', marginTop: '1.5rem' }}>Learn More</Button>}>
                              <Modal.Content image style={{ backgroundColor: 'lightgray' }}>
                                <Grid.Row textAlign='center'>
                                <Image 
                                  wrapped 
                                  rounded
                                  as='a' 
                                  href='https://www.vox.com/policy-and-politics/2017/10/2/16399418/us-gun-violence-statistics-maps-charts'
                                  target='_blank'
                                  src='https://github.com/lambdabuildweek-gunviolenceheatmaps/frontend/blob/tico-thepsourinthone/heat-map-app/src/images/vox.png?raw=true' 
                                />
                                <Modal.Description>
                                  <p style={{ color: 'black', fontSize: '2.0rem', paddingTop: '1.0rem' }}>Click the screenshot above to view the actual website.</p>
                                </Modal.Description> 
                                </Grid.Row>                          
                              </Modal.Content>
                            </Modal>                          
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment style={{ padding: '8em 0em', borderTop: '1px solid white' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2.5em', color: 'white' }}>
                      More Data Visualizations
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                    Instead of focusing on content creation and hard work, we have learned how to master the
                    art of doing nothing by providing massive amounts of whitespace and generic content that
                    can seem massive, monolithic and worth your attention.
                    </p>
                    <Button as='a' size='large'>
                    Read More
                    </Button>
                    <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                    <a href='https://www.lambdaschool.com'>Case Studies</a>
                    </Divider>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                    Did We Tell You About Our Bananas?
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                    Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                    it's really true. It took years of gene splicing and combinatory DNA research, but our
                    bananas can really dance.
                    </p>
                    <Button as='a' size='large'>
                    I'm Still Quite Interested
                    </Button>
                </Container>
                </Segment>
                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container>
                    <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={4}>
                        <Header inverted as='h4' content='About Lambda School' style={{ fontSize: '2.0rem' }} />
                        <List link inverted>
                            <List.Item as='a' style={{ fontSize: '1.6rem' }}>How it works</List.Item>
                            <List.Item as='a' style={{ fontSize: '1.6rem' }}>Courses</List.Item>
                            <List.Item as='a' style={{ fontSize: '1.6rem' }}>Build Weeks</List.Item>
                            <List.Item as='a' style={{ fontSize: '1.6rem' }}>Apply</List.Item>
                        </List>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Header as='h4' inverted style={{ fontSize: '2.0rem' }}>
                            Presented by Lambda School's Build Weeks
                        </Header>
                        <p style={{ lineHeight: '1.5', fontSize: '1.6rem', padding: '0 1.0rem' }}>
                            The Shots Fired App was the product of a "Build Weeks" collaboration.<br/> 
                            To learn more about Build Weeks, click on the link to the left.
                        </p>
                        </Grid.Column>                        
                        <Grid.Column width={4}>
                        <Header inverted as='h4' content='Contact Lambda School' style={{ fontSize: '2.0rem' }} />
                        <List link inverted>
                            <List.Item as='a' style={{ fontSize: '1.6rem' }}>Twitter</List.Item>
                            <List.Item as='a' style={{ fontSize: '1.6rem' }}>GitHub</List.Item>
                            <List.Item as='a' style={{ fontSize: '1.6rem' }}>Email</List.Item>
                        </List>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Container>
                </Segment>
            </ResponsiveContainer>
        )
    }
  
}

export default Home;