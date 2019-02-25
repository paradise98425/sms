import React from 'react';
import ReactDOM from 'react-dom';
import stest from './stest';

it('stest renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<stest />, div);
  ReactDOM.unmountComponentAtNode(div);
});
