import React from "react";
import ErrorCard from "./ErrorCard";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
    this.setState = { error: errorInfo }
    // this.state.error = errorInfo;
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <div className="container-fluid bg-info p-5">
            <div className="col-md-7">
              <h2 className="text-white">Community</h2>
            </div>
          </div>

          <div className="container" style={{ marginTop: "-1rem" }}>
            <div className="row">
              <ErrorCard error={this.state.error} />
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}
