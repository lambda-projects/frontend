import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

import '../../App.css';

const Articles = () => (
  <Card.Group className='articles-container'>
    <Card>
      <Card.Content>
        <Card.Header>Top 20 States for Gun Violence Per Capita</Card.Header>
        <Card.Meta>Written by Daniel Harris</Card.Meta>
        <Card.Description>
            <Image floated='right' size='medium' src='https://github.com/lambdabuildweek-gunviolenceheatmaps/frontend/blob/tico-thepsourinthone/heat-map-app/src/images/top20-bar.png?raw=true' />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='orange'>
            View Full Article
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Mass shootings, by location</Card.Header>
        <Card.Meta>Written by Daniel Harris</Card.Meta>
        <Card.Description>
            <Image floated='right' size='medium' src='https://github.com/lambdabuildweek-gunviolenceheatmaps/frontend/blob/tico-thepsourinthone/heat-map-app/src/images/mass.png?raw=true' />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Button basic color='orange'>
            View Full Article
        </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Why has Gun Violence Increased in Texas?</Card.Header>
        <Card.Meta>Written by Daniel Harris</Card.Meta>
        <Card.Description>
            <Image floated='right' size='medium' src='https://github.com/lambdabuildweek-gunviolenceheatmaps/frontend/blob/tico-thepsourinthone/heat-map-app/src/images/texas-killed.png?raw=true' />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Button basic color='orange'>
            View Full Article
        </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default Articles;