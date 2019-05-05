import { 
    FETCH_AIRCRAFT, 
    SET_CURRENT_AIRCRAFT, 
    FETCH_FLIGHTS,
    SCHEDULE_FLIGHT
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
        case SCHEDULE_FLIGHT: 
            const newItem = action.payload;
            const newState = state.slice();
            newState.push(newItem);
            return newState;         
    default:
        return state;
    };
}

export default flightCoordinatorApp;