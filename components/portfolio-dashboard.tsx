"use client";

import { useId, useState } from "react";
import { experience, projects, skillGroups } from "../data/portfolio";
import "./portfolio-dashboard.css";

function DashboardIcon({ type }: { type: "scribe" | "bridge" | "research" }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {type === "scribe" ? <path d="M5 9v6m4-10v14m6-16v18m4-12v6" />
      : type === "bridge" ? <><rect x="8" y="8" width="8" height="8" rx="2" /><path d="M12 3v5m0 8v5M3 12h5m8 0h5M5.5 5.5 9 9m6 6 3.5 3.5" /></>
      : <><path d="m3 8 6-4 6 3 6-3M3 18l5-4 7 4 6-5M9 4l-1 10m7-7v11M3 8l5 6 7-7 6 6" /><circle cx="8" cy="14" r="2" /></>}
  </svg>;
}

export default function PortfolioDashboard() {
  const [view, setView] = useState<"overview" | "toolkit">("overview");
  const panelId = useId();

  return <aside className="dash-window" aria-label="Portfolio overview">
    <div className="dash-window-bar">
      <div className="dash-breadcrumb"><span className="dash-app-icon" aria-hidden="true">s.</span><span>Portfolio <span className="dash-slash">/</span> <strong>{view === "overview" ? "Overview" : "Toolkit"}</strong></span></div>
      <span className="dash-window-menu" aria-hidden="true"><i /><i /><i /></span>
    </div>

    <div className="dash-content">
      <div className="dash-view-heading"><span className="dash-label">A LOOK AT MY WORK</span><span className="dash-status"><i /> Penn State CS</span></div>
      <dl className="dash-stats">
        <div className="dash-stat dash-stat-teal"><dt>Experience teams</dt><dd>{String(experience.length).padStart(2, "0")}<svg viewBox="0 0 68 27" fill="none" aria-hidden="true"><circle cx="25" cy="8" r="5" /><circle cx="43" cy="8" r="5" /><path d="M15 25v-2a10 10 0 0 1 20 0v2m-2-4a10 10 0 0 1 20 2v2" /></svg></dd><span>Penn State & Wyntek</span></div>
        <div className="dash-stat dash-stat-peach"><dt>Expected graduation</dt><dd>2027<span className="dash-stat-arrow" aria-hidden="true">↗</span></dd><span>B.S. Computer Science</span></div>
      </dl>

      <div className="dash-focus-panel">
        <div className="dash-panel-top"><span className="dash-panel-title">{view === "overview" ? "The way I work" : "Behind the projects"}</span><div className="dash-segments" role="group" aria-label="Portfolio dashboard view"><button type="button" aria-pressed={view === "overview"} aria-controls={panelId} onClick={() => setView("overview")}>Overview</button><button type="button" aria-pressed={view === "toolkit"} aria-controls={panelId} onClick={() => setView("toolkit")}>Toolkit</button></div></div>
        <div className="dash-view-content" id={panelId}>
          {view === "overview" ? <figure className="dash-focus-map" aria-label="A workflow of research, building, and refinement">
            <div className="dash-map-grid" aria-hidden="true" />
            <svg className="dash-map-path" viewBox="0 0 360 130" fill="none" aria-hidden="true">
              <defs><linearGradient id={`${panelId}-path`} x1="20" y1="100" x2="340" y2="50" gradientUnits="userSpaceOnUse"><stop stopColor="#51b8b4" stopOpacity=".25" /><stop offset=".5" stopColor="#a9f6e7" /><stop offset="1" stopColor="#f2be91" stopOpacity=".7" /></linearGradient></defs>
              <path className="dash-path-track" d="M29 88C89 88 109 39 180 39S271 88 331 88" />
              <path className="dash-path-glow" stroke={`url(#${panelId}-path)`} d="M29 88C89 88 109 39 180 39S271 88 331 88" />
              <path className="dash-path-pulse" d="M29 88C89 88 109 39 180 39S271 88 331 88" />
            </svg>
            <div className="dash-map-node dash-map-research"><span className="dash-node-ring"><DashboardIcon type="research" /></span><span>Research</span><small>Understand the problem</small></div>
            <div className="dash-map-node dash-map-build"><span className="dash-node-ring"><DashboardIcon type="bridge" /></span><span>Build</span><small>Make an idea tangible</small></div>
            <div className="dash-map-node dash-map-refine"><span className="dash-node-ring"><DashboardIcon type="scribe" /></span><span>Refine</span><small>Test. Learn. Improve.</small></div>
          </figure> : <div className="dash-toolkit"><div className="dash-toolkit-intro">Tools behind the projects</div>{skillGroups.map(group => <div className="dash-toolkit-group" key={group.name}><span>{group.name}</span><div>{group.items.slice(0, 4).map(item => <span key={item}>{item}</span>)}</div></div>)}</div>}
        </div>
      </div>

      <div className="dash-project-panel"><div className="dash-project-heading"><span className="dash-panel-title">On the workbench</span><a href="#work">Explore all <span aria-hidden="true">↗</span></a></div><ul className="dash-project-list">{projects.map(project => <li key={project.id}><span className={`dash-project-icon dash-project-${project.kind}`}><DashboardIcon type={project.kind} /></span><span className="dash-project-copy"><strong>{project.kind === "research" ? "Grain boundaries" : project.title}</strong><span>{project.kind === "scribe" ? "Native macOS app" : project.kind === "bridge" ? "Assistant architecture" : "ML & computer vision"}</span></span><span className="dash-project-tag">{project.kind === "research" ? "RESEARCH" : "PROJECT"}</span></li>)}</ul></div>
    </div>
    <div className="dash-window-footer"><span><span aria-hidden="true">⌘</span> RESEARCH MEETS SOFTWARE</span><span>SURYA / 01</span></div>
  </aside>;
}
