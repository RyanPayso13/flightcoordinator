import { connect } from 'react-redux';
import AircraftList from '../../components/AircraftList/AircraftList';
import { setCurrentAircraft, fetchFlights } from '../../actions/actions';
import { API_FLIGHTS_LIST } from '../../api/flights';

const mapStateToProps = state => {
  return {
    aircraftList: state.aircraft,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentAircraft: (e, ident) => {
      dispatch(setCurrentAircraft(ident));
      dispatch(fetchFlights([...API_FLIGHTS_LIST]));
    }
  };
};

const AircraftListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AircraftList);

export default AircraftListContainer;