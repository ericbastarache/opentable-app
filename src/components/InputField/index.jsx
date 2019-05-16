import React from 'react';
import {
  Input
} from '@material-ui/core';

const InputField = ({
  type,
  onChange,
  ...rest
}) => (
  <Input
    type={type}
    onChange={onChange}
    {...rest}
  />
);

export default InputField;