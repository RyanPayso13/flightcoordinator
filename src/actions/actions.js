// action types
export const FETCH_AIRCRAFT = 'FETCH_AIRCRAFT';
export const SET_CURRENT_AIRCRAFT = 'SET_CURRENT_AIRCRAFT';
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const SCHEDULE_FLIGHT = 'SCHEDULE_FLIGHT';

// action creators
export function fetchAircraft(data = []) {
    return { 
        type: FETCH_AIRCRAFT, 
        payload: data 
    };
}

export function setCurrentAircraft(ident = '') {
    return {
        type: SET_CURRENT_AIRCRAFT,
        payload: ident
    }
}

export function fetchFlights(data = []) {
    return {
        type: FETCH_FLIGHTS,
        payload: data
    }
}

export function scheduleFlight(flight = {}) {
    return {
        type: SCHEDULE_FLIGHT,
        payload: flight
    }
}