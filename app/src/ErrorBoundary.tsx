import React from "react";

type State = { hasError: boolean; error?: Error | null; info?: React.ErrorInfo };

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("Uncaught error:", error, info);
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      const message = this.state.error?.message ?? "Unknown error";
      const stack = (this.state.error as Error | undefined)?.stack ?? this.state.info?.componentStack ?? "";
      return (
        <div style={{ padding: 24, fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto", color: "#111" }}>
          <h1 style={{ color: "#c53030" }}>Application Error</h1>
          <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
          <pre style={{ whiteSpace: "pre-wrap", background: "#f8f8f8", padding: 12 }}>{stack}</pre>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}
