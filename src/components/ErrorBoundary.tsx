import { Component, type ErrorInfo, type ReactNode } from "react";
import logo from "../assets/images/logo.svg";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

const IS_MODE_DEV = process.env.NODE_ENV === "development";

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });

    if (process.env.NODE_ENV === "development") {
      console.error("Error Boundary caught an error:", error, errorInfo);
    }

    // Here you could send error to your error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center my-auto w-full min-h-screen">
          <img
            src={logo}
            alt="tooth"
            data-testid="logo"
            className="w-[137px] mb-4"
          />
          <h3 className="text-2xl font-bold mb-8">Dr.Stadnik</h3>
          <p className="mb-1 font-bold">We couldn&apos;t load this page</p>
          <div className="max-w-[20%] mb-4 text-center text-sm">
            Refresh the page and try again.
          </div>
          <button
            onClick={this.handleReload}
            className="px-10 py-2 bg-zen-text dark:bg-zen-dark-text text-zen-white dark:text-zen-dark-bg rounded-full font-medium tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto mb-6"
          >
            Refresh
          </button>

          {IS_MODE_DEV && this.state.error && (
            <details className="mb-6 text-left">
              <summary className="cursor-pointer text-sm font-medium mb-2">
                Error Details (Development)
              </summary>
              <div className="bg-destructive/10 border border-destructive rounded p-3 text-sm">
                <div className="font-medium mb-1">Error:</div>
                <div className="text-destructive mb-2">
                  {this.state.error.message}
                </div>
                <div className="font-medium mb-1">Stack:</div>
                <pre className="text-xs overflow-auto">
                  {this.state.error.stack}
                </pre>
              </div>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
