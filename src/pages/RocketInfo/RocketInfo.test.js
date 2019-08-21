import React from 'react';
import { shallow } from 'enzyme';

import RocketInfo from './RocketInfo';

let rocketInfoPage;
beforeEach(() => {
    const match = { params: { urlId: 'falcon1' } }
    rocketInfoPage = shallow(<RocketInfo match={match}/>);
});

afterEach(() => {
    rocketInfoPage.unmount();
});

describe('Rocket Info Page', () => {

    it('renders without crashing', () => {
        expect(rocketInfoPage.length).toBe(1);
    });
    

});