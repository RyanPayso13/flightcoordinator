import React from 'react';
import PropTypes from 'prop-types';
import './Flight.css';

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
        <div className="content flight">
            <div className="header">Flight: {id}</div>
            <div className="details">
                <div>
                    <p className="description">{origin}</p>
                    <p className="description">{readable_departure}</p>
                </div>
                <div>
                    <i className="large arrow right icon"></i>
                </div>
                <div>
                    <p className="description">{destination}</p>
                    <p className="description">{readable_arrival}</p>
                </div>
            </div>
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