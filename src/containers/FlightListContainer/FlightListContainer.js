import { connect } from 'react-redux';
import { deleteFlight, addFlight } from '../../actions/actions';
import FlightList from '../../components/FlightList/FlightList';

const mapStateToProps = state => {
  return {
    flightList: state.flights,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    scheduleFlight: (e, flight) => {
      dispatch(addFlight(flight));
      dispatch(deleteFlight(flight.id));
    }
  };
};

const FlightListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightList);

export default FlightListContainer;