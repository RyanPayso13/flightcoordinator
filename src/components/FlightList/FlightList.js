import React from 'react';
import PropTypes from 'prop-types';
import Flight from '../Flight/Flight';

const FlightList = ({ flightList, scheduleFlight }) => (
    <div className="ui relaxed celled list">
        {flightList.map((el, index) => (
            <Flight key={index} {...el} handleOnClick={scheduleFlight} />
        ))}
    </div>
);

FlightList.propTypes = {
    flightList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            departuretime: PropTypes.number.isRequired,
            arrivaltime: PropTypes.number.isRequired,
            readable_departure: PropTypes.string.isRequired,
            readable_arrival: PropTypes.string.isRequired,
            origin: PropTypes.string.isRequired,
            destination: PropTypes.string.isRequired
        }).isRequired
  ).isRequired,
  scheduleFlight: PropTypes.func.isRequired
};

export default FlightList;