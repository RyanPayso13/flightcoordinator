// action types
export const FETCH_AIRCRAFT = 'FETCH_AIRCRAFT';

// action creators
export function fetchAircraft(data = []) {
    return { 
        type: FETCH_AIRCRAFT, 
        payload: data 
    };
}