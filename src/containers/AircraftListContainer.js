import { connect } from 'react-redux';
import AircraftList from '../components/AircraftList/AircraftList';

const mapStateToProps = state => {
  return {
    aircraftList: state.aircraft,
  };
};

const AircraftListContainer = connect(
  mapStateToProps,
)(AircraftList);

export default AircraftListContainer;