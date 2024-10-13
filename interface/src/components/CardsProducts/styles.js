import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: max-content;
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin-top: 50px;

    p {
      font-size: 18px;
      color: rgb(255, 140, 5);
      line-height: 30px;
      font-weight: 700;
      width: 100%;
      margin-top: 40px;
      padding: 15px 0;
      overflow: hidden;
    }

    strong {
      font-size: 22px;
      color: #363636;
      font-weight: 800;
      line-height: 20px;
      overflow: hidden;
    }
  }
`;

export const CardImage = styled.img`
  height: auto;
  position: absolute;
  top: -50px;
`;
