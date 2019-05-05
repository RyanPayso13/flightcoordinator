import * as actions from './actions';
import { API_AIRCRAFT_LIST } from '../api/aircraft';

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

});