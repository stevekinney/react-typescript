import Link from "next/link";

const WithLink = ({
  children,
  href,
  className,
}: WithChildren & WithClassName & WithHref) => {
  if (!href) return <>{children}</>;
  return (
    <Link href={href}>
      <a href={href} className={className}>
        {children}
      </a>
    </Link>
  );
};

export default WithLink;
