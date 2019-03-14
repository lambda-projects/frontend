import React from 'react';
import Plot from 'react-plotly.js';

class App2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      data: [], 
      layout: {
        barmode: 'overlay', 
        title: 'Positively Polarized Tweet', 
        xaxis: {title: 'Polarity'}, 
        yaxis: {title: 'Tweet count'}
      }, 
      frames: [], 
      config: {} 
    };
  }

  render() {
    return (
      <Plot
        data={this.state.data}
        layout={this.state.layout}
        frames={this.state.frames}
        config={this.state.config}
        onInitialized={(figure) => this.setState(figure)}
        onUpdate={(figure) => this.setState(figure)}
      />
    )
  }
}

export default App2;
