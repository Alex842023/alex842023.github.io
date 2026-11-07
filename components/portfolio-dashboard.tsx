"use client";

import { useEffect, useId, useState } from "react";
import { experience, skillGroups } from "../data/portfolio";
import "./portfolio-dashboard.css";

type DashboardView = "overview" | "toolkit";
const VIEW_STORAGE_KEY = "surya.portfolio.dashboard";

function DashboardIcon({ type }: { type: "research" | "build" | "refine" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {type === "research" ? (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m15.5 15.5 4.5 4.5M8 10.5h5m-2.5-2.5v5" />
        </>
      ) : type === "build" ? (
        <>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M9 3v4m6-4v4M9 17v4m6-4v4M3 9h4m-4 6h4m10-6h4m-4 6h4" />
        </>
      ) : (
        <>
          <path d="M19 8a7.5 7.5 0 1 0 .5 7M19 3v5h-5" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export default function PortfolioDashboard() {
  const [view, setView] = useState<DashboardView>("overview");
  const panelId = useId();

  // Storage is optional. Read after hydration and only write after a user choice,
  // so a first render cannot overwrite an existing saved preference.
  useEffect(() => {
    try {
      const savedView = window.localStorage.getItem(VIEW_STORAGE_KEY);
      if (savedView === "overview" || savedView === "toolkit") setView(savedView);
    } catch {
      // The panel remains usable when the browser blocks local storage.
    }
  }, []);

  function chooseView(nextView: DashboardView) {
    setView(nextView);
    try {
      window.localStorage.setItem(VIEW_STORAGE_KEY, nextView);
    } catch {
      // Keep the current choice in memory when storage is unavailable.
    }
  }

  return (
    <aside className="dash-window" aria-labelledby={`${panelId}-title`}>
      <div className="dash-window-bar">
        <span className="dash-app-icon" aria-hidden="true">sa</span>
        <h2 id={`${panelId}-title`}>Portfolio snapshot</h2>
      </div>

      <div className="dash-content">
        <dl className="dash-stats">
          <div className="dash-stat dash-stat-teal">
            <dt>Experience teams</dt>
            <dd>{String(experience.length).padStart(2, "0")}</dd>
            <dd className="dash-stat-note">Penn State & Wyntek</dd>
          </div>
          <div className="dash-stat dash-stat-peach">
            <dt>Expected graduation</dt>
            <dd>2027</dd>
            <dd className="dash-stat-note">B.S. Computer Science</dd>
          </div>
        </dl>

        <div className="dash-segments" role="group" aria-label="Portfolio dashboard view">
          <button
            type="button"
            aria-pressed={view === "overview"}
            aria-controls={panelId}
            onClick={() => chooseView("overview")}
          >
            Overview
          </button>
          <button
            type="button"
            aria-pressed={view === "toolkit"}
            aria-controls={panelId}
            onClick={() => chooseView("toolkit")}
          >
            Toolkit
          </button>
        </div>

        <div className="dash-view-content" id={panelId}>
          {view === "overview" ? (
            <div className="dash-overview">
              <h3>Research. Build. Refine.</h3>
              <ol className="dash-steps" aria-label="My approach to projects">
                <li>
                  <span className="dash-node-ring"><DashboardIcon type="research" /></span>
                  <span>Research</span>
                </li>
                <li>
                  <span className="dash-node-ring"><DashboardIcon type="build" /></span>
                  <span>Build</span>
                </li>
                <li>
                  <span className="dash-node-ring"><DashboardIcon type="refine" /></span>
                  <span>Refine</span>
                </li>
              </ol>
              <p>Computer vision research and practical tools for macOS.</p>
            </div>
          ) : (
            <div className="dash-toolkit">
              <h3>Tools behind the projects</h3>
              {skillGroups.map(group => (
                <div className="dash-toolkit-group" key={group.name}>
                  <h4>{group.name}</h4>
                  <div>
                    {group.items.slice(0, 3).map(item => <span key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <a className="dash-explore" href="#work">Explore selected work <Arrow /></a>
      </div>
    </aside>
  );
}
