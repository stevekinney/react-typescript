* `React.PropsWithChildren`
* `React.ComponentPropsWithoutRef`
* `FunctionalComponent<Props>` and React 18
* `React.HTMLProps`

Let's say you want to extend props for a given React component to take children. You can use `React.PropsWithChildren`.

This might look something like this:

````tsx
type ButtonProps = React.PropsWithChildren<{
  onClick: () => void;
}>;

const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
````

You also have `React.ComponentPropsWithoutRef`, which you could use as follows:

````tsx
type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};
````

Now, `Button` has all of the some props as the native `<button>` element from the DOM.

(**Note**: This no longer works in React 18.)

You can also use a [`FunctionalComponent<Props>`](https://www.newline.co/@bespoyasov/how-to-define-props-with-children-in-react-typescript-app--56bd18be#using-functioncomponent-or-fc) to accomplish a similar goal:

````tsx
type ComponentProps = {
  foo: string;
};

const Component: React.FunctionComponent<ComponentProps> = ({ foo }) => (
  <span>{foo}</span>
);
````

You can also extend a built-in HTML element, which supports children:

````tsx
export interface Props extends React.HTMLProps<HTMLDivElement> {
  heading: string;
}
````

Now, you can do something like this:

````tsx
import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

const Component: React.FC<PropsWithChildren<ComponentProps>> = ({
  name,
  children,
  ...rest
}) => {
  return (
    <div>
      <div {...rest}>{`Hello, ${name}!`}</div>
      {children}
    </div>
  );
};
````
