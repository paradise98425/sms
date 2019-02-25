import React from 'react';
import ReactDOM from 'react-dom';
import Topbar from './topbar';

it('Topbar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Topbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
