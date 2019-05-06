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
            flightSchedule: [],
            lastScheduledFlight: {}
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

    describe('ADD_FLIGHT', () => {

        const flightPayload = {
            "id":"AS9999",
            "departuretime":33300,
            "arrivaltime":42900,
            "readable_departure":"09:15",
            "readable_arrival":"11:55",
            "origin":"LEMG",
            "destination":"LFSB"
        };

        it('should add a flight to an empty schedule', () => {
            expect(reducer({
                flightSchedule: []
            }, {
                type: actions.ADD_FLIGHT,
                payload: flightPayload
            })).toEqual({
                flightSchedule: [flightPayload]
            });
        });     

        it('should add a flight to an existing schedule', () => {
            expect(reducer({
                flightSchedule: [...API_FLIGHTS_LIST]
            }, {
                type: actions.ADD_FLIGHT,
                payload: flightPayload
            })).toEqual({
                flightSchedule: [...API_FLIGHTS_LIST, flightPayload]
            });
        });

    });

    describe('DELETE_FLIGHT', () => {

        it('should delete a flight', () => {
            const payload = 'AS1043';
            expect(reducer({
                flights: [...API_FLIGHTS_LIST]
            }, {
                type: actions.DELETE_FLIGHT,
                payload: payload
            })).toEqual({
                flights: [...API_FLIGHTS_LIST.filter(flight => flight.id !== payload)]
            });
        });

        it('should not delete a flight', () => {
            const payload = 'FOOBAR';
            expect(reducer({
                flights: [...API_FLIGHTS_LIST]
            }, {
                type: actions.DELETE_FLIGHT,
                payload: payload
            })).toEqual({
                flights: [...API_FLIGHTS_LIST]
            });
        });

    });

});