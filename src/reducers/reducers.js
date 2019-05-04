import { FETCH_AIRCRAFT } from '../actions/actions';
import { API_AIRCRAFT_LIST } from '../api/aircraft';
import { API_FLIGHTS_LIST } from '../api/flights';

const initialState = {
    aircraft: [...API_AIRCRAFT_LIST],
    flights: [...API_FLIGHTS_LIST]
};

function flightCoordinatorApp(state = initialState, action) {
    switch (action.type) {
        case FETCH_AIRCRAFT:
            return Object.assign({}, state, {
                aircraft: [
                    ...action.payload
                ],
            });
    default:
        return state;
    };
}

export default flightCoordinatorApp;