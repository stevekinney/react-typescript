Things can get a little tricky when we don't have a default value to start out with. TypeScript can't help up out and make any assumptions on our behalf. Let's consider this code for a moment.

````ts
import { useEffect, useState } from 'react';
import InspirationalQuote from './inspirational-quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

const Application = () => {
  const [quote, setQuote] = useState({ content: '', source: '' });

  useEffect(() => {
    fetch('/api/quotes/random')
      .then((res) => res.json())
      .then(({ quote }) => setQuote(quote));
  }, []);

  if (!quote) return <Loading />;
  return (
    <main>
      <InspirationalQuote content={quote.content} source={quote.source} />
    </main>
  );
};

export default Application;
````

It doesn't even matter what `InspirationalQuote` is just yet or what properties it takes.

The code won't compile and we'll get the following error:

 > 
 > Property 'content' does not exist on type 'never'.

This kind of makes sense if we follow along with the rational that we've been establishing, right? Consider this line:

````ts
const [quote, setQuote] = useState();
````

Well, we're passing `undefined` to `useState`. If TypeScriptn was smart enough to assume that the number we passed to the `useState` in our counter example meant that `count` was a number, then the logic follows that `quote` is of the type `undefined.`

Then we move on to this line:

````ts
if (!quote) return <Loading />;
````

Okay, quote is falsy, which `undefined` *is*, then show the `<Loading />` component. Well, if `quote` is undefined and we handled the case where `quote` is `undefined`, then as we move along in the code, `quote` can't be `undefined` anymore and we're out of options. So, TypeScript assigns it a special type: `never`.

`never` is the lowest common demoninator and *certainly* doesn't have a property like `content` or `source` on in—mostly, because it doesn't have *anything*.

## Solving the problem

### Using an empty value

So, what do we do? We have a few options:

We could give it an empty value (e.g. `{ content: '', source: '' }`);

````ts
const [quote, setQuote] = useState({ content: '', source: '' });
````

This works, but it has two problems:

* We broke our loading functionality since `!quote` will never be a case.
* It's not totally clear to TypeScript that `source` is optional.

### Providing a type variable

We could also step in and help TypeScript out a bit by providing a type variable. If you hover over `useState` you'll see something that starts with:

````ts
useState<{
  content: string;
  source: string;
}>;
````

Well, we can step in and provide that service for TypeScript.

````ts
const [quote, setQuote] = useState<Quote | undefined>();
````

Now, everything works as expected.

* [ ] Style this example and make a little code sandbox.
