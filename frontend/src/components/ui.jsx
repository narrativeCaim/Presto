
import styled from '@emotion/styled';

export const LogoutButton = styled.button`
  position: fixed;
  bottom: 20px; 
  right: 20px;
  background-color: #ff4b4b;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 10px 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ff2e2e;
  }
`;
