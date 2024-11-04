
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;