import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  font-weight: 700;
  margin-top: 102px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 715px;
  display: flex;

  input {
    flex: 1;
    border: none;
    border-radius: 8px 0 0 8px;
    padding-left: 10px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: none;
    border-radius: 0 8px 8px 0;
    background-color: #04d631;
    color: #ffff;
    font-weight: 700;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.1, '#04d631')};
    }
  }
`;

export const Repositories = styled.div`
  max-width: 714px;
  margin-top: 120px;

  a {
    display: flex;
    width: 100%;
    text-decoration: none;
    align-items: center;
    background-color: #ffff;
    border-radius: 8px;
    padding: 20px 10px 10px 20px;
    transition: transform 0.5s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 32px;
    }

    img {
      display: flex;
      align-content: center;
      max-width: 80px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 20px;

      strong {
        font-size: 24px;
        font-weight: 700;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
