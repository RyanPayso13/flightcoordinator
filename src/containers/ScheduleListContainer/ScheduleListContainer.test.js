import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScheduleListContainer from './ScheduleListContainer';
import configureMockStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

describe('ScheduleList container', () => {
    let enzymeWrapper;
    let store;

    beforeEach(() => {
        const initialState = {
            flights: []
        };
        store = mockStore(initialState);
        enzymeWrapper = shallow(
            <ScheduleListContainer store={store} />
        );
    });

    it('should render the container with props', () => {
        const props = enzymeWrapper.props('flightList');
        expect(props).not.toBe(null);
    });

});