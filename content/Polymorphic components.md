We see polymoprhic components a lot when we're putting together a design system. You might have a `Container` component where you want some flexibility when it comes to what semantic HTML element that it's using under the hood. Here we could use a union to define what kind of element you're willing to accept.

````typescript
import React from 'react';

type Props = React.PropsWithChildren<{
  as: 'div' | 'section' | 'aside';
}>;

function Container({ as: Component = 'div', children }: Props) {
  return <Component className={styles.container}>{children}</Component>;
}
````

([Source](https://onesignal.com/blog/effective-typescript-for-react-applications/#accessible-components-with-polymorphism))

## Extension

We can expand on this to do something like this:

````ts
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type ButtonType = 'a' | 'button';

type ButtonProps<T extends ButtonType, E = ComponentPropsWithoutRef<T>> = {
  as?: T;
} & PropsWithChildren<E>;

const Button = <T extends ButtonType = 'button'>({
  as,
  ...props
}: ButtonProps<T>): JSX.Element => {
  if (as === 'a') {
    return <a {...props}>{props.children}</a>;
  }
  return <button {...props}>{props.children}</button>;
};

const Example = () => {
  return (
    <div>
      <Button type="submit">Hello</Button>
      <Button as="a" href="http://wow.com">
        Link
      </Button>
    </div>
  );
};

export default Example;
````
