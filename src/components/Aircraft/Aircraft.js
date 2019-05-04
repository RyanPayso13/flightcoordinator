import React from 'react';
import PropTypes from 'prop-types';

const Aircraft = ({ ident, type, base }) => (
    <div className="item">
        <i className="large plane middle aligned icon"></i>
        <div className="content">
            <div className="header">{ident}</div>
            <div className="description">{type}</div>
            <div className="description">{base}</div>
        </div>
    </div>
);

Aircraft.propTypes = {
    ident: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    base: PropTypes.string.isRequired
};

export default Aircraft;