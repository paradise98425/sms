import React from 'react';
import ReactDOM from 'react-dom';
import AddSchool from './AddSchool';

it('Sidebar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddSchool />, div);
  ReactDOM.unmountComponentAtNode(div);
});
