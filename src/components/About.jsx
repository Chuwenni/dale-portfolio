import SectionTitle from "./SectionTitle";
import { aboutContent } from "../data/siteData";

export default function About() {
  return (
    <section className="section" id="about">
      <SectionTitle
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
        description={aboutContent.description}
      />

      <div className="about-grid">
        <div className="about-card">
          <div className="about-text">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="about-highlights">
          {aboutContent.highlights.map((item) => (
            <div className="about-highlight" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
