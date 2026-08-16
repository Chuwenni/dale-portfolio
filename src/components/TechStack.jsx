import SectionTitle from "./SectionTitle";
import { stackItems } from "../data/siteData";

export default function TechStack() {
  return (
    <section className="section" id="stack">
      <SectionTitle
        eyebrow="TECHNOLOGIES"
        title="My current stack"
        description="The tools and technologies I use while building, learning, and improving as a full-stack developer."
      />

      <div className="stack-grid">
        {stackItems.map((item) => (
          <div className="stack-item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
