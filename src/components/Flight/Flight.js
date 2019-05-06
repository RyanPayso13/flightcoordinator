import React from 'react';
import PropTypes from 'prop-types';

const Flight = ({ 
    id, 
    origin, 
    departuretime,
    readable_departure, 
    destination, 
    arrivaltime,
    readable_arrival, 
    handleOnClick
}) => (
    <div className="item" onClick={(e) => {
        return (!!handleOnClick) ? handleOnClick(e, {
            id, 
            origin, 
            destination, 
            departuretime, 
            readable_departure,
            arrivaltime,
            readable_arrival
        }) : null }}>
        <div className="content">
            <div className="header">Flight: {id}</div>
            <div className="description">{origin}</div>
            <div className="description">{readable_departure}</div>
            <div className="description">{destination}</div>
            <div className="description">{readable_arrival}</div>
        </div>
    </div>
);

Flight.propTypes = {
    id: PropTypes.string.isRequired,
    readable_departure: PropTypes.string.isRequired,
    readable_arrival: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    departuretime: PropTypes.number,
    arrivaltime: PropTypes.number,
    handleOnClick: PropTypes.func
};

export default Flight;