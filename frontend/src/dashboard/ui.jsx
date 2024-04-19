import styled from '@emotion/styled';

export const Dashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 为卡片之间提供间隔 */
  justify-content: center;
  padding: 20px;
`;

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
  overflow: hidden;
  width: calc(100vw - 40px);
  height: calc((100vw - 40px) / 2);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
  }

  @media (min-width: 600px) {
    width: calc(50vw - 40px);
    height: calc((50vw - 40px) / 2);
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
  overflow: hidden;
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
  // background-color: #f8f9fa; 
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
