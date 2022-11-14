Let's start by getting rid of the hard-coded data and replacing it with some state.

````ts
const [quotes, setQuotes] = useState([]);
````

You'll see have a bit of an issue here. Using an empty array should work in JavaScript, but TypeScript doesn't have enought information to do it's job and it assigns `quotes` to the following type:

````ts
const quotes: never[];
````

Luckily, we know how to handle this.

````ts
const [quotes, setQuotes] = useState<Quote[]>([]);
````

We'll also add some state for the count. This doesn't require anything special on our part and should just work. Pick a number that makes you happy.

````ts
const [quotes, setQuotes] = useState<Quote[]>([]);
const [count, setCount] = useState(10);
````

## Passing in the count and loading quotes

Now that we have a value that represents the number of quotes that we want to load, we can pass that into the `<Quotes />` component.

````tsx
<Quotes count={count}>/* … */</Quotes>
````

And, we can load the requisite number of quotes.

````ts
useEffect(() => {
  fetch(`/api/quotes?limit=${count}`)
    .then((res) => res.json())
    .then(({ quotes }) => setQuotes(quotes));
}, []);
````

## Changing the count

Our inclination would be to try something like this:

````tsx
<Quotes count={count} onChange={(e) => setCount(+e.target.value)}>
````

And that's a good inclination, but we haven't done the requisite work on the types inside of that component just yet.

````tsx
import { ChangeEventHandler, FormEventHandler, PropsWithChildren } from 'react';

type QuotesProps = {
  count: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const Quotes = ({
  children,
  count,
  onSubmit,
  onChange,
}: PropsWithChildren<QuotesProps>) => {
  // …
};
````

We also need to add the `onSubmit` event handler before it will compile, but that seems like a totally reasonable request, right?

## Submitting the form

Hmm, we clearly need to break out the ability to fetch posts out of the `useEvent` hook.

````ts
const fetchPosts = (count: number) => {
  fetch(`/api/quotes?limit=${count}`)
    .then((res) => res.json())
    .then(({ quotes }) => setQuotes(quotes));
};
````

We might feel fancy and try to do something like this to get that initial count.

````tsx
useEffect(() => fetchPosts(count), []);
````

**Quick side note**: You'll notice that the code will *not* compile if you omit the curly braces.

````tsx
const fetchPosts = (count: number) =>
  fetch(`/api/quotes?limit=${count}`)
    .then((res) => res.json())
    .then(({ quotes }) => setQuotes(quotes));
````

This won't work because `useEffect` expects thst either nothing is returned *or* a function that it will call when the component it can call when it unmounts. We need to make sure that the function returns `void` (e.g. `undefined`) instead.

````tsx
<Quotes
  count={count}
  onChange={(e) => setCount(+e.target.value)}
  onSubmit={() => fetchPosts(count)}
></Quotes>
````

You can see a solution [here](https://github.com/stevekinney/inspirational-quotes/tree/solution).
