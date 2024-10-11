import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Definindo os breakpoints
const medias = {
  large: '(max-width: 1200px)',
  medium: '(max-width: 992px)',
  small: '(max-width: 768px)',
  xsmall: '(max-width: 576px)',
  xxsmall: '(max-width: 400px)',
};

export const Container = styled.div`
  width: 100%;
  min-height: 72px;
  background-color: #1f1f1f;
  padding: 0 56px;

  @media ${medias.large} {
    padding: 0 40px;
  }

  @media ${medias.medium} {
    padding: 0 30px;
  }

  @media ${medias.small} {
    padding: 0 20px;
  }

  @media ${medias.xsmall} {
    padding: 0 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  @media ${medias.medium} {
    justify-content: space-around;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 72px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    hr {
      height: 24px;
      border: 1px solid #625e5e;
    }
  }

  @media ${medias.small} {
    div {
      gap: 10px;

      hr {
        height: 18px;
      }
    }
  }

  @media ${medias.xsmall} {
    div {
      gap: 5px;
    }
  }
`;

export const LinksHeader = styled(Link)`
  color: ${(props) => (props.$isActive ? '#9758a6' : '#fff')};
  border-bottom: ${(props) => props.$isActive && '1px solid #9758a6'};
  padding-bottom: 3px;
  font-size: 16px;
  transition: 300ms all;

  &:hover {
    color: #9758a6;
  }

  @media ${medias.small} {
    font-size: 14px;
  }

  @media ${medias.xsmall} {
    font-size: 12px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;

  @media ${medias.medium} {
    gap: 32px;
  }

  @media ${medias.small} {
    gap: 20px;
  }

  @media ${medias.xsmall} {
    gap: 10px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;

  p {
    color: #fff;
    line-height: 90%;
    font-weight: 300;
    overflow: hidden;

    span {
      font-weight: 700;
      color: #9758a6;
    }
  }

  @media ${medias.small} {
    font-size: 12px;
    gap: 8px;
  }
`;

export const Logout = styled.button`
  color: #ff3205;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media ${medias.small} {
    font-size: 12px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media ${medias.xsmall} {
    gap: 5px;
  }
`;
