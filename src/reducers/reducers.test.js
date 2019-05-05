import reducer from './reducers';
import * as actions from '../actions/actions';
import { API_AIRCRAFT_LIST } from '../api/aircraft';
import { API_FLIGHTS_LIST } from '../api/flights';

describe('Reducers', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            aircraft: [...API_AIRCRAFT_LIST], 
            currentAircraft: '',
            flights: [],
            flightSchedule: []
        });
    });

    describe('FETCH_AIRCRAFT', () => {

        it('should handle an empty array', () => {
            expect(reducer([], {
                type: actions.FETCH_AIRCRAFT,
                payload: []
            })).toEqual({
                aircraft: []
            });
        });

        it('should handle multiple aircraft', () => {
            const aircraftPayload = [...API_AIRCRAFT_LIST, {
                ident: "ABCD",
                type: "A380",
                economySeats: 69,
                base: "JFK"
            }];
            
            expect(reducer([], {
                type: actions.FETCH_AIRCRAFT,
                payload: aircraftPayload
            })).toEqual({
                aircraft: aircraftPayload
            });
        });

    });

    describe('SET_CURRENT_AIRCRAFT', () => {

        it('should handle an empty string', () => {
            expect(reducer([], {
                type: actions.SET_CURRENT_AIRCRAFT,
                payload: ''
            })).toEqual({
                currentAircraft: ''
            });
        });

        it('should handle a non-empty string', () => {
            expect(reducer([], {
                type: actions.SET_CURRENT_AIRCRAFT,
                payload: 'FOOBARPLANE'
            })).toEqual({
                currentAircraft: 'FOOBARPLANE'
            });
        });

    });

    describe('FETCH_FLIGHTS', () => {

        it('should handle an empty array', () => {
            expect(reducer([], {
                type: actions.FETCH_FLIGHTS,
                payload: []
            })).toEqual({
                flights: []
            });
        });

        it('should handle multiple flights', () => {
            const flightsPayload = [...API_FLIGHTS_LIST];
            
            expect(reducer([], {
                type: actions.FETCH_FLIGHTS,
                payload: flightsPayload
            })).toEqual({
                flights: flightsPayload
            });
        });

    });

    describe('SCHEDULE_FLIGHT', () => {

        const flightPayload = {
            "id":"AS9999",
            "departuretime":33300,
            "arrivaltime":42900,
            "readable_departure":"09:15",
            "readable_arrival":"11:55",
            "origin":"LEMG",
            "destination":"LFSB"
        };

        it('should schedule a flight to an empty schedule', () => {
            expect(reducer([], {
                type: actions.SCHEDULE_FLIGHT,
                payload: flightPayload
            })).toEqual([flightPayload]);
        });     

        it('should schedule a flight to an existing schedule', () => {
            expect(reducer([...API_FLIGHTS_LIST], {
                type: actions.SCHEDULE_FLIGHT,
                payload: flightPayload
            })).toEqual([...API_FLIGHTS_LIST, flightPayload]);
        });

    });

});