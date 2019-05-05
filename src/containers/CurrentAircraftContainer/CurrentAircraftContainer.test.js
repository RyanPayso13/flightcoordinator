import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CurrentAircraftContainer from './CurrentAircraftContainer';
import configureMockStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

describe('CurrentAircraft container', () => {
    let enzymeWrapper;
    let store;

    beforeEach(() => {
        const initialState = {
            currentAircraft: ''
        };
        store = mockStore(initialState);
        enzymeWrapper = shallow(
            <CurrentAircraftContainer store={store} />
        );
    });

    it('should render the container with props', () => {
        const props = enzymeWrapper.props('currentAircraft');
        expect(props).not.toBe(null);
    });

});