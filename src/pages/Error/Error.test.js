import React from 'react';
import { shallow } from 'enzyme';

import Error from './Error';
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';

let errorPage;
beforeEach(() => {
    const errorInfo = { status: 404, statusText: 'Not found' }
    errorPage = shallow(<Error errorInfo={errorInfo}/>);
});

afterEach(() => {
    errorPage.unmount();
});

describe('Error Page', () => {

    it('renders without crashing', () => {
        expect(errorPage.length).toBe(1);
    });
    
});