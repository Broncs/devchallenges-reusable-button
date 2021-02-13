import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import useWindowDimensions from '../hooks/useWindowDimensions';

const SideBarWrapper = styled.div`
  height: 100vh;

  background-color: #fafbfd;
  padding: 0 0 0 30px;
  box-sizing: border-box;

  .logo-dev {
    color: #f7542e;
  }

  .active-link {
    color: black;
  }

  ul {
    display: flex;
    height: 90%;
    flex-direction: column;
    justify-content: center;
    color: #9e9e9e;
    line-height: 20px;

    list-style: none;

    padding: 0;
  }

  li {
    margin-bottom: 30px;
  }
  a {
    text-decoration: none;
    color: #9e9e9e;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
  }
  .nav-hamburguer {
    display: none;
  }

  @media screen and (max-width: 600px) {
    height: auto;
    max-width: 100%;
    padding: 0 20px;

    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-hamburguer {
      display: block;
      font-size: 25px;
      cursor: pointer;

      &:hover {
        color: #f7542e;
      }
    }
  }
`;

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 600) {
      setIsOpen(true);
    }
  }, [width]);

  return (
    <SideBarWrapper>
      <div className="menu">
        <h2>
          <span className="logo-dev">Dev</span>challenges.io
        </h2>
        <AiOutlineMenu
          className="nav-hamburguer"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>

      <ul style={{ display: isOpen ? 'flex' : 'none' }}>
        <li>
          <a href="#">Colors</a>
        </li>
        <li>
          <a href="#">Typography</a>
        </li>
        <li>
          <a href="#">Spaces</a>
        </li>
        <li>
          <a className="active-link" href="#">
            Button
          </a>
        </li>
        <li>
          <a href="#">Inputs</a>
        </li>
        <li>
          <a href="#">Grid</a>
        </li>
      </ul>
    </SideBarWrapper>
  );
};

export default SideBar;
