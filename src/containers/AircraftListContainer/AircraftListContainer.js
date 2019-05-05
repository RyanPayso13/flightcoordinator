import { connect } from 'react-redux';
import AircraftList from '../../components/AircraftList/AircraftList';
import { setCurrentAircraft } from '../../actions/actions';

const mapStateToProps = state => {
  return {
    aircraftList: state.aircraft,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentAircraft: (e, ident) => {
      dispatch(setCurrentAircraft(ident));
    }
  };
};

const AircraftListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AircraftList);

export default AircraftListContainer;