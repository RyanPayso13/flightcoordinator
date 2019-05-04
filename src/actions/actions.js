// action types
export const FETCH_AIRCRAFT = 'FETCH_AIRCRAFT';
export const SET_CURRENT_AIRCRAFT = 'SET_CURRENT_AIRCRAFT';

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