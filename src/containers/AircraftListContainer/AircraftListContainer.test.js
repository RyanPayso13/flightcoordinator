import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { API_AIRCRAFT_LIST } from '../../api/aircraft';
import AircraftListContainer from './AircraftListContainer';
import configureMockStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

describe('AircraftList container', () => {
    let enzymeWrapper;
    let store;

    beforeEach(() => {
        const initialState = {
            aircraft: [...API_AIRCRAFT_LIST],
            currentAircraft: ''
        };
        store = mockStore(initialState);
        enzymeWrapper = shallow(
            <AircraftListContainer store={store} />
        );
    });

    it('should render the container with props', () => {
        const props = enzymeWrapper.props('aircraftList');
        expect(props).not.toBe(null);
    });

    // How to write this test???
    // it('should set the current aircraft', () => {
    //     enzymeWrapper.simulate('SET_CURRENT_AIRCRAFT');
    //     const actions = store.getActions();
    //     expect(actions).toEqual([]);
    // });

});