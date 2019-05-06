import React from 'react';
import AircraftListContainer from './containers/AircraftListContainer/AircraftListContainer';
import CurrentAircraftContainer from './containers/CurrentAircraftContainer/CurrentAircraftContainer';
import FlightListContainer from './containers/FlightListContainer/FlightListContainer';
import ScheduleListContainer from './containers/ScheduleListContainer/ScheduleListContainer';

const App = () => (
  <div className="ui three column grid container">
    <div className="column">
        <h3 className="ui top attached header">Aircraft</h3>
        <AircraftListContainer />
    </div>
    <div className="column">
      <h3 className="ui top attached header">
        Rotation: <CurrentAircraftContainer />
      </h3>
      <ScheduleListContainer />
    </div>
    <div className="column">
      <h3 className="ui top attached header">Flights</h3>
        <FlightListContainer />
    </div>
  </div>
);

export default App;
