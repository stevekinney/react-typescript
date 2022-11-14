import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';

const codeBlockLanguage = /language-(\w+)/;

const getCodeBlockLanguage = (className?: string) => {
  const match = codeBlockLanguage.exec(clsx(className));
  return match ? match[1] : null;
};

const components = {};

const Markdown = ({ children, ...options }: ReactMarkdownOptions) => {
  return (
    <div className="content-index">
      <ReactMarkdown
        {...options}
        components={{ ...components, ...options.components }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
