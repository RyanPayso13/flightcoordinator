import React from 'react';
import PropTypes from 'prop-types';
import Aircraft from '../Aircraft/Aircraft';

const AircraftList = ({ aircraftList }) => (
    <div class="ui relaxed celled list">
        {aircraftList.map((el, index) => (
            <Aircraft key={index} {...el} />
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
};

export default AircraftList;