import React from 'react';
import styled, { css } from 'styled-components';

const colors = {
  color: {
    defualt: '#E0E0E0',
    primary: '#2962FF',
    secondary: '#455A64',
    danger: '#D32F2F',
  },
  hover: {
    defualt: '#AEAEAE',
    primary: '#0039CB',
    secondary: '#1C313A',
    danger: '#9A0007',
  },
};

const ButtonDefault = styled.button`
  /* Default */
  &.btn {
    padding: 0.5rem 1rem;

    background: #e0e0e0;

    color: #3f3f3f;

    border: none;

    font-family: Noto Sans JP, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background: #aeaeae;
    }
  }

  &.btn.disabledButton {
    background: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
  }

  /* Outline */
  &.btn.outline {
    background: none;
    border: 1px solid #3f3f3f;
    color: #3f3f3f;
  }
  &.btn.outline.default {
    background: none;
  }

  &.btn.outline.primary {
    background: none;
    border: 1px solid ${({ colors }) => colors.color.primary};
    color: ${({ colors }) => colors.color.primary};
  }
  &.btn.outline.secondary {
    background: none;
    border: 1px solid ${({ colors }) => colors.color.secondary};
    color: ${({ colors }) => colors.color.secondary};
  }
  &.btn.outline.danger {
    background: none;
    border: 1px solid ${({ colors }) => colors.color.danger};
    color: ${({ colors }) => colors.color.danger};
  }

  /* Text */

  &.btn.text,
  &.btn.text.primary,
  &.btn.text.secondary,
  &.btn.text.danger {
    background: transparent;
    border: none;
    box-shadow: none;
  }
  &.btn.text.primary {
    color: ${({ colors }) => colors.color.primary};
    &:hover {
      border: 1px solid ${({ colors }) => colors.color.primary};
    }
  }
  &.btn.text.secondary {
    color: ${({ colors }) => colors.color.secondary};
    &:hover {
      border: 1px solid ${({ colors }) => colors.color.secondary};
    }
  }
  &.btn.text.danger {
    color: ${({ colors }) => colors.color.danger};
    &:hover {
      border: 1px solid ${({ colors }) => colors.color.danger};
    }
  }

  &.btn.disableShadow {
    box-shadow: none;
  }

  &.btn.sm,
  &.btn.md,
  &.btn.lg {
    padding: ${({ size }) =>
      size === 'sm'
        ? '0.4rem 0.8rem'
        : size === 'md'
        ? '0.5rem 1rem'
        : size === 'lg'
        ? '0.7rem 1.4rem'
        : '0.5rem 1rem'};
  }

  &.btn.default {
    background: ${({ colors }) => colors.color.default};
    color: #3f3f3f;
  }

  &.btn.primary {
    background: ${({ colors }) => colors.color.primary};
    box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
    color: #ffffff;
  }

  &.btn.secondary {
    background: ${({ colors }) => colors.color.secondary};
    box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
    color: #ffffff;
  }
  &.btn.danger {
    background: ${({ colors }) => colors.color.danger};
    box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
    color: #ffffff;
  }
`;

const Button = ({
  children = 'Default',
  variant,
  disableShadow,
  disabled,
  size,
  color,
  startIcon,
  endIcon,
}) => {
  return (
    <div>
      <ButtonDefault
        className={`btn ${variant} 
         ${disableShadow ? 'disableShadow' : null} 
         ${disabled ? 'disabledButton' : null} 
         ${size} 
         ${color}
          
         `}
        disabled={disabled}
        size={size}
        color={color}
        colors={colors}
      >
        {children}
      </ButtonDefault>
    </div>
  );
};

export default Button;
