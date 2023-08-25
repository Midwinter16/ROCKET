import { Component, ReactNode } from "react";

class ErrorBoundary extends Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>场景出错</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
