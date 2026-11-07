import { certifications, experience, profile, projects, skillGroups } from "../data/portfolio";

const escape = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);
const tags = (values: string[]) => values.map(value => `<span>${escape(value)}</span>`).join("");

// The static target contains useful content before its JavaScript loads and if
// it never loads. Deriving it from the same data prevents résumé drift.
export function renderPortfolioFallback() {
  return `<main class="initial-portfolio" id="main">
    <header><a class="initial-brand" href="#main">${escape(profile.name)}</a><nav aria-label="Portfolio sections"><a href="#initial-work">Work</a><a href="#initial-experience">Experience</a><a href="#initial-about">About</a><a href="${escape(profile.resumeUrl)}" download>Résumé</a></nav></header>
    <section class="initial-hero"><p class="initial-label">PENN STATE · COMPUTER SCIENCE</p><h1>Hi, I’m Surya.<br>I build things that <em>think.</em></h1><p>${escape(profile.intro)}</p><div class="initial-actions"><a href="#initial-work">Explore my work</a><a href="${escape(profile.resumeUrl)}" download>Download résumé</a></div></section>
    <section id="initial-work"><h2>Selected work</h2><div class="initial-grid">${projects.map(project => `<article><p class="initial-label">${escape(project.category)}</p><h3>${escape(project.title)}</h3><p>${escape(project.description)}</p><div class="initial-tags">${tags(project.tags)}</div><details><summary>Project details</summary><p>${escape(project.context)}</p><ul>${project.contributions.map(item => `<li>${escape(item)}</li>`).join("")}</ul></details></article>`).join("")}</div></section>
    <section id="initial-experience"><h2>Experience</h2>${experience.map(job => `<article><p class="initial-label">${escape(job.dates)}</p><h3>${escape(job.company)}</h3><p><strong>${escape(job.role)}</strong></p><p>${escape(job.summary)}</p><details><summary>More about this role</summary><p>${escape(job.note)}</p><ul>${job.highlights.map(item => `<li>${escape(item)}</li>`).join("")}</ul></details></article>`).join("")}</section>
    <section id="initial-about"><h2>About me</h2><p>${escape(profile.about)}</p><p>${escape(profile.aboutMore)}</p><article><h3>Penn State University</h3><p>Bachelor of Science in Computer Science · Expected May 2027</p></article><h3>Skills</h3><div class="initial-grid">${skillGroups.map(group => `<article><h3>${escape(group.name)}</h3><div class="initial-tags">${tags(group.items)}</div></article>`).join("")}</div><h3>Learning</h3>${certifications.map(cert => `<details><summary>${escape(cert.title)}</summary><p>${escape(cert.issuer)}</p><p>${escape(cert.detail)}</p></details>`).join("")}</section>
    <footer><h2>Let’s connect.</h2><a href="mailto:${escape(profile.email)}">${escape(profile.email)}</a><a href="${escape(profile.resumeUrl)}" download>Download résumé</a></footer>
  </main>`;
}

export const portfolioFallbackStyles = `
  .initial-portfolio{font:1rem/1.75 system-ui,sans-serif;color:#e1eeeb;max-width:74rem;margin:auto;padding:1.25rem;background:#071216;overflow-wrap:anywhere}
  body:has(>.initial-portfolio),body:has(>#root>.initial-portfolio){margin:0;background:#071216}
  .initial-portfolio *{box-sizing:border-box}.initial-portfolio h1,.initial-portfolio h2,.initial-portfolio h3{line-height:1.2;letter-spacing:-.025em;color:#ffcc9b;margin:0 0 1rem}
  .initial-portfolio h1{font-size:clamp(2.5rem,7vw,4.75rem)}.initial-portfolio h2{font-size:2rem}.initial-portfolio h3{font-size:1.25rem}.initial-portfolio em{font-style:normal;color:#78dfd5}
  .initial-portfolio a{color:#9ce9df;text-decoration:underline;text-underline-offset:.2em;min-height:2.75rem;min-width:2.75rem;display:inline-flex;align-items:center;padding:.5rem .25rem}.initial-portfolio a:focus-visible,.initial-portfolio summary:focus-visible{outline:2px solid #78dfd5;outline-offset:4px}
  .initial-portfolio header{display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;border-bottom:1px solid #31525b;padding-bottom:.75rem}.initial-portfolio nav{display:flex;gap:1rem;flex-wrap:wrap}.initial-brand{font-size:1.25rem;font-weight:650}
  .initial-portfolio section{padding:2rem 0;scroll-margin-top:1.5rem}.initial-portfolio .initial-hero{padding:2.5rem 0}.initial-portfolio .initial-hero>p{max-width:40rem}.initial-label{font-size:.875rem;color:#a9c4c5;text-transform:uppercase;letter-spacing:.06em}
  .initial-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,20rem),1fr));gap:1rem}.initial-portfolio article{border:1px solid #31525b;border-radius:.875rem;padding:1.25rem;background:#0d2027;margin-bottom:1rem;min-width:0}
  .initial-actions,.initial-tags{display:flex;flex-wrap:wrap;gap:.75rem}.initial-actions a{border:1px solid #4d817f;border-radius:.5rem;padding:.65rem 1rem}.initial-tags span{font-size:.875rem;border:1px solid #31525b;border-radius:.35rem;padding:.25rem .5rem}
  .initial-portfolio details{margin-top:1rem}.initial-portfolio summary{cursor:pointer;min-height:2.75rem;line-height:1.5;padding:.65rem 0;color:#b4e1da}.initial-portfolio li{margin-bottom:.75rem}.initial-portfolio footer{display:flex;gap:1rem;align-items:center;flex-wrap:wrap;border-top:1px solid #31525b;padding-top:1.5rem}.initial-portfolio footer h2{flex-basis:100%}
  html[data-theme="light"] .initial-portfolio{color:#243b40;background:#f5f8f6}html[data-theme="light"] .initial-portfolio h1,html[data-theme="light"] .initial-portfolio h2,html[data-theme="light"] .initial-portfolio h3{color:#744319}html[data-theme="light"] .initial-portfolio em,html[data-theme="light"] .initial-portfolio a,html[data-theme="light"] .initial-portfolio summary{color:#08625e}html[data-theme="light"] .initial-portfolio .initial-label{color:#536c70}html[data-theme="light"] .initial-portfolio article{background:#eaf2ee;border-color:#bdcdc6}html[data-theme="light"] body:has(>#root>.initial-portfolio){background:#f5f8f6}
`;
