export interface LinkProps {
  children: React.ReactNode;
  url: string;
}

const Link = ({ children, url }: LinkProps) => {
  return <a href={url}>{children}</a>;
};

export default Link;
