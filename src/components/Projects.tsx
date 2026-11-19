import { profile, projects } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="band band--bordeaux">
      <div className="container section">
        <SectionHeading eyebrow="Projects" title="Built, tested and shipped." onDark />
        <div className="grid-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} as="article" className="card card--chocolate card--hover" delay={i * 120}>
              <div className="project__date">{p.date}</div>
              <h3 className="project__name">{p.name}</h3>
              <p className="project__summary">{p.summary}</p>
              <p className="project__detail">{p.detail}</p>
              <div className="project__stack">{p.stack}</div>
              <a href={profile.github} className="link-light link-arrow">
                View on GitHub <span aria-hidden="true">›</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
