import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import CurrentAircraft from './CurrentAircraft';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        currentAircraft: 'GABCD'
    };
    const enzymeWrapper = shallow(<CurrentAircraft {...props} />)

    return {
        props,
        enzymeWrapper
    };
}

describe('CurrentAircraft Component', () => {

    it('should render self', () => {
        const { enzymeWrapper } = setup()
        const strong = enzymeWrapper.find('strong');
        expect(strong.text()).toEqual('GABCD');
      });

});