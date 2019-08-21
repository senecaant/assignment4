import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

let headerComponent;
beforeEach(() => {
    headerComponent = shallow(<Header />);
});

afterEach(() => {
    headerComponent.unmount();
});

describe('Header Component', () => {

    it('renders without crashing', () => {
        expect(headerComponent.length).toBe(1);
    });
    

});