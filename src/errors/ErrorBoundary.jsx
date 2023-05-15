import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {

        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {

        return {
            hasError: true
        }
    }

    render() {

        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {

            return (
                <div>
                    <h2>Something went wrong.</h2>
                </div>
            );

        }

        return children
    }
}

export default ErrorBoundary;