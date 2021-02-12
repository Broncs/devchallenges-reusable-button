import React from 'react';
import Button from './Button';

const Buttons = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <div>
        <code>&lt;Button/&gt;</code>
        <Button />
        <code>&:hover, &:focus</code>
        <Button />
      </div>
      <div>
        <code>&lt;Button variant="outline"/&gt;</code>
        <Button variant="outline" />
        <code>&:hover, &:focus</code>
        <Button />
      </div>
      <div>
        <code>&lt;Button variant="text"/&gt;</code>
        <Button variant="text" />
        <code>&:hover, &:focus</code>
        <Button />
      </div>
      <div>
        <code>&lt;Button disableShadow/&gt;</code>
        <Button />
      </div>
      <div>
        <code>&lt;Button disabled/&gt;</code>
        <Button />
        <code>&lt;Button variant="text" disabled/&gt;</code>
        <Button />
      </div>
      <div>
        <code>&lt;Button startIcon="local_grocery_store"/&gt;</code>
        <Button />
        <code>&lt;Button endIcon="local_grocery_store"/&gt;</code>
        <Button />
      </div>
      <div>
        <code>&lt;Button size="sm"/&gt;</code>
        <Button />
        <code>&lt;Button size="md"/&gt;</code>
        <Button />
        <code>&lt;Button size="lg"/&gt;</code>
        <Button />
      </div>
      <div>
        <code>&lt;Button color="default"/&gt;</code>
        <Button />
        <code>&lt;Button color="primary"/&gt;</code>
        <Button />
        <code>&lt;Button color="secondary"/&gt;</code>
        <Button />
        <code>&lt;Button color="damger"/&gt;</code>
        <Button />
      </div>
      <div>
        <code>&lt;&:hover, &:focus&gt;</code>
        <Button />
        <code>&lt;&gt;</code>
        <Button />
        <code>&lt;&gt;</code>
        <Button />
        <code>&lt;&gt;</code>
        <Button />
      </div>
    </div>
  );
};

export default Buttons;
