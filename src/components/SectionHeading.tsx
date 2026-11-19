import Reveal from "./Reveal";

interface Props {
  eyebrow: string;
  title: string;
  onDark?: boolean;
}

export default function SectionHeading({ eyebrow, title, onDark = false }: Props) {
  return (
    <Reveal className={`section-heading${onDark ? " section-heading--dark" : ""}`}>
      <div className="section-heading__eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
    </Reveal>
  );
}
