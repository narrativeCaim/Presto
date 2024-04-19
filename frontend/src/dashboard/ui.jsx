import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { Input } from '@mui/material';

export const Dashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  overflow: auto;
  min-height: 0; 
`;

export const ModalBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  maxWidth: '600px',
  backgroundColor: 'white',
  border: '1px solid #ddd',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  padding: 32,
});

export const StyledInput = styled(Input)({
  '&::before': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
  },
  '&::after': {
    borderBottom: '2px solid #304ffe',
  },
  '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.87)',
  },
  input: {
    padding: '10px 0'
  }
});

export const PresentationCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  min-width: 100px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  height: auto;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
  }

  @media (min-width: 600px) {
    width: 48%;
    height: auto;;
  }

  @media (min-width: 900px) {
    width: 31%; 
    height: auto;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Thumbnail = styled.div`
  width: 80%;
  height: 150px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 20px; 
`;

export const StyledButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none; 
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5); 
  }

  &:active {
    background-color: #004085; 
  }
`;
