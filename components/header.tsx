import clsx from 'clsx';
import WithLink from './with-link';

const Header = ({ className }: WithClassName) => (
  <header
    className={clsx(
      'bg-primary-50 p-4 text-center md:p-8 md:text-left',
      className,
    )}
  >
      <div className="flex">
        <WithLink href="/">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-light transition-all border-b-4 w-fit border-primary-500 hover:border-primary-300">
              React && TypeScript
            </h1>
            <p>v2</p>
          </div>
        </WithLink>
        <a href="https://frontendmasters.com/courses/react-typescript-v2" className="button ml-auto underline" target="_blank" rel="noopener">Watch on Frontend Masters</a>
      </div>
  </header>
);

export default Header;
