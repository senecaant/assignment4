import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

let loadingComponent;
beforeEach(() => {
    loadingComponent = shallow(<Loading />);
});

afterEach(() => {
    loadingComponent.unmount();
});

describe('Loading Component', () => {

    it('renders without crashing', () => {
        expect(loadingComponent.length).toBe(1);
    });
    

});