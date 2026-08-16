import SectionTitle from "./SectionTitle";

export default function JavaBackground() {
  return (
    <section className="section" id="background">
      <SectionTitle
        eyebrow="BACKGROUND"
        title="Java and software fundamentals"
        description="A strong object-oriented programming foundation that helps me structure clear logic, scalable systems, and better application design."
      />

      <div className="java-card">
        <strong className="java-symbol">Java</strong>
        <p>
          My Java background includes classes, objects, methods, inheritance,
          abstraction, and the core principles of object-oriented programming.
          That foundation helps me understand application architecture more
          clearly and makes me more confident when I move into backend and full
          stack development.
        </p>
      </div>
    </section>
  );
}
