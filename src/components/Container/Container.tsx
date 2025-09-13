import "./Container.css";

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return <section className="container">{children}</section>;
}
