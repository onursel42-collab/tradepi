import React from 'react';
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // Log yapılabilir
    console.error('ErrorBoundary hata:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Bir hata oluştu: {this.state.error?.toString()}</div>;
    }
    return this.props.children;
  }
}
