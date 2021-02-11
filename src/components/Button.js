import React from 'react';
import styled from 'styled-components';

const ButtonDefault = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  background: #e0e0e0;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;

  &:hover {
    background: #aeaeae;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    border-radius: 6px;
  }
`;

const Button = ({ variant }) => {
  return (
    <div>
      <ButtonDefault>Default</ButtonDefault>
    </div>
  );
};

export default Button;
