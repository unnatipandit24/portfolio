import { currentRole, pastRoles } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="band band--celadon">
      <div className="container section">
        <SectionHeading eyebrow="Experience" title="Three teams. One direction." />

        <Reveal as="article" className="card card--cream card--large card--hover">
          <div className="role">
            <div className="role__meta">{currentRole.period}</div>
            <h3>{currentRole.title}</h3>
            <div className="role__company">{currentRole.company}</div>
          </div>
          <div className="features">
            {currentRole.features.map((f, i) => (
              <Reveal key={f.title} className="feature" delay={120 + i * 80}>
                <div className="feature__title">{f.title}</div>
                <div className="feature__text">{f.text}</div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="grid-2">
          {pastRoles.map((r, i) => (
            <Reveal key={r.title} as="article" className="card card--cream card--hover" delay={i * 120}>
              <div className="role">
                <div className="role__meta">{r.period}</div>
                <h3 className="h3--md">{r.title}</h3>
                <div className="role__company role__company--md">{r.company}</div>
              </div>
              {r.paragraphs.map((p) => (
                <p key={p} className="muted">
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}