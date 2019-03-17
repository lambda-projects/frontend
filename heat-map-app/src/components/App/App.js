import React from 'react';
import Plot from 'react-plotly.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    const trace1 = {
      x: ['Alaska', 'Delaware', 'Louisiana', 'South Carolina', 'Illinois', 'Mississippi', 'Tennessee', 'Alabama', 'Missouri', 'Maryland', 'Arkansas', 'Kentucky', 'Oklahoma', 'Massachusetts', 'Georgia', 'Indiana', 'North Carolina', 'Ohio', 'Nebraska', 'Connecticut', 'Rhode Island', 'West Virginia', 'Wyoming', 'Wisconsin', 'Iowa', 'North Dakota', 'New Mexico', 'Florida', 'Vermont', 'Kansas', 'New Hampshire', 'Virginia', 'Nevada', 'Pennsylvania', 'Maine', 'South Dakota', 'Montana', 'Michigan', 'Colorado', 'New Jersey', 'Oregon', 'Texas', 'New York', 'Washington', 'Minnesota', 'California', 'Idaho', 'Utah', 'Arizona'], 
      y: [18.350445906313425, 18.20147793840447, 17.518219770099037, 14.532427166654205, 13.62817576434341, 12.031932260121081, 11.739571778106392, 11.318400189336499, 10.970900724019886, 9.779358907194592, 9.603385582013487, 9.45784071376324, 8.972702209128627, 8.936436995803266, 8.931996432805818, 8.90593102742972, 8.873828957175322, 8.853314306140073, 8.835889015668048, 8.528731285177193, 8.511560982243648, 8.493752912143856, 8.478386978296015, 8.335781363268545, 8.144534586929398, 7.9210055944693964, 7.888602384228166, 7.6863435834962255, 7.5323556165520325, 7.4119967919357475, 7.2839430613264184, 7.201826060586618, 6.999658797994076, 6.990088541382475, 6.828266463500017, 6.438807068957967, 6.284692636172445, 6.200721894995585, 6.075886512841645, 6.053258562237038, 5.816697688206174, 5.133431989096571, 4.942210184688135, 4.925835620533362, 4.442492961748069, 4.253829274625585, 4.100150359523018, 3.6954405433952275, 3.5131010903893145], 
      marker: {color: '#A51212'}, 
      name: 'Location Types', 
      opacity: 0.7, 
      orientation: 'v', 
      type: 'bar', 
      uid: '188de787-9e14-4a33-89e7-b5f9ea18628c', 
      xsrc: 'veritaem:3:ffdb07', 
      ysrc: 'veritaem:3:836c2a'
    };

    this.state = { 
      data: [trace1], 
      layout: {
        barmode: 'group', 
        height: 500,
        width: 1105, 
        legend: {
          x: -0.1, 
          y: 1.2
        }, 
        margin: {b: 150}, 
        title: {text: 'Gun Crime Per 10,000 people'}
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

export default App;
