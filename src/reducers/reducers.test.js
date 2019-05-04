import reducer from './reducers';
import * as actions from '../actions/actions';
import { API_AIRCRAFT_LIST } from '../api/aircraft';
import { API_FLIGHTS_LIST } from '../api/flights';

describe('Reducers', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            aircraft: API_AIRCRAFT_LIST, 
            flights: API_FLIGHTS_LIST
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

});