import { connect } from 'react-redux';
import { 
  deleteFlight, 
  addFlight, 
  setLastFlight 
} from '../../actions/actions';
import FlightList from '../../components/FlightList/FlightList';

const turnaroundTime = 40 * 60;

const getAvailableFlights = (flights, flight) => {
  if (flight !== null) {
    return flights.filter((f) => {
      // flight cannot teleport
      // flight must be 40 minutes in the future
      return f.origin === flight.destination && 
             f.departuretime > (flight.arrivaltime + turnaroundTime);
    });
  }
  return flights;
};

const mapStateToProps = state => {
  return {
    flightList: getAvailableFlights(state.flights, state.lastFlight),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    scheduleFlight: (e, flight) => {
      dispatch(addFlight(flight));
      dispatch(deleteFlight(flight.id));
      dispatch(setLastFlight(flight));
    }
  };
};

const FlightListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightList);

export default FlightListContainer;