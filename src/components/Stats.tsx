import { stats } from "../data";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="band band--sand">
      <div className="container stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} className="stats__item" delay={i * 90}>
            <CountUp value={s.value} />
            <div className="stats__label">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
