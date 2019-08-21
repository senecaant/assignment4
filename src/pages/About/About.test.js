import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

let aboutPage;
beforeEach(() => {
    const match = { params: { urlId: null } }
    aboutPage = shallow(<About match={match} />);
});

afterEach(() => {
    aboutPage.unmount();
});

describe('About Page', () => {

    it('renders without crashing', () => {
        expect(aboutPage.length).toBe(1);
    });
    

});