import React from 'react';
import AircraftListContainer from './containers/AircraftListContainer/AircraftListContainer';

const App = () => (
  <div className="ui three column grid container">
    <div className="column">
        <h3 className="ui top attached header">Aircraft</h3>
        <AircraftListContainer />
    </div>
    <div className="column">
      <h3 className="ui top attached header">Rotation</h3>
    </div>
    <div className="column">
      <h3 className="ui top attached header">Flights</h3>
    </div>
  </div>
);

export default App;
