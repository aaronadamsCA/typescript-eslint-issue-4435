import { Link } from "theme-ui";

export type OutboundLinkProps = {
  href: string;
  children: string;
};

export const OutboundLink = (props: OutboundLinkProps): JSX.Element => {
  const trackClick = (): void => {
    window.analytics.track("foo");
  };

  return <Link onClick={trackClick} {...props} />;
};
