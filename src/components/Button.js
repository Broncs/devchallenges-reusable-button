import React from 'react';
import styled from 'styled-components';

const ButtonDefault = styled.button`
  /* Default */
  padding: 0.5rem 1rem;
  background: #e0e0e0;
  color: #3f3f3f;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
  border: none;

  font-family: Noto Sans JP, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  &:hover {
    background: #aeaeae;
  }

  /* Outline */
  border: ${({ variant }) => variant === 'outline' && '1px solid #3D5AFE'};
  cursor: pointer;
  background: ${({ variant }) => variant === 'outline' && 'none'};
  color: ${({ variant }) => variant === 'outline' && '#3D5AFE'};

  border: ${({ variant }) => (variant === 'text' ? 'none' : 'none')};
  background: ${({ variant }) => (variant === 'text' ? 'none' : '#e0e0e0')};

  .outline {
    background: none;
    color: red;
  }
`;

const Button = ({ children = 'Default', variant }) => {
  console.log(variant);
  return (
    <div>
      <ButtonDefault className={`${variant}`}>{children}</ButtonDefault>
    </div>
  );
};

export default Button;
