import "./Section.css";

interface Props {
  children: React.ReactNode;
}

export default function Section({ children }: Props) {
  return <section className="mainSection">{children}</section>;
}
