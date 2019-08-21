import React from 'react';
import { shallow } from 'enzyme';

import Rockets from './Rockets';

let rocketsPage;
beforeEach(() => {
    const match = { params: { urlId: null } }
    rocketsPage = shallow(<Rockets match={match}/>);
});

afterEach(() => {
    rocketsPage.unmount();
});

describe('Rockets Page', () => {

    it('renders without crashing', () => {
        expect(rocketsPage.length).toBe(1);
    });
    

});