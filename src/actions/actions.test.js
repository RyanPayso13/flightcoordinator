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

    it('should create an action to delete a flight', () => {
        const payload = 'AS001';
        const expectedAction = {
            type: actions.DELETE_FLIGHT,
            payload
        };
        expect(actions.deleteFlight(payload)).toEqual(expectedAction);
    });

    it('should create an action to add a flight', () => {
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
            type: actions.ADD_FLIGHT,
            payload
        };
        expect(actions.addFlight(payload)).toEqual(expectedAction);
    });

    it('should create an action to set the last scheduled flight', () => {
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
            type: actions.SET_LAST_FLIGHT,
            payload
        };
        expect(actions.setLastFlight(payload)).toEqual(expectedAction);
    });

});