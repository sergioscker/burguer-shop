import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 40px;
  padding-bottom: 40px;
  overflow-x: hidden;

  .sliders-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 40px;

    @media (max-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multiple-carousel__arrow--left {
    left: 60px;
    top: 10px;
    background-color: #9758a6;

    @media (max-width: 768px) {
      left: 30px;
    }

    @media (max-width: 480px) {
      left: 20px;
    }
  }

  .react-multiple-carousel__arrow--right {
    right: 100px;
    top: 20px;
    background-color: #9758a6;

    @media (max-width: 768px) {
      right: 60px;
    }

    @media (max-width: 480px) {
      right: 40px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #61a120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 4px;
    background-color: #61a120;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 50px 0;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin: 40px 0;

    &::after {
      width: 40px;
      height: 3px;
    }
  }
`;
