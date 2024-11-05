import styled from 'styled-components';

const ToggleTheme = styled.button`
  background-color: none;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.borderColor}; 
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.borderColor}; 
  }
`;

export default ToggleTheme;
