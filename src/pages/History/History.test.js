import React from 'react';
import { shallow } from 'enzyme';

import History from './History';

let historyPage;
beforeEach(() => {
    const match = { params: { urlId: null } }
    historyPage = shallow(<History match={match}/>);
});

afterEach(() => {
    historyPage.unmount();
});

describe('History Page', () => {

    it('renders without crashing', () => {
        expect(historyPage.length).toBe(1);
    });
    
});