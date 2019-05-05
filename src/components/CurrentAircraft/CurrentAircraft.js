import React from 'react';
import PropTypes from 'prop-types';

const CurrentAircraft = ({ currentAircraft }) => (
    <strong>{currentAircraft}</strong>
);

CurrentAircraft.propTypes = {
    currentAircraft: PropTypes.string.isRequired
};

export default CurrentAircraft;