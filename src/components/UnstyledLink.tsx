import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  outside?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

export default function UnstyledLink({
  children,
  href,
  outside,
  className,
  ...rest
}: UnstyledLinkProps) {
  const linkOutside =
    outside !== undefined
    ? outside
    : href && !href.startsWith('/') && !href.startsWith('#');

  if (linkOutside) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
        className={clsx(className, 'cursor-newtab')}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a {...rest} className={className}>
        {children}
      </a>
    </Link>
  );
}
