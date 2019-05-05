import * as actions from './actions';
import { API_AIRCRAFT_LIST } from '../api/aircraft';
import { API_FLIGHTS_LIST } from '../api/flights';

describe('Actions', () => {
    
    it('should create an action to fetch the aircraft list', () => {
        const payload = [...API_AIRCRAFT_LIST];
        const expectedAction = {
            type: actions.FETCH_AIRCRAFT,
            payload
        };
        expect(actions.fetchAircraft(payload)).toEqual(expectedAction);
    });

    it('should create an action to set the current aircraft', () => {
        const payload = 'GABCD';
        const expectedAction = {
            type: actions.SET_CURRENT_AIRCRAFT,
            payload
        };
        expect(actions.setCurrentAircraft(payload)).toEqual(expectedAction);
    });

    it('should create an action to fetch the aircraft list', () => {
        const payload = [...API_FLIGHTS_LIST];
        const expectedAction = {
            type: actions.FETCH_FLIGHTS,
            payload
        };
        expect(actions.fetchFlights(payload)).toEqual(expectedAction);
    });

    it('should create an action to schedule a flight from the flight list', () => {
        const payload = {
            "id":"AS1001",
            "departuretime":21600,
            "arrivaltime":26100,
            "readable_departure":"06:00",
            "readable_arrival":"07:15",
            "origin":"LFSB",
            "destination":"LFMN"
        };
        const expectedAction = {
            type: actions.SCHEDULE_FLIGHT,
            payload
        };
        expect(actions.scheduleFlight(payload)).toEqual(expectedAction);
    });

});