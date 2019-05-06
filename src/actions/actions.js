// action types
export const FETCH_AIRCRAFT = 'FETCH_AIRCRAFT';
export const SET_CURRENT_AIRCRAFT = 'SET_CURRENT_AIRCRAFT';
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const SCHEDULE_FLIGHT = 'SCHEDULE_FLIGHT';
export const DELETE_FLIGHT = 'DELETE_FLIGHT';
export const ADD_FLIGHT = 'ADD_FLIGHT';
export const SET_LAST_FLIGHT = 'SET_LAST_FLIGHT';

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

export function deleteFlight(id = '') {
    return {
        type: DELETE_FLIGHT,
        payload: id
    }
}

export function addFlight(flight = {}) {
    return {
        type: ADD_FLIGHT,
        payload: flight
    }
}

export function setLastFlight(flight = {}) {
    return {
        type: SET_LAST_FLIGHT,
        payload: flight
    }
}