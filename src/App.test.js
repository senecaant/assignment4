/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

let app;
beforeEach(() => {
    app = shallow(<App />);
});

afterEach(() => {
    app.unmount();
});

describe('App', () => {

    
    it('renders without crashing', () => {
        expect(app.length).toBe(1);
    });
    

});