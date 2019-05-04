import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import AircraftList from './AircraftList';
import { API_AIRCRAFT_LIST } from '../../api/aircraft';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        aircraftList: API_AIRCRAFT_LIST
    };
    const enzymeWrapper = shallow(<AircraftList {...props} />)

    return {
        props,
        enzymeWrapper
    };
}

describe('AircraftList Component', () => {

    it('should render self', () => {
        const { enzymeWrapper } = setup();
        const list = enzymeWrapper.find('.list');

        expect(list.length).toEqual(1);
    });

    it('should render the Aircraft subcomponent', () => {
        const { enzymeWrapper } = setup();
        const AircraftProps = enzymeWrapper.find('Aircraft').props();

        expect(AircraftProps.ident).toEqual('GABCD');
        expect(AircraftProps.type).toEqual('A320');
        expect(AircraftProps.economySeats).toEqual(186);
        expect(AircraftProps.base).toEqual('EGKK');
    });

});