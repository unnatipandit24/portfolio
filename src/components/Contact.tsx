import { profile } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="band band--bordeaux contact">
      <div className="container contact__inner">
        <Reveal as="h2">Open to React Native and software engineering roles.</Reveal>
        <Reveal as="p" delay={100}>
          If your team needs someone who has taken features from API contract to
          push notification and payment, write to me.
        </Reveal>
        <Reveal className="contact__actions" delay={200}>
          <a href={`mailto:${profile.email}`} className="button button--light">
            Email me
          </a>
          <a href={profile.linkedin} className="link-light link-arrow">
            LinkedIn <span aria-hidden="true">›</span>
          </a>
          <a href={profile.github} className="link-light link-arrow">
            GitHub <span aria-hidden="true">›</span>
          </a>
        </Reveal>
        <Reveal className="contact__address" delay={300}>
          {profile.email} · {profile.location}
        </Reveal>
      </div>
      <div className="container contact__legal">{profile.name}, 2026</div>
    </footer>
  );
}
