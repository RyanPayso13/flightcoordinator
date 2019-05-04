import React from 'react';
import PropTypes from 'prop-types';

const Aircraft = ({ ident, type, base }) => (
    <div class="item">
        <i class="large plane middle aligned icon"></i>
        <div class="content">
            <div class="header">{ident}</div>
            <div class="description">{type}</div>
            <div class="description">{base}</div>
        </div>
    </div>
);

Aircraft.propTypes = {
    ident: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    base: PropTypes.string.isRequired,
};

export default Aircraft;