import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

let cardComponent, cardComponentWithChildren;
beforeEach(() => {
    cardComponent = shallow(<Card />);
    cardComponentWithChildren = shallow((
        <Card>
            <div className="unique" />
        </Card>));
});

afterEach(() => {
    cardComponent.unmount();
    cardComponentWithChildren.unmount();
});

describe('Card Component', () => {

    it('renders without crashing', () => {
        expect(cardComponent.length).toBe(1);
    });

    it('renders children when passed in', () => {
        expect(cardComponentWithChildren.contains(<div className="unique" />)).toEqual(true);
    });

});