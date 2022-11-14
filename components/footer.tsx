import clsx from "clsx";
import Link from "next/link";

const FooterLink = ({
  href,
  site,
  username,
}: WithChildren & { href: string; site: string; username: string }) => (
  <Link href={href}>
    <a className="underline underline-offset-2">
      <span className="hidden sm:inline">
        <strong>{username}</strong> on{" "}
      </span>
      <span className="font-semibold sm:font-normal">{site}</span>
    </a>
  </Link>
);

const Footer = ({ className }: WithClassName) => (
  <footer
    className={clsx(
      "sticky flex place-content-center gap-4 bg-slate-900 p-4 text-white",
      className
    )}
  >
    <FooterLink
      href="https://twitter.com/stevekinney"
      username="@stevekinney"
      site="Twitter"
    />
    <FooterLink
      href="https://github.com/stevekinney"
      username="@stevekinney"
      site="Github"
    />
    <FooterLink
      href="https://frontendmasters.com/teachers/steve-kinney/"
      username="Steve Kinney"
      site="Frontend Masters"
    />
  </footer>
);

export default Footer;
