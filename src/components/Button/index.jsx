import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 15px;
`;

const Button = ({
  onClick,
  children,
  ...rest
}) => (
  <StyledButton
    onClick={onClick}
    {...rest}
  >
    {children}
  </StyledButton>
);

export default Button;