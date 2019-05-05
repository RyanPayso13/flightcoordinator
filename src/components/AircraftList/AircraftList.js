import React from 'react';
import PropTypes from 'prop-types';
import Aircraft from '../Aircraft/Aircraft';

const AircraftList = ({ aircraftList, setCurrentAircraft }) => (
    <div className="ui relaxed celled list">
        {aircraftList.map((el, index) => (
            <Aircraft key={index} {...el} handleOnClick={setCurrentAircraft} />
        ))}
    </div>
);

AircraftList.propTypes = {
    aircraftList: PropTypes.arrayOf(
        PropTypes.shape({
            ident: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            economySeats: PropTypes.number.isRequired,
            base: PropTypes.string.isRequired,
        }).isRequired
  ).isRequired,
  setCurrentAircraft: PropTypes.func.isRequired
};

export default AircraftList;