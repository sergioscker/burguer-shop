import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 72px;
  background-color: #1f1f1f;
  padding: 0 56px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
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
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
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

    span {
      font-weight: 700;
      color: #9758a6;
    }
  }
`;

export const Logout = styled.button`
  color: #ff3205;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;