import React from 'react';
import ReactDOM from 'react-dom';
import InputField from 'components/InputField';

it('renders without crashing', () => {
  const input = document.createElement('input');
  ReactDOM.render(<InputField />, input);
  ReactDOM.unmountComponentAtNode(input);
});
