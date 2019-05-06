import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { API_FLIGHTS_LIST } from '../../api/flights';
import FlightListContainer from './FlightListContainer';
import configureMockStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

describe('FlightList container', () => {
    let enzymeWrapper;
    let store;

    beforeEach(() => {
        const initialState = {
            flights: []
        };
        store = mockStore(initialState);
        enzymeWrapper = shallow(
            <FlightListContainer store={store} />
        );
    });

    it('should render the container with props', () => {
        const props = enzymeWrapper.props('flightList');
        expect(props).not.toBe(null);
    });

});