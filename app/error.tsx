"use client";

import { FriendlyError } from "../components/error-boundary";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <FriendlyError retry={reset} />;
}
