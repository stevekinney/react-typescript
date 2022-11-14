Alright, let's get the blood flowing a bit and take a look at this component hiding out in `src/components/control-panel.jsx`:

````tsx
import PropTypes from 'prop-types';

const ControlPanel = ({ name, onChange }) => {
  return (
    <form
      className="flex flex-row gap-4 text-white bg-primary-10"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

ControlPanel.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default ControlPanel;
````

## Exercise

* Change the file extension form `.jsx` to `.tsx`.
* Get rid of those gnarly `propTypes` and add types to our props. You can either do it inline or you can create a new type called `ControlPanelProps`.
* See if you can add another prop to `NameBadge` called `greeting`. This prop should replace "HELLO" on the badge.
* See if you can figure out how to type the `onChange` handler.
  * **Hint**: Use what you have learned about hovering over properties to figure out what types they use.
  * If you can't figure it out, you can cheat and the `any` type. But, be warned: this is the *only* time that I'm going to allow you to use the `any` for the remainder of our time together.

If you're curious, you can check out the solution [here](Refactoring%20from%20PropTypes,%20a%20solution.md).
