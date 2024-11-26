import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  max-width: 200px;
  width: 100%;
  min-height: 100%;
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  @media (max-width: 480px) {
    gap: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    text-align: center;

    @media (max-width: 768px) {
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin-top: 30px;
    }

    @media (max-width: 480px) {
      justify-content: center;
      align-items: center;
      gap: 15px;
      padding: 10px 0;
    }

    p {
      font-size: 1.2rem;
      color: rgb(255, 140, 5);
      line-height: 1.8rem;
      font-weight: 700;
      width: 100%;
      margin-top: 32px;
      padding: 20px 0px;
      overflow: hidden;

      @media (max-width: 768px) {
        font-size: 1rem;
        padding: 10px 0;
        text-align: center;
      }

      @media (max-width: 480px) {
        font-size: 1rem;
        padding: 8px 0;
        text-align: center;
      }
    }

    strong {
      font-size: 1.2rem;
      color: #363636;
      font-weight: 800;
      line-height: 1.5rem;
      overflow: hidden;

      @media (max-width: 768px) {
        font-size: 1.4rem;
      }

      @media (max-width: 480px) {
        font-size: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
      }
    }
  }
`;

export const CardImage = styled.img`
  height: auto;
  position: absolute;
  top: -50px;
  object-fit: cover;
  width: 150px;

  @media (max-width: 768px) {
    width: 120px;
    top: -30px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 80px;
    top: -20px;
  }
`;
