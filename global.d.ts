type WithClassName = {
  className?: string;
};

type WithChildren = {
  children?: React.ReactNode;
};

type WithHref = {
  href?: string;
};

type MarkdownDocument = {
  slug: string;
  meta: Record<string, string>;
  content: string;
};
