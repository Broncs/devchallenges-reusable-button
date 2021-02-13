import React from 'react';
import Button from './Button';
import { FaBeer } from 'react-icons/fa';

import styled from 'styled-components';

const ButtonsMain = styled.main`
  padding: 0 30px;
  max-width: 1200px;
  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
`;

const ButtonsWrapper = styled.div`
  .buttons-container {
    display: flex;
    flex-wrap: wrap;

    margin: 50px 0;
    div {
      margin-top: 10px;
    }
  }
  .color-types {
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-end;

    & > div {
      min-width: 190px;
    }
  }
  .types {
    min-width: 250px;
  }

  .types {
    min-width: none;
  }

  .icon-type {
    margin-right: 100px;
  }

  code {
    display: block;
    margin-bottom: 10px;
  }
`;

const Buttons = () => {
  return (
    <ButtonsMain>
      <h1>Buttons</h1>
      <ButtonsWrapper>
        <div className="buttons-container">
          <div className="types">
            <code>&lt;Button/&gt;</code>
            <Button>Default</Button>
          </div>
          <div>
            <code>&:hover, &:focus</code>
            <Button hover="default-hover">Default</Button>
          </div>
        </div>
        <div className="buttons-container ">
          <div className="types">
            <code>&lt;Button variant="outline"/&gt;</code>
            <Button variant="outline" color="primary">
              Default
            </Button>
          </div>
          <div>
            <code>&:hover, &:focus</code>
            <Button variant="outline" color="primary">
              Default
            </Button>
          </div>
        </div>
        <div className="buttons-container ">
          <div className="types">
            <code>&lt;Button variant="text"/&gt;</code>
            <Button variant="text" color="primary"></Button>
          </div>
          <div>
            <code>&:hover, &:focus</code>
            <Button variant="text" color="primary">
              Default
            </Button>
          </div>
        </div>
        <div className="buttons-container">
          <div>
            <code>&lt;Button disableShadow/&gt;</code>
            <Button disableShadow color="primary">
              Default
            </Button>
          </div>
        </div>
        <div className="buttons-container types">
          <div className="types">
            <code>&lt;Button disabled/&gt;</code>
            <Button disabled>Default</Button>
          </div>
          <div>
            <code>&lt;Button variant="text" disabled/&gt;</code>
            <Button variant="text" disabled>
              Default
            </Button>
          </div>
        </div>
        <div className="buttons-container">
          <div className="icon-type">
            <code>&lt;Button startIcon=&lt;FaBeer/&gt; /&gt;</code>
            <Button startIcon={<FaBeer />} color="primary">
              Default
            </Button>
          </div>
          <div>
            <code>&lt;Button endIcon=&lt;FaBeer/&gt; /&gt;</code>
            <Button endIcon={<FaBeer />} color="primary">
              Default
            </Button>
          </div>
        </div>
        <div className="buttons-container color-types">
          <div>
            <code>&lt;Button size="sm"/&gt;</code>
            <Button size="sm" color="primary">
              Default
            </Button>
          </div>
          <div>
            <code>&lt;Button size="md"/&gt;</code>
            <Button size="md" color="primary">
              Default
            </Button>
          </div>
          <div>
            <code>&lt;Button size="lg"/&gt;</code>
            <Button size="lg" color="primary">
              Default
            </Button>
          </div>
        </div>
        <div className="buttons-container color-types">
          <div>
            <code>&lt;Button color="default"/&gt;</code>
            <Button color="default">Default</Button>
          </div>
          <div>
            <code>&lt;Button color="primary"/&gt;</code>
            <Button color="primary">Default</Button>
          </div>

          <div>
            <code>&lt;Button color="secondary"/&gt;</code>
            <Button color="secondary">Default</Button>
          </div>
          <div>
            <code>&lt;Button color="danger"/&gt;</code>
            <Button color="danger">Default</Button>
          </div>
        </div>
        <div className="buttons-container color-types">
          <div>
            <code>&lt;&:hover, &:focus&gt;</code>
            <Button color="default" hover="default-hover">
              Default
            </Button>
          </div>
          <div>
            <Button color="primary" hover="primary-hover">
              Primary
            </Button>
          </div>
          <div>
            <Button color="secondary" hover="secondary-hover">
              Secondary
            </Button>
          </div>
          <div>
            <Button color="danger" hover="danger-hover">
              Danger
            </Button>
          </div>
        </div>
      </ButtonsWrapper>
    </ButtonsMain>
  );
};

export default Buttons;
