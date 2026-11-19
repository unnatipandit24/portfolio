import { certifications, education } from "../data";
import Logo from "./Logo";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="band band--celadon">
      <div className="container section grid-2">
        <Reveal as="article" className="card card--cream card--hover">
          <Logo src={education.logo} alt="University of Lucknow logo" />
          <div className="card__eyebrow">Education</div>
          <h3 className="h3--lg">{education.school}</h3>
          <div className="muted">{education.degree}</div>
          <div className="muted">{education.period}</div>
        </Reveal>
        <Reveal as="article" className="card card--cream card--hover" delay={120}>
          <Logo src={certifications.logo} alt="AWS Certified Cloud Practitioner badge" />
          <div className="card__eyebrow">Certifications</div>
          <h3 className="h3--lg">{certifications.title}</h3>
          {certifications.details.map((d) => (
            <div key={d} className="muted">
              {d}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}