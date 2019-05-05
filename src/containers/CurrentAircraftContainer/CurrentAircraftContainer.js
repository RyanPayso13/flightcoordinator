import { connect } from 'react-redux';
import CurrentAircraft from '../../components/CurrentAircraft/CurrentAircraft';

const mapStateToProps = state => {
  return {
    currentAircraft: state.currentAircraft,
  };
};

const CurrentAircraftContainer = connect(
  mapStateToProps,
  null
)(CurrentAircraft);

export default CurrentAircraftContainer;