import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Aircraft from './Aircraft';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        ident: 'GABCD',
        type: 'A320',
        base: 'EGKK',
        handleOnClick: jest.fn()
    };
    const enzymeWrapper = shallow(<Aircraft {...props} />)

    return {
        props,
        enzymeWrapper
    };
}

describe('Aircraft Component', () => {

    it('should render self', () => {
        const { enzymeWrapper } = setup()
        const header = enzymeWrapper.find('.header');
        const description = enzymeWrapper.find('.description');

        expect(header.text()).toEqual('GABCD');
        expect(description.length).toEqual(2);
        expect(description.at(0).text()).toEqual('A320');
        expect(description.at(1).text()).toEqual('EGKK');
      });

});