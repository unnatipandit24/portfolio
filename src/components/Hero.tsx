import { useState } from "react";
import { profile } from "../data";
import { GitHubIcon, LinkedInIcon, MailIcon, SendIcon } from "./Icons";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="top" className="hero container">
      <div className="hero__copy">
        <div className="hero__socials intro" style={{ ["--i" as string]: 4 }}>
          <a href={profile.linkedin} aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={profile.github} aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
        <div className="hero__text">
          <h1 className="intro" style={{ ["--i" as string]: 0 }}>Hi, I am {profile.firstName}</h1>
          <div className="hero__title intro" style={{ ["--i" as string]: 1 }}>{profile.title}</div>
          <p className="intro" style={{ ["--i" as string]: 2 }}>{profile.intro}</p>
          <div className="hero__cta intro" style={{ ["--i" as string]: 3 }}>
            <a href="#contact" className="button">
              Contact me <SendIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="hero__photo-wrap intro intro--photo" style={{ ["--i" as string]: 2 }}>
        <div className="hero__photo">
          {photoFailed ? (
            <span>Your photo goes here</span>
          ) : (
            <img
              src={profile.photo}
              alt={profile.name}
              onError={() => setPhotoFailed(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
