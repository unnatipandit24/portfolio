import { skills } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container section">
        <SectionHeading eyebrow="Skills" title="The tools behind the work." />
        <div className="skills">
          {skills.map((s, i) => (
            <Reveal key={s.group} className="skills__item" delay={(i % 2) * 90}>
              <div className="skills__group">{s.group}</div>
              <div className="muted">{s.items}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
