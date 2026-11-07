"use client";

import { Component, type ReactNode } from "react";
import { profile } from "../data/portfolio";

type Props = { children: ReactNode };

export function FriendlyError({ retry }: { retry: () => void }) {
  return <section className="recovery-panel" role="alert" style={{ margin: "2rem auto", maxWidth: "42rem", padding: "1.5rem", border: "1px solid var(--line, #31525b)", borderRadius: "1rem", background: "var(--panel, #10262d)", color: "var(--ink, #e1eeeb)", lineHeight: 1.7 }}>
    <h1 style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", lineHeight: 1.2, letterSpacing: "-.03em", margin: "0 0 1rem", color: "var(--peach, #ffcc9b)" }}>Let’s try that again.</h1>
    <p style={{ fontSize: "1rem", margin: "0 0 1rem" }}>This part of the portfolio couldn’t load. You can retry, download my résumé, or contact me directly.</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", alignItems: "center" }}>
      <button type="button" className="button primary" onClick={retry} style={{ minHeight: 44, minWidth: 44 }}>Try again</button>
      <a className="text-link" href={profile.resumeUrl} download style={{ minHeight: 44, display: "inline-flex", alignItems: "center" }}>Download résumé</a>
      <a className="text-link" href={`mailto:${profile.email}`} style={{ minHeight: 44, display: "inline-flex", alignItems: "center" }}>Email me</a>
    </div>
  </section>;
}

export default class ErrorBoundary extends Component<Props, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return <FriendlyError retry={() => this.setState({ failed: false })} />;
    return this.props.children;
  }
}
