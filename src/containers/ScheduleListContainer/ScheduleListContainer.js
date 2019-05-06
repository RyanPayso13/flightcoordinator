import { connect } from 'react-redux';
import FlightList from '../../components/FlightList/FlightList';

const mapStateToProps = state => {
  return {
    flightList: state.flightSchedule,
  };
};

const ScheduleListContainer = connect(
  mapStateToProps,
  null
)(FlightList);

export default ScheduleListContainer;