import { 
    FETCH_AIRCRAFT, 
    SET_CURRENT_AIRCRAFT, 
    FETCH_FLIGHTS,
    ADD_FLIGHT,
    DELETE_FLIGHT
} from '../actions/actions';
import { API_AIRCRAFT_LIST } from '../api/aircraft';

const initialState = {
    aircraft: [...API_AIRCRAFT_LIST],
    currentAircraft: '',
    flights: [],
    flightSchedule: []
};

function flightCoordinatorApp(state = initialState, action) {
    switch (action.type) {
        case FETCH_AIRCRAFT:
            return Object.assign({}, state, {
                aircraft: [
                    ...action.payload
                ],
            });
        case SET_CURRENT_AIRCRAFT:
            return Object.assign({}, state, {
                currentAircraft: action.payload
            });
        case FETCH_FLIGHTS: 
            return Object.assign({}, state, {
                flights: [
                    ...action.payload
                ],
            });
        case ADD_FLIGHT:
            return Object.assign({}, state, {
                flightSchedule: [
                    ...state.flightSchedule, {...action.payload}
                ],
            }); 
        case DELETE_FLIGHT:
            return Object.assign({}, state, {
                flights: [
                    ...state.flights.filter(flight => flight.id !== action.payload)
                ],
            });
    default:
        return state;
    };
}

export default flightCoordinatorApp;