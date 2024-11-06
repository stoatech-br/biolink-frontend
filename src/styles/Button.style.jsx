'use client'

import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.backgroundButton};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundButtonTab}; 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.borderColor}; 
  }
`;
