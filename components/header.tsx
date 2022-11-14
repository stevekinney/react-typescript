import clsx from 'clsx';
import WithLink from './with-link';

const Header = ({ className }: WithClassName) => (
  <header
    className={clsx(
      'bg-primary-50 p-4 text-center md:p-8 md:text-left',
      className,
    )}
  >
    <WithLink href="/">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-light transition-all border-b-4 w-fit border-primary-500 hover:border-primary-300">
          React && TypeScript
        </h1>
        <p>Version Two</p>
      </div>
    </WithLink>
  </header>
);

export default Header;
