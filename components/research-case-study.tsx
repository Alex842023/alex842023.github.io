import { researchStudy } from "../data/portfolio";

export default function ResearchCaseStudy() {
  return (
    <section className="research-study section shell" id="research" aria-labelledby="research-title">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span className="section-number">RESEARCH /</span> PENN STATE · MAY–AUG 2026</div>
          <h2 id="research-title">{researchStudy.title}</h2>
        </div>
        <p>{researchStudy.intro}</p>
      </div>
      <div className="research-overview">
        <div className="research-question">
          <span className="eyebrow">THE RESEARCH QUESTION</span>
          <p>{researchStudy.question}</p>
        </div>
        <aside className="research-finding" aria-labelledby="research-finding-title">
          <strong>{researchStudy.finding.value}</strong>
          <div>
            <h3 id="research-finding-title">{researchStudy.finding.title}</h3>
            <p>{researchStudy.finding.detail}</p>
          </div>
        </aside>
      </div>
      <div className="research-workstreams">
        {researchStudy.workstreams.map((work, index) => (
          <article className="research-stream" key={work.id} aria-labelledby={`research-${work.id}`}>
            <div className="research-stream-heading">
              <span className="research-step" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3 id={`research-${work.id}`}>{work.title}</h3>
            </div>
            <dl>
              <div><dt>What I built</dt><dd>{work.built}</dd></div>
              <div><dt>Why it mattered</dt><dd>{work.purpose}</dd></div>
            </dl>
            <div className="tags" aria-label="Methods and tools">{work.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
