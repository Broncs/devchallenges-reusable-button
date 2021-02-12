import React from 'react';
import Button from './Button';

const Buttons = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <div>
        <code>&lt;Button/&gt;</code>
        <Button>Default</Button>
        <code>&:hover, &:focus</code>
        <Button>Default</Button>
      </div>
      <div>
        <code>&lt;Button variant="outline"/&gt;</code>
        <Button variant="outline">Default</Button>
        <code>&:hover, &:focus</code>
        <Button variant="outline" color="primary">
          Default
        </Button>
      </div>
      <div>
        <code>&lt;Button variant="text"/&gt;</code>
        <Button variant="text" color="secondary"></Button>
        <code>&:hover, &:focus</code>
        <Button variant="text" color="primary">
          Default
        </Button>
      </div>
      <div>
        <code>&lt;Button disableShadow/&gt;</code>
        <Button disableShadow>Default</Button>
      </div>
      <div>
        <code>&lt;Button disabled/&gt;</code>
        <Button disabled>Default</Button>
        <code>&lt;Button variant="text" disabled/&gt;</code>
        <Button variant="text" disabled>
          Default
        </Button>
      </div>
      <div>
        <code>&lt;Button startIcon="local_grocery_store"/&gt;</code>
        <Button>Default</Button>
        <code>&lt;Button endIcon="local_grocery_store"/&gt;</code>
        <Button>Default</Button>
      </div>
      <div>
        <code>&lt;Button size="sm"/&gt;</code>
        <Button size="sm">Default</Button>
        <code>&lt;Button size="md"/&gt;</code>
        <Button size="md">Default</Button>
        <code>&lt;Button size="lg"/&gt;</code>
        <Button size="lg">Default</Button>
      </div>
      <div>
        <code>&lt;Button color="default"/&gt;</code>
        <Button color="default">Default</Button>
        <code>&lt;Button color="primary"/&gt;</code>
        <Button color="primary">Default</Button>
        <code>&lt;Button color="secondary"/&gt;</code>
        <Button color="secondary">Default</Button>
        <code>&lt;Button color="danger"/&gt;</code>
        <Button color="danger">Default</Button>
      </div>
      <div>
        <code>&lt;&:hover, &:focus&gt;</code>
        <Button color="default">Default</Button>
        <code>&lt;&gt;</code>
        <Button color="primary">Default</Button>
        <code>&lt;&gt;</code>
        <Button color="secondary">Default</Button>
        <code>&lt;&gt;</code>
        <Button color="danger">Default</Button>
      </div>
    </div>
  );
};

export default Buttons;
